# CTAI - Commitee Translation AI

CTAI is a powerful AI for translating and processing book-length documents into quality classical English. It leverages the power of large language models with __decision tree logic__ to provide high-quality translations and document segmentation. Instead of older decision logic such as chain-of-reasoning, CTAI actually forms a committe of diverse translation agents and each translator argues his (or her) logical reasoning for a translation decision. The group continues to debate until they eventually reach a concensus. At which point, they provide the final translation as well as a commentary block summarizing the reasoning behind difficult translation decisions.

The CTAI "committee" can provide translations with or without commentary, with or without original text (side-by-side) and as either a literary or technical translation style.

Since many old Arabic and Farsi manuscripts had neither punctuation nor paragraph segmentation. The CTAI application can first split long blocks of text into symantically meaningful paragraphs prior to translation. CTAI will also remove incorrect (artificial) page breaks from OCR, as well as repair hyphen-split words and common OCR errors using contextual analysis.

## Features

- **Straight Translation:** CTAI can translate your entire document into a target language.
- **Side-by-Side Translation:** CTAI can create a document with the original text and the translation side by side.
- **Segmentation:** CTAI can segment a long document of into meaningful paragraphs.
- **Translation Styles:** CTAI supports multiple translation styles to suit your needs.
  - **Literary:** This style is easily readable and is the default style for translations.
  - **Literal:** This style conforms closely to the original word order, useful for study.
  - **Technical:** This literal style embedds original terms and names, useful for technical study.

## Usage

1. Install CTAI with `npm install -g ctai`.
2. Set your API key with `ctai set-key YOUR_API_KEY`.
3. Translate a file with `ctai translate --file yourfile.txt --style literary`.
4. Create a side-by-side translation with `CTAI side-by-side --file yourfile.txt --style literary`.
5. Segment a document into meaningful paragraphs with `ctai segment --file yourfile.txt`.

For more information on the available commands and options, run `ctai --help`.

## Proof of concept examples

* Literary translation of Bahá'u'lláh's "Qasídiy-i-Varqá'íyyih"
* Literary translation of the Báb's "Dalá'il-i-Sab'ih"
* Literary translation of Mázandarání's "Zuhúru'l-Haqq, Volume 1"
* Study side-by-side translation of Udo Schaefer's Doctoral Thesis on Bahá'í Constitutional Law
* Study side-by-side translation of Bahá'u'lláh's Kitáb-i-Aqdas
* Study side-by-side translation of the Báb's Arabic Bayán
* Study side-by-side translation of the Báb's "Qayyúmu'l-Asmá'" output in German

