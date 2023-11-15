import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";
import { VerifyJwt } from "@/lib/jwt";
import { PrismaClient, Roles } from "@prisma/client";

const prisma = new PrismaClient();

export default withAuth(
    function middleware(req: NextRequest) {
        return NextResponse.rewrite(new URL("/dashboard", req.url));
    },
    {
        callbacks: {
            async authorized({ token }) {
                try {
                    if (token?.id === null) return false;
                    const userId = token?.id;
                    const userRole = await prisma.user.findFirst({
                        where: { id: token?.id },
                        select: { role: true },
                    });
                    return userRole?.role === "ADMIN";
                } catch (error: any) {
                    return false;
                }
            },
        },
    }
);

export const config = { matcher: ["/dashboard", "/dashboard/"] };

// await prisma.user.findFirst({
//     where: { id: VerifyJwt(token).id },
//     select: { role: true },
// });
