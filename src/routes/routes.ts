import express from "express";
import { getAddressComponents } from "../controllers/addressController";
import { extractKeyPointsAction, makeTextFriendlyAction, makeTextProfessionalAction, proofTextAction, summarizeTextAction } from "../controllers/textController";
import { generalChatAI } from "../controllers/chatController";

const router = express.Router();

//Addresses routes
router.post("/address/extract", getAddressComponents);


//Text routes
router.post("/text/proofread", proofTextAction);
router.post("/text/friendly", makeTextFriendlyAction);
router.post("/text/professional", makeTextProfessionalAction);
router.post("/text/summarize", summarizeTextAction);
router.post("/text/key-points", extractKeyPointsAction);

//Chat
router.post("/chat", generalChatAI);

export default router;
