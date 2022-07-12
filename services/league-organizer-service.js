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

export async function getTeams() {
    const response = await client
        .from('teams')
        .select(`
            id,
            name
        `);
    
    return checkResponse(response);
}

export async function getPlayers() {
    const response = await client
        .from('players')
        .select(`
        id,
        name,
        created_at,
        team:teams(
            id,
            name
        )
        `)
        .order('created_at', { ascending: false });

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

export async function addTeam(teamName) {
    const response = await client
        .from('teams')
        .insert({
            name: teamName
        })
        .single();
    
    return checkResponse(response);
}