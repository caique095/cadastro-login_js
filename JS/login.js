const email = document.querySelector('#email');
const password = document.querySelector('#password')
const btn = document.querySelector('#btn')
const showPassword = document.querySelector('#form-icons_show');
const hiddenPassword = document.querySelector('#form-icons_hidden');



// FUNÇÕES ======================================


function validatorInputs() {
    if(email.value == '' || password.value == '') {
        textForm.textContent = 'Preencha todos os campos.';
    } else {
        textForm.textContent = '';
    }
}


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

// LOCAL STORAGE ================================


btn.addEventListener('click' , e => {
    e.preventDefault()

    let access = checkLogin(email.value, password.value)

    if (access) {
        window.location.href = '/login.html';

        return
    }else{
        alert('Usuário não cadastrado.')
    }

})



function checkLogin(email, password) {
    const login = localStorage.getItem('email')
    const senha = localStorage.getItem('password')

    let access = false 

    if (email === login && password === senha) {
        access = true
    }

    return access

}