
// INDEX.HTML
const form = document.querySelector('#form')
const email = document.querySelector('#email')
const errorText = document.querySelector('.error-text')
const regex = /[\\\/:*?"<>|$%{}`'^()#!]/;

let workingEmail = ''



const error = JSON.parse(window.localStorage.getItem('error_message'))
const emailRequiredError = document.querySelector('.email-required-error')
const emailRequiredText = document.querySelector('.email-required-text')

if(error){
    emailRequiredError.style.display = 'block'
    emailRequiredText.textContent = error
    const timeoutId = setTimeout(() => {
        emailRequiredError.style.display = 'none'
        window.localStorage.removeItem('error_message')
        clearTimeout(timeoutId)
    }, 3000)
}

if(form) {

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
                workingEmail = emailValue.join('')
                window.localStorage.setItem('email', JSON.stringify(workingEmail))
                window.location.href = `/success.html`
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

}


