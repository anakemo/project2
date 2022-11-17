
// navbar


let nav=document.getElementById("navigation");
function cerateNav(){
    
    let navNames=["home", "drinks","carrer","about us " ,];
    let navLinks=['index.html', 'drinks.html','carrer.html','aboutus.html'];
    console.log(navNames);

    let ul=document.createElement("ul");
    ul.classList.add('navUl');
    

    for (let i = 0; i < navNames.length; i++) {
        let li = document.createElement("li");
        li.classList.add("navLi")
        let a = document.createElement("a");
        a.setAttribute("href", navLinks[i]);
        a.innerText = navNames[i];
        li.appendChild(a);
        ul.appendChild(li);

        
    }
    nav.appendChild(ul);


}
cerateNav();


    // --


    let logIN=document.getElementById("faUser");
let logBox=document.getElementById("logHidden");
let closeLogBox=document.getElementById("fa-xmark");


logIN.addEventListener("click",function(){
    logBox.style.cursor=("pointer");
    logBox.style.display=("block");
    

})

closeLogBox.addEventListener("click",function(){
    logBox.style.cursor=("pointer");
    logBox.style.display=("none");

})

let enLop=document.getElementById("fa-envelope");
let textHidBox=document.getElementById("textushidden");
let closeTextBox=document.getElementById("fa-xmarkTex");

enLop.addEventListener("click",function(){
    textHidBox.style.cursor=("pointer");
    textHidBox.style.display=("block");
    

})

closeTextBox.addEventListener("click",function(){
    textHidBox.style.cursor=("pointer");
    textHidBox.style.display=("none");

})


  
