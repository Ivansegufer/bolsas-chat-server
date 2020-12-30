import Crypto from 'crypto-js';
import JsonFormatter from '../utils/JsonFormatter';

export const encrypt = (text: string) => {
    const KEY = <string>process.env.KEY;
    const encrypted = Crypto.AES.encrypt(text, KEY, JsonFormatter);
    return encrypted;
}