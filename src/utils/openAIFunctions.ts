import { ChatCompletionTool } from "openai/resources/index.mjs";



export const openAitools: Array<ChatCompletionTool> = [
    {
        type: "function",
        function: {
            name: "fetchWeather",
            description: "Fetch the current weather details for a given location.",
            parameters: {
                type: "object",
                properties: {
                    location: { type: "string", description: 'The city or location name.' }
                },
            },
        },
    }
];