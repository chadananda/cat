# CAT - Computer Assisted Translation

CAT is a powerful command-line tool for translating and processing book-length documents. It leverages the power of GPT-based language models to provide high-quality translations and document segmentation. With CAT, you can create both straight translations, side-by-side translations, and segment your documents into meaningful paragraphs.

## Features

- **Straight Translation:** CAT can translate your entire document into a target language.
- **Side-by-Side Translation:** CAT can create a document with the original text and the translation side by side.
- **Segmentation:** CAT can segment a long string of text into meaningful paragraphs.
- **Translation Styles:** CAT supports multiple translation styles to suit your needs.
  - **Literary:** This style is easily readable and is the default style for translations.
  - **Literal:** This style conforms closely to the original word order, useful for language learners.
  - **Technical:** This literal style includes terms and names from the original language, useful for technical translations.

## Usage

1. Install CAT with `npm install -g cat-cli`.
2. Set your API key with `cat set-key YOUR_API_KEY`.
3. Translate a file with `cat translate --file yourfile.txt --style literary`.
4. Create a side-by-side translation with `cat side-by-side --file yourfile.txt --style literary`.
5. Segment a document with `cat segment --file yourfile.txt`.

For more information on the available commands and options, run `cat --help`.

## Technology Stack and Coding Style

CAT is built with modern JavaScript and uses a number of libraries to provide its functionality:

- **Axios:** For making HTTP requests to the translation API.
- **Commander:** For creating the command-line interface.
- **Chalk and Figlet:** For adding color and ASCII art to the command-line output.
- **Dotenv:** For managing environment variables.
- **OpenAI:** For leveraging the power of GPT-based language models.

The codebase follows modern JavaScript best practices and is thoroughly documented with comments and JSDoc explanations.

## Implementation Plan

1. **Project Setup and Initialization:** The project will be set up as an npm module, with all necessary dependencies installed. A `.env` file will be created to store the GPT API key.
2. **Command-Line Interface:** The CLI will be created using `commander`, with commands for setting the API key, translating files, segmenting documents, and setting the translation style. The output will be styled with `chalk` and `figlet`.
3. **GPT API Connection:** The application will connect to the GPT API using `axios`. The user's text will be sent to the API and the translated text or segmented text will be returned.
4. **Error Handling and Validation:** The application will include thorough error handling and input validation to ensure that the user's input is valid and that the API key is set.
5. **Testing:** The application will include a suite of unit tests to ensure that all components are working correctly.
6. **Documentation:** The codebase will be thoroughly documented, with a detailed README file explaining how to use the application.

This plan will be implemented over the course of several development sprints, with each sprint focusing on one or two of the above steps.


## Proof of concept examples

* Literary translation of Bahá'u'lláh's "Qasídiy-i-Varqá'íyyih"
* Literary translation of the Báb's "Dalá'il-i-Sab'ih"
* Literary translation of Mázandarání's "Zuhúru'l-Haqq, Volume 1"
* Study side-by-side translation of Udo Schaefer's Doctoral Thesis on Bahá'í Constitutional Law
* Study side-by-side translation of Bahá'u'lláh's Kitáb-i-Aqdas
* Study side-by-side translation of the Báb's Arabic Bayán
* Study side-by-side translation of the Báb's "Qayyúmu'l-Asmá'" output in German


