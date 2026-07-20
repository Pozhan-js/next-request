import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const field = request.nextUrl.searchParams.get("dataField");
  const data = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  const result = field ? { [field]: data[field] } : data;

  return NextResponse.json(result);
}
