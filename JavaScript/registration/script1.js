let username = document.getElementById('username');
let usernameError = document.getElementById('usernameError');
let email = document.getElementById('email');
let emailError = document.getElementById('emailError');
let password = document.getElementById('password');
let passwordError = document.getElementById('passwordError');
let age = document.getElementById('age');
let gender = document.querySelectorAll('input[name=gender]');
let phone = document.getElementById('phone');
let phoneError = document.getElementById('numberError');
let address = document.getElementById('address');
let addressError = document.getElementById('addressError');
let course = document.getElementById('course');
let language = document.querySelectorAll('input[name=language]');


//username
username.addEventListener('focusout', () => {
  if (username.value == '') {
    usernameError.innerHTML = '*Please enter a username*';
   //alert('Please enter your name');
    return false;
  }
    else if(!(username.value<=65 || username.value>=90 ) && !(username.value<=97 || username.value>=122 ))
    {
      usernameError.innerHTML = '*enter valid username*';
      return false;
    }
 else {
    usernameError.innerHTML = '';
  }
});

//mail
email.addEventListener('focusout', () => {
  if (email.value == '') {
    emailError.innerHTML = '*Please enter an email*';
    if (username.value == '') {
      //alert('Please enter your mail id');
    }
    return false;
  } else {
    emailError.innerHTML = '';
  }
});

//password
password.addEventListener('focusout', () => {
  if (password.value == '') {
    //alert('Enter the password');
    passwordError.innerHTML = '*Password is required*';
 return false;
  }
  
  else if (password.value.length < 8) {
    passwordError.innerHTML = 'Password must be at least 8 characters long';
    //alert('Password must be at least 8 characters long');
  }
  else {
    passwordError.innerHTML = '';
  }
});

//age
age.addEventListener('focusout', () => {
  if (age.value == '') {
    ageError.innerHTML = '*required age*';
    return false;
  }
  else 
    ageError.innerHTML = '';

age.addEventListener('key', () => {
  if (!(age.value >= 48 && age.value <= 57)) {
    ageError.innerHTML = '*please enter valid age*';
    
  } else {
    ageError.innerHTML = '';
  }
});
});

//phone
phone.addEventListener('focusout', () => {
  if (phone.value == '') {
    phoneError.innerHTML = '*Phone number is required*';
    //alert('Please fill the phone number field  ');
    return false;
  }
  else if (phone.value.length > 11)
    phoneError.innerHTML = '*Check the number*';
    else if((!phone.value>=48 && !phone.value<=57)){
      phoneError.innerHTML='enter valid number';
    }
  else {
    phoneError.innerHTML = '';
  }
});

//address
address.addEventListener('focusout', () => {
  if (address.value == '') {
    //alert('please typed the address  ');
    addressError.innerHTML = '*address is required*';
    return false;
  }
  else
    addressError.innerHTML = '';
});   