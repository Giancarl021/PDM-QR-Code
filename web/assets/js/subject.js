let qrCode, qrCodeEl, lessonId, lessonTitleEl;

async function init() {
    qrCodeEl = document.querySelector('#qrCode');
    lessonTitleEl = document.querySelector('#title');
    qrCode = new QRCode(qrCodeEl);
    lessonId = window.location.href.split('/').pop();
}

async function generate() {

    const { value: title } = lessonTitleEl;

    if (!title) {
        fireError('Título faltante', 'Insira o título da aula');
        return;
    }

    const response = await call('api/generate/' + lessonId + '?title=' + encodeURIComponent(title));

    if (response.error) {
        fireError('Erro ao criar sessão', response.error);
        return;
    }

    const { code, expires } = response;

    const diff = new Date(expires) - Date.now();

    qrCode.makeCode(code);
    qrCodeEl.querySelector('h1').innerText = code;
    qrCodeEl.querySelector('h2').innerText = 'Expira em ' + Math.round(diff / 60000) + ' minutos';

    [ ...qrCodeEl.parentElement.querySelectorAll('button, input') ]
        .forEach(e => e.disabled = true);
}

document.addEventListener('DOMContentLoaded', init);