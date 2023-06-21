# 📘 CTAI - Committee Translation AI 📘

CTAI is a powerful AI "committee" for translating and processing book-length documents into quality classical English. It leverages the concept of __tree of thought logic__ 🌳 to provide translations which are superior to __straight-shot__ requests and even better than other AI decision-enhancing logic such as __chain-of-reasoning__, __self-consistency__ or __voting.__

This is a proof of concept placeholder, preparing for later generations of AI which will have been trained on more domain-specific examples. GPT-4 is the first LLM to have adequate knowledge of Arabic literature to run such a test. To play with this tool, you will have to have API access to GPT-4 which is not yet publicly available.

__Tree of thought__ is basically a multi-input iteration on a goal. In this implementation, it is a simulation of a multi-disciplinary translation committee consisting of a handful of varied experts. Each expert has a specific set of background strengths. In our simulated committee, each expert argues his (or her) logical reasoning behind each translation decision. The group engages each other in debate until they eventually reach a collective translation consensus. Together, they provide this final translation along with a technical summary explaining the challenges and reasoning behind each difficult translation decision.

Since many old Arabic and Farsi documents have neither punctuation nor paragraph segmentation. The CTAI application will first split long blocks of text into semantically meaningful paragraphs prior to translation. As part of this document-prep, CTAI will also remove incorrect (artificial) page breaks introduced by typists or OCR.


## 🎓 Meet our Committee

All of our translators are fluent in both classical Arabic and Farsi and have extensive experience translating Arabic and Farsi literature in the style of Shoghi Effendi.

__<u>👩‍🎓 Dr. Penelope Hamilton</u>__ - An Oxford-based scholar in English literature and linguistics with a focus on Keats, Byron, Gibbon, and the King James Bible. She brings a deep understanding of classical English style to the committee. Her doctoral dissertation treated the challenges of translating Ali ibn Abi Talib's "Nahj al-Balagha" into appropriate literary English.

__<u>👨‍🏫 Professor Reza Farid</u>__ - A leading authority in Persian classical poetry and Islamic literature. Professor Farid offers an unparalleled understanding of the cultural and historical contexts of Persian texts -- especially Sufi terminology and poetic allusions to Attar, Hafez, and Rumi. His insights will be crucial for maintaining the original spirit of the works. Professor Farid has especially studied the methodology employed by Shoghi Effendi in his standard-setting translation of the Farsi Kitáb-i-Íqán.

__<u>👨‍🎓 Dr. Ahmed Bakri</u>__ - A preeminent scholar in Arabic and Islamic literature, with a specific expertise on Qur'anic grammar. His research on Shoghi Effendi's Arabic translations make him a key member of the team. He has specially focused on the technical translation norms employed by Shoghi Effendi in his English rendering of the Arabic "Prayers and Meditations by Bahá'u'lláh" (Munaját).

*🤝 Together, these expert AI personas constitute a robust and multidisciplinary committee capable of accurately translating Bahá'í literature using the highly literary style of Shoghi Effendi.*


## 📚 Our Committee's Translation Process

### 💡 1. Translation:
Each member of the committee independently translates a given paragraph from the original Arabic or Persian text. They are encouraged to leverage their individual areas of expertise while keeping in mind the norms established by Shoghi Effendi.

### 🗣️ 2. Group Debate & Consideration:
The committee convenes to discuss each proposed translation. They critique and compare each version considering various factors:

- 🖋️ Style: How well does the translation capture the literary style of Shoghi Effendi?
- 🕰️ Historical context: Does the translation accurately reflect the historical and cultural nuances of the original text?
- 📚 Literary Allusions: Are references to other works of literature correctly interpreted?
- ☪️ Theological Terminology: Do technical terms accurately reflect Islamic and Baha'i concepts?
- 📜 Translation Precedent: Does the translation adhere to established translation standards and terminology precedents set by Shoghi Effendi?
- 🗨️ Figurative Language Adaptation: Does the translation adeptly identify and adapt figures of speech from the original text into fitting English expressions, maintaining the essence and style of the original?

### ✍️ 3. Repeat until Achieving Consensus:
Based on the group discussion, each member re-translates the paragraph, repeating step one and two, bearing in mind corrections and insights learned from other committee members. They continue this iterative process until arriving at consensus with a final translation all agree upon.

### 📝 4. Technical Summary:
Finally, the committee marks up the paragraph with copious footnotes documenting the difficult trade-offs which the committee made in the translation of the paragraph, including choices made for specific terminology or figures of speech and the reasoning for each.

*This multi-step process ensures that the final translation is the result of a collaborative, thorough, and rigorous process, leveraging the diverse skills and expertise of the committee members. It also allows for continuous learning and improvement, as each step provides opportunities for feedback and refinement.*


## 🎯 App Functionality

- **Straight Translation:** 📝 CTAI can translate your entire document into a target language.
- **Side-by-Side Translation:** 📖 CTAI can create a document with the original text and the translation side by side.
- **Segmentation:** 📄 CTAI can segment a long document of into meaningful paragraphs.
- **Translation Styles:** 📜 CTAI supports multiple translation styles to suit your needs.
  - **Literary:** 🖋️ This style is easily readable and is the default style for translations.
  - **Literal:** 📚 This style conforms closely to the original word order, useful for study.
  - **Technical:** 🔬 This literal style embedds original terms and names, useful for technical study.

## 🚀 Usage

1. Install CTAI with `npm install -g ctai`.
2. Set your GPT-4 API key with `ctai set-key YOUR_API_KEY`.
3. Translate a file with `ctai translate --file yourfile.txt --style literary`.
4. Create a side-by-side translation with `CTAI side-by-side --file yourfile.txt --style literary`.
5. Segment a document into meaningful paragraphs with `ctai segment --file yourfile.txt`.

For more information on the available commands and options, run `ctai --help`.


## 📃 Proof of concept examples

* Literary translation of Bahá'u'lláh's "Qasídiy-i-Varqá'íyyih"
* Literary translation of the Báb's "Dalá'il-i-Sab'ih"
* Literary translation of Mázandarání's "Zuhúru'l-Haqq, Volume 1"
* Study side-by-side translation of Udo Schaefer's Doctoral Thesis on Bahá'í Constitutional Law
* Study side-by-side translation of Bahá'u'lláh's Kitáb-i-Aqdas
* Study side-by-side translation of the Báb's Arabic Bayán
* Study side-by-side translation of the Báb's "Qayyúmu'l-Asmá'" output in German

