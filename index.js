let users = [
    {
        login: "admin",
        password: "1234",
        name: "Нурлан"
    },
    {
        login: "user1",
        password: "1111",
        name: "Арсен"
    },
    {
        login: "user2",
        password: "2222",
        name: "Альберт"
    },
    {
        login: "user3",
        password: "3333",
        name: "Адис"
    },
    {
        login: "user4",
        password: "4444",
        name: "Алтай"
    }
];

function loginUser() {
    let login = document.getElementById("login").value;
    let password = document.getElementById("password").value;

    let user = users.find(function(user) {
        return user.login === login && user.password === password;
    });

    if (user) {
        document.getElementById("message").textContent =
            "Добро пожаловать, " + user.name + "!";
    } else {
        document.getElementById("message").textContent =
            "Ошибка! Неверный логин или пароль.";
    }
}
/*
function sumAll(...numbers) {
    let sum = 0;

    for (let number of numbers) {
        sum += number;
    }

    return sum;
}

console.log(sumAll(2, 5, 6, 7));
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));*/