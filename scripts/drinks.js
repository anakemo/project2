let mainWraper=document.getElementById("cocktailsWraper");
let cockOverlay=document.getElementById("overlay");
let overlayContent=document.getElementById("content");
let closeOverlay=document.getElementById("close");
let drinkAdd=document.getElementById("add");
let drinkOverlay=document.getElementById("overlay-add");
let form=document.getElementById("forma");
let input=document.getElementById("drinktitle");
let drdescription=document.getElementById("description");
let subbmintButton=document.getElementById("sub");


function ajax(url,callback){
    let requestPost=new XMLHttpRequest();
    requestPost.open("GET",url);
    requestPost.addEventListener("load",function(){
    
        let dataResponse=JSON.parse(requestPost.responseText);
        callback(dataResponse);
       
        

    })

    requestPost.send();
}



function createCocktailsLogic(item){
    const divWraper=document.createElement("div");
    divWraper.classList.add("cocktails");
    divWraper.setAttribute("data-id",item.idDrink);

    // const h2cocktails=document.createElement("h2");
    // h2cocktails.innerText=item.strDrink+item.idDrink;

    const h3cocktails=document.createElement("h3");
    h3cocktails.innerText=item.strIngredient1+item.strIngredient2+item.strIngredient3;
    const instructions=document.createElement("p");
    instructions.innerText=item.strInstructions;
    instructions.classList.add("instructionscocktails");
    const image=document.createElement("img");
    image.src=item.strDrinkThumb;
    image.classList.add("cocktailsimage");
    const deleteBox=document.createElement("button");
    deleteBox.classList.add("delbut");
    deleteBox.textContent="delete drink";
    deleteBox.setAttribute("data-id",item.idDrink);

    // divWraper.appendChild(h2cocktails);
    divWraper.appendChild(h3cocktails);
    divWraper.appendChild(instructions);
    divWraper.appendChild(image);
    divWraper.appendChild(deleteBox);
    deleteBox.addEventListener("click",function(event){
        
        event.stopPropagation();
            let id=(item.idDrink);
            let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=5${id}';
            fetch(url,{
                method:"DELETE",
            });
            divWraper.style.display=("none");

            console.log(id);

           

        });

    divWraper.addEventListener("click",function(event){

        let id=(item.idDrink)
        cockOverlay.classList.add("activeOverlay");
        console.log(id);

        let url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=5${id}';
        ajax(url,function(dataResponse){
            console.log(dataResponse);
            overlayContent.innerText=(item.strInstructions+
            item.strIngredient1+item.strIngredient2+item.strIngredient3+item.strInstructionsIT);
        })
      
    });


    mainWraper.appendChild(divWraper);
    console.log(mainWraper);

}

drinkAdd.addEventListener("click",function(){
    drinkOverlay.classList.add("active-add");
    input.value="  ";
    drdescription.value="  ";

})

form.addEventListener("submit",function(event){
    event.preventDefault();
    let newdrinksData={
        strDrink: event.target[0].value,
        strInstructions:event.target[1].value,
        strDrinkThumb:"https://www.thecocktaildb.com/images/media/drink/ysuqus1441208583.jpg",

    }
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=5',{
        method:"POST",
        body:JSON.stringify(newdrinksData),
        // headers:{
        //     'Content-type': 'application/json; charset=UTF-8',
        // },

    })
    .then((response)=>response.json())
    .then((newDrink) =>{
        createCocktailsLogic(newDrink);
        drinkOverlay.classList.remove("active-add");

    })


})




closeOverlay.addEventListener("click",function(){
    cockOverlay.classList.remove("activeOverlay");

})


ajax("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=5",function(dataResponse){
   
    dataResponse.drinks.forEach(item => {
        createCocktailsLogic(item);

    });

});