

export const openAIFunctions = [
    {
        name: "fetchWeather",
        description: "Fetch the current weather details for a given location.",
        parameters: {
            type: "object",
            properties: {
                location: {
                    type: "string",
                    description: "The city or location name.",
                },
            },
            required: ["location"],
        },
    },
];