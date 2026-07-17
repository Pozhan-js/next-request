// app/api/search/route.js
// 访问 /api/search?query=hello

import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query"); // query
  console.log("query", query);

  return await Response.json({
    query: query || "1",
  });
}
