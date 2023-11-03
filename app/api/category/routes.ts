import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

interface RequestBody{
    name: string,
    description: string
}

export async function POST(request:Request) {

    const accessToken = request.headers.get("accessToken")
    const body:RequestBody = await request.json();

    if(!accessToken || !VerifyJwt(accessToken)){
        return new Response(JSON.stringify({error:"petit malin n3al waldik"}),{status:401})
    }

    const category = await prisma.product_category.create({
        data: {
            name: body.name,
            description: body.description
        }})
        
    return  new Response(JSON.stringify(category));
}