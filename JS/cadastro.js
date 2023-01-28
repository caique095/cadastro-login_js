const inputList = document.querySelectorAll('.input');
const username = document.querySelector('#name')
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#password-confirm')
const form = document.querySelector('form');
const textForm = document.querySelector('#textForm');
const textName = document.querySelector('#textName');
const textEmail = document.querySelector('#textEmail');
const textPassword = document.querySelector('#textPassword');
const textConfirm = document.querySelector('#textConfirm_password');
const showPassword = document.querySelector('#form-icons_show');
const hiddenPassword = document.querySelector('#form-icons_hidden');
const showPasswordConfirm = document.querySelector('#form-icons_show-confirm');
const hiddenPasswordConfirm = document.querySelector('#form-icons_hidden-confirm');
const btn = document.querySelector('#btn')


form.addEventListener('submit' , (e) => {
    e.preventDefault()

    if(username.value =='' && email.value == '' && password.value == '' && passwordConfirm.value == '') {
        textForm.textContent = 'Preencha todos os campos!'
        errorColor()
    } else if (validatorEmail(email.value) === true && validatorPassword(password.value) === true) {
        console.log(username.value)
        console.log(email.value);
        console.log(password.value);
        console.log(passwordConfirm.value);
        textForm.textContent = '';
        textEmail.textContent = '';
        textPassword.textContent = '';
        textConfirm.textContent = '';
        successColor();
        window.location.href = 'login.html';
        data()
    } else {
        console.log('Requisição não atendida.')
        errorColor()
    }
})

form.addEventListener('submit' , () => {
    validatorInputs()
})

passwordConfirm.addEventListener('keyup' , () => {
    if(passwordConfirm.value === password.value) {
        textConfirm.textContent = ''
    } else {
        textConfirm.textContent = 'Senhas não correspondem.'
    }
})

email.addEventListener('keyup' , () => {
    if(validatorEmail(email.value) !== true) {
        textEmail.textContent = 'Email deve ser: nome@email.com'
    }else {
        textEmail.textContent = ''
    }
})

password.addEventListener('keyup' , () => {
    if(validatorPassword(password.value) !== true) {
        textPassword.textContent = 'Letras, números e no minimo 6 caracteres. '
    }else {
        textPassword.textContent = ''
    }
})


// ------  SHOW/HIDDEN PASSWORD  ------//
showPassword.addEventListener('click' , () => {
    if(password.value) {
        password.type == 'text' ? password.type = 'password' : password.type = 'text';
        password.focus();
        showPassword.style.display = 'none';
        hiddenPassword.style.display = 'inline-block';
    }
});

hiddenPassword.addEventListener('click' , () => {
    if(password.value) {
        password.type == 'password' ? password.type = 'text' : password.type = 'password';
        password.focus();
        hiddenPassword.style.display = 'none';
        showPassword.style.display = 'inline-block';
    }
});

showPasswordConfirm.addEventListener('click' , () => {
    if(passwordConfirm.value) {
        passwordConfirm.type == 'text' ? passwordConfirm.type = 'password' : passwordConfirm.type = 'text';
        passwordConfirm.focus();
        showPasswordConfirm.style.display = 'none';
        hiddenPasswordConfirm.style.display = 'inline-block';
    }
})

hiddenPasswordConfirm.addEventListener('click' , () => {
    if(passwordConfirm.value) {
        passwordConfirm.type == 'password' ? passwordConfirm.type = 'text' : passwordConfirm.type = 'password';
        passwordConfirm.focus();
        hiddenPasswordConfirm.style.display = 'none';
        showPasswordConfirm.style.display = 'inline-block';
    }
})



// ------- FUNÇÕES ------ //

function validatorEmail(email) {
    let emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPattern.test(email) 
}

function validatorPassword(password) {
    let passwordPattern = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPattern.test(password)
}

function validatorInputs() {
    if(username.value == '' || email.value == '' || password.value == '' || passwordConfirm.value == '') {
        textForm.textContent = 'Preencha todos os campos.';
    } else {
        textForm.textContent = '';
    }
}

function errorColor() {
    inputList.forEach((input) => {
        input.style.border = 'solid #dd3939'
    })
}

function successColor() {
    inputList.forEach((input) => {
        input.style.border = 'solid #9dd67a'
    })
}

function data() {
    localStorage.setItem('email', email.value);
    localStorage.setItem('password', password.value);
    localStorage.setItem('username', username.value);
}

