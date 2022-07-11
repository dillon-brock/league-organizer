import { getUser, signOut } from '../services/auth-service.js';
import { findById, protectPage } from '../utils.js';
import createUser from '../components/User.js';
import { addPlayer, getPlayers, getTeams } from '../services/league-organizer-service.js';
import createPlayerList from '../components/PlayerList.js';
import createAddPlayer from '../components/AddPlayer.js';

// State
let user = null;
let players = [];
let teams = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    players = await getPlayers();
    teams = await getTeams();

    display();
}

async function handleSignOut() {
    signOut();
}

async function handleAddPlayer(name, teamId) {
    
    const player = await addPlayer(name, teamId);
    const team = findById(teams, player.teamId);
    player.team = team;

    players.unshift(player);
    display();
    
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Players = createPlayerList(document.querySelector('tbody'));
const AddPlayer = createAddPlayer(document.querySelector('form'), { handleAddPlayer });

function display() {
    User({ user });
    Players({ players });
    AddPlayer({ teams });
}

handlePageLoad();