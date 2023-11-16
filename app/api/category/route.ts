import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type CategoryT = {
    name: string;
    description: string;
};
export async function GET() {
    const categories = await prisma.product_category.findMany();
    console.log({ serverGet: categories });
    return new Response(JSON.stringify(categories), { status: 200 });
}

export async function POST(req: Request) {
    const newCategory: CategoryT = await req.json();
    console.log({ newCategory });
    const category = await prisma.product_category.create({
        data: {
            name: newCategory.name,
            description: newCategory.description,
        },
    });
    return new Response(JSON.stringify(category), { status: 201 });
}
