export default function createPlayerList(root, { handleRemovePlayer }) {

    return ({ players }) => {

        root.innerHTML = '';
        
        for (const player of players) {
            root.append(Player({ player, handleRemovePlayer }));
        }
    };
}

function Player({ player, handleRemovePlayer }) {
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = player.name;

    const teamTd = document.createElement('td');
    teamTd.textContent = player.team.name;

    const addedTd = document.createElement('td');
    addedTd.textContent = new Date(player.created_at).toLocaleDateString();

    const deleteTd = document.createElement('td');
    const button = document.createElement('button');
    button.textContent = 'remove';
    
    button.addEventListener('click', () => {
        handleRemovePlayer(player);
    });

    deleteTd.append(button);
    
    tr.append(nameTd, teamTd, addedTd, deleteTd);

    return tr;
}