import { Request, Response } from "express";
import OpenAI from "openai";

const client = new OpenAI();

export const generalChatAI = async (req: Request, res: Response): Promise<void> => {
    const { message } = req.body;

    if (!message) {
        res.status(400).json({ error: "Message is required" });
    }

    try {

        // Start the conversation with the user's message
        const chatResult = await client.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: "system", content: "You are a helpful assistant capable of general chatting" },
                { role: "user", content: message },
            ],
        });

        const response = chatResult.choices[0].message.content;

        res.status(200).json({ response });
    } catch (error) {
        res.status(500).json({ error: "Failed to extract key points", details: error.message });
    }
};