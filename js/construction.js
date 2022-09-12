let btn4 = document.getElementById("btn4");
window.onscroll = function () {
    if (scrollY >= 400) {
        btn4.style.display = "flex";
    } else {
                btn4.style.display = "none";

    }
}
btn4.onclick = function () {
    this.scroll({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}



// ###################
let buttons = document.querySelectorAll(".constr input[type='radio']");
let three = document.querySelector(".pro .threedmodel input[type = 'file']");

buttons.forEach(function (e) {
    e.addEventListener("click", function () {
        three.disabled = "true";
    });
});

three.addEventListener("change", function () {
    buttons.forEach(function (element) {
        element.disabled = "true";
       
    });
});
// //////////////////////
// let radio = document.querySelectorAll("input[type='radio']");
// let file = document.querySelector("input[type='file']");
// file.addEventListener("change", () => {
//     radio.forEach((e) => {
//         e.disabled = "true";
        
//     });
// });
// radio.forEach((e) => {
//     e.addEventListener("click", () => {
       

//         file.disabled = "true";
        
//     })
// }) 
  




let mood = document.querySelector(".mode i");
mood.addEventListener("click", (e) => {
    document.body.classList.toggle(".darkl");
})



