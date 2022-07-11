export default function createPlayerList(root) {
    return ({ players }) => {
        for (const player of players) {
            root.append(Player({ player }));
        }
    };
}

function Player({ player }) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = player.name;

    const teamTd = document.createElement('td');
    teamTd.textContent = player.team.name;

    const addedTd = document.createElement('td');
    addedTd.textContent = new Date(player.created_at).toLocaleDateString();
    
    tr.append(nameTd, teamTd, addedTd);

    return tr;
}