import { Router } from 'express';
import userRoutes from './User.Routes.js'; 

const router = Router();

router.use('/api/users', userRoutes);

router.get('/', (req, res) => {
    res.send('API RODANDO');
});

export default router;