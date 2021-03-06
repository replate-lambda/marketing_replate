const accountSlide = document.querySelector(".account-slide");
const businessSlide = document.querySelector(".business-slide");
// Buttons:
const continueBtn = document.querySelector(".continue");
const returnBtn = document.querySelector(".return");
const signUpBtn = document.querySelector(".sign-up");

const userData = {};

continueBtn.addEventListener('click', (e) => {
    businessSlide.classList.remove("hidden");
    accountSlide.classList.add("hidden");
    userData.name = document.forms["sign-up-form"]["name"].value;
    userData.phone = document.forms["sign-up-form"]["phone"].value;
    userData.email = document.forms["sign-up-form"]["email"].value;
    userData.password = document.forms["sign-up-form"]["password"].value;
    userData.repeatPassword = document.forms["sign-up-form"]["repeat-password"].value;
});

returnBtn.addEventListener('click', (e) => {
    businessSlide.classList.add("hidden");
    accountSlide.classList.remove("hidden");
});

signUpBtn.addEventListener('click', (e) => {
    userData.businessName = document.forms["business-sign-up-form"]["business-name"].value;
    userData.businessAddress = document.forms["business-sign-up-form"]["business-address"].value;
    userData.businessEmail = document.forms["business-sign-up-form"]["business-email"].value; 
});
