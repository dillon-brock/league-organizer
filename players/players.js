import { getUser, signOut } from '../services/auth-service.js';
import { protectPage } from '../utils.js';
import createUser from '../components/User.js';
import { getPlayers, getTeams } from '../services/league-organizer-service.js';
import createPlayerList from '../components/PlayerList.js';

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

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const Players = createPlayerList(document.querySelector('#players'));

function display() {
    console.log(players);
    User({ user });
    Players({ players });
}

handlePageLoad();