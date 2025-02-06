import User from "@/models/user";
import generateToken from "@/utils/token";
import express from "express";
import bcrypt from "bcryptjs";

export const signInUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { email, password } = req.body;

  try {
    // check if user exists for the email
    const user = await User.findOne({
      email,
    });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return;
    }

    // check if password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(400).json({
        message: "Invalid password",
      });
      return;
    }

    // generate token
    const token = generateToken(user.id);

    res.status(200).json({
      message: "User signed in successfully",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export const signUpUser = async (
  req: express.Request,
  res: express.Response
) => {
  const { name, email, dateOfBirth, password } = req.body;

  try {
    // check if user already exists
    const existingUser = await User.findOne({
      email,
    });

    if (existingUser) {
      res.status(400).json({
        message: "User already exists",
      });
      return;
    }

    // hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      dateOfBirth,
      password: hashedPassword,
    });

    const token = generateToken(user.id);

    res.status(200).json({
      message: "User signed up successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
