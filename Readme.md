# CTAI - Commitee Translation AI

CTAI is a powerful AI for translating and processing book-length documents into quality classical English. It leverages the power of large language models with __decision tree logic__ to provide high-quality translations and document segmentation. Instead of older decision logic such as chain-of-reasoning, CTAI actually forms a committe of diverse translation agents and each translator argues his (or her) logical reasoning for a translation decision. The group continues to debate until they eventually reach a concensus. At which point, they provide the final translation as well as a commentary block summarizing the reasoning behind difficult translation decisions.

The CTAI "committee" can provide translations with or without commentary, with or without original text (side-by-side) and as either a literary or technical translation style.

Since many old Arabic and Farsi manuscripts had neither punctuation nor paragraph segmentation. The CTAI application can first split long blocks of text into symantically meaningful paragraphs prior to translation. CTAI will also remove incorrect (artificial) page breaks from OCR, as well as repair hyphen-split words and common OCR errors using contextual analysis.

## Meet our Committee

__Dr. Penelope Hamilton__ - An Oxford-based scholar in English literature and linguistics with a focus on Keats, Byron, Gibbon, and the King James Bible. She brings a deep understanding of classical English style to the committee.

__Professor Reza Farid__ - A leading authority in Persian classical poetry and Islamic literature in Arabic. Prof. Farid's understanding of the cultural and historical contexts of Persian and Arabic texts will be crucial in maintaining the original spirit of the works.

__Dr. Ahmed Bakri__ - A respected scholar in Arabic literature and Islamic studies, with a specific focus on Qur'anic studies and Sufi literature. His research and translation work on Shoghi Effendi's Arabic translations make him a key member of the team.

__Dr. Yasmin Nouri__ - A renowned historian specializing in 19th-century Qajar Iran. Dr. Nouri's expertise will provide valuable historical context to the works of the Báb, enhancing the depth and accuracy of the translations.

__Ms. Evelyn Clarke__ - A meticulous editor and English language specialist with a focus on refining translated texts for clarity, comprehensibility, and stylistic consistency. Her skills will ensure the translated works resonate with English-speaking audiences.


Together, these five experts create a robust and multidisciplinary committee capable of translating Baha'i literature in the style of Shoghi Effendi. Their combined skills and knowledge ensure the translations will be not only linguistically accurate but also culturally resonant and historically contextualized.


## Our Committee's Translation Process

#### 1. Initial Translation:

Each member of the committee independently translates a given paragraph from the original Arabic or Persian text. They are encouraged to leverage their individual areas of expertise while keeping in mind the style of Shoghi Effendi.

#### 2. Group Discussion:

The committee convenes to discuss each proposed translation. They critique and compare each version considering various factors:

* Style: How well does the translation capture the literary style of Shoghi Effendi?
* Historical context: Does the translation accurately reflect the historical and cultural nuances of the original text?
* Literary Allusions: Are references to other works of literature correctly interpreted and translated?
* Theological Terminology: Is the terminology accurate and consistent with Baha'i theology and Shoghi Effendi's translations?
* Translation Precedent: Does the translation adhere to established translation standards and precedents set by Shoghi Effendi?
* Parallel English Metaphors and Figures of Speech: Does the translation effectively use English language metaphors and figures of speech to convey the meaning of the original text?

#### 3. Re-Translation:

Based on the group discussion, each member re-translates the paragraph, taking into account the feedback and insights gained during the discussion.

#### 4. Cross Comparison:

The committee meets again to cross compare their re-translations. They discuss the strengths and weaknesses of each version, drawing on the best elements of each to inform their final translation.

#### 5. Collaborative Final Translation:

The committee works together to produce a final translation of the paragraph. This final version incorporates the best efforts and arguments of the group, ensuring that it is an accurate, stylistically appropriate, and resonant translation of the original text.

#### 6. Technical Summary:

Finally, the committee writes up a brief technical summary detailing the challenges faced during the translation process and how they were overcome. This document serves as a record of their translation process and can be used to inform future translation efforts.


This multi-step process ensures that the final translation is the result of a collaborative, thorough, and rigorous process, leveraging the diverse skills and expertise of the committee members. It also allows for continuous learning and improvement, as each step provides opportunities for feedback and refinement.



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

