import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient } from '@prisma/client'
import { NextRequest } from 'next/server';
const prisma = new PrismaClient()

interface RequestBody{
    userId: string, 
    isDefault: boolean, 
    cityId: number, 
    adressLine: string, 
    phoneNumber: string
}

export async function GET(request:NextRequest,{params}:{params:{id:string}}){
    const accessToken = request.headers.get("accessToken")
    const isDefault = request.nextUrl.searchParams.has("isdefault")

    if(!accessToken || !VerifyJwt(accessToken)){
        return new Response(JSON.stringify({error:"petit malin n3al waldik win rah access token"}),{status:401})
    }
    
    if (isDefault){
    const UserAdress = await prisma.user_adress.findMany({
        where: {userId: params.id, isDefault: true},
        include:{
            city:{
                select:{
                    name:true,
                    wilaya:{
                        select:{
                            name:true,
    }}}}}});
    return new Response(JSON.stringify(UserAdress))
    }

    const UserAdress = await prisma.user_adress.findMany({
    where: {userId: params.id},
    include:{
        city:{
            select:{
                name:true,
                wilaya:{
                    select:{
                        name:true,
    }}}}}});
    return new Response(JSON.stringify(UserAdress))
}

export async function POST(request:Request,{params}:{params:{id:string}}) {
    const accessToken = request.headers.get("accessToken")
    const body:RequestBody = await request.json();

    if(!accessToken || !VerifyJwt(accessToken)){
        return new Response(JSON.stringify({error:"petit malin n3al waldik"}),{status:401})
    }

    if(await prisma.user_adress.findFirst({where: {isDefault: true}}) && body.isDefault){
        return new Response(JSON.stringify({error:"Kayen déja adresse par defaut bedalha hia"}),{status:401})
    }

    const user_adress = await prisma.user_adress.create({
        data: {
            userId: body.userId ,
            isDefault: body.isDefault,
            cityId: body.cityId,
            adressLine: body.adressLine,
            phoneNumber: body.phoneNumber
        }})
    return  new Response(JSON.stringify(user_adress));
}
