let data=[
{
id:1,
imageUrl:"image/image5.jpg",
title:"The Simple Appeal of Scotch and Coconut",


},
{
    id:2,
    imageUrl:"image/image1.jpg",
    title:'It s High Time for a Prince of Wales Cocktail',
    
    
},
{
        id:3,
        imageUrl:"image/image2.jpg",
        title:'It s High Time for a Prince of Wales Cocktail',
        
        
},
{
            id:4,
            imageUrl:"image/image3.jpg",
            title:'It s High Time for a Prince of Wales Cocktail',
            
            
}

];


const arrowLeft=document.getElementById("arrow-left");
const arrowRightt=document.getElementById("arrow-right");
const sliderContent=document.getElementById("slider-content");
const dotchild=document.getElementsByClassName("child");

let sliderIndex=0;

function createDivTag(item){
    const divTag=document.createElement("div");
    divTag.classList.add("slide");
    return divTag;
}

function createImageTag(item){
    const imgTag=document.createElement("img");
    imgTag.setAttribute('src',item.imageUrl);
    imgTag.setAttribute('alt',item.title);
    imgTag.classList.add('image-slider');
    return imgTag;
}

function createH3tag (item){
const h3Tag=document.createElement("h3");
h3Tag.innerText=item.title;

return h3Tag;

}

function createDots(){
    const dots=document.createElement("div");
    dots.classList.add("dots-parent");
    data.forEach(element=>{
        const childDot=document.createElement("div");
        childDot.classList.add("child");
        childDot.setAttribute('data-id',element.id-1);
        dots.appendChild(childDot);


childDot.addEventListener('click',function(event){
    let id =event.target.getAttribute('data-id');
    sliderIndex=id;
    setslide();
})

    })
    return dots;
}

function setslide(){
    sliderContent.innerHTML=" ";
    const slideItem=createDivTag(data[sliderIndex]);
    const tagImage=createImageTag(data[sliderIndex]);
    // const tagH3=createH3tag(data[sliderIndex]);
    const doTts=createDots();
    // const slideBox=document.getElementById('slider-wraper');

    slideItem.appendChild(tagImage);
    // slideItem.appendChild(tagH3);
    sliderContent.appendChild(slideItem);
    sliderContent.appendChild(doTts);
    // slideBox.appendChild(sliderContent);







    dotactive();


}

function dotactive(){
    dotchild[sliderIndex].classList.add('activeDot');

}

function arrowLeftclick(){
if(sliderIndex==0){
    sliderIndex=data.length-1;
    setslide();
    return;
}
sliderIndex--;
setslide();

}

function arrowRightclick(){
    if(sliderIndex==data.length-1){
        sliderIndex=0;
        setslide();
        return;
    }

    sliderIndex++;
    setslide();

}


// arrowLeft.addEventListener("click", arrowLeftclick());
// arrowRightt.addEventListener('click', arrowRightclick());





setInterval(()=>{
    arrowRightclick();
},2000);

setslide();


// let logIN=document.getElementById("faUser");
// let logBox=document.getElementById("logHidden");
// let closeLogBox=document.getElementById("fa-xmark");


// logIN.addEventListener("click",function(){
//     logBox.style.cursor=("pointer");
//     logBox.style.display=("block");
    

// })

// closeLogBox.addEventListener("click",function(){
//     logBox.style.cursor=("pointer");
//     logBox.style.display=("none");

// })

// let enLop=document.getElementById("fa-envelope");
// let textHidBox=document.getElementById("textushidden");
// let closeTextBox=document.getElementById("fa-xmarkTex");

// enLop.addEventListener("click",function(){
//     textHidBox.style.cursor=("pointer");
//     textHidBox.style.display=("block");
    

// })

// closeTextBox.addEventListener("click",function(){
//     textHidBox.style.cursor=("pointer");
//     textHidBox.style.display=("none");

// })