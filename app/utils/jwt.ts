import ITokenData from "../lib/TokenData";
import jwt from 'jsonwebtoken';

export const generateJwt = (tokenData: ITokenData) => {
    const token =  jwt.sign(tokenData, <string>process.env.KEY, {
        expiresIn: 60 * 60 * 24,
        notBefore: Date.now()
    });
    
    return token;
}