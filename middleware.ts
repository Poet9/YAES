import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient, Roles } from "@prisma/client/edge";

const prisma = new PrismaClient();

export default withAuth(
    function middleware(req: NextRequest) {
        return NextResponse.rewrite(new URL("/dashboard", req.url));
    },
    {
        callbacks: {
            async authorized({ token, req }) {
                try {
                    return token?.role === Roles.ADMIN;
                } catch (error: any) {
                    console.log({ ERRMID: error.message });
                    return false;
                }
            },
        },
    }
);

export const config = { matcher: ["/dashboard"] };
