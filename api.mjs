// api.mjs

import { PROMPTS } from './prompts.js';
import openai from 'openai';  // Make sure to import your OpenAI API library

// Your OpenAI API Key
openai.apiKey = 'your-api-key';

async function callAPI(promptKey, params) {
 const prompt = PROMPTS[promptKey];
 if (!prompt) {
   throw new Error(`Invalid prompt key: ${promptKey}`);
 }

 const filledPrompt = prompt.text.replace('{{document}}', params.document).replace('{{text_above}}', params.text_above || '');

 const response = await openai.Completion.create({
   engine: 'text-davinci-002',
   prompt: filledPrompt,
   temperature: 0.5,
   max_tokens: 1000
 });

 // Try to parse the response as JSON
 let result;
 try {
   result = JSON.parse(response.choices[0].text.trim());
 } catch {
   throw new Error('Response is not in JSON format');
 }

 // Check if the parsed JSON is in the expected format
 if (!prompt.validator(result)) {
   throw new Error('Invalid response format');
 }

 // Return the valid result
 return result;
}


export default callAPI;
