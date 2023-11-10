import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient, Roles } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface RequestBody{
    name: string,
    description: string,
    discountRate: number,
    discountPrice: number,
    startDate: Date,
    endDate: Date,
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

    const promotion = await prisma.promotion.create({
        data: {
            name: body.name,
            description: body.description,
            discountRate: body.discountRate,
            discountPrice: body.discountPrice,
            startDate: body.startDate,
            endDate: body.endDate
        }})

    return new Response(JSON.stringify(promotion),{status:200})
}
