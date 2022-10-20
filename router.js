import Router from 'express';
import { encrypt } from "./encryption/encryption.service.js";
import { decrypt } from './decryption/decryption.service.js';

const router = new Router();

router.post("/encryption", (req, res) => {
    try {
        res.json(encrypt(req.body.text));
    } catch (e){
        res.status(500).json(e);
    }
});

router.post("/decryption", (req, res) => {
    try {
        res.json(decrypt(req.body));
    } catch (e){
        res.status(500).json(e);
    }
});

// router.get("/encryption", (req, res) => {
//     try {
//         res.json(encrypt(req.query.text));
//     } catch (e){
//         res.status(500).json(e);
//     }
// });

// router.get("/decryption", (req, res) => {
//     try {
//         res.json(decrypt(req.query));
//     } catch (e){
//         res.status(500).json(e);
//     }
// });

export default router;

