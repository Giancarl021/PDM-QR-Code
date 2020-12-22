let qrCode, qrCodeEl, subjectId, lessonId, lessonTitleEl;

async function init() {
    qrCodeEl = document.querySelector('#qrCode');
    studentEl = document.querySelector('#students');
    lessonTitleEl = document.querySelector('#title');
    qrCode = new QRCode(qrCodeEl);
    subjectId = window.location.href.split('/').pop();
}

async function generate() {

    const { value: title } = lessonTitleEl;

    if (!title) {
        fireError('Título faltante', 'Insira o título da aula');
        return;
    }

    const response = await call('api/generate/' + subjectId + '?title=' + encodeURIComponent(title));
    if (response.error) {
        fireError('Erro ao criar sessão', response.error);
        return;
    }

    const { code, expires, lesson_id } = response;

    lessonId = lesson_id;

    const diff = new Date(expires) - Date.now();

    qrCode.makeCode(code);
    qrCodeEl.querySelector('h1').innerText = code;
    qrCodeEl.querySelector('h2').innerText = 'Expira em ' + Math.round(diff / 60000) + ' minutos';

    [ ...qrCodeEl.parentElement.querySelectorAll('button, input') ]
        .forEach(e => e.disabled = true);
}

async function updateList() {
    const response = await call('api/attendance/' + lessonId);
    console.log(response);
    studentEl.innerHTML = response.map(student => `<li>${student}</li>`).join('');
}

document.addEventListener('DOMContentLoaded', init);