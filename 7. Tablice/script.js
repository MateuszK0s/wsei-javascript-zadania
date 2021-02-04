const zad1 = () => {
    const array = ["pies", "kot", "zubr", "tatra"];;

    console.log(...array);
}

const zad2 = () => {
    const array = ["wsei", 6, "js", 61, 522, 0];

        console.log(array[0], array[1]);
        console.log(array[array.length-1]);
        console.log(...array);
        console.log(...array.filter(a => Number(!(a&1))));
        console.log(...array.filter(a => typeof a == "string"));
        console.log(...array.filter(a => typeof a == "number"));
}

const zad3 = () => {
    const array = [1, 2, 3, 2, 9];

    console.log(array.reduce((a, b) => a+b));
    console.log(array.reduce((a, b) => a-b));
    console.log(array.reduce((a, b) => (a+b)/array.length));
    console.log(...array.filter(a => !(a&1)));
    console.log(...array.filter(a => a&1));
    console.log(array.reduce((a, b) => a > b ? a : b));
    console.log(array.reduce((a, b) => a < b ? a : b));
    console.log(...array.reverse());
}

const zad4 = () => {
    const array = [1, 2, 3, 4, 5];

    const sum = array => {
        console.log(array.reduce((a, b) => a+b));
    }; sum(array);
}

const zad5 = () => {    
    const array = [1, 2, 3, 4, 5];

    const sum = array => {
        const sum = array.reduce((a, b) => a+b);
        const avg = array.reduce((a, b) => (a+b)/array.length);

        console.log(sum*avg);
    }; sum(array);
}

const zad6 = () => {    
    const array = [1, 2, 3, 4, 5];
    const pos = array.filter(a => !(a&1));

    console.log(pos.reduce((a, b) => (a+b)/pos.length));
}

const zad7 = () => {
    const array = [1,2,3,2,9];

    const posortuj = array => array.sort();

    console.log(...posortuj(array));
}

const zad8 = () => {    
    const array1 = [4, 4, 4, 4];
    const array2 = [4, 4, 8, 8];

    const sumaindeksow = (array1, array2) => {
        let sum = array1.map(ao => array1.indexOf(ao));
        const atInd = array2.map(at => array2.indexOf(at));
    
        sum = [...sum, ...atInd].sort().reduce((a, b) => a+b);
        console.log(sum);
    }; sumaindeksow(array1, array2);
}

zad9 = () => {
    const array = [1, 1, 2, 9, 9, 7];

    const array2template = (array, elem) => array.filter(a => a != elem);    
    const array2 = array2template(array, array[1]);

    console.log(...array2);  
}

zad10 = () => {
    const array = [-1, -2, 3, -2, 9];
    const odwroc = array => array.map(a => a > 0 ? -Math.abs(a) : Math.abs(a));

    console.log(...odwroc(array));
}


(() => {
    zad1();
    zad2();
    zad3();
    zad4();
    zad5();
    zad6();
    zad7();
    zad8();
    zad9();
    zad10();
})();