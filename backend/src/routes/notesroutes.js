import express from "express";
import { getAllNotes, getNoteById, createNote, updateNote, deleteNote } from '../controllers/notesController.js';
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", verifyToken, createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;