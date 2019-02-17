//As it should be a global variable
var basket = {
    //Array of arrays, [good, countOfIt]
    goodList : [],
    countTotalPrice: function () {
        returnCount = 0;

        for (var item in this.goodList){
            returnCount += item[0].price*item[1];
            }

        return returnCount;
    },
    countTotalNumber: function () {
        returnCount = 0;

        for (var item in this.goodList){
            returnCount += item[1];
        }

        return returnCount;
    },
    putGood: function(good) {
        //If we can find the good increasing counter and exiting the func
        for (var item in this.goodList){
            if (this.item[0]["name"] === good.name){
                this.item[1] += item[1];
                return null;
            }
        }
        //If a good wasn't found then add a new one with count = 1
        this.goodList.push([good, 1]);
    }
};

var good = {
    name: "",
    price: 0,

    putToBasket: function(){
        console.log("Putting to basket");
        basket.putGood(this);
    }

};

function transformNumberToObj(number) {
    retObject = {};

    if(isNaN(number)){
        console.log("Вы ввели не число: "+number);
    } else if (number > 999 || number < 0) {
        console.log("Введённое число НЕ находится в диапазоне от 0 до 999: "+number);
    } else {
        bufNum = number;

        retObject["единицы"] = Math.round(bufNum % 10);
        bufNum = (bufNum - Math.round(bufNum % 10))/10;

        retObject["десятки"] = Math.round(bufNum % 10);
        bufNum = (bufNum - Math.round(bufNum % 10))/10;

        retObject["сотни"] = Math.round(bufNum % 10);

    }

    return retObject;
}

function task4Ex1Func() {

    number = prompt("Введите число от 1 до 999");

    console.log(JSON.parse(JSON.stringify(transformNumberToObj(number))));

}

//Thanks to https://scotch.io/bar-talk/copying-objects-in-javascript
function task4Ex2Func() {

    listOfGoods = [];

    for (i = 0; i <= 19; i++){
        listOfGoods[i] = Object.assign({}, good);
        listOfGoods[i].name = "TestGood"+i;
        listOfGoods[i].price = Math.round(Math.random()*10000);

        listOfGoods[i].putToBasket = function() {
            console.log("Putting to basket");
            basket.putGood(this);
        };
    }

    evenFlag = false;
    for (var item of listOfGoods){
        //first good is not even
        if (!evenFlag) {
            item.putToBasket;
            item.putToBasket;
            evenFlag = true;
        } else {
            item.putToBasket;
            evenFlag = false;
        }
    }

    console.log("Общая стоимость товаров в корзине: "+basket.countTotalPrice());
    console.log("Общее количество товаров в корзине: "+basket.countTotalNumber());
}