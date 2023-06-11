import fs from 'fs';
import mammoth from "mammoth";
import markdownPdf from "markdown-pdf";
import os from "os";
import { v4 as uuidv4 } from 'uuid';

/**
 * Formats a translation into a Markdown string.
 * @param {Object} translation - The translation object.
 * @returns {string} - The formatted Markdown string.
 */
export function formatMd(translation) {
    let output = '';

    // Added header
    output += 'This translation was generated automatically using an AI voting technique.\n';
    output += `Title: ${translation.book.title}\n`;
    output += `Author: ${translation.book.author}\n`;
    output += 'For more information, visit the CAT Github repository: https://github.com/chadananda/cat\n\n';

    output += `# ${translation.book.title}\n`;
    output += `## ${translation.book.author}\n\n`;

    translation.paragraphs.forEach(paragraph => {
        if (paragraph.type === 'header') {
            output += `### ${paragraph.number}. ${paragraph.text}\n\n`;
        } else if (paragraph.type === 'text') {
            output += `#### ${paragraph.number}. ${paragraph.text}\n\n`;
            if (paragraph.translation) {
                output += `##### Translation: ${paragraph.translation}\n\n`;
            }
        }
    });

    return output;
}

/**
 * Formats a translation into a plain text string.
 * @param {Object} translation - The translation object.
 * @returns {string} - The formatted plain text string.
 */
export function formatTxt(translation) {
    let output = '';

    // Added header
    output += 'This translation was generated automatically using an AI voting technique.\n';
    output += `Title: ${translation.book.title}\n`;
    output += `Author: ${translation.book.author}\n`;
    output += 'For more information, visit the CAT Github repository: https://github.com/chadananda/cat\n\n';

    output += `${translation.book.title}\n`;
    output += `${translation.book.author}\n\n`;

    translation.paragraphs.forEach(paragraph => {
        if (paragraph.type === 'header') {
            output += `${paragraph.number}. ${paragraph.text}\n\n`;
        } else if (paragraph.type === 'text') {
            let originalTextExtract = paragraph.text.slice(0, 50);  // Extract first 50 characters
            if (paragraph.text.length > 50) originalTextExtract += '...';  // Append '...' if original text was longer than 50 characters
            output += `${paragraph.number}. (${originalTextExtract}) ${paragraph.translation}\n\n`;
        }
    });

    return output;
}

/**
 * Converts a Markdown string into a buffer containing the Docx data.
 * @param {string} markdown - The Markdown string.
 * @returns {Promise<Buffer>} A promise that resolves with the Docx data.
 */
export async function markdownToDocx(markdown) {
    const path = `${os.tmpdir()}/${uuidv4()}.md`;
    fs.writeFileSync(path, markdown);
    return await mammoth.convertToBuffer({path});
}

/**
 * Converts a Markdown string into a buffer containing the PDF data.
 * @param {string} markdown - The Markdown string.
 * @returns {Promise<Buffer>} A promise that resolves with the PDF data.
 */
export async function markdownToPdf(markdown) {
    return new Promise((resolve, reject) => {
        markdownPdf.from.string(markdown)
        .to.buffer((err, buffer) => {
            if (err) reject(err);
            else resolve(buffer);
        });
    });
}

/**
 * Formats a translation into a buffer containing the Docx data.
 * @param {Object} translation - The translation object.
 * @returns {Promise<Buffer>} A promise that resolves with the Docx data.
 */
export function formatDocx(translation) {
    const markdownString = formatMd(translation);
    return markdownToDocx(markdownString);
}

/**
 * Formats a translation into a buffer containing the PDF data.
 * @param {Object} translation - The translation object.
 * @returns {Promise<Buffer>} A promise that resolves with the PDF data.
 */
export function formatPdf(translation) {
    const markdownString = formatMd(translation);
    return markdownToPdf(markdownString);
}
