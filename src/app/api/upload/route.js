import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { Readable } from "stream";

export const config = { api: { bodyParser: false } };

export async function POST(req) {
  try {
    const authHeader = req.headers.get("authorization"); // optional if you also send headers
    // verify token from cookie as a double-check:
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    try { jwt.verify(token, process.env.JWT_SECRET); } catch { return NextResponse.json({ error: "Invalid token" }, { status: 403 }); }

    const form = await req.formData();
    const file = form.get("file");
    if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

    const buffer = Buffer.from(await file.arrayBuffer());

    const uploadResult = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream({ folder: "bodyfit" }, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
      Readable.from(buffer).pipe(stream);
    });

    return NextResponse.json({ ok: true, url: uploadResult.secure_url });
  } catch (err) {
    console.error("upload error", err);
    return NextResponse.json({ error: "upload_failed" }, { status: 500 });
  }
}
