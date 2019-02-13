//As it should be a global variable
var basket = [];

function task3Ex1Func() {
let a = [
    [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
    [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
    [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
        ];
//To not reinvent a bike
let b = JSON.stringify(a);
console.log(b);    
    
}

function countBasketPrice() {
    if (basket) {
        let summ = 0;
        for (item in basket){
            summ += Number(basket[item]['price']);
        }
        return summ;
             
    } else {
        console.log("Basket is empty");
        return 0;
    }
}


function task3Ex2Func() {
    basket.push({art: '12345', price: '99'});
    basket.push({art: '12346', price: '199'});
    
    console.log(countBasketPrice());
}

function task3Ex3Func() {
    for (i = 0; i <= 9; console.log(i++)) { 
}
    
}

function task3Ex4Func() {
    for (i = 1; i <= 20; i++) {
        //ES6 for lazy guys
        console.log('*'.repeat(i));
}
    
}