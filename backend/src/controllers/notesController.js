import Note from "../models/Note.js";
import { User } from "../models/user.model.js";

export async function getAllNotes(_, res) {
    try {
        const notes = await Note.find().sort({ createdAt: -1 });
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error in getAllNotes controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function getNoteById(req, res) {
    try {
        const { id } = req.params;
        const note = await Note.findById(id);
        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        console.error("Error in getNoteById controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function createNote(req, res) {
    try {
        const { title, content, isAnonymous } = req.body;
        const authorId = req.userId;

        const user = await User.findById(authorId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const note = new Note({
            title,
            content,
            author: authorId,
            authorName: user.name,
            isAnonymous: isAnonymous || false,
        });

        const savedNote = await note.save();
        res.status(201).json(savedNote);
    } catch (error) {
        console.error("Error in createNote controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function updateNote(req, res) {
    try {
        const { id } = req.params;
        const { title, content } = req.body;
        const userId = req.userId;

        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        if (note.author.toString() !== userId) {
            return res.status(403).json({ message: "You are not authorized to update this note" });
        }

        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });

        res.status(200).json({ message: "Note updated successfully!", note: updatedNote });
    } catch (error) {
        console.error("Error in updateNote controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export async function deleteNote(req, res) {
    try {
        const { id } = req.params;
        const userId = req.userId;

        const note = await Note.findById(id);

        if (!note) {
            return res.status(404).json({ message: "Note not found" });
        }

        if (note.author.toString() !== userId) {
            return res.status(403).json({ message: "You are not authorized to delete this note" });
        }

        const deletedNote = await Note.findByIdAndDelete(id);

        res.status(200).json({ message: "Note deleted successfully!", note: deletedNote });
    } catch (error) {
        console.error("Error in deleteNote controller:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
