import { Request, Response } from "express";
import { extractKeyPoints, makeTextFriendly, makeTextProfessional, proofText, summarizeText } from "../services/textEnhancer";

/**
 * Proofreads the input text for grammatical errors and returns the corrected text.
 */
export const proofTextAction = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    try {
        const correctedText = await proofText(text);
        res.status(200).json({ correctedText });
    } catch (error) {
        res.status(500).json({ error: "Failed to proofread text", details: error.message });
    }
};

/**
 * Converts the input text to a friendly tone.
 */
export const makeTextFriendlyAction = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    try {
        const friendlyText = await makeTextFriendly(text);
        res.status(200).json({ friendlyText });
    } catch (error) {
        res.status(500).json({ error: "Failed to make text friendly", details: error.message });
    }
};

/**
 * Converts the input text to a professional tone.
 */
export const makeTextProfessionalAction = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    try {
        const professionalText = await makeTextProfessional(text);
        res.status(200).json({ professionalText });
    } catch (error) {
        res.status(500).json({ error: "Failed to make text professional", details: error.message });
    }
};

/**
 * Summarizes the input text.
 */
export const summarizeTextAction = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    try {
        const summary = await summarizeText(text);
        res.status(200).json({ summary });
    } catch (error) {
        res.status(500).json({ error: "Failed to summarize text", details: error.message });
    }
};

/**
 * Extracts key points from the input text.
 */
export const extractKeyPointsAction = async (req: Request, res: Response): Promise<void> => {
    const { text } = req.body;

    if (!text) {
        res.status(400).json({ error: "Text is required" });
        return;
    }

    try {
        const keyPoints = await extractKeyPoints(text);
        res.status(200).json({ keyPoints });
    } catch (error) {
        res.status(500).json({ error: "Failed to extract key points", details: error.message });
    }
};
