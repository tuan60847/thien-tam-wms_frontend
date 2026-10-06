// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("wms_token")?.value;
//   const isLogin = req.nextUrl.pathname.startsWith("/dashboard");

//   if (!token && !isLogin) return NextResponse.redirect(new URL("/dashboard", req.url));
//   if (token && isLogin) return NextResponse.redirect(new URL("/dashboard", req.url));
//   return NextResponse.next();
// }

// export const config = { matcher: ["/((?!_next|api|favicon.ico).*)"] };

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|txt)$).*)"],
};