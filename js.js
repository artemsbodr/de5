let dr = prompt('Що ви бажаєте? Чай, Каву чи Сік?')
let day = prompt('Коли бажаэте забрати замовлення?')
let month = prompt('В який місяць хочете отримати продукт?');
let color = prompt('Який колір бажаєте для продукту?');
let num1 = prompt('Число 1:')
let num2 = prompt('Число 2:')
let operator = prompt('Оператор:')

switch(dr) {
    case'Каву' :
        alert('Дякую за замовлення!')
    break;
    case'Чай' :
        alert('Дякую за замовлення!')
    break;
    case'Сік' :
        alert('Дякую за замовлення!')
    break;
}


switch(day) {
    case'В понеділок' :
        alert('Це робочий день все буди в найкращому вигляді!')
    break;

    case'В вівторок' :
        alert('Це робочий день все буди в найкращому вигляді!')
    break;

    case'В середу' :
        alert('Це робочий день все буди в найкращому вигляді!')
    break;

    case'В четверг' :
        alert('Це робочий день все буди в найкращому вигляді!')
    break;

    case'В пятницю' :
        alert('Це робочий день все буди в найкращому вигляді!')
    break;


    case'В суботу' :
        alert('ПЕРСОНАЛУ ТЕЖ ТРЕБА ВІДПОЧИВАТИ!!!')
    break;


    case'В неділю' :
        alert('ПЕРСОНАЛУ ТЕЖ ТРЕБА ВІДПОЧИВАТИ!!!')
    break;
}

switch (true) {
    case (month >= 3 && month <= 5):
        console.log("Весна");
        break;
    case (month >= 6 && month <= 8):
        console.log("Літо");
        break;
    case (month >= 9 && month <= 11):
        console.log("Осінь");
        break;
    case (month === 12 || month === 1 || month === 2):
        console.log("Зима");
        break;
}


switch (color) {
    case "червоний":
        console.log("Стоп");
        break;
    case "зелений":
        console.log("Йти");
        break;
    case "жовтий":
        console.log("Чекати");
        break;
    default:
        console.log("Невідомий колір.");
}

switch (operator) {
    case "+":
        console.log("Результат: " + (num1 + num2));
        break;
    case "-":
        console.log("Результат: " + (num1 - num2));
        break;
    case "*":
        console.log("Результат: " + (num1 * num2));
        break;
    case "/":
        if (num2 !== 0) {
            console.log("Результат: " + (num1 / num2));
        } else {
            console.log("Попередження: Ділення на нуль неможливе!");
        }
        break;
}
