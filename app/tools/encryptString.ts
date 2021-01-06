import Crypto from 'crypto-js';
import JsonFormatter from '../utils/JsonFormatter';

export const encrypt = (text: string) => {
    const key = <string>process.env.KEY;

    const encrypted = Crypto.AES.encrypt(text, key);
    const data = JsonFormatter.stringify(encrypted) 
    return data;
}