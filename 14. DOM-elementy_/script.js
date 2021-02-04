// zad. 1
function zad1()
{
    function getTags(elements)
    {
        tags = [];
        elements.forEach(element => {
            tags.push(element.tagName);
        });
        return tags;
    }

    let elements = document.querySelectorAll(".more-divs");
    console.log(getTags(elements));
}

// zad. 2
function zad2()
{
    let myElement = document.getElementsByClassName("short-list")[0];
    function show(element)
    {
        console.log("1)", element.innerHTML);
        console.log("2)", element.outerHTML);
        console.log("3)", element.classList.value);
        console.log("4)", element.classList);
        console.log("5)", element.dataset);
    } show(myElement);
}

// zad. 3

function result(...numbers) {
    return {
        sum: numbers.reduce((a, b) => parseInt(a) + parseInt(b)),
        substract: numbers.reduce((a, b) => a - b)
    }
}

let dataset = document.querySelector('#datasetCheck').dataset;
console.log(result(dataset.numberone, dataset.numbertwo, dataset.numberThree));

// zad. 4
document.querySelector('#spanText').innerText = "Hello world";

// zad. 5.
let doc = document.querySelector('#spanText');
doc.classList = "dowolna_klasa";

// zad. 6

let div = document.getElementById("classes");

function pokazKlasy(elementClasses)
{
    let arr = [];
    elementClasses.forEach(className => {
        arr.push(className);
    });
    console.log(arr.join("+"));
}

let klasy = div.classList;
pokazKlasy(klasy);
div.classList = "";
console.log("Usunięto wszystkie klasy");

// zad. 7

let elements = document.querySelector('#longList').querySelectorAll('li');

elements.forEach((element) => {
    if (element.dataset.text == null) {
        element.dataset.text = "text";
    }
});

// zad 8.

function zad8()
{
    function funkcja(string)
    {   
        let obj = {
            newClass: string
        };
        return obj;
    }

    function funkcja2(obj)
    {
        let div = document.getElementById("myDiv");
        let newClass = obj.newClass;
        div.classList.add(newClass);
    }
    let myObj = funkcja("string_z_parametru");
    funkcja2(myObj);
}

// zad. 9

function dodaj(number, target)
    {
        if(number % 2 == 0) {
            target.classList.add("even");
        } else {
            target.classList.add("odd");
        }
    }

let rnd = () => Math.floor(Math.random() * 11);   
let targetElement = document.getElementById("numbers");

dodaj(rnd(), targetElement);

//zad 10

function zad10() 
{
    let longList = document.getElementById("longList");

    function getValues(list)
    {
        let values = [];
        let elements = list.querySelectorAll("li");
        elements.forEach(element => {
            values.push(element.innerHTML);
        });

        return values;
    }console.log(getValues(longList));
}

//zad. 11

function zad11()
{
    let longList = document.getElementById("longList");
    let children = longList.children;

    function setChildrenData(elements)
    {
        let randomNumber = () => Math.floor(Math.random() * 11);  
        for(var element of elements)
        {
            let currentValue = element.innerHTML;
            element.setAttribute("data-old-value", currentValue);
            element.innerHTML = randomNumber();
        }
    }
    setChildrenData(children);
} 