

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


    if (this.window.scrollY >= 350 && this.window.scrollY <= 450) {
        if (num === true) {
            console.log(this.window.scrollY);

            count_start(count[0], 10);
            count_start(count[1], 200);
            count_start(count[2], 150);
        }



            num = false;
    }

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


const comment_section = document.querySelector(".comment-moving-box");
const comments = document.querySelectorAll(".comment-moving-box .comment-box");
const comment_btn = document.querySelectorAll(".comment-slider-btn");
let ctemp = 0;

comment_btn.forEach((item , i) => {

    item.addEventListener('click', () => {
        comment_slider(i);
    });
});

function comment_slider(i){

    if (i == 0) {
        ctemp++;
    }
    else {
        ctemp--;
    }


    if(ctemp == comments.length){
        ctemp = 0;
    }
    if(ctemp < 0){
        ctemp = comments.length - 1;
    }

    finalposition = -ctemp * 100 + '%';
    comment_section.style.transform = 'translateY(' + finalposition + ')';



}




let logobox = document.querySelectorAll(".logos .logos-slide");
let imgtemp = 1;

logobox.forEach((item) => {


    for(let i = 0; i< 16; i++){
        item.innerHTML += `<div><img class="mx-4 md:mx-8" src="../assest/logo-${imgtemp}.png" alt=""></div>`;
        imgtemp++;
    }


    if(imgtemp == 32){
        imgtemp = 1;
    
    }

})





const details_box = document.querySelectorAll(".process-details");
const details_text = document.querySelectorAll(".process-text");


details_box.forEach((item , i) => {

    item.addEventListener('click', () => {

        details_text[i].classList.toggle("open");

    })



});


