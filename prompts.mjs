export const PROMPTS = {
  segmentation: {
    text: `
      Segment a long text into meaningful paragraphs, considering it may have originated from a scanned or typed document. Pay attention to any existing paragraphs, and follow these guidelines:

      1) Existing Paragraphs: Maintain existing paragraphs when present, identifiable by consistent line breaks or indentations. If paragraph breaks are present, do not introducing additional paragraphs in this document.

      2) Page Breaks: Join split paragraphs at page breaks, removing repetitive headers, footers or page numbers.

      3) Excess Line Breaks: Remove line breaks at the end of each line, ensuring words are not inadvertently joined. Rejoin hyphenated words split between lines.

      4) Lists, Lyrics, and Poetry: Retain line breaks in poetry, lyrics, or lists. Keep all list items within a single paragraph, splitting only based on rhythm and rhyme in poetry or songs.

      5) Dialogue: Start a new paragraph for each speaker in a play while retaining sensible line breaks.

      6) Text Cleanup: Correct words with incorrect characters, obvious typos or OCR errors. For Arabic transliterations, use a consistent system with accents for long vowels and apostrophes for glottal stops. Replace straight quotation marks with curly ones and hyphens with em dashes.

      7) New Paragraphs: Insert new paragraph breaks only when contextually appropriate and not merely based on text length. Avoid overly short paragraphs unless necessary.

      8) Response Format: Return a JSON string of paragraph objects, each with two fields: "original" (the exact first 50 characters from the beginning of the orignal paragraph, unmodified) and "corrected" (the entire paragraph text after Text Cleanup from step 6). For example:

        [
          {
            "original": "1n a small town nestled in the h~art of the country",
            "corrected": "In a small town nestled in the heart of the country, there lived a humble baker named Samuel. He was well-known throughout the town for his delicious bread and warm, inviting personality."
          },
          {
            "original":  "Samuel's bakery was a qu~int little shop l0cated",
            "corrected": "Samuel’s bakery was a quaint little shop located on the town’s main street. Every morning, as the sun began to rise, Samuel would be found in his bakery, kneading dough and stoking the fire in his old stone oven. One morning, as Samuel was preparing his daily batch of bread, a stranger walked into the shop. The stranger was tall and thin, with a sharp face and piercing blue eyes. He was dressed in a long black coat that billowed around him as he moved. “Good morning,” said Samuel."
          }
        ]

      START OF CONTEXT TEXT

      {{2}}

      END OF CONTEXT TEXT

      =================

      START OF SEGMENTATION TEXT

      {{1}}

      END OF SEGMENTATION TEXT
    `,
    // Parameters for this prompt:
    params: { document: '', context: '' },
    //model: 'gpt-3.5-turbo-16k',
    model: 'gpt-3.5-turbo-0613',
    // Expected return type: array of strings (each string is a separate paragraph)
    response_signature: {
      "name": "get_data",
      "description": "Returns an array of objects, each with original and corrected fields",
      "parameters": {
        "type": "object",
        "properties": {
          "data": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "original": {
                  "type": "string",
                  "description": "The original text"
                },
                "corrected": {
                  "type": "string",
                  "description": "The corrected text"
                }
              },
              "required": ["original", "corrected"]
            }
          }
        },
        "required": ["data"]
      }
    },


    expectedFormat: 'array',
    validator: function(response) {
     return Array.isArray(response) && response.every(item => {
       return typeof item === 'object' &&
              typeof item.original === 'string' &&
              typeof item.corrected === 'string';
     });
   }
  },
 };
