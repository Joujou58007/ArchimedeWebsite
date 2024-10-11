import { Router } from 'express';

const candidacyRouter = Router();

candidacyRouter.post('/', (req, res) => {
  // TODO: Add to excel Sheet

  // TODO: Send notification to discord server
  
  res.json({ message: 'Your candidacy was posted. Thank you' });
});

export default candidacyRouter;