const password = document.querySelector('input[name=password]')
const confirm_password = document.querySelector('input[name=confirm-password]')
const pw_error = document.getElementById('pw-error')

confirm_password.addEventListener('keyup', function(){
    if (password.value != confirm_password.value){
        password.classList.add('error')
        confirm_password.classList.add('error')
        pw_error.textContent = "*Passwords must match"
    }

    if (password.value == confirm_password.value){
        password.classList.remove('error')
        confirm_password.classList.remove('error')
        pw_error.textContent = ""
    }
})