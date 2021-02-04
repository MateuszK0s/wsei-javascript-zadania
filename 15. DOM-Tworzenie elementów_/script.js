// zad. 1
function zad1() {
    let root = document.getElementById("root");
    let divelement = document.createElement("div");
    divelement.innerHTML = "To jest nowy element";

    root.appendChild(divelement);
}

//zad. 2
function zad2() {
    let ul = document.createElement("ol");
    ul.classList = "task2Ul";
    let fruits = ["Ananas", "Brzoskwinia", "Jablko", "Banan", "Mandarynka", "Pomarancza", "Gruszka"]

    fruits.forEach(fruitName => {
        let newLi = document.createElement("li");
        newLi.innerHTML = fruitName;
        ul.appendChild(newLi);
    });

    let root = document.getElementById("root");
    root.appendChild(ul)
}

//zad. 3
let ul = document.createElement("ol");
    ul.classList = "task2Ul";
    let fruits = ["Ananas", "Brzoskwinia", "Jablko", "Banan", "Mandarynka", "Pomarancza", "Gruszka"]

    fruits.forEach(fruitName => {
        let newLi = document.createElement("li");
        newLi.innerHTML = fruitName;
        ul.appendChild(newLi);
    });

    let root = document.getElementById("root");
    root.appendChild(ul)

function zad3() {
    
    let ul = document.getElementsByClassName('task2Ul')[0];
    let elements = ul.querySelectorAll("li");

    for (let i = 1; i < elements.length; i += 2) {
        elements[i].remove();
    }
}

//zad. 4
function zad4() {
    let root = document.getElementById("root");
    let btn = document.createElement("button");
    btn.innerHTML = "klik";

    btn.addEventListener("click", function () {
        btn.remove();
    });

    root.appendChild(btn);
}

//zad. 5
function zad5() {
    let root = document.getElementById("root");
    let rnd = Math.floor(Math.random() * (15)) + 1;
    
    for (let i = 1; i <= rnd; i++) {
        let newElement = document.createElement("div");
        newElement.innerHTML = `div nr. ${i}`;
        root.appendChild(newElement);
    }
}

//zad 6
function zad6()
{
    let root = document.getElementById("root");   
    let div1 = document.createElement("div");
    div1.innerHTML = "to jest div";
    let span1 = document.createElement("span");
    span1.innerHTML = "to jest span";
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    div3.innerHTML = "to jest div";
    let span2 = document.createElement("span");
    span2.innerHTML = "to jest span";

    root.appendChild(div1);
    root.appendChild(span1);
    
    div2.appendChild(div3);
    root.appendChild(div2);
    root.appendChild(span2);
}

//zad. 8
function zad8() {
    let root = document.getElementById("root");
    let btn = document.createElement("button");
    btn.innerHTML = "Utwórz";

    let form = document.createElement("div");
    let element = document.createElement("input");
    element.placeholder = "Typ";
    
    let txt = document.createElement("input");
    txt.placeholder = "Tekst";
    
    let color = document.createElement("input");
    color.placeholder = "Kolor";
    
    let counter = document.createElement("input");
    counter.placeholder = "Ilość elementow";
    counter.type = "number";
    
    form.appendChild(element);
    form.appendChild(txt);
    form.appendChild(color)
    form.appendChild(counter);
    root.appendChild(form);
    root.append(btn);

    btn.addEventListener("click", function () {
        let count = counter.value;
        if (isNaN(count) || count < 1)
            return;

        for (let i = 0; i < count; i++) {
            let newElement = document.createElement(element.value);
            newElement.innerHTML = txt.value;
            newElement.style.color = color.value;
            root.appendChild(newElement);
        }
    })
}

//zad. 9

