const zad1 = () => {
    function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wiek = wiek;
        this.kraj = kraj;
        this.miasto = miasto;
        this.jezyk = jezyk;

        this.zmienWiek = wiek => {this.wiek = wiek};
        this.zmienMiasto = miasto => {this.miasto = miasto};
    }; 

    const p1 = new Person("Connor", "McGregor", 18, "Irlandia", "Ursynów", "irlandzki");
        console.log(...Object.values(p1).filter(j => typeof j != "function"));
        p1.zmienWiek(21);
        p1.zmienMiasto("Mokotów");
        console.log(...Object.values(p1).filter(j => typeof j != "function"));

    const p2 = new Person("Alan", "Walker", 22, "Anglia", "New York", "portugalski");
        console.log(...Object.values(p2).filter(j => typeof j != "function"));
        p2.zmienWiek(41);
        p2.zmienMiasto("Krakow");
        console.log(...Object.values(p2).filter(j => typeof j != "function"));

    const p3 = new Person("Angielina", "Jolie", 45, "USA", "Szczecin", "Milosci");
        console.log(...Object.values(p3).filter(s => typeof s != "function"));
        p3.zmienWiek(21);
        p3.zmienMiasto("Ciała");
        console.log(...Object.values(p3).filter(s => typeof s != "function"));

    const p4 = new Person("Adam", "Małysz", 57, "Brazylia", "Zakopane", "hiszpanski");
        console.log(...Object.values(p4).filter(j => typeof j != "function"));
        p4.zmienWiek(8);
        p4.zmienMiasto("Wroclaw");
        console.log(...Object.values(p4).filter(j => typeof j != "function"));

    const p5 = new Person("Johny", "Depp", 35, "Czechy", "Praga pólnoc", "polski");
        console.log(...Object.values(p5).filter(g => typeof g != "function"));
        p5.zmienWiek(16);
        p5.zmienMiasto("Praga");
        console.log(...Object.values(p5).filter(g => typeof g != "function"));
}

const zad2 = () => {
    function Calc(num1, znak, num2) {
        this.num1 = num1;
        this.znak = znak;
        this.num2 = num2;
        this.result = 0;

        switch(this.znak) {
            case '+': this.result = this.num1 + this.num2; break;
            case '-': this.result = this.num1 - this.num2; break;
            case '/': this.result = this.num2 == 0 ? "DivideByZeroException" : this.num1 / this.num2; break;
            case '*': this.result = this.num1 * this.num2; break;
        }

        this.clear = () => {this.result = 0};
        this.getResult = () => this.result;
    }

    const odejmij = new Calc(5, '-', 4);
    console.log(odejmij.getResult());

    const dodaj = new Calc(4, '+', 1);
    console.log(dodaj.getResult());
}

function zad3() 
{
    function gra()
    {
        this.num = 0;
    
        this.numSet = function() { 
            this.num = Math.floor(Math.random() * 10);
            this.numCheck();
        }
        
        this.numCheck = function() { 
            console.log(this.num)
            if(this.num > 5) {
                clearInterval(interval);
            }     
        }
    }

    let start = new gra();
    let interval = setInterval(() => {
        start.numSet();
    }, 1000);
}

(() => {
    zad1();
    zad2();
    zad3();
})();