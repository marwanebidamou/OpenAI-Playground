import OpenAI from "openai";


const client = new OpenAI();

interface AddressResponse {
    street: string;
    City: string;
    State: string;
    Zipcode: string;
}

interface AddressErrorResponse {
    error: string;
}


export const processAddress = async (address: string): Promise<AddressResponse | AddressErrorResponse> => {

    const prompt = `
        Convert the following US address into its components:
        Address: """${address}"""
        
        If the address is invalid, return the following JSON object:
        { "error": "Invalid address" }
        
        Format the output as a JSON object with the following structure:
        {
          "street": string,
          "City": string,
          "State": string,
          "Zipcode": string
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

    console.log(result);

    const parsed: AddressResponse | AddressErrorResponse = JSON.parse(result.choices[0].message.content!);
    return parsed;

}