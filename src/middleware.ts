import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("wms_token")?.value;
  const isLogin = req.nextUrl.pathname.startsWith("/login");

  if (!token && !isLogin) return NextResponse.redirect(new URL("/login", req.url));
  if (token && isLogin) return NextResponse.redirect(new URL("/hang-hoa", req.url));
  return NextResponse.next();
}

export const config = { matcher: ["/((?!_next|api|favicon.ico).*)"] };