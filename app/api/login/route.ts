import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const bcrypt = require("bcrypt")

interface RequestBody{
    email: string;
    password: string;
}

export async function POST(request:Request) {
    
    const body:RequestBody = await request.json()

    //Checking if email is existing
    const user = await prisma.user.findFirst({
        where:{
            email:body.email
        }
    })

    if(user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass} = user;
        return new Response(JSON.stringify(userWithoutPass))
    } else return new Response(JSON.stringify(null))
}