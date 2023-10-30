
// INDEX.HTML
const form = document.querySelector('#form')
const email = document.querySelector('#email')
const errorText = document.querySelector('.error-text')
const regex = /[\\\/:*?"<>|]+/;


form.addEventListener('submit', (e) => {
    e.preventDefault()
    const emailValue = email.value.split('')
    const singleChar = emailValue.find((char) => {
        if(char === '@'){
        return char
        }
    })

    if(singleChar) {
        if(regex.test(emailValue.toString())){
        email.className = 'error'
        errorText.style.display = 'flex'
        }
        else {
            form.reset()
            window.location.href = '/success.html'
        }
    }
    else {
        email.className = 'error'
        errorText.style.display = 'flex'
    }
})  

email.addEventListener('click', (e) => {
    if(e.currentTarget.classList.contains('error')) {
    e.currentTarget.classList.remove('error')
    errorText.style.display = 'none'
    }
})

