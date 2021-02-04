const zad1 = () => {
    const getLists = document.querySelectorAll(".list");
    getLists.forEach(l => {console.log(l)})
}

const zad2 = () => {
    const getElements = tagName => {
        const elements = document.querySelectorAll(tagName);
        elements.forEach(e => {console.log(e)});
    }; getElements("h1");
}

const zad3 = () => {
    const lists = document.querySelector("#list");
    console.log(lists);
}

const zad4 = () => {
    let find = (name) => {
        return document.querySelectorAll(name);
    }

    console.log("1. ", find("li"));
    console.log("2. ", find("ul"));
    console.log("3. ", find("span"));
    console.log("4. ", find("div.list span"));
    console.log("5. ", find("div#spans span"));
}

(() => {
    zad1();
    zad2();
    zad3();
    zad4();
})();