import { getUser, signOut } from './services/auth-service.js';
import { protectPage, findById } from './utils.js';
import createUser from './components/User.js';
import { addPlayer, getTeamsWithPlayers, removePlayer } from './services/league-organizer-service.js';
import createTeams from './components/Teams.js';

// State
let user = null;
let teams = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    teams = await getTeamsWithPlayers();
    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddPlayer(name, teamId) {

    const player = await addPlayer(name, teamId);

    const team = findById(teams, teamId);
    team.players.push(player);
    display();

}

async function handleRemovePlayer(player) {
    const message = `Are you sure you want to remove ${player.name}?`;
    if (!confirm(message)) return;
    
    await removePlayer(player.id);

    const team = findById(teams, player.teamId);
    team.players.splice(team.players.indexOf(player), 1);
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Teams = createTeams(document.querySelector('#teams'), { handleAddPlayer, handleRemovePlayer });

function display() {
    User({ user });
    Teams({ teams });
}

handlePageLoad();
