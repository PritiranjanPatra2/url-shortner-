import express from 'express';
import { getUrl,newUrl } from '../controllers/useController.js';
const router=express.Router();

router.get('/:shortUrl',getUrl);
router.post('/newUrl',newUrl);

export default router;