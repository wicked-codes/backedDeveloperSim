import express from 'express';
import { register } from '../controllers/auth.controller.js';
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'List of users' });
});

router.post('/register', register);

export default router;
