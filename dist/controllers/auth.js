"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpUser = exports.signInUser = void 0;
const user_1 = __importDefault(require("../models/user"));
const token_1 = __importDefault(require("../utils/token"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signInUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // check if user exists for the email
        const user = await user_1.default.findOne({
            email,
        });
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
            return;
        }
        // check if password is correct
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(400).json({
                message: "Invalid password",
            });
            return;
        }
        // generate token
        const token = (0, token_1.default)(user.id);
        res.status(200).json({
            message: "User signed in successfully",
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.signInUser = signInUser;
const signUpUser = async (req, res) => {
    const { name, email, dateOfBirth, password } = req.body;
    try {
        // check if user already exists
        const existingUser = await user_1.default.findOne({
            email,
        });
        if (existingUser) {
            res.status(400).json({
                message: "User already exists",
            });
            return;
        }
        // hash the password
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        const user = await user_1.default.create({
            name,
            email,
            dateOfBirth,
            password: hashedPassword,
        });
        const token = (0, token_1.default)(user.id);
        res.status(200).json({
            message: "User signed up successfully",
            user,
            token,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
        });
    }
};
exports.signUpUser = signUpUser;
