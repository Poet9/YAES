import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const categories = await prisma.product_category.findMany();
    return new Response(JSON.stringify(categories), { status: 200 });
}
