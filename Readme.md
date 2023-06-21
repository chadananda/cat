# 📘 CTAI - Committee Translation AI 📘

CTAI is a powerful AI "committee" for translating and processing book-length documents into quality classical English. It leverages the concept of __tree of thought logic__ 🌳 to provide translations which are superior to __straight-shot__ requests and even better than other AI decision-enhancing logic such as __chain-of-reasoning__, __self-consistency__ or __voting.__

This is a proof of concept placeholder, preparing for later generations of AI which will have been trained on more domain-specific examples. GPT-4 is the first LLM to have adequate knowledge of Arabic literature to run such a test. To play with this tool, you will have to have API access to GPT-4 which is not yet publicly available.

__Tree of thought__ is basically a multi-input iteration on a goal. In this implementation, it is a simulation of a multi-disciplinary translation committee consisting of a handful of varied experts. Each expert has a specific set of background strengths. In our simulated committee, each expert argues his (or her) logical reasoning behind each translation decision. The group engages each other in an interative cycle of translation and debate until they eventually reach a consensus. They provide this final translation together with copious technical notes explaining the challenges and reasoning behind each difficult translation decision.

Since many old Arabic and Farsi documents have neither punctuation nor paragraph segmentation. CTAI will first split long blocks of text into semantically meaningful paragraphs prior to translation. As part of this document-prep, CTAI will also remove incorrect (artificial) page breaks introduced by typists or OCR.


## 🎓 Meet our AI Committee

**All of our committee members are capable translators of both classical Arabic and Farsi -- and have extensive experience translating Arabic and Farsi literature in the translation style of Shoghi Effendi.**

__<u>👩‍🎓 Dr. Penelope Hamilton</u>__ - An Oxford-based scholar in English literature and linguistics with a focus on Keats, Byron, Gibbon, and the King James Bible. She brings to the committee a sweeping knowledge of classical English vocabulary and expression. Her doctoral dissertation treated the challenges of translating Ali ibn Abi Talib's "Nahj al-Balagha" into appropriate literary English.

__<u>👨‍🏫 Professor Reza Farid</u>__ - A leading authority in Persian classical poetry and Islamic literature. Professor Farid offers an unparalleled understanding of the cultural and historical contexts of Persian texts -- especially Sufi terminology and literary allusions to classic poets such as Attar, Hafez, and Rumi. His insights will be crucial for maintaining the layered meaning of literary works. Professor Farid has written at length on the specific methodology employed by Shoghi Effendi in his standard-setting translation of the Farsi Kitáb-i-Íqán.

__<u>👨‍🎓 Dr. Ahmed Bakri</u>__ - A preeminent scholar in the field of Arabic and Islamic literature, with a specific expertise on Qur'anic grammar and the development of Shi'ah Jurisprudence. His detailed studies of Shoghi Effendi's Arabic translations makes him a key member of the team. He has specially written on the technical translation norms employed by Shoghi Effendi in his English rendering of the Arabic "Prayers and Meditations by Bahá'u'lláh" (Munaját).

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
Based on the group discussion, each member re-translates the paragraph, repeating step one and two, bearing in mind corrections and insights learned from other committee members. They will continue this iterative process until convergings at a consensus -- producing a final translation which all members agree is the most faithful rendering of the original in both accuracy and style.

### 📝 4. Technical Summary:
Finally, the committee marks up the paragraph with copious footnotes documenting the difficult trade-offs made in the translation work, including choices of specific terminology and figures of speech and the reasoning for each. Footnotes are meant for use by translators and will include original terms and phrases with exlanations.

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


## 📃 Proof of concept examples (coming soon)

* Literary translation of Bahá'u'lláh's "Qasídiy-i-Varqá'íyyih"
* Literary translation of the Báb's "Dalá'il-i-Sab'ih"
* Literary translation of Mázandarání's "Zuhúru'l-Haqq, Volume 1"
* Study side-by-side translation of Udo Schaefer's Doctoral Thesis on Bahá'í Constitutional Law
* Study side-by-side translation of Bahá'u'lláh's Kitáb-i-Aqdas
* Study side-by-side translation of the Báb's Arabic Bayán
* Study side-by-side translation of the Báb's "Qayyúmu'l-Asmá'" output in German

### Sample translation with notes from the Báb's Commentary on the Surih of Kawthár:

| Original Phrase | Translation | Notes |
| --- | --- | --- |
| بسم اللّه الرحمن الرحيم | In the Name of God, the Merciful, the Compassionate | (الرحمن الرحيم) - Translated as "the Merciful, the Compassionate," following Shoghi Effendi and the King James Bible. Conveying nuances of the Arabic terms 'الرحمن' (ar-Rahman, 'the Most Gracious') and 'الرحيم' (ar-Raheem, 'the Most Merciful'). |
| الحمد للّه الذي جعل طراز | All praise be to God, who hath fashioned | (الحمد للّه) - Translated as "All praise be to God," following Shoghi Effendi's translation style in Baha'u'llah's writings. Conveys a reverence and thankfulness towards God. (جعل طراز) - "fashioned" captures the spirit of 'creation' in this context. |
| كتاب الفلق | the Book of the Dawn | Following Shoghi Effendi's tradition of translating Islamic religious concepts using biblical language, 'كتاب الفلق' (Book of the Dawn) is translated as such, maintaining its spiritual resonance and mystic appeal. |
| الأزل الذي لاحت وأضائت | the Eternal One who hath appeared and shone forth | 'الأزل' (the Eternal One) is translated as such to maintain its theological implication. 'لاحت وأضائت' (appeared and shone forth) evokes the imagery of divine revelation and enlightenment. |
| قبل ما أذنت وأجلت وأحكمت | prior to Thy command, time setting, and ordination | The sequence of verbs 'أذنت وأجلت وأحكمت' is translated as 'command, time setting, and ordination' conveying the concept of divine authority, predetermination and the orderly unfolding of divine plan. |
| آفاق سماء العماء | the horizons of the heaven of blindness | This evokes mystical symbology. 'آفاق سماء' (the horizons of the heaven) is maintained in its literal form, while 'العماء' (blindness) is used metaphorically to signify spiritual blindness. |
| الذي التفت الساق بالساق | the Day when the shank shall be bared | A reference to Qur'an 75:29, translated in line with Shoghi Effendi's style, maintaining the metaphorical expression. It signifies a day of judgement or calamity. |
| بين كل شيء نور شمس الأزل | between all things, the light of the Sun of the Eternity | Following the metaphorical and symbolic language, 'شمس الأزل' (Sun of the Eternity) is a symbol for the divine source of spiritual illumination. |
| أهل الشقاق في يوم الفراق | the people of division in the Day of Departure | 'أهل الشقاق' (the people of division) indicates those who cause strife or division. 'يوم الفراق' (Day of Departure) metaphorically signifies a day of judgement or reck.




