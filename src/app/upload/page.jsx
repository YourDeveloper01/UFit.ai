// app/upload/page.jsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import UploadPageClient from './UploadPageClient';
import jwt from 'jsonwebtoken';

export const dynamic = 'force-dynamic'; // ⛔ Don't let Next.js cache this page

export default async function UploadPage() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    redirect('/login'); // ❌ Token not found
  }

  try {
    // ✅ Verify token using JWT secret
    jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    redirect('/login'); // ❌ Token invalid or expired
  }

  return <UploadPageClient />;
}
