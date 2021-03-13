import { Router } from 'express';
import { ping } from '../controllers';

const router: Router = Router();
router.use('/ping', ping);

export default router;
