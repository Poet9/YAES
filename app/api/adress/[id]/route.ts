import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function GET(request:Request,{params}:{params:{id:string}}){
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
