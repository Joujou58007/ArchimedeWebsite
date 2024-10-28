import type { RequestHandler } from "@sveltejs/kit";
import type { Candidacy } from "../../../types";
// import axios from 'axios'



export const POST: RequestHandler = async ({request}) => {
    try {
        const candidacy: unknown = await request.json();
        // console.log(candidacy)

        if(!isACandidacy(candidacy)) {
            return new Response('Invalid character format', { status: 400 });
        }

        // await sendDiscordNotification(candidacy.firstName, candidacy.lastName, candidacy.email);

        return new Response(JSON.stringify({}), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
    catch {
        return new Response('A internal server error occurred', { status: 500 });

    }
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isACandidacy(obj: any): obj is Candidacy {
        return (typeof obj.firstName === 'string' &&
            typeof obj.lastName === 'string' &&
            typeof obj.email === 'string') 
}
// async function sendDiscordNotification(firstName: string, lastName: string, email: string) {
//     await axios.post('https://discord.com/api/webhooks/1297436515789705216/24pqYEq6bD6LRCnk34zihVhqaJOQYNjCajNANy3-Q1j9GMLJsm-vVLAEKNmMVWHbvJ_G',  {
//       content: `Nouvelle candidature disponible!:\n- Nom: ${lastName}\n- Prénom: ${firstName}\n- Email: ${email}`
//     });
//   }