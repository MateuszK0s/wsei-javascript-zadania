const zad1 = () => {
    console.log("Zadanie 1");

    let num = 7;
    let streeng = "Hello world";
    let sumof = 2 + '2';
    let bulian = false;
    let vipvalue = NaN;

    console.log(num, streeng, sumof, bulian, vipvalue);
}

const zad2 = () => {
    console.log("Zadanie 2");

    let a = 123, b = 29;
    let sum = 0;

    console.log(sum = a + b);
}

const zad3 = () => {

    console.log("Zadanie 3");

    let x;

    console.log(x);

    // undefined poniewaz x nie jest wczesniej zdefiniowany
}


(() => {
    zad1();
    zad2();
    zad3();
})();