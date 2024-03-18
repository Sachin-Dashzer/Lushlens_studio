

function count_start(item, j) {
    let i = 0;
    let numinter = setInterval(() => {
        item.textContent = `${Math.trunc(i)}`;
        if (i < j) {
            i += j / 20;
        }
        else {
            i = 0;
            clearInterval(numinter);
        }
    }, 100);
}

const elementv = document.querySelector("#count-container");
const count = document.querySelectorAll(".counting h1 span");

let num = true;

window.addEventListener('scroll', function (event) {

    if (this.window.scrollY >= 300 || this.window.scrollY <= 400) {
        if (num === true) {
            count_start(count[0], 10);
            count_start(count[1], 200);
            count_start(count[2], 150);
        }

    }

    num = false;
});











function img_slider(i) {
    finalposition = -i * 100 + '%';
    document.querySelector("#img-section .photograph-container ").style.transform = 'translateX(' + finalposition + ')';
}



const img_section = document.querySelectorAll("#img-section .btn-section button");
const img_section_img = document.querySelectorAll("#img-section .photograph-container .photograph-box");
let utemp = 0;



img_section.forEach((item, i) => {
    img_section_img[i].style.transform = `translateX(${i * 100}%)`;

    item.addEventListener('click', () => {

        img_slider(i);
        utemp = i;
    })
})


setInterval(() => {

    if (img_section_img.length == utemp) {
        utemp = 0;
    }
    img_slider(utemp);
    utemp++;

}, 5000);




const comment_section = document.querySelector(".comment-moving-box");
const comments = document.querySelectorAll(".comment-moving-box .comment-box");
let ctemp = 0;

console.log(comment_section);

// comments.forEach((item, i) => {

//     item.style.transform = `translateX(${i * 100}%)`;
// })

setInterval(() => {
    

    if (comments.length == ctemp) {
        ctemp = 0;
    }


    finalposition = -ctemp * 100 + '%';
    comment_section.style.transform = 'translateY(' + finalposition + ')';

    ctemp++;

}, 5000);