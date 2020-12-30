import Crypto from 'crypto-js';

export type cipher = Crypto.lib.CipherParams;

export interface Password {
    iv: string,
    encryptedData: string
}