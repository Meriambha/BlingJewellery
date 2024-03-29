/* Get Data for contact Form */
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

/* Validate Data for contact Form  */
function validateForm(){

    clearMessages();
    let errorFlag = false;

    if(nameInput.value.length<1){
        errorNodes[0].innerText = "Name cannot be blanck";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email address";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(!emailIsValid(email.value)){
        errorNodes[1].innerText = "Invalid Email address";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }
    if(message.value.length < 1){
        errorNodes[2].innerText = "Please enter your message";
        message.classList.add("error-border");
        errorFlag = true;
    }
    if(!errorFlag){
        success.innerText = "Success!"
    }
}


/* Clear error / success messages  for contact Form  */
function clearMessages(){
    for(let i = 0; i < errorNodes.length; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.add("error-border");
}

/* Check if email is valid for contact Form  */
function emailIsValid(email){
    let pattern = /\S+@\S+.\S+/;
    return pattern.test(email);
}

