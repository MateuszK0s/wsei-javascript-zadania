//Zad. 1

var num1 = 5;
var num2 = 7;

if(num1 > num2) 
    console.log(num1 + ' jest wieksza liczba');
else if(num1 < num2)
    console.log(num2 + ' jest wieksza liczba');
else console.log('liczby sa rowne');

//Zad. 2

var num3 = 1;

if(num1 > num2 && num1 > num3) {
    console.log(num1 + ' jest najwieksza liczba');
} else if (num2 > num1 && num2 > num3) {
    console.log(num2 + ' jest najwieksza liczba');
} else {
    console.log(num3 + ' jest najwieksza liczba');
}

//Zad. 3 

for(var i = 1; i <= 10; i++)
    console.log("Lubię JavaScript");

//Zad. 4

var result = 0;

for(var i = 0; i < 10; i++)
    result += (i+1);

console.log(result);

//Zad. 5 

var n = 5;

for(var i = 0; i <= n; i++)
    console.log(i + (i % 2 == 0 ? " - parzysta" : " - nieparzysta"));

//Zad. 6

for(var i = 0; i < 7; i++)
{
    for(var j = 10; j < 21; j++)
    {
        console.log("i= " + i + ", j= " + j);
    }
}

//Zad. 7

for(var i = 0; i <= 100; i++)
{
    if( (i % 3 == 0) && (i % 5 == 0) )
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
}

//Zad. 8a

for(var i = 1; i <= 5; i++)
{
    let str = "";
    for(var j = 1; j <= i; j++)
        str += "*";

    console.log(str);
}

//Zad. 8b

for (let i = 1; i <= 5; i++) {
    let print = "";
    for (let j = 5 - i; j > 0; j--) 
    {
        print += " ";
    }

    for (let j = i * 2 - 1; j > 0; j--) 
    {
          if(j % 2)
        printg += "*";
          else print += " ";
    }
    console.log(print);
}

//Zad. 8c

for (let i = 1; i <= 5; i++) 
    {
        let print = "";
        for (let j = 5 - i; j > 0; j--) 
        {
            print += " ";
        }

        for (let j = i * 2 - 1; j > 0; j--) 
        {
            print += "*";
        }
        console.log(print);
    }

//Zad. 8d

var c = 5;
var star = 1;

for(var i = 0; i < c; i++)
{
    let print = "";

    for(var j = 0; j < c; j++)
    {
        if(j < print)
        {
            print += "*";
        }
        else {
            print += j;
        } 
    }
    star++;
    console.log(print);
} 

console.log("-----");
star = c;

for(var i = 0; i < c; i++)
{
    let print = "";
    for(var j = 0; j < c; j++)
    {
        if(j >= star)
        {
            print += j;
        }
        else {
            print += "*";
        } 
    }

    star--;
    console.log(print)
}

//Zad. 8e

for (let i = 1; i <= 5; i++) 
    {
        let print = "";
        for (let j = 5 - i; j > 0; j--) 
        {
            print += " ";
        }

        for (let j = i * 2 - 1; j > 0; j--) 
        {
            if(j % 2)
                print += "*";
            else print += " ";
        }
        console.log(print);
    }

    let printt = "";
    for(let k = 0; k < 5; k++)
    {
        if(k < 4)
            printt += " ";
        if(k == 4)
            printt += "*";
    }
    console.log(printt)