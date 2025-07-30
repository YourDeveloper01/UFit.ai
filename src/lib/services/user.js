import User from '@/lib/models/user';

export async function createUser({ fullname, email, password }) {
  if (!fullname || !email || !password) {
    throw new Error('All fields are required');
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error('Email already exists');

  const user = await User.create({ fullname, email, password });
  return user;
}