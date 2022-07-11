export default function createTeams(root) {

    return ({ teams }) => {
        for (const team of teams) {
            root.append(Team({ team }));
        }
    };
}

function Team({ team }) {
    const li = document.createElement('li');
    li.textContent = team.name;
    return li;
}