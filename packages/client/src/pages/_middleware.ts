import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req: req as any,
    secret: process.env.JWT_SECRET,
  });

  const { pathname } = req.nextUrl;

  // static
  if (pathname.includes("/favicons") || pathname.includes("/api/auth")) {
    return NextResponse.next();
  }

  // only allowed when no auth
  if (token && pathname.includes("/login")) {
    return NextResponse.redirect("/dash");
  }

  // allowed paths
  if (token || pathname.includes("/login")) {
    return NextResponse.next();
  }

  // redirect to login when no auth
  if (!token && pathname !== "/login") {
    return NextResponse.rewrite("/login");
  }

  return NextResponse.next();
};
