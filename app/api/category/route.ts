import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
type CategoryT = {
    name: string;
    description: string;
};
export async function GET() {
    try {
        const categories = await prisma.product_category.findMany();
        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 501 });
    }
}

export async function POST(req: Request) {
    try {
        const newCategory: CategoryT = await req.json();
        await prisma.product_category.create({
            data: {
                name: newCategory.name,
                description: newCategory.description,
            },
        });
        return new Response(JSON.stringify({ successful: true }), { status: 201 });
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 403 });
    }
}

export async function DELETE(req: Request) {
    const categoryId = await req.json();
    try {
        await prisma.product_category.delete({ where: { id: categoryId.categoryId } });
        return new Response(JSON.stringify({ successful: true }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 404 });
    }
}
