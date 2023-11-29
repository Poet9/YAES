import { NextRequest } from "next/server";

import prisma from "@/app/api/prisma";

type ProductT = {
    name: string;
    product_categoryId: number;
    description: string;
    price: number;
    imgs: string[];
};
export async function GET(request: NextRequest) {
    try {
        const categoryId = request.nextUrl.searchParams.get("id");
        if (categoryId) {
            const products = await prisma.product.findMany({
                where: {
                    category: { id: parseInt(categoryId) },
                },
            });

            return new Response(JSON.stringify(products), { status: 200 });
        }

        const productName = request.nextUrl.searchParams.get("name");
        if (productName) {
            productName.replace(/^[0-9A-Za-z_@'-]+$/, "");
            const products = await prisma.product.findMany({
                where: {
                    name: {
                        contains: productName,
                    },
                },
            });

            return new Response(JSON.stringify(products), { status: 200 });
        }
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 501 });
    }
}

export async function POST(req: Request) {
    try {
        const newItem: ProductT = await req.json();

        await prisma.product.create({
            data: {
                ...newItem,
            },
        });
        return new Response(JSON.stringify({ successful: true }), { status: 201 });
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 402 });
    }
}
// deleting a product
export async function DELETE(req: Request) {
    try {
        const productId = await req.json();
        await prisma.product.delete({ where: { id: productId.id } });
        return new Response(JSON.stringify({ successful: true }), { status: 200 });
    } catch (err: any) {
        return new Response(JSON.stringify({ err: err.message }), { status: 404 });
    }
}
