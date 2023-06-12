// help.mjs

import chalk from 'chalk';

const art = chalk.green.bold.italic(`
   ,o888888o.             .8.          8888888 8888888888
   8888     \`88.          .888.               8 8888
,8 8888       \`8.        :88888.              8 8888
88 8888                 . \`88888.             8 8888
88 8888                .8. \`88888.            8 8888
88 8888               .8\`8. \`88888.           8 8888
88 8888              .8' \`8. \`88888.          8 8888
\`8 8888       .8'   .8'   \`8. \`88888.         8 8888
   8888     ,88'   .888888888. \`88888.        8 8888
    \`8888888P'    .8'       \`8. \`88888.       8 8888
`);

const helpMessage = chalk.yellow(`
Welcome to CAT - ${chalk.bold('Computer Assisted Translation')}! 🐱‍💻

Usage:
  $ ${chalk.green('cat set-key <key>')}                                   🔑  Set the GPT API key
  $ ${chalk.cyan('cat translate <file> [style] [format] [outputLang]')}   📝  Translate a file
  $ ${chalk.magenta('cat side-by-side <file> [style] [format] [outputLang]')} 📖  Translate a file and create a side-by-side translation
  $ ${chalk.blue('cat segment <file>')}                                   📂  Segment a document into paragraphs

Styles:
  ${chalk.blue('literary')} (default) - Easily readable translation
  ${chalk.blue('literal')} - Conforms closely to original word order
  ${chalk.blue('technical')} - Literal style with terms and names injected from the original

Format:
  ${chalk.red('txt')} (default) - Plain text file
  ${chalk.red('md')} - Markdown file
  ${chalk.red('docx')} - Word Document
  ${chalk.red('pdf')} - PDF Document

Output Language:
  ${chalk.green('en')} (default) - English
  ${chalk.green('<ISO 639-1 code>')} - Other languages as per ISO 639-1 codes
`);

export { art, helpMessage };
