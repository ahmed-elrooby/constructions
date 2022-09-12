let customer = document.getElementById("customer");
let contractor = document.getElementById("contractor");
let contractorForm = document.querySelector(".form .contractorform");
let customerform = document.querySelector(".form .customerform");
customer.addEventListener("click", (e) => {
    contractorForm.style.display = "none";
    customerform.style.display = "block";
    
    customer.classList.add("active");
    contractor.classList.remove("active");
})
contractor.addEventListener("click", (e) => {
    customerform.style.display = "none";
    contractorForm.style.display = "block";
    contractor.classList.add("active");
    customer.classList.remove("active");
})
window.addEventListener("load", (e) => {
    contractor.classList.add("active")
})