document.getElementById("but").addEventListener("click", () => {
        let user = document.getElementById("user").value
        let pass = document.getElementById("pass").value

        document.getElementById("userpass").innerHTML = `Логин - ${user}, пароль - ${pass}`;

        localStorage.setItem('Логин', user);

        localStorage.setItem('Пароль', pass);
    })

