export default function createTeams(root, { handleAddPlayer, handleRemovePlayer }) {

    return ({ teams }) => {
        root.innerHTML = '';
        for (const team of teams) {
            root.append(Team({ team, handleAddPlayer, handleRemovePlayer }));
        }
    };
}

function Team({ team, handleAddPlayer, handleRemovePlayer }) {
    const li = document.createElement('li');
    li.classList.add('team');
    const h2 = document.createElement('h2');
    h2.textContent = team.name;

    const ul = document.createElement('ul');
    ul.classList.add('players');
    for (const player of team.players) {
        ul.append(Player({ player, handleRemovePlayer }));
    }

    const addForm = AddForm({ team, handleAddPlayer });

    li.append(h2, ul, addForm);
    return li;
}

function Player({ player, handleRemovePlayer }) {
    const li = document.createElement('li');
    li.classList.add('player');

    const h3 = document.createElement('h3');
    h3.textContent = player.name;
    h3.classList.add('player-name');

    const button = document.createElement('button');
    button.classList.add('delete');
    button.textContent = 'x';

    button.addEventListener('click', () => {
        handleRemovePlayer(player);
    });

    li.append(h3, button);

    return li;
}

function AddForm({ team, handleAddPlayer }) {
    const form = document.createElement('form');
    form.classList.add('add-form');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleAddPlayer(input.value, team.id);
        form.reset();
        input.blur();
    });

    const input = document.createElement('input');
    input.required = true;
    input.placeholder = 'New Player...';

    const button = document.createElement('button');
    button.classList.add('add-button');
    button.textContent = '+';
    
    form.append(input, button);


    return form;
}
