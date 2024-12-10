import { Request, Response } from "express";
import { processAddress } from "../services/addressParser";

export const getAddressComponents = async (req: Request, res: Response): Promise<void> => {
    const { address } = req.body;

    if (!address) {
        res.status(400).json({ error: "Address is required" });
        return;
    }

    try {
        const components = await processAddress(address);
        res.status(200).json(components);
        return;
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
