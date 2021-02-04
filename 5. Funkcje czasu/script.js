const zad1 = () => {
    var counter = 1;

    var x = setInterval(function()
    {
        console.log(`Cześć po raz ${counter}`);
        if(counter >= 15)
        {
            clearInterval(x);
        }
        counter ++;
    }, 3000);
}

const zad2 = () => {
    console.log("Zad. 2");

    const arr = [1, 2, 3, 4, 5];
    let y = setTimeout(() => {
        console.log(...arr);
        clearTimeout(y);
    }, 2000);

    let y = 0;
    const int = setInterval(() => {
        if(y < arr.length) {
            console.log(arr[y]);
            y++;
        } else clearInterval(int);
    }, 3000); 
}

(() => {
    zad1();
    zad2();
})()