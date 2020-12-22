async function init() {
    const subjects = await call('api/subjects');

    document.getElementById('subjects').innerHTML = subjects.map(subject => `
    <a href="subject/${subject.id}">
        <button class="button is-fullwidth is-primary">${subject.name}</button>
    </a>
    `);
}

document.addEventListener('DOMContentLoaded', init);