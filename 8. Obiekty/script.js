const zad1 = () => {
    const car = {
        name: "Mercedes",
        model: "GLEcostam",
        year: 1993
    }; console.log(...Object.values(car));
}

const zad2 = () => {
    const car = {
        name: "Mercedes",
        model: "GLEcostam",
        year: 1993,
        changeName(name) {
            this.name = name;
        }
    }; 
    
    car.changeName("Skoda");
    console.log(...Object.values(car).filter(a => typeof a != "function"));
}

const zad3 = () => {
    const array = [1, 2, 3, 2, 9];
    
        const method = {
        sum: 0,
        sumArray(array) {
            this.sum = array.reduce((a, b) => a+b);
        }
    }; 

    method.sumArray(array);
    console.log(method.sum);
}

const zad4 = () => {
    const car = {
        name: "Mercedes",
        model: "GLEcostam",
        year: 1993,
    }; console.log(car);
}

const zad5 = () => {
    const car = {
        name: "Mercedes",
        model: "GLEcostam",
        year: 1993,
        mileage: {
            before: 281224,
            after: 79882,
        }
    }; 
    console.log(car.mileage.after);
    console.log(car.mileage.before);
}

const zad6 = () => {
    const car = {
        name: "Mercedes",
        model: "GLEcostam",
        year: 1993,
        mileage: {
            before: 281224,
            after: 79882,
        }
    }; 

    Object.defineProperty(car, "value", {value: "Hello"});
    Object.defineProperty(car, "Method", {get: function() {console.log(this.value)}})

    car.Method;
}


(() => {
    zad1();
    zad2();
    zad3();
    zad4();
    zad5();
    zad6();
})();