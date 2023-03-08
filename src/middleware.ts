import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // ↓cookieに入っているkyeを指定してる。
  const cookie = req.cookies.get("id")?.value;
  if (!cookie) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

// ↓はじく対象Urlを指定。
export const config = {
  matcher: ["/loginuserCartPage", "/complete"],
};
