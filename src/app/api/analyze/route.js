import { NextResponse } from 'next/server';
import OpenAI from 'openai';

export async function POST(req) {
  try {
    // If NO API key → return safe error instead of breaking build
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured" },
        { status: 500 }
      );
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const { imageUrl, weight } = await req.json();

    const prompt = `
You are a certified fitness expert. A user has uploaded a full-body photo (URL: ${imageUrl}) and reported weight: ${weight} kg.
Based on the photo and weight:
1. Should they gain or lose weight?
2. Suggest a simple diet plan.
Return in this format:

Result: Gain / Lose / Maintain  
Diet Plan:  
- Breakfast:  
- Lunch:  
- Dinner:  
- Snacks:
`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    });

    return NextResponse.json({ result: response.choices[0].message.content });

  } catch (err) {
    console.error('[AI ERROR]', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
