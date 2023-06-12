// translator.mjs

/**
 * The translator.mjs module translates a text file using the GPT API.
 * It exports two functions: translateText and translateSideBySide.
 *
 * Both functions take in a file and a translation style as arguments.
 * They convert the file to text, segment the text into paragraphs, translate each paragraph,
 * and return a translation object.
 *
 * The translation object has the following structure:
 *
 * {
 *   book: {
 *     title: string,   // The title of the book
 *     author: string   // The author of the book
 *   },
 *   paragraphs: [
 *     {
 *       number: number,        // The order of the paragraph in the book
 *       type: 'header' | 'text', // The type of the paragraph
 *       text: string,          // The original text of the paragraph
 *       translation: string    // The translated text of the paragraph
 *     },
 *     ...
 *   ]
 * }
 *
 * The translateText function returns a translation object with the translated text of each paragraph.
 * The translateSideBySide function returns a translation object with both the original and translated text of each paragraph.
 *
 * The translation style determines the approach used for translation.
 * Different styles are defined in translationStyles.mjs and can be updated or extended as needed.
 */

import { convertFileToText } from './fileConverter.mjs';
import { segmentDocument } from './segmentor.mjs';
import { translateParagraphs } from './paragraphTranslator.mjs';
import { prompts } from './prompts.mjs';
import { callAPI } from './callAPI.mjs';

/**
 * Function to translate text
 *
 * @param {String} file - The file to translate
 * @param {String} style - The style of translation
 * @returns {Object} The translation object
 */
async function translateText(file, style) {
    const text = await convertFileToText(file);
    const paragraphs = segmentText(text);
    const translation = await translateParagraphs(paragraphs, style);
    return translation;
}

/**
 * Function to create side-by-side translation
 *
 * @param {String} file - The file to translate
 * @param {String} style - The style of translation
 * @returns {Object} The side-by-side translation object
 */
async function translateSideBySide(file, style) {
    const text = await convertFileToText(file);
    const paragraphs = segmentText(text);
    const translation = await translateParagraphs(paragraphs, style);
    return translation;
}

export { translateText, translateSideBySide };
