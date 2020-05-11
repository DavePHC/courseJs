"use strict";

let money = prompt("Ваш бюджет на месяц", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    obligatory = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMany = prompt("Во сколько обойдется?", ""),
    obligatory2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    howMany2 = prompt("Во сколько обойдется?", ""),

    appData = {
        budget: money,
        timeData: time,
        expenses:{},
        optionalExpenses:{},
        income: [],
        saving: false
    };

appData.expenses[obligatory] = howMany;
appData.expenses[obligatory2] = howMany2;


alert("Бюджет на день " + appData.budget/ 30 + " руб.");