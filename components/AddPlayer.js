export default function createAddPlayer(form, { handleAddPlayer }) {
    const select = form.querySelector('select');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddPlayer(formData.get('name'), formData.get('teamId'));
        form.reset();
    });

    return ({ teams }) => {
        select.innerHTML = '';

        const choose = document.createElement('option');
        choose.disabled = true;
        choose.selected = true;
        choose.value = '';
        choose.textContent = 'Choose a team...';
        select.append(choose);

        for (const team of teams) {
            select.append(Option({ team }));
        }
    };
}

function Option({ team }) {
    const option = document.createElement('option');
    option.value = team.id;
    option.textContent = team.name;
    return option;
}