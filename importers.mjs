// importers.mjs

/**
 * Importers Module for CAT
 *
 * This module contains functions to import documents in various formats.
 * Currently supported formats are .txt, .md, .html, and .docx.
 *
 * Each import function takes a file path as input, and returns a promise that resolves to a string of plain text.
 *
 * The text is then processed into a standardized format: an object with a `title`, `author`, and an array of `paragraphs`.
 * This object is expected to have the following structure:
 *
 * {
 *   title: string,
 *   author: string,
 *   paragraphs: [
 *     {
 *       number: number,
 *       type: 'header' | 'text',
 *       text: string
 *     },
 *     ...
 *   ]
 * }
 *
 * Each paragraph has a number (its order in the document), a type ('header' or 'text'), and the text of the paragraph.
 */

import fs from 'fs';
import markdown from 'markdown-it';
import { convert } from 'html-to-text';
import mammoth from 'mammoth';

async function importPlainText(inputFile) {
    // Read the plain text file
    const plainText = fs.readFileSync(inputFile, 'utf8');

    return plainText;
}

async function importMarkdown(inputFile) {
    // Read the Markdown file
    const markdownText = fs.readFileSync(inputFile, 'utf8');

    // Convert Markdown to HTML
    const md = new markdown();
    const htmlText = md.render(markdownText);

    // Convert HTML to plain text
    const plainText = convert(htmlText);

    return plainText;
}

async function importHtml(inputFile) {
    // Read the HTML file
    const htmlText = fs.readFileSync(inputFile, 'utf8');

    // Convert HTML to plain text
    const plainText = convert(htmlText);

    return plainText;
}

async function importDocx(inputFile) {
    // Convert .docx to HTML
    const { value: htmlText } = await mammoth.convertToHtml({ path: inputFile });

    // Convert HTML to plain text
    const plainText = convert(htmlText);

    return plainText;
}

export { importPlainText, importMarkdown, importHtml, importDocx };
