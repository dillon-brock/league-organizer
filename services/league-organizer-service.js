import { client, checkResponse } from './client.js';

export async function getTeamsWithPlayers() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name,
            players(
                id,
                name,
                teamId:team_id
            )
        `);
    
    return checkResponse(response);
}