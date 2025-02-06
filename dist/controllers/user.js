"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrentUserProfile = void 0;
const user_1 = __importDefault(require("../models/user"));
const getCurrentUserProfile = async (req, res) => {
    try {
        const currentUserID = req.user.id;
        // find the user by id
        const user = await user_1.default.findById(currentUserID).lean();
        if (!user) {
            res.status(404).json({ message: "User not found" });
            return;
        }
        res.status(200).json({ ...user, password: undefined });
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.getCurrentUserProfile = getCurrentUserProfile;
