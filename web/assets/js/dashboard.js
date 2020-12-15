async function init() {
    const subjects = await call('api/subjects');
    
    document.getElementById('subjects').innerHTML = subjects.map(subject => `
        <div>
            ${subject.id}: ${subject.name}
        </div>
    `);
}

document.addEventListener('DOMContentLoaded', init);