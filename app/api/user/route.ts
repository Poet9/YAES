import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");
import { RequestBody } from "@/types/types";

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: await bcrypt.hash(body.password, 10),
            name: body.name,
            firstName: body.firstName,
            birthDate: body.birthDate,
            gender: body.gender,
        },
    });

    const { password, ...result } = user;
    return new Response(JSON.stringify(result));
}
