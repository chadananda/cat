// api.mjs

import { Configuration, OpenAIApi } from 'openai';
import { config } from 'dotenv';
import { PROMPTS } from './prompts.mjs';

// Load .env content
config();

// Set the OpenAI API Key
const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

async function callAPI(promptKey, params) {
 params = Object.values(params)
 const prompt = PROMPTS[promptKey];
 if (!prompt) {
   throw new Error(`Invalid prompt key: ${promptKey}`);
 }

 const promptMessage = prompt.text.replace('{{data}}', params[0]).replace('{{context}}', params[1] || '');
 const content = promptMessage;
 const messages = [{role:'user', content}];
 const model = prompt.model || 'gpt-3.5-turbo';
 const function_call = 'auto';
 const functions = prompt.response_signature;
 const response = await openai.createChatCompletion({
  model, messages, functions, function_call
});
 let result = response.data.choices[0].message.content
 let usage = response.data["usage"]["total_tokens"]

 // Log the raw prompt
 console.log('Raw prompt:', content);
 console.log('=======================')
 console.log('Result:', result);
 console.log('=======================')

 try {
   result = JSON.parse(result);
   console.log('Parsed result:', result, 'Usage:', usage);
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

