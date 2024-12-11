# OpenAI Playground Node.js Project

This project demonstrates the integration of OpenAI's API with Node.js. It includes features for text processing, weather retrieval, and dynamic response handling using OpenAI function calling.

## Features

### Text Processing APIs

- **Proofreading**: Correct grammatical and spelling errors in input text.
- **Friendly Tone Conversion**: Convert text into a casual and friendly tone.
- **Professional Tone Conversion**: Rewrite text in a formal and professional tone.
- **Text Summarization**: Generate a concise summary of input text.
- **Key Point Extraction**: Extract main points from the text and return them as a JSON object.

### Weather Integration

- Retrieve current weather status using OpenAI function calling in conjunction with the OpenWeatherMap API.

### Chat API

- General chat functionality.
- Context-aware interaction with function-specific logic (e.g., weather inquiries).

## Folder Structure

```
src/
├── controllers/      # API request handling
├── services/         # Business logic and reusable modules
├── routes/           # API route definitions
├── utils/            # Utility functions
├── config/           # Configuration files (e.g., environment variables)
└── app.ts            # Application entry point
```

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/marwanebidamou/OpenAI-Playground/
   cd OpenAI-Playground
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and provide your OpenAI API key and OpenWeatherMap API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key
   WEATHER_MAP_API_KEY=your_openweathermap_api_key
   ```

4. Run the application:

   ```bash
   npm start
   ```

## API Endpoints

### Text Processing

- **Proofread Text**: `/api/text/proofread`
- **Friendly Tone**: `/api/text/friendly`
- **Professional Tone**: `/api/text/professional`
- **Summarize Text**: `/api/text/summarize`
- **Extract Key Points**: `/api/text/key-points`

### Chat

- **General Chat**: `/api/chat` (support weather retrieval using local function)

## Dependencies

- `openai`: OpenAI API integration.
- `express`: Web framework for Node.js.
- `dotenv`: Environment variable management.
- `axios`: HTTP client for API requests.

## License

This project is licensed under the MIT License.

