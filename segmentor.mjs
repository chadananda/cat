// segmentor.mjs

/**
 * Segments a document into paragraphs.
 *
 * @param {String} document - The document text to segment.
 * @returns {Array} The segmented paragraphs.
 */
async function segmentDocument(document) {
 let paragraphs = [];
 let resumePosition = 0;

 while (resumePosition < document.length) {
     // Take the next block of text from the document
     const block = document.substring(resumePosition, resumePosition + BLOCK_SIZE);

     // Send the block to the AI for segmentation
     const response = await sendToAI(block);

     // Extract the paragraphs and the new resume position from the AI's response
     const { paragraphObjects, newResumePosition } = extractParagraphBreaks(response, block);

     // Add the paragraphs to the list
     paragraphs = paragraphs.concat(paragraphObjects.map(obj => obj.paragraphText));

     // Update the resume position
     if (newResumePosition > 0) {
         // The AI found paragraph breaks, so we resume from the new position
         resumePosition += newResumePosition;
     } else {
         // The AI didn't find any paragraph breaks, so we resume from the end of the block
         resumePosition += BLOCK_SIZE;
     }

     // If the block was less than BLOCK_SIZE, we've reached the end of the document
     if (block.length < BLOCK_SIZE) break;
 }

 return paragraphs;
}

/**
 * Extracts the paragraphs and the new resume position from the AI's response.
 *
 * @param {Array} response - The AI's response.
 * @param {String} block - The block of text that was sent to the AI.
 * @returns {Object} The paragraphs and the new resume position.
 */
function extractParagraphBreaks(response, block) {
 let paragraphObjects = [];
 let newResumePosition = 0;

 // Iterate over the response array
 for (let i = 0; i < response.length; i++) {
     const paragraphObject = response[i];

     // Find the start position of the paragraph in the block
     const startPos = block.indexOf(paragraphObject.startText);

     // If the start position was found, calculate the end position
     if (startPos !== -1) {
         const endPos = startPos + paragraphObject.startText.length;
         newResumePosition = endPos;

         // Add the paragraph object to the list
         paragraphObjects.push(paragraphObject);
     }
 }

 return { paragraphObjects, newResumePosition };
}
