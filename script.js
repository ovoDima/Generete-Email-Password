const inputPassword = document.querySelector('.pass-input')
const inputEmail = document.querySelector('.email')
const button = document.querySelector('.sign-in-button')
const massege = document.querySelector('.sub-tittle')

button.addEventListener('click', () => {
    inputPassword.value = genneretePassword(16)
    inputEmail.value = gennereteEmail(12) + '@' + randomAdress()
    setInterval(innerAlert, 1000)
})

function genneretePassword( length = 16) {
    const charset = '/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/'
    let password = ' '

    for(let i = 0; i<length; i++) {
        let at = Math.floor(Math.random() * (charset.length + 1))
        password += charset.charAt(at)
    }
    return password
}

function gennereteEmail( length = 12) {
    const charset = 'abcdefghijkrstuvwxyz'
    let email = ' '

    for(let i = 0; i<length; i++) {
        let at = Math.floor(Math.random() * (charset.length + 1))
        email += charset.charAt(at)
    }
    return email
}

function randomAdress () {
    let emails = ['gmail.com', 'rambler.com', 'yandex.ru', 'mail.ru', 'yahho.com', 'ukrnet.com']
    const randomNum = Math.floor(Math.random() * 6)
    return emails[randomNum]
}


inputPassword.addEventListener('click', (e) => {
    e.target.setAttribute('type', 'text')
    // console.dir(e)
})

function innerAlert() {
    massege.innerHTML = 'Click on the password to see it.'
}