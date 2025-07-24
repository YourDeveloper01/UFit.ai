export async function GET() {
  return new Response(JSON.stringify({ message: 'Server is healthy!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
