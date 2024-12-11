import express from "express";
import { getAddressComponents } from "../controllers/addressController";
import { extractKeyPointsAction, makeTextFriendlyAction, makeTextProfessionalAction, proofTextAction, summarizeTextAction } from "../controllers/textController";

const router = express.Router();

//Addresses routes
router.post("/address/extract", getAddressComponents);


//Text routes
router.post("/text/proofread", proofTextAction);
router.post("/text/friendly", makeTextFriendlyAction);
router.post("/text/professional", makeTextProfessionalAction);
router.post("/text/summarize", summarizeTextAction);
router.post("/text/key-points", extractKeyPointsAction);

export default router;
