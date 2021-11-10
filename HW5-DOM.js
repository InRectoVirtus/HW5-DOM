function submitForm() {
    let user = document.getElementById('user').value;
    let password = document.getElementById('pass').value;

    localStorage.setItem('user', user);
    localStorage.setItem('password', password);

    showCredentials(user, password);
}

const showCredentials = (user, password) => {

    let showUserPass = document.getElementById('userpass')

    showUserPass.innerHTML = `Мыло ${user}, Пароль ${password}`
}


document.getElementById("but").addEventListener("click", submitForm())