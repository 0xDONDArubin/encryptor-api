import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';


export function encrypt(text2enc) {
    const initVector = crypto.randomBytes(16);
    const securityKey = crypto.randomBytes(32);

    const cipher = crypto.createCipheriv(algorithm, securityKey, initVector);
    let encryptedString = cipher.update(text2enc, 'utf-8', 'hex');
    encryptedString += cipher.final('hex');

    const Key = initVector.toString('hex') + securityKey.toString('hex');
    
    return {
        key: Key,
        encryptedString: encryptedString
    } 
}


