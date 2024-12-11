import axios from "axios";
import { WEATHER_MAP_API_KEY } from "../config/env.config";

export const fetchWeather = async (location: string) => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
            params: {
                q: location,
                appid: WEATHER_MAP_API_KEY,
                units: "metric",
            },
        }
    );

    return {
        ...response.data
    };
};