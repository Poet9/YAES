import { SignJwtAccessToken } from "@/lib/jwt";

import prisma from "@/app/api/prisma";

const bcrypt = require("bcrypt");

type RequestBody = {
    email: string;
    password: string;
};

export async function POST(request: Request) {
    const body: RequestBody = await request.json();

    //Checking if email is existing
    const user = await prisma.user.findFirst({
        where: {
            email: body.email,
        },
    });

    if (user && (await bcrypt.compare(body.password, user.password))) {
        const { password, createdAt, updateAt, ...userWithoutPass } = user;
        const accesstoken = SignJwtAccessToken(userWithoutPass);
        const result = { ...userWithoutPass, accesstoken };
        return new Response(JSON.stringify(result));
    } else return new Response(JSON.stringify(null));
}
