// segmentor.mjs

import callAPI from './api.mjs';

// Define your BLOCK_SIZE
const BLOCK_SIZE = 2048; // Adjust this value as per your requirement.
const PARAGRAPHS_ABOVE = 3; // The number of preceding paragraphs to send for context.

/**
 * Segments a document into paragraphs.
 *
 * @param {String} document - The document text to segment.
 * @returns {Array} The segmented paragraphs.
 */
export async function segmentDocument(document) {
 let paragraphs = [];
 let resumePosition = 0;

 while (resumePosition < document.length) {
     // Take the next block of text from the document
     const block = document.substring(resumePosition, resumePosition + BLOCK_SIZE);

     // Get the preceding paragraphs for context
     const paragraphsAbove = paragraphs.slice(-PARAGRAPHS_ABOVE).join('\n\n');

     // Send the block and the preceding paragraphs to the AI for segmentation
     const response = await callAPI("segmentation", {document: block, paragraphs_above: paragraphsAbove});

     // Extract the paragraphs and the new resume position from the AI's response
     const { paragraphObjects, newResumePosition } = extractParagraphBreaks(response, block);

     // Add the paragraphs to the list
     paragraphs = paragraphs.concat(paragraphObjects.map(obj => obj.corrected));

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
 * Extracts paragraph breaks and new resume position from the AI's response.
 *
 * @param {Object} response - The AI's response.
 * @param {String} block - The block of text sent to the AI.
 * @returns {Object} An object containing the new resume position and the paragraph objects.
 */
function extractParagraphBreaks(response, block) {
 let newResumePosition = 0;

 // Determine the new resume position by finding the end of the last complete paragraph in the block
 if (response.length > 0) {
     const lastParagraph = response[response.length - 1].original;
     newResumePosition = block.indexOf(lastParagraph) + lastParagraph.length;
 }

 return { paragraphObjects: response, newResumePosition };
}
