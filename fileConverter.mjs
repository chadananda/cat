// fileConverter.mjs

import fs from 'fs';
import pdf from 'pdf-parse';
import mammoth from 'mammoth';
import marked from 'marked';
import { JSDOM } from 'jsdom';

/**
 * This module contains a function to convert a file into a text string.
 * It currently supports Text (.txt), Markdown (.md), Microsoft Word (.doc, .docx), HTML (.html) and PDF (.pdf) files.
 *
 * If the file is a Text file, it reads the file content directly.
 * If the file is a Markdown file, it uses the marked package to convert it to HTML, then extracts the text content.
 * If the file is a Word file, it uses the mammoth.js package to convert it to HTML, then extracts the text content.
 * If the file is a HTML file, it uses the jsdom package to extract the text content.
 * If the file is a PDF file, it uses the pdf-parse package to extract the text content.
 */

/**
 * Function to convert a file to text
 *
 * @param {String} filePath - The path of the file to convert
 * @returns {String} The text content of the file
 */
async function convertFileToText(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    const extension = filePath.split('.').pop().toLowerCase();

    switch (extension) {
        case 'txt':
            return fileBuffer.toString('utf-8');
        case 'md':
            const htmlFromMd = marked(fileBuffer.toString('utf-8'));
            return new JSDOM(htmlFromMd).window.document.body.textContent;
        case 'doc':
        case 'docx':
            const htmlFromDoc = await mammoth.convertToHtml({buffer: fileBuffer});
            return new JSDOM(htmlFromDoc.value).window.document.body.textContent;
        case 'html':
            return new JSDOM(fileBuffer.toString('utf-8')).window.document.body.textContent;
        case 'pdf':
            const data = await pdf(fileBuffer);
            return data.text;
        default:
            throw new Error(`Unsupported file type: ${extension}`);
    }
}

export { convertFileToText };
