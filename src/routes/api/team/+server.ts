import type { RequestHandler } from "@sveltejs/kit";
import type { Candidacy } from "../../../types";
import team from '../../../constants/team.json'
// import axios from 'axios'



export const GET: RequestHandler = async ({request}) => {
    try {
        return new Response(JSON.stringify(team), {
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
