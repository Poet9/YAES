import { VerifyJwt } from "@/lib/jwt";
import { NextRequest } from "next/server";

import prisma from "@/app/api/prisma";

interface RequestBody {
    totalPrice: number;
}

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
    const accessToken = request.headers.get("accessToken");

    if (!accessToken || !(VerifyJwt(accessToken)?.id == params.id)) {
        return new Response(
            JSON.stringify({ error: "petit malin n3al waldik win rah access token" }),
            { status: 401 }
        );
    }

    const body: RequestBody = await request.json();

    const order = await prisma.order.create({
        data: {
            totalPrice: body.totalPrice,
            userId: params.id,
        },
    });

    return new Response(JSON.stringify(order), { status: 200 });
}
