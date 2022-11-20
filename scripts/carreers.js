let forma=document.getElementById("forma");

forma.addEventListener("submit",function(event){
event.preventDefault();

let errors={};

let formElement=event.target;

let name=document.getElementById("name").value;
let surname=document.getElementById("surname").value;
let phone=document.getElementById("phone").value;
let email=document.getElementById("email").value;

let terms=document.getElementById("terms");
let pass1=document.getElementById("password1").value;
let pass2=document.getElementById("password2").value;



if(name.length<3){
errors.name="your name must contain at least 3 character";

}
if(surname==""){
errors.surname="this field can not be empty";
}



if(!phone.length > 6 && !phone.length < 11) {

errors.phone="please enter correct phone number";
}


let pattern=  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

if(!email.match(pattern)){
    errors.email="you email address is not valid";

}





let gender = false;


  formElement.querySelectorAll('[name="my_gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });
  if (!gender) {
    errors.gender = "Please select your gender";
  }


// gender.forEach((item) => {
//     if (!item.checked) {
//         errors.gender="please choose your gender";
        
//     }
    
// })

if(!terms.checked){
    errors.terms="you have to accept our terms and conditions";
}

if(pass1.length<4){
    errors.password1="password must be at least 4 characters";
}

if(pass2.length<4){
    errors.password2="password must be at least 4 characters";
}

if(!pass1.match(pass2)){
errors.password="passwords do not match" ;

}

let passwordField1 = document.getElementById("password1");
let passwordField2 = document.getElementById("password2");

let toggleIcon = document.getElementById("fa-eye");

toggleIcon.addEventListener("click", function () {
  if (passwordField1.type == "password" && passwordField2.type == "password") {
    passwordField1.setAttribute("type", "text");
    passwordField2.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordField1.setAttribute("type", "password");
    passwordField2.setAttribute("type", "password");
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  }})

// togg.addEventListener("click",function(){
//   pass1.input.type="text";
// //   pass1.value.type="text";
// })

formElement.querySelectorAll('.error-text').forEach((item)=>{
    item.textContent=" ";
})
for(let item in errors){
let spanError=document.getElementById('error_'+ item);
if(spanError){
    spanError.textContent=errors[item];
}

}

if (Object.keys(errors).length == 0) {
    formElement.submit();
  }


console.log(errors);







});
