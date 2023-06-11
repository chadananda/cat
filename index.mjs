import dotenv from 'dotenv';
import { program } from 'commander';
import chalk from 'chalk';
import { translateText, translateSideBySide } from './translator.mjs'; // Import translator functions

dotenv.config();

const art = chalk.green.bold.italic(
   //figlet.textSync('CAT', { horizontalLayout: 'full', font: 'Fire Font-s' })
   `
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
   `
);

const helpMessage = chalk.yellow(`
Welcome to CAT - ${chalk.bold('Computer Assisted Translation')}! 🐱‍💻

Usage:
  $ ${chalk.green('cat set-key <key>')}                                   🔑  Set the GPT API key
  $ ${chalk.cyan('cat translate <file> [style] [format]')}               📝  Translate a file
  $ ${chalk.magenta('cat side-by-side <file> [style] [format]')}            📖  Translate a file and create a side-by-side translation

Styles:
  ${chalk.blue('literary')} (default) - Easily readable translation
  ${chalk.blue('literal')} - Conforms closely to original word order
  ${chalk.blue('technical')} - Literal style with terms and names injected from the original

Format:
  ${chalk.red('txt')} (default) - Plain text file
  ${chalk.red('md')} - Markdown file
  ${chalk.red('docx')} - Word Document
  ${chalk.red('pdf')} - PDF Document
`);




program
    .version('0.1.0') // You can set your application version here
    .name("cat") // You can set your application name here
    .command('set-key <key>')
    .description('Set the GPT API key')
    .action((key) => {
        console.log(art);
        // TODO: Store the key
        console.log(`API key set: ${key}`);
    });

program
    .command('translate <file> [style] [format]')
    .description('Translate a file')
    .action(async (file, style = 'literary', format = 'txt') => {
        console.log(art);
        // Call translateText function from translator.mjs
        const translation = await translateText(file, style);
        console.log(`Translation: ${translation}`);
        console.log(`Outputting in ${format} format`);
    });

program
    .command('side-by-side <file> [style] [format]')
    .description('Translate a file and create a side-by-side translation')
    .action(async (file, style = 'literary', format = 'txt') => {
        console.log(art);
        // Call translateSideBySide function from translator.mjs
        const translation = await translateSideBySide(file, style);
        console.log(`Translation: ${translation}`);
        console.log(`Outputting in ${format} format`);
    });


program
    .command('help')
    .description('Show help')
    .action(() => {
        clear();
        console.log(art + helpMessage);
    });

program
    .action(() => {
        console.log(art + helpMessage);
    });

program.parse(process.argv);
