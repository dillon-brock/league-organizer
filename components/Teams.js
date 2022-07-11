export default function createTeams(root) {

    return ({ teams }) => {
        for (const team of teams) {
            root.append(Team({ team }));
        }
    };
}

function Team({ team }) {
    const li = document.createElement('li');
    li.classList.add('team');
    const h2 = document.createElement('h2');
    h2.textContent = team.name;

    const ul = document.createElement('ul');
    for (const player of team.players) {
        ul.append(Player({ player }));
    }

    const addForm = AddForm({ team });

    li.append(h2, ul, addForm);
    return li;
}

function Player({ player }) {
    const li = document.createElement('li');
    li.classList.add('player');

    const h3 = document.createElement('h3');
    h3.textContent = player.name;

    li.append(h3);

    return li;
}

function AddForm({ team }) {
    const form = document.createElement('form');
    form.classList.add('add-form');

    const input = document.createElement('input');
    input.required = true;
    input.placeholder = 'New Player...';

    const button = document.createElement('button');
    button.textContent = '+';
    
    form.append(input, button);

    return form;
}
