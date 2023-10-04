let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let age = document.getElementById('age');
let gender = document.querySelectorAll('input[name=gender]');
let phone = document.getElementById('phone');
let dropdown = document.getElementById('course');
let check = document.querySelectorAll('input[name=language]');
let area = document.querySelector('#address');
let submit = document.getElementById('submit');


function validateForm() {

  username.addEventListener('keypress', (event) => {
    let charCode = event.keyCode;
    if (username.value == '') {
      usernameError.innerHTML = '*Enter username*';
    } else if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
      usernameError.innerHTML = '*Enter valid username*';
      event.preventDefault();
      return true;
    } else {
      usernameError.innerHTML = '';
    }
  });

  // email
  email.addEventListener('focusout', () => {
    if (email.value == '') {
      emailError.innerHTML = '*Please enter an email*';
    } else {
      emailError.innerHTML = '';
    }
  });

  // password
  password.addEventListener('focusout', () => {
    if (password.value == '') {
      passwordError.innerHTML = '*Password is required*';
      return false;
    } else if (password.value.length < 8) {
      passwordError.innerHTML = 'Password must be at least 8 characters long';
    } else {
      passwordError.innerHTML = '';
    }
  });

  // age
  age.addEventListener('keypress', (event) => {
    let char = event.keyCode;
    if (age.value == '') {
      ageError.innerHTML = '*required age*';

    } else if ((char < 48 || char > 57)) {
      ageError.innerHTML = '*Enter valid age*';
      event.preventDefault();
      return true;
    } else {
      ageError.innerHTML = '';
    }
  });

  // phone
  phone.addEventListener('keypress', (event) => {
    let charCode = event.keyCode;
    if (phone.value === '') {
      phoneError.innerHTML = '*Phone number is required*';
      return true;
    } else if (phone.value.length >= 10) {
      phoneError.innerHTML = '*Check the number*';
      event.preventDefault();
      return true;
    } else if ((charCode < 48 || charCode > 57)) {
      phoneError.innerHTML = 'Enter valid number';
      event.preventDefault();
      return true;
    } else {
      phoneError.innerHTML = '';
    }
  });

  // address
  address.addEventListener('focusout', () => {
    if (address.value == '') {
      addressError.innerHTML = '*address is required*';
      return false;
    } else {
      addressError.innerHTML = '';
    }
  });
}

submit.addEventListener('click', () => {
  if (username.value == "") {
    alert('Please Enter your name');

  }
  else if (email.value == "") {
    alert('Please fill the mail box');
  }
  else if (password.value == "") {
    alert('Enter the  password');
  }
  else if (age.value == "0" || age.value == "") {
    alert('please enter the age');
  } else {
    let checked = false;
    for (let i = 0; i < gender.length; i++) {
      if (gender[i].checked) {
        checked = true;
      }
    }
    if (!checked) {
      alert('Please select a gender.');
    } else {
      if (phone.value == "") {
        alert('enter the phone number')
      }
      else if (phone.value.length >= 11) {
        alert('Check the number');
      }
      else {
        if (dropdown.value == 'select') {
          alert('Please select the course');
        }
        else {
          let checked2 = false;
          for (let j = 0; j < check.length; j++) {
            if (check[j].checked) {
              checked2 = true;
            }
          }
          if (!checked2) {
            alert('Please select a language.');
          } else {
            if (area.value == "") {
              alert('please fill the address');
            } else {
              alert('Form is registered successfully');
            }
          }
        }
      }
    }
  }

});
validateForm();