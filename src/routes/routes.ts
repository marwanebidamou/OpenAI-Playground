import express from "express";
import { getAddressComponents } from "../controllers/addressController";

const router = express.Router();

router.post("/address/extract", getAddressComponents);


export default router;
