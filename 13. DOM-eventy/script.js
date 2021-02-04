// Zad. 1
var element1 = document.getElementById("test-event");
element1.addEventListener("click", function(event){
    console.log("1.1 ", event);
});

document.addEventListener("mousemove", function(event){
    console.log("1.2 ", event);
});

element1.addEventListener("mouseover", function(event){
    console.log("1.3 ", event);
});

document.addEventListener("keypress", function(event) {
    console.log("1.4 ", event);
});

document.addEventListener("scroll", function(event) {
    console.log("1.5 ", event);
});

var element2 = document.getElementById("input-test");
element2.addEventListener("keypress", function(event){
    console.log("1.6 " + event.target.value);
});

//Zad. 2

var zad2el = document.getElementById("ex2");

zad2el.addEventListener("click", function(event) {
    zad2(event.target);
});

function zad2(element)
{
    console.log("Task 2 " + element.getAttribute('data-text'));
}

//Zad. 3

var zad3el = document.getElementById("ex3");
zad3el.addEventListener("mouseover", mouseEnter);
zad3el.addEventListener("mouseleave", mouseLeave);

function mouseEnter()
{
    zad3el.style.backgroundColor = "blue";
}

function mouseLeave()
{
    zad3el.style.backgroundColor = "red";
}

//Zad. 4

let inputCheck = document.getElementById("input-test");
let ex3Exception = document.getElementById("ex3-err");

inputCheck.addEventListener("keyup", function(event) {
    let val = event.target.value;

    if(!isNaN(val))
    {
        ex3Exception.innerHTML = "Nie możesz wpisywać cyfr";
    }else ex3Exception.innerHTML = "";
});

//Zad. 5

function counter(){
    let getex5 = document.getElementById("ex5");
    let span = getex5.querySelector("span");
    let button = document.getElementById("ex5-button");
    let counter = Number(span.innerHTML);

    function count()
    {
        counter++;
        span.innerHTML = counter;

        if(counter >= 10) {
            button.removeEventListener("click", count);
        }
    }

    button.addEventListener("click", count);
}

counter();

//Zad. 6

document.addEventListener('scroll', (event) => {
    
    var where = window.scrollY;
    var body = document.querySelector('body');
    
    if (where > 200) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'white';
    }
});

//Zad. 7

const calc = () => {
    let input = document.querySelectorAll('#calculator>div:first-of-type>button');
    let output = document.querySelector('#calculator>input');
    let actions = document.querySelectorAll('#calculator>:nth-child(5)>button');
    
    for(const el of input){
        el.addEventListener('click', ()=> {
            output.value =el.innerHTML;
        })
    }
    
    let tempWynik = [];
    
    const actionCreators = (object) =>{
        console.log(object)
        tempWynik.push(output.value,object.innerText)
         console.log(tempWynik)
        output.value=null
        if(tempWynik.length >3){
            output.value = eval(tempWynik.slice(0,-1).join(""))
        }
    }
    
    for (const element of actions) {
        element.addEventListener('click', () => {
            console.log(element.innerText)
            actionCreators(element)
        })
    }    
} 
calc();