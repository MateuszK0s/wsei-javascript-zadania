const zad1 = () => {
    console.log("Udało się!");
}

const zad2 = () => {
    const parametr = "parametr";
    const paramPrint = parametr => {console.log(parametr)};

    paramPrint(parametr);
}

const zad3 = () => {
    const parametr = ["pies", "kot", "zubr", "tatra"];
    const paramPrint = parametr => parametr;
    
    console.log(paramPrint(parametr));
}

const zad4 = () => {
    const arg = "Hello World!";
    const repeat = val => {
        let x = 0;
        const int = setInterval(() => {
            if(x < 5) {
                console.log(val);
                x++;
            } else clearInterval(int);
        }, 3000);
    }; repeat(arg);
}


(() => {
    zad1();
    zad2();
    zad3();
    zad4();
})();