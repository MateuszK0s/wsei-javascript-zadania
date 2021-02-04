const zad1 = () => {
    const p1 = {
        imie: "Mateusz1",
        nazwisko: "K",
        wiek: 21,
        kraj: "Polska",
        miasto: "Krakow",
        printInfo() {
            console.log(...Object.values(this).filter(pr => typeof pr != "function"));
        },
        happybirthday() {
            this.wiek += 1;
            const age = Object.keys(this).map(a => a == "wiek" ? this[a] : 0).filter(af => af > 0);
            console.log(this.imie, ...age);
        }
    };

    const p2 = {
        imie: "Mateusz2",
        nazwisko: "AlterEgoK",
        wiek: 22,
        kraj: "Polska",
        miasto: "Bukareszt",
        printInfo() {
            console.log(...Object.values(this).filter(pr => typeof pr != "function"));
        },
        happybirthday() {
            this.wiek += 1;
            const age = Object.keys(this).map(a => a == "wiek" ? this[a] : 0).filter(af => af > 0);
            console.log(this.imie, ...age);
        }
    };

    p1.printInfo();
    p2.printInfo();

    p2.happybirthday();
    p2.happybirthday();
    p2.happybirthday();
    p2.happybirthday();
}

const zad2 = () => {
    const p1 = {
        imie: "Mateusz1",
        nazwisko: "K",
        wiek: 21,
        kraj: "Polska",
        miasto: "Krakow",
        ulubionedanie: ["pizza", "kebab"]
    };

    const p2 = {
        imie: "Mateusz2",
        nazwisko: "AlterEgoK",
        wiek: 22,
        kraj: "Polska",
        miasto: "Bukareszt",
        ulubionedanie: ["homar", "krewetki"]
    };


    const showFood = p1 => {
        const food = Object.values(p1).filter(f => typeof f == "object");
        console.log(p1.imie, ...food);
    }; 
    
    const addFood = (p1, food) => {
        p1.ulubionedanie.push(food);
    }

    showFood(p1);
    showFood(p2);
    addFood(p1, "Nuggets");
    addFood(p2, "Sushi");
    showFood(p1);
    showFood(p2);
}

const zad3 = () => {
        const save = (a, b) => new Object({a, b});
        const sum = obj => obj.a + obj.b;
        const odejmij = obj => obj.a - obj.b;
        const pomnoz = obj => obj.a * obj.b;
        const podziel = obj => obj.b == 0 ? "DivideByZeroExpception" : obj.a / obj.b;

        const x = save(10, 2);
        console.log(sum(x));
        console.log(odejmij(x));
        console.log(pomnoz(x));
        console.log(podziel(x));

        const check = save(10, 0);
        console.log(podziel(check));
}

const zad4 = () => {
    
    const szczeble = 5;

    const p1 = {
        done: false,
        stepNum: 0,
        status: true,
        start(szczeble) {
            while(!this.done && this.status) {
                console.log("nr. szczebla: ", this.stepNum);
                if(this.stepNum < szczeble) this.stepNum++;
                else {this.status = false; this.done = true; console.log("Jestes na samej gorze");}
            }
    
            while(this.done && !this.status) {
                console.log("nr. szczebla: ", this.stepNum);
                if(this.stepNum > 0) this.stepNum--;
                else {this.status = true; this.done = false; console.log("Jestes na samym dole");}
            }
        }
    }; p1.start(szczeble);
}

(() => {
    zad1();
    zad2();
    zad3();
    zad4();
})();