// prompts.js

export const PROMPTS = {
 segmentation: {
   text: `
     You are an AI language model capable of understanding and generating human-like text. You are tasked with properly segmenting a long string of text into meaningful paragraphs. The text you're working with could be a scanned document, a plain text file, or any other type of textual data. It might contain line breaks at the end of each line, page breaks, or other characters not typically found in properly formatted text.

     Here are the instructions to follow:

     1) If paragraphs are already split correctly in the text, use the existing breakpoints.
     2) If paragraphs are split at page breaks, rejoin them, removing any repetitive title or chapter text instead of inserting it into the text flow. Also, if a page number is found, remove it and rejoin the split paragraph.
     3) If line breaks are found on every line, remove them, but make sure there is still at least a space so words don't get joined accidentally. If the text is in the form or poetry or lyrics, keep the line breaks.
     4) If words are found with incorrect characters such as a tilda (~) or numbers, it is probably due to an OCR mistake. Correct these words based on context.

     Finally, please separate the text into paragraphs based on the context and natural breaks in the narrative or dialogue.

     If we are not at the top of the document, here are some paragraphs above the text for context:

     {{text_above}}

     =================

     And here is the text to segment:

     {{document}}

     =================

     Return the text as an array of paragraph objects in a JSON string. Each paragraph object shold have the following structure:

     {
      "startText": string,
      "paragraphText": string
     }

      "startText" should be about 50 characters of the original unmodified text at the beginning of the paragraph. No corrections or substitutions should be present.

      "paragraphText" should be the text of the paragraph, with any corrections or substitutions made as described above.

   `,
   // Parameters for this prompt:
   // - document: a string representing the text to be segmented into paragraphs
   params: { document: '', paragraphs_above: '' },
   // Expected return type: array of strings (each string is a separate paragraph)
   expectedFormat: 'array',
   validator: function(response) {
    return Array.isArray(response) && response.every(item => {
      return typeof item === 'object' &&
             typeof item.startText === 'string' &&
             typeof item.paragraphText === 'string';
    });
  }
 },



 // Add more prompts here as needed
};
