import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;

  // static
  if (
    pathname.includes("/favicons") ||
    pathname.includes("/sw") ||
    pathname.includes("/workbox") ||
    pathname.includes("/worker")
  ) {
    return NextResponse.next();
  }

  const token = req.cookies[process.env.USER_TOKEN];

  try {
    const verified = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );

    // if already on login page
    if (!verified && pathname.includes("/login")) {
      return NextResponse.next();
    }

    // redirect to login when no auth
    if (!verified) {
      return NextResponse.redirect("/login");
    }

    // only allowed when no auth
    if (pathname.includes("/login")) {
      return NextResponse.redirect("/dash");
    }
  } catch (err) {
    if (pathname.includes("/login")) {
      return NextResponse.next();
    }
    return NextResponse.redirect("/login");
  }

  return NextResponse.next();
};
