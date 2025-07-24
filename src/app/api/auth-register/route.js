import dbConnect from '../../../Mongo/Dbconfig/dbconfig';
import User from '../../../Mongo/Models/user.model';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  await dbConnect();

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  // ⚠️ In production, hash the password!
  const newUser = new User({
    fullname,
    email,
    password,
  });

  await newUser.save();

  res.status(201).json({ message: 'User registered successfully' });
}
