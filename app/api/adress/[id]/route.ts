import { VerifyJwt } from '@/lib/jwt';
import { Prisma, PrismaClient } from '@prisma/client'
import { json } from 'stream/consumers';
const prisma = new PrismaClient()

export async function GET(request:Request,{params}:{params:{id:string}}){
    const accessToken = request.headers.get("accessToken")
    if(!accessToken || !VerifyJwt(accessToken)){
        return new Response(JSON.stringify({error:"petit malin n3al waldik"}),{status:401})
    }

    const UserAdress = await prisma.user_adress.findMany({
        where: {userId: params.id},
        include:{
            city:{
                select:{
                    wilaya:{
                        select:{
                            name:true,
                        }
                    },
                    name:true
                }
            }
            
        }
    });
    return new Response(JSON.stringify(UserAdress))
}
