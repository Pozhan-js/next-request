export const revalidate = 10;

export async function GET() {
  return Response.json({ data: new Date().toLocaleTimeString() });
}
