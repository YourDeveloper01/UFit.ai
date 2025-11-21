import { NextResponse } from 'next/server';
import connectDB from '@/lib/models/db';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await connectDB();

    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'Email already registered' }, { status: 409 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ fullname, email, password: hashedPassword });
    await newUser.save();

    const token = newUser.generateAuthToken();
    const userData = await User.findById(newUser._id).select('-password');

    return NextResponse.json({ token, user: userData }, { status: 201 });
  } catch (error) {
    console.error('[SIGNUP_ERROR]', error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
