import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/models/db";
import User from "@/lib/models/user";

export async function POST(req) {
  try {
    await connectDB();

    // 1️⃣ Parse request body
    const { email, password } = await req.json();

    // 2️⃣ Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    // 3️⃣ Find user with password explicitly selected
    const user = await User.findOne({ email }).select("+password");

    // 4️⃣ If user not found or password missing
    if (!user || !user.password) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // 5️⃣ Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // 6️⃣ Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    // 7️⃣ Send response + set cookie
    const res = NextResponse.json(
  {
    ok: true,
    token, // 🔹 token include kiya
    user: { id: user._id, name: user.fullname, email: user.email },
  },
  { status: 200 }
);


    res.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return res;

  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json({ error: "login_failed" }, { status: 500 });
  }
}