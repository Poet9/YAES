import { VerifyJwt } from '@/lib/jwt';
import { PrismaClient, Roles } from '@prisma/client'
import { NextRequest } from 'next/server';

const prisma = new PrismaClient();

interface RequestBody{
    product_categoryId: number,
    name: string,
    description: string,
    img: string[],
    price: number
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

    const product = await prisma.product.create({
        data: {
            product_categoryId: body.product_categoryId,
            name: body.name,
            description: body.description,
            img: body.img,
            price: body.price
        }})

    return new Response(JSON.stringify(product),{status:200})
}

export async function GET(request:NextRequest,{params}:{params:{id:number}}){
    try{

        const take = request.nextUrl.searchParams.get("take")
        const start = request.nextUrl.searchParams.get("skip")

        if (take || start){

            const category = await prisma.product_category.findFirst({
                where:{id: Number(params.id)},
                select:{id:true, subCategory:{select:{id:true, subCategory:{select:{id:true}}}}}
            })

            let ListOfCategoryId: Array<number> = [Number(category?.id)]

            if (category?.subCategory)
                for (var x of category?.subCategory){
                    ListOfCategoryId.push(x.id)
                    if (x.subCategory){
                        for (var y of x.subCategory){
                            ListOfCategoryId.push(y.id)
                        }
                    }
                }

            const product = await prisma.product.findMany({
                where:{ product_categoryId : {in : ListOfCategoryId} },
                take: Number(take), skip: Number(start)
            });
            return new Response(JSON.stringify(product))
        }

        const category = await prisma.product_category.findFirst({
            where:{id: Number(params.id)},
            select:{id:true, subCategory:{select:{id:true, subCategory:{select:{id:true}}}}}
        })

        let ListOfCategoryId: Array<number> = [Number(category?.id)]

        if (category?.subCategory)
            for (var x of category?.subCategory){
                ListOfCategoryId.push(x.id)
                if (x.subCategory){
                    for (var y of x.subCategory){
                        ListOfCategoryId.push(y.id)
                    }
                }
            }

        const product = await prisma.product.findMany({
            where:{ product_categoryId : {in : ListOfCategoryId} },
            include: {category: {select:{name:true}}}
        });
        return new Response(JSON.stringify(product))

    }catch{
        return new Response(JSON.stringify({error:"Ah rabak chawala hada"}),{status:401})
    }
}