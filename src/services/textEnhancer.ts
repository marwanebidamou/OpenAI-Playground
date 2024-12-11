import OpenAI from "openai";


const client = new OpenAI();



export const proofText = async (input_text: string): Promise<string> => {

    const prompt = `
        Proofread the following text for grammatical and spelling errors. Make corrections where necessary without changing the original meaning.
        Text: """${input_text}"""
        Output: A grammatically correct and polished version of the text, without double quotes at the begining and the end.

        `;

    const result = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { 'role': 'system', content: prompt }
        ]
    });


    return result.choices[0].message.content!;
}

export const makeTextFriendly = async (input_text: string): Promise<string> => {

    const prompt = `
        Transform the following text into a friendly and conversational tone. Ensure the meaning remains the same but use approachable and casual language.
        Text: """${input_text}"""
        Output: A friendly and conversational version of the text, without double quotes at the begining and the end.
        `;

    const result = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { 'role': 'system', content: prompt }
        ]
    });

    return result.choices[0].message.content!;
}

export const makeTextProfessional = async (input_text: string): Promise<string> => {

    const prompt = `
    Rewrite the following text in a professional and formal tone suitable for business or official communication. Ensure the meaning remains clear and respectful.
    Text: """${input_text}"""
    Output: A professional and formal version of the text, without double quotes at the begining and the end and text only, no added title if there is none in the input.
        `;

    const result = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { 'role': 'system', content: prompt }
        ]
    });

    return result.choices[0].message.content!;
}

export const summarizeText = async (input_text: string): Promise<string> => {

    const prompt = `
    Summarize the following text into a concise version that captures the main ideas and key points.
    Text: """${input_text}"""
    Output: A concise summary of the text, not more half of orignal text length, without double quotes at the begining and the end.
        `;

    const result = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
            { 'role': 'user', content: prompt }
        ]
    });

    return result.choices[0].message.content!;
}




export const extractKeyPoints = async (input_text: string): Promise<string[]> => {

    const prompt = `
    Extract the main key points from the following text. Present the points as a numbered list. Return the result as a JSON object with the original text and the key points.

    Text: """${input_text}"""
    Output format:
    {
    "key_points": [
        "Key point 1",
        "Key point 2",
        "Key point 3"
    ]
    }
        `;

    const result = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        response_format: {
            type: "json_object",
        },
        messages: [
            { 'role': 'system', content: prompt }
        ]
    });

    const parsed: { key_points: string[] } = JSON.parse(result.choices[0].message.content!);

    return parsed.key_points;
}