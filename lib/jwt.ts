import { error } from "console";
import jwt,{ JwtPayload } from "jsonwebtoken";

interface SignOption{
    expiresIn?:string | number
}

const DEFAULT_SIGNOPTION:SignOption = {
    expiresIn: "1h"
}

export function SignJwtAccessToken(payload:JwtPayload, options:SignOption=DEFAULT_SIGNOPTION){
    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(payload,secret_key!, options);
    return token
}

export function VerifyJwt(token:string){
    try{
        const secret_key = process.env.SECRET_KEY;
        const decoded = jwt.verify(token,secret_key!);
        return decoded as JwtPayload
    } catch (error) {
        console.log(error)
        return null;
    }
}