import express from "express";
import { getAddressComponents } from "../controllers/addressController";

const router = express.Router();

router.post("/address", getAddressComponents);


export default router;
