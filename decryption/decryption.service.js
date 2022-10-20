import * as crypto from 'crypto';

const algorithm = 'aes-256-cbc';


export function decrypt(reqBody) {
    const Key = Buffer.from(reqBody.key, 'hex');
    const initVector = Key.slice(0, 16);
    const securityKey = Key.slice(16);

    const decipher = crypto.createDecipheriv(algorithm, securityKey, initVector);
    let decryptedString = decipher.update(Buffer.from(reqBody.encryptedString, 'hex'));

    decryptedString = Buffer.concat([decryptedString, decipher.final()]);

    return decryptedString.toString();
}

