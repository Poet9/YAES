import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const bcrypt = require("bcrypt")

async function signup(password: string, email: string, name: string, firstName: string, birthDate: Date, gender: boolean) {
    try{
        const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(password, salt)
        console.log (salt, hashedPassword)
        const user = await prisma.user.create({ 
            data: {
                email: email,
                password: hashedPassword,
                name: name,
                firstName: firstName,
                birthDate: birthDate,
                gender: gender
            }})
        console.log(user)
    } catch{
        console.log("error creating user")
    }
}