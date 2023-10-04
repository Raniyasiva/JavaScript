// const username = document.getElementById('username');
// const usernameError = document.getElementById('usernameError');
// const email = document.getElementById('email');
// const emailError = document.getElementById('emailError');
// const password = document.getElementById('password');
// const passwordError = document.getElementById('passwordError');
// let submit=document.querySelector('#submit');
// let alert="";
// // validate username field on focus out
// username.addEventListener('blur', () => {
    
//     alert+='please fill the user name';
//   if (username.value === '') {
//     usernameError.textContent = 'Please enter a username';
//   } 
//   else if (!username.match(/[a-z]/) || !username.match(/[A-Z]/)) {
//     usernameError.textContent = 'Please enter a correct  spelling';
//   }
// });

// // validate email field on focus out
// email.addEventListener('focusout', () => {
   
//   if (email.value === '') {
//     emailError.textContent = 'Please enter an email';
//   } else if (!email.value.includes('@')) {
//     emailError.textContent = 'Please enter a valid email';
//   } 
//   alert+='please fill the user mail';
// });

// // validate password field on focus out
// password.addEventListener('focusout', () => {
//   if (password.value === '') {
//     passwordError.textContent = 'Please enter a password';
//   } else if (password.value.length < 8) {
//     passwordError.textContent = 'Password must be at least 8 characters long';
//   } else {
//     passwordError.textContent = '';
//   }
//   alert+='please fill password';
// });

// submit.addEventListener('click',()=>{


// if (alert!==""){
//     alert('alert');
// }
// });
let username = document.getElementById('username');
let usernameError = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let age = document.getElementById('age');
let gender = document.querySelectorAll('input[name=gender]');
let genderError = document.getElementById('genderError');
let phone = document.getElementById('phone');
let phoneError = document.getElementById('numberError');
let address = document.getElementById('address');
let addressError = document.getElementById('addressError');
let language = document.querySelectorAll('input[name=language]');
let languageError = document.getElementById('langError');

let submit=document.querySelector('#submit');
let alertMsg="";

// validate username field on focus out
username.addEventListener('blur', () => {
 alertMsg += 'Please fill the username field';
  if (username.value === '') {
    usernameError.textContent = '*Usernme is required*';
  } 
  else if (!username.value.match(/[a-z]/) && !username.value.match(/[A-Z]/)) {
    usernameError.textContent = 'Please enter a correct spelling';
  }
});

// validate email field on focus out
email.addEventListener('focusout', () => {
  alertMsg += 'Please fill the email field';
  if (email.value === '') {
    emailError.textContent = 'Please enter a valid email';
  } 
});

// validate password field on focus out
password.addEventListener('focusout', () => {
  alertMsg += 'Please fill the password field';
  if (password.value === '') {
    passwordError.textContent = 'Please enter a password';
  } else if (password.value.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
  } 
});

gender.addEventListener('focusout', () => {
    alertMsg += 'select the gender';
    if (password.value === '') {
      passwordError.textContent = '*Gender is required*';
    } 
  });

submit.addEventListener('click', () => {
    if (alertMsg !== '') {
      alert(alertMsg);
    }
  });
