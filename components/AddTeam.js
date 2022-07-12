export default function createAddTeam(form, { handleAddTeam }) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        handleAddTeam(formData.get('teamName'));
        form.reset();
    });
    return () => {

    };
}