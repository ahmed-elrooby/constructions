function myNav(){
    let bar = document.getElementById("bar");
    let nav = document.querySelector(".navigation");
    
    bar.onclick=() =>{
        if(nav.style.right=="0%"){
            nav.style.right="-50%";
            bar.classList="fas fa-bars";
            header.classList.add("active")
            bar.style.cssText = "margin-left:12px";
            bar.style.cssText = "transform: rotate(180deg)";



        }else{
            nav.style.right="0%";
            bar.classList = "fa-solid fa-xmark";
            bar.style.cssText = "margin-left:16px";
        }
    }
} myNav();

function sayHeader(){  
     let header = document.getElementById("header");
     window.addEventListener("scroll",function(){
         if(this.window.scrollY > 0){
             header.classList.add("active")
         }
           
      
         else{
            
             header.classList.remove("active")
        
         }
     })
}sayHeader();




document.querySelectorAll("li a").forEach(function (l) {
    l.addEventListener("click", function () {
        document.querySelector(".accept").classList.remove("accept");
        l.classList.add("accept");
        
    })
})











