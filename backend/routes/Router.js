import { Router } from 'express';
import userRoutes from './User.Routes.js'; 
import photoRoutes from './Photo.Routes.js'

const router = Router();

router.use('/api/users', userRoutes);
router.use("/api/photos", photoRoutes )

router.get('/', (req, res) => {
    res.send('API RODANDO');
});

export default router;