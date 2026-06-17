const changetext = [
    "dynamic teams",
    "increased productivity",
    "improved collaboration",
    "smart workflows",
    "better organization",
    "You"
];

const text = document.querySelector("#changing-text");

let index = 0;

setInterval(() => {
    index++;

    if (index >= changetext.length) {
        index = 0;
    }

    text.style.animation = "none"
    text.offsetHeight;
    text.textContent = changetext[index];
    text.style.animation = "dropIn 0.6s ease"

}, 2000)


const overlay = document.querySelector(".overlay");
const signPage = document.querySelector("#signup-page");
const form = document.querySelector("form");

const confirmPassword = document.querySelector("#confirm-password")


const signupbtn = document.querySelector("#signup-btn")


const fullName = document.querySelector("#fullname")
const nameRequiredError = document.querySelector(".name-required-error");
const nameConditionError = document.querySelector(".name-condition-error");
const nameVerifyError = document.querySelector(".name-verify");


fullName.addEventListener("input" , function(){
    const nameRegex = /^[A-Za-z ]+$/;
    
    const name = fullName.value.trim();
    
    if (name === "") {
        nameRequiredError.style.display = "flex"
        nameConditionError.style.display = "none"
        nameVerifyError.style.display = "none"
        name.style.borderColor = "red"
    }else if(name.length < 2) {
        nameConditionError.style.display = "flex"
        name.style.borderColor = "red"
    }else if(!nameRegex.test(name)) {
        nameVerifyError.style.display = "flex"
        name.style.borderColor = "red"
    }else {
        nameRequiredError.style.display = "none";
        nameConditionError.style.display = "none";
        nameVerifyError.style.display = "none";
        name.style.borderColor = "green"
    }
})

// Full Name Input Verification done 

const email = document.querySelector("#Email")
const emailRequiredError = document.querySelector(".email-required-error");
const emailConditionError = document.querySelector(".email-condition-error");
const emailVerifyError = document.querySelector(".email-verify");

email.addEventListener("input", function(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const emailValue = email.value.trim()
    if(emailValue === ""){
        emailRequiredError.style.display = "flex"
         emailConditionError.style.display = "none"
         emailVerifyError.style.display = "none"
        email.style.borderColor = "red"
    }else if(emailValue.includes(" ")){
        email.style.borderColor = "red"
    }else if(!emailRegex.test(emailValue)){
        emailVerifyError.style.display = "flex"
        email.style.borderColor = "red"
    }else{
        emailRequiredError.style.display = "none";
        emailConditionError.style.display = "none";
        emailVerifyError.style.display = "none";
        email.style.borderColor = "green"
    }
    
})
// Email Input Verification done



const password = document.querySelector("#password")
const passwordRequiredError = document.querySelector(".password-required-error");
const passwordConditionError = document.querySelector(".password-condition-error");
const passwordVerifyError = document.querySelector(".password-verify");

password.addEventListener("input", function () {

    const passwordValue = password.value.trim();

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (passwordValue === "") {
        passwordRequiredError.style.display = "flex";
        passwordConditionError.style.display = "none";
        passwordVerifyError.style.display = "none";
        password.style.borderColor = "red";
    } else if (passwordValue.length < 8) {
        passwordConditionError.style.display = "flex";
        password.style.borderColor = "red";
    } else if (!passwordRegex.test(passwordValue)) {
        passwordVerifyError.style.display = "flex";
        password.style.borderColor = "red";
    } else {
        passwordRequiredError.style.display = "none";
        passwordConditionError.style.display = "none";
        passwordVerifyError.style.display = "none";
        password.style.borderColor = "green";
    }

});







signupbtn.addEventListener("click", function (eventdets) {
    eventdets.preventDefault();

   















    const userInfo = {
        fullName,
        email,
        password,
        confirmPassword
    }


















    console.log(userInfo.fullName.value)
    console.log(userInfo.email.value)
    console.log(userInfo.password.value)
    console.log(userInfo.confirmPassword.value)
})