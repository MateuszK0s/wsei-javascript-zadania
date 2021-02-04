// Zadanie 1

const buz = document.querySelector('#buz');
const buzParent = buz.parentElement;
console.log(buzParent);


const baz = document.querySelector('#baz');
const bazBrother1 =baz.previousElementSibling;
const bazBrother2 = baz.nextElementSibling;
console.log(bazBrother1);
console.log(bazBrother2);


const foo = document.querySelector('#foo');
const fooChildren = foo.children;
console.log(fooChildren);

const fooParent = foo.parentElement;
console.log(fooParent);

const fooFirstChild = foo.firstElementChild;
console.log(fooFirstChild);
const fooMiddleChild = foo.children[1]

// Zadanie 2

let listenTo = (element) => {
    element.addEventListener("click", () => {
        console.log(element.children[0]
                .children[0].children[0].children[1]
                .children[0].children[0].textContent);
    });
}

listenTo(document.getElementById("ex2"));

// Zadanie 3

const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const span = button.nextElementSibling;
        if(span.style.display === "none") {
            span.style.display = "block";
        } else {
            span.style.display = "none";
        }
    });
})

// Zadanie 4

const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})

// Zadanie 5

let ex5Div = document.getElementById("ex5");
let ex5DivList = ex5Div.querySelector('ul');

ex5Div.querySelectorAll("div").forEach((div) => {

    div.addEventListener("mouseover", function() {

        let color = this.style.backgroundColor;
        let listElements = ex5DivList.querySelectorAll("li");

        let firstLi = listElements[0];
        firstLi.style.backgroundColor = color;
        
        let lastLi = listElements[listElements.length - 1];
        lastLi.style.backgroundColor = color;

        for(let i = 1; i < listElements.length; i += 2)
            listElements[i].style.backgroundColor = color;

        listElements.forEach(el => {
            el.style.backgroundColor = color;
        });

        ex5DivList.style.backgroundColor = color;
    });
});

// Zadanie 6

const divID = document.getElementById('ex6');

let comb1 = divID.firstElementChild.firstElementChild.firstElementChild;
let comb2 = divID.firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;
let comb3 = divID.parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;

console.log(comb1);
console.log(comb2);
console.log(comb3);