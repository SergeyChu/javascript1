function ex3Func() {
    var a = Number(prompt("Введите а"));
    var b = Number(prompt("Введите b"));

    if (a >= 0 && b >= 0) {
        alert(a - b);
    } else if (a < 0 && b < 0) {
        alert(a * b);
    } else {
        alert(a + b);
    }

}


function ex4FuncSumm(a, b) {
    return a + b;
}

function ex4FuncSub(a, b) {
    return a - b;
}

function ex4FuncMul(a, b) {
    return a * b;
}

function ex4FuncDiv(a, b) {
    return a / b;
}


function ex4Func() {

    var num1 = Number(prompt("Введите первое число"));
    var num2 = Number(prompt("Введите второе число"));

    if (document.getElementById("summ_radio").checked === true) {
        alert(ex4FuncSumm(num1, num2));
    } else if (document.getElementById("sub_radio").checked === true) {
        alert(ex4FuncSub(num1, num2));
    } else if (document.getElementById("mul_radio").checked === true) {
        alert(ex4FuncMul(num1, num2));
    } else if (document.getElementById("div_radio").checked === true) {
        alert(ex4FuncDiv(num1, num2));
    }


}

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            alert(ex4FuncSumm(arg1, arg2));
            break;

        case '-':
            alert(ex4FuncSub(arg1, arg2));
            break;

        case '*':
            alert(ex4FuncMul(arg1, arg2));
            break;

        case '/':
            alert(ex4FuncDiv(arg1, arg2));
            break;

        default:
            alert("Не верная операция: " + operation);
    }


}


function ex5Func() {

    var num1 = Number(prompt("Введите первое число"));
    var num2 = Number(prompt("Введите второе число"));
    var action = prompt("Введите операцию(+ - * /)");
    mathOperation(num1, num2, action)

}

function power(val, powerVal) {
    if (powerVal === 1) {
        return val;
    }
    return (val * power(val, --powerVal));
}


function ex6Func() {
    var num1 = Number(prompt("Введите число"));
    var pow = Number(prompt("Введите степень"));

    alert(power(num1, pow));

}

function checkPass(password){
    
    if (password.length < 3 || password.length > 12 ) 
        return "Некорректный пароль"
    
    if (password.indexOf('&') == -1 && password.indexOf('$') == -1 && password.indexOf('%') == -1 && password.indexOf('*') == -1)
        return "Некорректный пароль"
    
     if (password.indexOf('q') != 0 && password.lastIndexOf('z') != password.length - 1)
        return "Некорректный пароль"
    
    return "Корректный пароль";
}

function ex7Func() {
    var password = prompt("Введите пароль для проверки");
    
    alert(checkPass(password));
}
    
    
