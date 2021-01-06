import Crypto from "crypto-js";
import { Password, cipher } from "../config/types/jsonCipher";


const JsonFormatter = {
    stringify: function(cipherParams: cipher) {
        const jsonObj: Password = {
            iv: '',
            data: cipherParams.ciphertext.toString(Crypto.enc.Base64)
        }

        if(cipherParams.iv) {
            jsonObj.iv = cipherParams.iv.toString();
        }

        return JSON.stringify(jsonObj);
    },

    parse: function(jsonStr: string) {
        const jsonObj = <Password>JSON.parse(jsonStr);

        const cipherParams = Crypto.lib.CipherParams.create({
            ciphertext: Crypto.enc.Base64.parse(jsonObj.data)
        });

        if(jsonObj.iv) {
            cipherParams.iv = Crypto.enc.Hex.parse(jsonObj.iv);
        }

        return cipherParams;
    }
}

export default JsonFormatter;