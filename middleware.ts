// 中间件可以是 async 函数，如果使用了 await
export function middleware(request) {
  return NextResponse.redirect(new URL("/home", request.url));
}

// 设置匹配路径
export const config = {
  matcher: "/about/:path*",
};
