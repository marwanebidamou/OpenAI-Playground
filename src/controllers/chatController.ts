import { Request, Response } from "express";
import OpenAI from "openai";
import { openAIFunctions } from "../utils/openAIFunctions";
import { fetchWeather } from "../services/weatherService";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

const client = new OpenAI();

export const generalChatAI = async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: "Message is required" });
    }

    try {

        let messages: Array<ChatCompletionMessageParam> = [
            { role: "system", content: "You are a helpful assistant capable of general chatting" },
            { role: "user", content: message },
        ];

        // Start the conversation with the user's message
        const chatResult = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: messages,
            functions: openAIFunctions, // Add function schema
        });

        // Check if the model suggests a function call
        const response = chatResult.choices[0].message;
        if (response.function_call) {
            switch (response.function_call?.name) {
                case 'fetchWeather':
                    const fnArgs: { location: string } = JSON.parse(response.function_call.arguments);
                    const weatherData = await fetchWeather(fnArgs.location);
                    messages.push(
                        { role: 'system', content: 'Format weather data into a conversational response.' },
                        { role: 'assistant', content: JSON.stringify(weatherData) }
                    );

                    // Format the function result into a response
                    const formattedWeather = await client.chat.completions.create({
                        model: 'gpt-4o-mini',
                        messages: messages,
                    });

                    res.status(200).json({
                        message: formattedWeather.choices[0].message.content,
                    });
                    return;
            }
        }

        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: "Failed to extract key points", details: error.message });
    }
};