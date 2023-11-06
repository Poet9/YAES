import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
    const url = new URL(req.url);
    let params = url.searchParams.get("search");
    if (!params) {
        var items = await prisma.product.findMany({ take: 10 });
    } else {
        var items = await prisma.product.findMany({
            where: { name: { contains: params } },
            take: 10,
        });
    }
    return NextResponse.json([...items]);
}
