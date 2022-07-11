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

export async function addPlayer(name, team_id) {
    const response = await client
        .from('players')
        .insert({
            name,
            team_id
        })
        .single();
    
    const data = checkResponse(response);

    if (data) {
        data.teamId = data.team_id;
    }

    return data;
}

export async function removePlayer(id) {
    const response = await client
        .from('players')
        .delete()
        .match({ id })
        .single();
    
    return checkResponse(response);
    
}