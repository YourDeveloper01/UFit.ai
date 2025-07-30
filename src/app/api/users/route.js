import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/lib/models/user';
import { createUser } from '@/lib/services/user';

export async function POST(req) {
  try {
    await connectDB();

    const { fullname, email, password } = await req.json();

    if (!fullname || !email || !password) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const hashedPassword = await User.hashPassword(password);
    const newUser = await createUser({ fullname, email, password: hashedPassword });

    const token = newUser.generateAuthToken();
    const userData = await User.findById(newUser._id).select('-password');

    return NextResponse.json({ token, user: userData }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
