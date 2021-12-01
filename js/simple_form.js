// Salary Input

const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function(){
    output.textContent = salary.value;
});

// UC1 - Valid First Name 

const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
    text.addEventListener('input', function(){
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value)){
        textError.textContent = "";
    }
    else textError.textContent = "Name is Incorrect";
    });

// UC2 - Valid Email 

const email = document.querySelector('#emailInput');
const emailError = document.querySelector('.email-error');
email.addEventListener('input', function () {
    let emailRegex = RegExp('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$');
    if (emailRegex.test(email.value)) {
      emailError.textContent = "";
    } else 
      emailError.textContent = "Invalid Email";
    });

// UC3 - Valid Mobile Format 

const number = document.querySelector('#number');
const errnumber = document.querySelector('.number-error');
number.addEventListener('input', function () {
  let numberRegex = RegExp('^[1-9]{2}[0-9]{10}$');
  if (numberRegex.test(number.value)) {
    errnumber.textContent = "";
  } else 
    errnumber.textContent = "Mobile is incorrect";
  
});

// UC4 - Password Pattern Rule - 1

const pwd = document.querySelector("#pwd");
const errPass = document.querySelector(".pwd-error");
password.addEventListener('input',function(){
    let passRegex = RegExp("^[a-zA-Z]){8}$");
    if(passRegex.test(password.value)){
        errPass.textContent="";
    }else
        errPass.textContent="Enter valid password";
    
});