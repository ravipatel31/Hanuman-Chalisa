function flip() {
    let x = document.querySelector(".page1");
    x.style.transform = "rotateY(-180deg)";
    setTimeout(line, 300)
}

let i = 1;
function line() {
    if (i <= 81) {

        let y = document.querySelector(`.p${i}`);
        y.classList.add('x');
        i++
        if (i == 25) {
            setTimeout(rotate, 2000)
        }
        if (i == 49) {
            setTimeout(rotate1, 2000)
        }
        if (i == 73) {
            setTimeout(rotate2, 2000)
        }
        if (i == 81) {
            setTimeout(rotate3, 2000)
        }
        setTimeout(line, 2000)
    }
}

function rotate() {
    let x = document.querySelector(".page2");
    x.style.transform = "rotateY(-180deg)";
    x.style.zIndex = 5;
}
function rotate1() {
    let x = document.querySelector(".page3");
    x.style.transform = "rotateY(-180deg)";
    x.style.zIndex = 5;
}
function rotate2() {
    let x = document.querySelector(".page4");
    x.style.transform = "rotateY(-180deg)";
    x.style.zIndex = 5;
}
function rotate3() {
    let x = document.querySelector(".page5");
    x.style.transform = "rotateY(-180deg)";
    x.style.zIndex = 5;
   flip1();
}
 function flip1(){
     let y=document.querySelector(".book");
    //  y.style.display='none'
     y.style.transform='translateX(210px)';
    }
    
setTimeout(flip, 2000)