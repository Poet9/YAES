<<<<<<< HEAD
import { NextRequest } from 'next/server';
import { PrismaClient, Roles } from '@prisma/client'
import { notFound } from 'next/navigation';

const prisma = new PrismaClient();

export async function GET(request:NextRequest,){
    try{

        const take = request.nextUrl.searchParams.get("take")
        const start = request.nextUrl.searchParams.get("skip")

        if (take || start){
            const Category = await prisma.product_category.findMany({
                where:{categoryId: null},
                include:{
                    subCategory: {select:{id: true, name: true, description: true, subCategory:true}}
                },
                take: Number(take), skip: Number(start)
                });
            return new Response(JSON.stringify(Category))
        }

        const Category = await prisma.product_category.findMany({where:{categoryId: null},
                include:{
                    subCategory: {select:{id: true, name: true, description: true, subCategory:true}}
                }});
        return new Response(JSON.stringify(Category))

    }catch{
        return new Response(JSON.stringify({error:"Ah rabak chawala hada"}),{status:401})
    }
}
=======
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    const categories = await prisma.product_category.findMany();
    return new Response(JSON.stringify(categories), { status: 200 });
}
>>>>>>> 5e8e621aeab1281bacd390556f556aa21edc712e
