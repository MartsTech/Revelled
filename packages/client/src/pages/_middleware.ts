import { NextRequest, NextResponse } from "next/server";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  // static
  if (pathname.includes("/favicons")) {
    return NextResponse.next();
  }

  const cookie = typeof req.cookies[process.env.USER_TOKEN] !== "undefined";

  // only allowed when no auth
  if (cookie && pathname.includes("/login")) {
    return NextResponse.redirect("/dash");
  }

  // redirect to login when no auth
  if (!cookie && pathname !== "/login") {
    return NextResponse.rewrite("/login");
  }

  return NextResponse.next();
};
