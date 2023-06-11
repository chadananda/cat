require('dotenv').config();
const { program } = require('commander');
const chalk = require('chalk');
const figlet = require('figlet');

const art = `
${chalk.yellow(figlet.textSync('CAT', { horizontalLayout: 'full' }))}

 /\\_/\\
( o.o )
 > ^ <

 ===

${chalk.yellow(figlet.textSync('Computer Assisted Translation', { horizontalLayout: 'full' }))}
`;

const helpMessage = `
Welcome to CAT - Computer Assisted Translation!

Usage:
  $ cat set-key <key>                  Set the GPT API key
  $ cat translate <file> [style]       Translate a file
  $ cat side-by-side <file> [style]    Translate a file and create a side-by-side translation

Styles:
  literary (default)
  literal
  technical
`;

program
    .version('0.1.0') // You can set your application version here
    .name("cat") // You can set your application name here
    .command('set-key <key>')
    .description('Set the GPT API key')
    .action((key) => {
        // TODO: Store the key
        console.log(`API key set: ${key}`);
    });

program
    .command('translate <file> [style]')
    .description('Translate a file')
    .action((file, style = 'literary') => {
        // TODO: Translate the file
        console.log(`Translating ${file} with style ${style}`);
    });

program
    .command('side-by-side <file> [style]')
    .description('Translate a file and create a side-by-side translation')
    .action((file, style = 'literary') => {
        // TODO: Translate the file and create a side-by-side translation
        console.log(`Translating ${file} side by side with style ${style}`);
    });

program
    .command('help')
    .description('Show help')
    .action(() => {
        console.log(art + helpMessage);
    });

program
    .action(() => {
        console.log(art + helpMessage);
    });

program.parse(process.argv);
