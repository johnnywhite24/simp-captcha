const map = {}

const captchas = document.getElementsByClassName('simp-captcha')

for (let i = 0; i < captchas.length; i++) {
    const captcha = captchas[i]
    captcha.addEventListener('click', () => {
        newCaptcha(captcha)
    })
    newCaptcha(captcha)
}

function newCaptcha(captcha) {
    let id = captcha.id
    if (id === '') {
        id = 'default'
    }
    captcha.style.background = '#969696'
    captcha.style.color = '#ffffff'
    captcha.style.display = 'flex'
    captcha.style.justifyContent = 'center'
    captcha.style.alignContent = 'center'
    captcha.style.cursor = 'pointer'
    captcha.style.flexWrap = 'wrap'
    const a = (Math.random() * 20).toFixed()
    const b = (Math.random() * 20).toFixed()

    map[id] = Number(a) + Number(b)
    const words = a + '+' + b + '=?'
    captcha.innerHTML = drawWords(words, captcha.clientWidth, captcha.clientHeight)
}

function simpCaptchaValidate(number, id) {
    if (id === undefined) {
        id = 'default'
    }
    return map[id] === Number(number)
}

function simpCaptchaNew(id) {
    if (id === undefined) {
        const captchas = document.getElementsByClassName('simp-captcha')

        for (let i = 0; i < captchas.length; i++) {
            const captcha = captchas[i]
            newCaptcha(captcha)
        }
    } else {
        const captcha = document.getElementById(id)
        newCaptcha(captcha)
    }
}

function drawWords(words, width, height) {
    const w = width / words.length * 0.8
    const h = height * 0.8
    let res = ''
    for (let i = 0; i < words.length; i++) {
        const word = words.charAt(i)
        res += (drawWord(word, w, h))
    }
    return res
}
function drawWord(word, w, h) {
    if (word === '1') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-1-square" viewBox="0 0 16 16">\n' +
            '  <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383z"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '2') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-2-square" viewBox="0 0 16 16">\n' +
            '  <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '3') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-3-square" viewBox="0 0 16 16">\n' +
            '  <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '4') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-4-square" viewBox="0 0 16 16">\n' +
            '  <path d="M7.519 5.057q.33-.527.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '5') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-5-square" viewBox="0 0 16 16">\n' +
            '  <path d="M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '6') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-6-square" viewBox="0 0 16 16">\n' +
            '  <path d="M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '7') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-7-square" viewBox="0 0 16 16">\n' +
            '  <path d="M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '8') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-8-square" viewBox="0 0 16 16">\n' +
            '  <path d="M10.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '9') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-9-square" viewBox="0 0 16 16">\n' +
            '  <path d="M7.777 12.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3m.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '0') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-0-square" viewBox="0 0 16 16">\n' +
            '  <path d="M7.988 12.158c-1.851 0-2.941-1.57-2.941-3.99V7.84c0-2.408 1.101-3.996 2.965-3.996 1.857 0 2.935 1.57 2.935 3.996v.328c0 2.408-1.101 3.99-2.959 3.99M8 4.951c-1.008 0-1.629 1.09-1.629 2.895v.31c0 1.81.627 2.895 1.629 2.895s1.623-1.09 1.623-2.895v-.31c0-1.8-.621-2.895-1.623-2.895"/>\n' +
            '  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z"/>\n' +
            '</svg>'
    } else if (word === '+') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n' +
            '  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>\n' +
            '</svg>'
    } else if (word === '=') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n' +
            '  <path d="M4 6v1h8v-1"/>\n' +
            '  <path d="M4 9v1h8v-1"/>\n' +
            '</svg>'
    } else if (word === '?') {
        return '<svg xmlns="http://www.w3.org/2000/svg" style="margin: 0 1px" width="' + w + '" height="' + h + '" fill="currentColor" class="bi bi-question-square" viewBox="0 0 16 16">\n' +
            '  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>\n' +
            '  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>\n' +
            '</svg>'
    } else {
        return ''
    }
}
