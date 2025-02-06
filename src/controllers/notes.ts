import Note, { INote } from "@/models/notes";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const getAllNotes = async (req: Request, res: Response) => {
  try {
    const userID = req.user.id;

    const notes = await Note.find({ userId: userID });
    res.status(200).json({ notes });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid note id" });
      return;
    }

    const note = await Note.findOne({ _id: id, userId: req.user.id });

    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const createNote = async (req: Request, res: Response) => {
  try {
    const content = req.body;

    const newNote = new Note({
      ...content,
      userId: req.user.id,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime(),
    });

    const note = await newNote.save();

    await note.save();
    res.status(201).json({ note });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid note id" });
      return;
    }

    // check if the current user the owner of the note
    const noteExists = await Note.exists({ _id: id, userId: req.user.id });

    if (!noteExists) {
      res
        .status(403)
        .json({ message: "You are not allowed to update this note" });
      return;
    }

    const content = req.body;
    const note = await Note.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      {
        ...content,
        updatedAt: new Date().getTime(),
      },
      { new: true }
    );
    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    res.status(200).json({ note });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid note id" });
      return;
    }

    const note = await Note.findOneAndDelete({ _id: id, userId: req.user.id });

    if (!note) {
      res.status(404).json({ message: "Note not found" });
      return;
    }

    res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
