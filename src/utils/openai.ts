import { Configuration, OpenAIApi } from "openai-edge";

export const getOpenAI = (): OpenAIApi => {
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  return new OpenAIApi(configuration);
};