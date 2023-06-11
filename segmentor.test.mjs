// segmentor.test.mjs

import { segmentDocument } from './segmentor.mjs';

// Define some story text constants
const PROSE_TEXT = `In a small town nestled in the heart of the country, there lived a humble baker named Samuel. He was well-known throughout the town for his delicious bread and warm, inviting personality.
Samuel’s bakery was a quaint little shop located on the town's main street. Every morning, as the sun began to rise, Samuel would be found in his bakery, kneading dough and stoking the fire in his old stone oven.
One morning, as Samuel was preparing his daily batch of bread, a stranger walked into the shop. The stranger was tall and thin, with a sharp face and piercing blue eyes. He was dressed in a long black coat that billowed around him as he moved.
"Good morning," Samuel greeted the stranger with a friendly smile. "What can I get for you today?"
The stranger paused for a moment, his gaze sweeping over the array of fresh bread displayed on the counter. "I heard your bread is the best in the country," he said. "I came to see if the rumors are true."`;

const POETRY_TEXT = `Once upon a midnight dreary, while I pondered, weak and weary,
Over many a quaint and curious volume of forgotten lore,
While I nodded, nearly napping, suddenly there came a tapping,
As of someone gently rapping, rapping at my chamber door.
"'Tis some visitor," I muttered, "tapping at my chamber door—
Only this, and nothing more."`;

const PAGE_SPLIT_PARAGRAPH_TEXT = `It was a dark and stormy night; the rain fell in torrents — except at occasional intervals, when it was checked by a violent gust of wind which swept up the streets (for it is in London that our scene lies), rattling along the housetops, and



A Tale of Two Cities   13.

fiercely agitating the scanty flame of the lamps that struggled against the darkness.

Suddenly, a loud knock echoed through the house. Mrs. Dursley, who had been enjoying a peaceful evening in front of the television, jumped out of her skin. "Who could that be




A Tale of Two Cities   14.

at this hour?" she wondered, her heart pounding in her chest as she made her way to the front door.



`;

// Now let's use these text constants in the tests
describe('segmentDocument', () => {
 it('should correctly segment prose text', async () => {
   const paragraphs = await segmentDocument(PROSE_TEXT);
   expect(paragraphs).toHaveLength(3);
   expect(paragraphs[0].startText).toEqual('In a small town nestled in');
   expect(paragraphs[0].paragraphText).toEqual('In a small town nestled in the heart of the country, there lived a humble baker named Samuel. He was well-known throughout the town for his delicious bread and warm, inviting personality.');
 });

 it('should correctly segment poetry text', async () => {
   const paragraphs = await segmentDocument(POETRY_TEXT);
   expect(paragraphs).toHaveLength(2);
   expect(paragraphs[0].startText).toEqual('Once upon a midnight dreary,');
   expect(paragraphs[0].paragraphText).toEqual('Once upon a midnight dreary, while I pondered, weak and weary,');
 });

 it('should correctly segment prose with page breaks', async () => {
   const paragraphs = await segmentDocument(PAGE_SPLIT_PARAGRAPH_TEXT);
   expect(paragraphs).toHaveLength(4);
   expect(paragraphs[0].startText).toEqual('In a small town nestled in');
   expect(paragraphs[0].paragraphText).toEqual('In a small town nestled in the heart of the country, there lived a humble baker named Samuel. He was well-known throughout the town for his delicious bread and warm, inviting personality.');
 });


});

