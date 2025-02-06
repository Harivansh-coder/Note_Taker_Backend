"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.updateNote = exports.createNote = exports.getNote = exports.getAllNotes = void 0;
const notes_1 = __importDefault(require("../models/notes"));
const mongoose_1 = __importDefault(require("mongoose"));
const getAllNotes = async (req, res) => {
    try {
        const userID = req.user.id;
        const notes = await notes_1.default.find({ userId: userID });
        res.status(200).json({ notes });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getAllNotes = getAllNotes;
const getNote = async (req, res) => {
    try {
        const { id } = req.params;
        // check if id is valid
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid note id" });
            return;
        }
        const note = await notes_1.default.findOne({ _id: id, userId: req.user.id });
        if (!note) {
            res.status(404).json({ message: "Note not found" });
            return;
        }
        res.status(200).json({ note });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.getNote = getNote;
const createNote = async (req, res) => {
    try {
        const content = req.body;
        const newNote = new notes_1.default({
            ...content,
            userId: req.user.id,
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime(),
        });
        const note = await newNote.save();
        await note.save();
        res.status(201).json({ note });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.createNote = createNote;
const updateNote = async (req, res) => {
    try {
        const { id } = req.params;
        // check if id is valid
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid note id" });
            return;
        }
        // check if the current user the owner of the note
        const noteExists = await notes_1.default.exists({ _id: id, userId: req.user.id });
        if (!noteExists) {
            res
                .status(403)
                .json({ message: "You are not allowed to update this note" });
            return;
        }
        const content = req.body;
        const note = await notes_1.default.findOneAndUpdate({ _id: id, userId: req.user.id }, {
            ...content,
            updatedAt: new Date().getTime(),
        }, { new: true });
        if (!note) {
            res.status(404).json({ message: "Note not found" });
            return;
        }
        res.status(200).json({ note });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.updateNote = updateNote;
const deleteNote = async (req, res) => {
    try {
        const { id } = req.params;
        // check if id is valid
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid note id" });
            return;
        }
        const note = await notes_1.default.findOneAndDelete({ _id: id, userId: req.user.id });
        if (!note) {
            res.status(404).json({ message: "Note not found" });
            return;
        }
        res.status(204).json();
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};
exports.deleteNote = deleteNote;
