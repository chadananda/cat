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
 // Replace the placeholders in the prompt with the provided params
 let content = prompt.text
 params.forEach((param, index) => {
   content = content.replace(`{{${index+1}}}`, param);
 });
 const messages = [{role:'user', content}];
 const max_tokens = 2000;

 // lets the promopt override model if required
 const model = prompt.model || 'gpt-3.5-turbo';
 const functions = [prompt.response_signature];
 let response;

try {
  response = await openai.createChatCompletion({
    model, messages, functions
  });
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}


 let functionCall = response.data.choices[0].message.function_call;
 let usage = response.data["usage"]["total_tokens"]

 // Log the raw prompt
//  console.log('Raw prompt:', content);
//  console.log('=======================')
//  console.log('Result:', functionCall.arguments);
//  console.log('=======================')
//  console.log('Result:', usage);
//  console.log('=======================')

  // The function call and arguments are already in JSON format
  let args;
  try {
    args = JSON.parse(functionCall.arguments).data;
    // console.log(args)
  } catch (error) {
    throw new Error('Invalid JSON in response');
  }

  // Check if the parsed JSON is in the expected format
  if (!prompt.validator(args)) {
    throw new Error('Invalid response format', args);
  }

  // Return the valid result
  return args;
}

export default callAPI;

