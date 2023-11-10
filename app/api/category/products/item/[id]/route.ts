import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient, Roles } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface RequestBody{
    productId: number, 
    SKU: string, 
    qtyInStock: number, 
    img: string[],
    price: number,
    size: string,
    color: string
}

export async function POST(request:NextRequest,{params}:{params:{id:string}}){

    const accessToken = request.headers.get("accessToken")
    

    if((!accessToken || !(VerifyJwt(accessToken)?.id == params.id))){
        return new Response(JSON.stringify({error:"petit malin n3al waldik win rah access token"}),{status:401})
    }

    const UserRole = await prisma.user.findFirst({
        where: {id: params.id},
        select: {role: true}
    })

    if((UserRole?.role != Roles.ADMIN) && VerifyJwt(accessToken)?.id){
        return new Response(JSON.stringify({error:"Be better"}),{status:401})
    }

    const body:RequestBody = await request.json();

    const item = await prisma.item.create({
        data: {
            productId: body.productId,
            SKU: body.SKU,
            qtyInStock: body.qtyInStock,
            img: body.img,
            price: body.price,
            size: body.size,
            color: body.color
        }})

    return new Response(JSON.stringify(item),{status:200})
}