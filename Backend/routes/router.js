import express from 'express';
import { getUrl,newUrl,getData } from '../controllers/useController.js';
const router=express.Router();
router.get('/',getData);
router.get('/:shortUrl',getUrl);
router.post('/newUrl',newUrl);

export default router;