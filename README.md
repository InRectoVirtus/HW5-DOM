[4-ое задание](https://github.com/InRectoVirtus/HW5-DOM/blob/main/README.md#4-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[5-ое задание](https://github.com/InRectoVirtus/HW5-DOM/blob/main/README.md#5-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
[6-ое задание](https://github.com/InRectoVirtus/HW5-DOM/blob/main/README.md#6-%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5)  
#  4-ое задание # 

## Сделайте так чтобы скрипт грузился параллельно с парсингом html ##  

    <script defer src="HW5-DOM.js"></script>

> Атрибут defer сообщает браузеру, что он должен продолжать обрабатывать страницу и загружать скрипт в фоновом режиме, а затем запустить этот скрипт, когда он загрузится.<br/>  

#  5-ое задание # 

## Сверстать форму (опционально сделать дизайн как на макете, который прикреплен сверху с помощью css). ##

    body {
    background-color: #66bd4a;

    }

    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .container {
        margin-top: 13rem;
        padding: 2rem 0 2rem 0;
        width: 22rem;
        height: 13rem;

        box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);

        background-color: white;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    input {
        border: solid 2px #ccc;
        height: 25px;
        width: 12rem;
    }

    input:focus{
        border: #ccc;

    }

     button {
        width: 12.4rem;
        height: 50px;
        border: none;
        background-color: #66bd4a;
        color: white;
     }

     button:active {
         background-color: green;
     }

     p {
        width: 12.4rem;
        text-align: center;
        font-size: 0.8rem;

        color: #ccc;
     }

    a {
        text-decoration: none;
        color: #66bd4a;
    }

    a:active {
        color: green;
    }
> Вспомнил css<br/>  

#  6-ое задание # 

## При нажатии на кнопку логин: Вывести под формой то что пользователь ввел в двух инпутах, сохранить данные в localStorage.  ##

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

> Сначала я данные с инпутов вставляю новые ключи со значениями, потом вызываю функцию в которой обращаюсь к элементу див - ы, которая меняет текст и берёт значения из localStorage<br/>  
