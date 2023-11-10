import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface RequestBody{
    itemId: number,
    qty: number
}

export async function POST(request:NextRequest,{params}:{params:{id:string}}){

    const accessToken = request.headers.get("accessToken")
    
    if((!accessToken || !(VerifyJwt(accessToken)?.id == params.id))){
        return new Response(JSON.stringify({error:"petit malin n3al waldik win rah access token"}),{status:401})
    }

    const body:RequestBody = await request.json();

    const cart = await prisma.cart.create({
        data: {
            userId: params.id,
            itemId: body.itemId,
            qty: body.qty
        }})

    return new Response(JSON.stringify(cart),{status:200})
}