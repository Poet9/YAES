import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface RequestBody{
    orderId: string,
    rating: number,
    comment: string
}

export async function POST(request:NextRequest,{params}:{params:{id:string}}){

    const accessToken = request.headers.get("accessToken")
    
    if((!accessToken || !(VerifyJwt(accessToken)?.id == params.id))){
        return new Response(JSON.stringify({error:"petit malin n3al waldik win rah access token"}),{status:401})
    }

    const body:RequestBody = await request.json();

    const review = await prisma.comment_review.create({
        data: {
            userId: params.id,
            orderId: body.orderId,
            rating: body.rating,
            comment: body.comment
        }})

    return new Response(JSON.stringify(review),{status:200})
}