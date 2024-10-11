import { Request, Response, Router } from 'express';
import axios from 'axios'

const candidacyRouter = Router();

candidacyRouter.post('/', (req: Request<{}, {}, {firstName: string, lastName: string, email: string, extraMessage: string}>, res: Response) => {
  try{
    // TODO: Add to Excel Sheet
    
    // TODO: Send notification to discord server
    sendDiscordNotification(req.body.firstName, req.body.lastName, req.body.email);
    
    return res.status(200).json({ message: 'Your candidacy was posted. Thank you' });
  }
  catch(e: any) {
    return res.status(500).json({ message: 'An error has occurred: ' + e.message });
  }
});

async function sendDiscordNotification(firstName: string, lastName: string, email: string) {
  await axios.post('https://discord.com/api/webhooks/1294383599461597274/GcpK4i-peMbVeHqcn3NehogE76rk7-PsNfntZpc3AyDORtgMx0b7MeQxLFtEdrVU74bb',  {
    content: `Nouvelle candidature disponible!:\n- Nom: ${lastName}\n- Prénom: ${firstName}\n- Email: ${email}`
  });
}

export default candidacyRouter;