document.getElementById("log-btn").addEventListener("click", function () {
    // Получите значения введенного логина и пароля
    const username = document.querySelector("#login-login").value;
    const password = document.querySelector("#login-pass").value;

    // Проверка на пустые поля
    if (username.trim() === "" && password.trim() === "") {
        alert("Как вы зарегаетесь без логина и пароля... Заполните поля логина и пароля.");
    }
    else if (username.trim() === "") {
        alert("Заполните поле логина.");
    }
    else if (password.trim() === "") {
        alert("Заполните поле пароля.");
    }
    else {
        // Проверим, не был ли пользователь ранее зарегистрирован
        const registeredUsers = JSON.parse(localStorage.getItem("registeredUsers")) || [];

        const userExists = registeredUsers.some(user => user.username === username && user.password === password);

        if (userExists) {
            alert("Такой пользователь уже есть.");
        } else {
            // Добавим нового пользователя в список зарегистрированных
            registeredUsers.push({ username, password });
            localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

            // Сохраните информацию о входе пользователя в localStorage
            localStorage.setItem("loggedIn", "true");
            localStorage.setItem("username", username);

            window.location.href = "hw3.html";
        }
    }
});