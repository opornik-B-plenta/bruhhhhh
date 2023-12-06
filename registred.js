document.addEventListener("DOMContentLoaded", function () {
    // Проверка, авторизован ли пользователь
    const loggedIn = localStorage.getItem("loggedIn");
    if (!loggedIn || loggedIn !== "true") {
        // Если пользователь не авторизован, показываем сообщение и перенаправляем его на страницу авторизации
        alert("Пользователь не авторизован.");
        window.location.href = "hw2.html";
    }
});