function zad9()
{
    let array = ['Imię', 'Nazwisko', 'Wiek', 'Ilość dzieci'];
    let form = document.createElement('form');
    let createButton = document.createElement('button');
    let moreButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    createButton.textContent = 'Utwórz';
    moreButton.textContent = 'Więcej';
    deleteButton.textContent = 'Usuń';

    form.appendChild(createFields(array));
    form.appendChild(moreButton);
    form.appendChild(createButton);

    moreButton.addEventListener('click', () => {
        let addRows = document.querySelectorAll('.more-rows');
        let lastRow = addRows[addRows.length - 1];
        lastRow.after(createFields(array));
    });

    form.addEventListener('submit', createTable);

    function createFields(el) {
        let fieldsRow = document.createElement('div');
        fieldsRow.className = 'more-rows';
        el.forEach((value) => {
            let field = document.createElement('input');
            field.placeholder = value;
            fieldsRow.appendChild(field);
        });
        return fieldsRow;
    }

    function createTable(e) {
        e.preventDefault();

        let defaultTable = document.getElementById('def-table');

        if (defaultTable) {
            defaultTable.remove();
        }

        let table = document.createElement('table');
        let tbody = document.createElement('tbody');
        let thead = document.createElement('thead');
        let rows = document.querySelectorAll('.more-rows');

        array.forEach((header) => {
            let th = document.createElement('th');
            th.textContent = header;
            thead.appendChild(th);
        });

        rows.forEach((row) => {
            let tr = document.createElement('tr');
            let children = Array.from(row.children);
            let values = children.map((child) => child.value);
            values.forEach((value) => {
                let td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        table.id = 'def-table';
        table.appendChild(thead);
        table.appendChild(tbody);

        createButton.after(table);

        form.reset();
    }
    document.getElementById('root').appendChild(form);
}

//zad 10
function zad10()
{
    let check = document.querySelectorAll('.more-rows input');
    check.forEach((field) => {
      field.addEventListener('input', (event) => {
        let formattedText =
          field.value.charAt(0).toUpperCase() + field.value.slice(1);
        event.target.value = formattedText;
      });
    });
}


//zad 11
function zad11() {
    let root = document.getElementById("root");
    let check = (str) => /^\d+$/.test(str);
  
    function counter(str) {
        let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (check(str[i]))
                    count++;
            }
        return count;
    }
  
    function test(str) {
        let count = counter(str);
        console.log(`Suma: ${count}`)
  
        for (let i = 0; i < count; i++) {
            let newElement = document.createElement("div");
            newElement.innerHTML = str;
            root.appendChild(newElement);
        }
    }
    let txt = "1 2 3 szukasz ty";
    test(txt);
  }

  //zad. 12
  function zad12() {
    let obj = {
        name: ""
    };

    function replacer(str) {
        obj.name = str;

        if (str.includes("Ala")) {
            obj.name = str.replace("Ala", "Ola");
            console.log(`12) ${obj.name}`)
        } else {
            let root = document.getElementById("root");
            let div = document.createElement("div");
            div.innerHTML = "Słowo Ala nie występuje w tekście.";
            root.appendChild(div);
        }
    }

    let txt = "Basia Asia Kasia Pola.";
    replacer(txt);
}

//zad 14

function zad14() {
    var obj = {
        name: "",
        surname: "",
        age: ""
    }

    var clone = Object.assign({}, obj);

    function check(name, surname, age) {
        obj.name = name;
        obj.surname = surname;
        obj.age = age;

        function newField(prop, char) {
            let lenght = "";
            for (let i = 0; i < name.length; i++) {
                lenght += char;
            }
            obj[lenght] = prop;
        }
        
        newField(name, "n");
        newField(surname, "s");
        newField(age, "a");

        if (name.length > 5 || surname.length > 5 || age.length > 5) {
            console.log(obj);
            
            let root = document.getElementById("root");
            let button = document.createElement("button");
            button.innerHTML = "Wróć do stanu początkowego";
            root.appendChild(button);

            button.addEventListener("click", function () {
                obj = clone;
                console.log(obj);
            });
        }
    }
    check("Mateusz", "Kos", 22);
}

//zad. 13
function zad13() {
    let isLetter = (str) => str.length === 1 && str.match(/[a-z]/i);
    let isNumber = (str) => /^\d+$/.test(str);

    function returnArray(strings)
    {
        let storage = [];
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isLetter(string[i])) {
                    if(string[i] in storage) {
                        storage[string[i]] += 1;
                    } else {
                        storage[string[i]] = 1;
                    }
                }
            }
        });
        return storage;
    }

    function sumAll(strings)
    {
        let sum = 0;
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isNumber(string[i])) {
                    sum += Number.parseInt(string[i]);
                }
            }
        });
        return sum;
    }

    function returnAvg(strings)
    {
        let sum = 0;
        let count = 0;
        strings.forEach(string => {
            for(let i = 0; i < string.length; i++) {
                if(isNumber(string[i])) {
                    count ++;
                    sum += Number.parseInt(string[i]);
                }
            }
        });
        return sum / count;
    }

    let array = ["1", "dwa", "3", "babajaga", "pa", "3."];
    console.log(returnArray(array));
    console.log(sumAll(array));
    console.log(returnAvg(array));
}

//zad 7
class Container 
{
    list1 = ["Ala", "ma", "kota", "a", "kot", "ma", "Ale"];
    list2 = [];
    
    ListContainer1 = null;
    ListContainer2 = null;

    button1 = null;
    button2 = null;

    showList1()
    {
        if(this.ListContainer1 == null)
            return;

        this.ListContainer1.innerHTML = "";

        this.list1.forEach(name => {
            let newElement = document.createElement("li");
            newElement.innerHTML = name;
            this.ListContainer1.appendChild(newElement);
        });
    }

    showList2()
    {
        if(this.ListContainer2 == null)
            return;
        
        this.ListContainer2.innerHTML = "";

        this.list2.forEach(name => {
            let newElement = document.createElement("li");
            newElement.innerHTML = name;
            this.ListContainer2.appendChild(newElement);
        });
    }

    switchToFirstList()
    {
        if(this.list2.length == 0)
            return;

        let ele = this.list2.pop();
        this.list1.push(ele);
        this.refreshState();
    }

    switchToSecondList()
    {
        if(this.list1.length == 0)
            return;

        let ele = this.list1.pop();
        this.list2.push(ele);
        this.refreshState();
    }

    refreshState()
    {
        if(this.list1.length == 0) {
            this.button1.disabled = true;
        } else this.button1.disabled = false;

        if(this.list2.length == 0) {
            this.button2.disabled = true;
        } else this.button2.disabled = false;

        this.showList1();
        this.showList2();
    }
}

function zad7()
{
    let root = document.getElementById("root");
    let ol1 = document.createElement("ol");
    ol1.classList = "ol1";
    let ol2 = document.createElement("ol");
    ol2.classList = "ol2";

    let container = document.createElement("div");
    container.classList = "myContainer";

    root.appendChild(container);
    container.appendChild(ol1);
    container.appendChild(ol2);

    let button1 = document.createElement("button");
    button1.innerHTML = "move to list2";
    let button2 = document.createElement("button");
    button2.innerHTML = "move to list1";

    root.appendChild(button1);
    root.appendChild(button2);

    let management = new Container();
    management.ListContainer1 = ol1;
    management.ListContainer2 = ol2;
    management.button1 = button1;
    management.button2 = button2;
    management.refreshState();

    button1.addEventListener("click", function () {
        management.switchToSecondList();
    });

    button2.addEventListener("click", function () {
        management.switchToFirstList();
    });
}