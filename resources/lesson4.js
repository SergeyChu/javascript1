//As it should be a global variable

function transformNumberToObj(number){
    retObject = {};

    if (isNaN(number)){
        console.log("Вы ввели не число :"+number);
    } else if (number > 999 || number < 0 ){
        console.log("Введённое число не находится в диапазоне от 0 до 999 :"+number);
    } else {
        bufNum = number;

        retObject["единицы"] = Math.round(bufNum % 10);
        bufNum = (bufNum - Math.round(bufNum % 10 ))/10;

        retObject["десятки"] = Math.round(bufNum % 10);
        bufNum = (bufNum - Math.round(bufNum % 10 ))/10;

        retObject["сотни"] = Math.round(bufNum % 10);
    }

    return retObject;
}

function task4Ex1Func(){

    var input = prompt("Введите число от 0 до 999");

    console.log(transformNumberToObj(input));
    
}

var basket = {
    //Array of arrays, [good, countOfIt]
    goodList : [],
    countTotalPrice: function (){
        returnCount = 0;

        for (var item of this.goodList){
            //console.log("Price: "+item);
            returnCount += Number(item[0].price)*Number(item[1]);
        }

        return returnCount;
    },
    countTotalNumber: function (){
        returnCount = 0;

        for (var item of this.goodList){
            //console.log("Number: "+item);
            returnCount += Number(item[1]);
        }

        return returnCount;
    },
    putGood: function(good){
        //If we can find the good increasing counter and exiting the func
        for (var item of this.goodList){
            if (item[0]["name"] === good.name){
                item[1] += item[1];
                return null;
            }
        }
        //If a good wasn't found then add a new one with count =1
        this.goodList.push([good, 1]);
    }


};

var good = {
    //name: "",
    //price: 0,
    putToBasket: function(){
        basket.putGood(this);}

};


function task4Ex2Func(){
    var listOfGoods = [];

    //Filling the array with random goods
    for (i = 0; i <= 19; i++){
        listOfGoods[i] = Object.assign({}, good);
        listOfGoods[i].name = "TestGood"+i;
        listOfGoods[i].price = Math.round(Math.random()*10000);
    };

    evenFlag = false;
    for (var item of listOfGoods){
        //Considering that the first good is not even
        if (!evenFlag){
            item.putToBasket();
            item.putToBasket();
            evenFlag = true;
        } else {
            item.putToBasket();
            evenFlag = false;
        }
    };

    console.log("Общая стоимость корзины: "+basket.countTotalPrice());
    console.log("Общее количество товаров в корзине: "+basket.countTotalNumber());

    //Reset if you'll want to try the funny stuff once again
    basket.goodList = [];
}


function task4Ex2Func(){
    
}