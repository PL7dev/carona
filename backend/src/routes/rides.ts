import { Router, Request, Response } from 'express';

const router = Router();

// test route
router.get('/test', (req: Request, res: Response) => {
  res.json({ message: 'Rides route is working!' });
});

export default router;
