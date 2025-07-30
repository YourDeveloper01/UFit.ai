// src/app/api/analyze/route.js

export async function POST(req) {
  const formData = await req.formData();
  const file = formData.get('file');

  if (!file || typeof file === 'string') {
    return new Response(JSON.stringify({ success: false, error: "No file uploaded" }), {
      status: 400,
    });
  }

  // You can access file info like this:
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // TODO: Send 'buffer' to your AI model or external API

  // Mock AI response
  const result = {
    weightGoal: "Lose 5kg",
    bodyType: "Ectomorph",
    estimatedBMI: 22.1,
    dietPlan: "High protein, moderate carbs, low fat",
  };

  return new Response(JSON.stringify({ success: true, result }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
