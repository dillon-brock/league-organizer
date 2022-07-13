export default function createAddTeam(form, { handleAddTeam }) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        await handleAddTeam(formData.get('teamName'));
        form.reset();
    });
    return () => {

    };
}