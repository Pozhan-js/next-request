// app/api/route.js

// export async function GET(request: NextRequest) {
//   const token = request.cookies.get("token");
//   const response = NextResponse.json({ token: token?.value ?? null });

//   response.cookies.set("token2", "123");

//   return response;
// }
// app/api/route.js
import { headers } from "next/headers";

export async function GET() {
  const headersList = await headers();
  const referer = headersList.get("referer");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: referer ? { referer } : {},
  });
}
