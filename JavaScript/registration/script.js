// let username = document.querySelector('#username');
// let mail = document.querySelector('#email');
// let pw=document.querySelector('#pw');
// let num= document.getElementById('age');
// let gender = document.querySelectorAll('input[name=gender]');
// let phone = document.getElementById('phone');
// let dropdown = document.getElementById('course');
// let check = document.querySelectorAll('input[name=language]');
// let area=document.querySelector('#address');
// let submit = document.getElementById('submit');

// submit.addEventListener('click', () => {
//   if (username.value == "") {
//     alert('Please Enter your name');
//   }
//   else if (mail.value == "") {
//     alert('Please fill the mail box');
//   }
// else if(pw.value!=cpw.value || pw.value=="" || cpw.value==""){
//     alert('Enter the correct password');
// }
//  else if(num.value=="0"||num.value==""){
//     alert('please enter the age');
//   }
//   let checked = false;
//   for (let i = 0; i < gender.length; i++) {
//    if (gender[i].checked) {
//       checked = true;
//     }
//   }
//   if (!checked) {
//     alert('Please select a gender.');
//   }

//  else if (phone.value.length >= 11) {
//     alert('Check the number');
//   }

//   if (dropdown.value == 'select') {
//     alert('Please select the course');
//   }

//   let checked2 = false;
//   for (let j = 0; j < check.length; j++) {
//     if (check[j].checked) {
//       checked2 = true;
//     }
//   }

//   if (!checked2) {
//     alert('Please select a language.');
//   }

//   if(area.value=="")
//   alert('please fill the address');
//   if(submit==true)
//   alert("Form is registered");
// });
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password=document.querySelector('#password');
let age= document.getElementById('age');
let gender = document.querySelectorAll('input[name=gender]');
let phone = document.getElementById('phone');
let dropdown = document.getElementById('course');
let check = document.querySelectorAll('input[name=language]');
let area=document.querySelector('#address');
let submit = document.getElementById('submit');


function validateForm() {

  username.addEventListener('keypress', (event) => {
    let charCode = event.keyCode;
    if (username.value == '') {
      usernameError.innerHTML = '*Enter username*';
    } else if (!(charCode >= 65 && charCode <= 90) && !(charCode >= 97 && charCode <= 122)) {
      usernameError.innerHTML = '*Enter valid username*';
    } else {
      usernameError.innerHTML = '';
    }
  });
  

  // email
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
    let char = event.keyCode ;
    if (age.value == '') {
      ageError.innerHTML = '*required age*';
    } else if (char < 48 || char > 57) {
      ageError.innerHTML = '*Enter valid age*';
    } else {
      ageError.innerHTML = '';
    }
  });
  

  // phone
  phone.addEventListener('keypress', (event) => {
    let charCode = event.keyCode;
    if (phone.value == '') {
      phoneError.innerHTML = '*Phone number is required*';
      return false;
    } else if (phone.value.length > 11) {
      phoneError.innerHTML = '*Check the number*';
      return false;
    } else if ((charCode < 48 ||  charCode > 57)) {
      phoneError.innerHTML = 'Enter valid number';
      return false;
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
  if (username.value == "")
   {
    alert('Please Enter your name');
    
   }
    else if (email.value == "") 
   {
    alert('Please fill the mail box');
   } 
  else if (password.value =="")
   {
    alert('Enter the  password');
   }
   else if (age.value == "0" || age.value == "") 
   {
    alert('please enter the age');
   } else
   {
    let checked = false;
    for (let i = 0; i < gender.length; i++)
     {
      if (gender[i].checked) 
      {
        checked = true;
      }
     }
    if (!checked) 
    {
      alert('Please select a gender.');
    } else 
    {
      if (phone.value=="")
      {
        alert('enter the phone number')
      }
      else if(phone.value.length >= 11) 
      {
        alert('Check the number');
      } 
      else
     {
        if (dropdown.value == 'select')
         {
          alert('Please select the course');
        } 
        else
        {
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
              alert('Form is registered');
            }
          }
        }
      }
    }
  }
  
});
validateForm();

// function validation(){
//   username.addEventListener('keypress',function(event){
//     console.log(event.keyCode);
//     console.log(event.which);
//     var charchode=event.keyCode;
//     console.log(charchode);
//       if(charchode<65 || charchode>90){
//           console.log("inside if");
//           return false;
//       }else
//         return true;
//   });
// }
// function validateForm() {
//   if (username.value == "" || username.value==a>z||username.value==A>Z) {
//     alert('Please Enter your name');
//   }
//   if (mail.value == "") {
//     alert('Please fill the mail box');
//   }
//   if(pw.value!=cpw.value || pw.value=="" || cpw.value==""){
//     alert('Enter the correct password');
//   }
//   if(num.value=="0"||num.value==""){
//     alert('please enter the age');
//   }
//   let checked = false;
//   for (let i = 0; i < gender.length; i++) {
//     if (gender[i].checked) {
//       checked = true;
//     }
//   }
//   if (!checked) {
//     alert('Please select a gender.');
//   }

//   if (phone.value.length >= 11) {
//     alert('Check the number');
//   }

//   if (dropdown.value == 'select') {
//     alert('Please select the course');
//   }

//   let checked2 = false;
//   for (let j = 0; j < check.length; j++) {
//     if (check[j].checked) {
//       checked2 = true;
//     }
//   }

//   if (!checked2) {
//     alert('Please select a language.');
//   }

//   if(area.value=="")
//     alert('please fill the address');
//   if(submit==true)
//     alert("Form is registered");
// }

// // username.addEventListener('focusout', validateForm);
// let username = document.getElementById('username');
// let usernameError = document.getElementById('usernameError');
// let email = document.getElementById('email');
// let emailError = document.getElementById('emailError');
// let password = document.getElementById('password');
// let passwordError = document.getElementById('passwordError');
// let age = document.getElementById('age');
// let gender = document.querySelectorAll('input[name=gender]');
// let genderError = document.getElementById('genderError');
// let phone = document.getElementById('phone');
// let phoneError = document.getElementById('numberError');
// let address = document.getElementById('address');
// let addressError = document.getElementById('addressError');
// let language = document.querySelectorAll('input[name=language]');
// let languageError = document.getElementById('langError');

// let submit=document.querySelector('#submit');
// let alertMsg="";

// // validate username field on focus out
// username.addEventListener('blur', () => {
//  alertMsg += 'Please fill the username field';
//   if (username.value === '') {
//     usernameError.textContent = '*Usernme is required*';
//   } 
//   else if (!username.value.match(/[a-z]/) && !username.value.match(/[A-Z]/)) {
//     usernameError.textContent = 'Please enter a correct spelling';
//   }
// });

// // validate email field on focus out
// email.addEventListener('focus', () => {
//   alertMsg += 'Please fill the email field';
//   if (email.value === '') {
//     emailError.textContent = 'Please enter a valid email';
//   } 
// });

// // validate password field on focus out
// password.addEventListener('focusout', () => {
//   alertMsg += 'Please fill the password field';
//   if (password.value === '') {
//     passwordError.textContent = 'Please enter a password';
//   } else if (password.value.length < 8) {
//     passwordError.textContent = 'Password must be at least 8 characters long';
//   } 
// });

// phone.addEventListener('blur', () => {
//   alertMsg += 'Please fill the phonenumber field';
//   if (phone.value === '') {
//     phoneError.textContent = '*Phone number is required*';
//   } else if (!phone.value.match(/^[0-9]+$/)) {
//     phoneError.textContent = '*Please enter a valid phone number*';
//   }
// });

// submit.addEventListener('click', () => {
//     if (alertMsg !== '') {
//       alert(alertMsg);
//     }
//   });
// let username = document.getElementById('username');
// let usernameError = document.getElementById('usernameError');
// let email = document.getElementById('email');
// let emailError = document.getElementById('emailError');
// let password = document.getElementById('password');
// let passwordError = document.getElementById('passwordError');
// let age = document.getElementById('age');
// let gender = document.querySelectorAll('input[name=gender]');
// let phone = document.getElementById('phone');
// let phoneError = document.getElementById('numberError');
// let address = document.getElementById('address');
// let addressError = document.getElementById('addressError');
// let course=document.getElementById('course');
// let language = document.querySelectorAll('input[name=language]');


// let submit = document.querySelector('#submit');
// let alertMsg = "";

// validate username field
// username.addEventListener('focusin', () => {
//  usernameError.innerHTML = '';
// });

// username.addEventListener('focusout', () => {
  
//   if (username.value == '') {
//            alert('Please Enter your name');
         
//     usernameError.innerHTML = '*Please enter a username*';
//     return false;
//   } else if (!username.value.match(/[a-z]/) && !username.value.match(/[A-Z]/)) {
//     usernameError.innerHTML = 'Please enter a correct spelling';
//   }
//   else
//   usernameError.innerHTML = '';
// return false;
// });

// // validate email field 
// // email.addEventListener('focusin', () => {
// //   emailError.innerHTML = '';
// //  });

// email.addEventListener('focusout', () => {
 
//   if (email.value == '') { 
//     emailError.innerHTML = '*Please enter an email*';
//     alert('Enter the email field');
//     return false;
//   }
//   else
//   emailError.innerHTML = '';
 
// });

// // validate password field
// // password.addEventListener('focusin', () => {
// //   passwordError.innerHTML = '';
// // });

// // password.addEventListener('focusout', () => {  
// //   alert('Enter the password');
// //   if (password.value == '') {
// //     passwordError.textContent = '*Password is required*'; 
// //   } 
// //   else if (password.value.length < 8) {
// //     passwordError.innerHTML = 'Password must be at least 8 characters long';
// //   }
// //   else
// //   passwordError.innerHTML = '';
// // });
// password.addEventListener('focusout', () => {  
//   if (password.value == '') {
//     alert('Enter the password');
//     passwordError.innerHTML = '*Password is required*'; 
//     return false;
//   } 
//   else if (password.value.length < 8) {
//     passwordError.innerHTML = 'Password must be at least 8 characters long';
//     alert('Password must be at least 8 characters long');
//   }
//   else {
//     passwordError.innerHTML = '';
//   }
// });

// // validate age field
// // age.addEventListener('focusin', () => {
// //   ageError.innerHTML = '';
// // });

// age.addEventListener('focusout', () => { 
 
//   if (age.value == '') {
//     ageError.innerHTML = '*Please enter a valid age*';
//     alert( 'Please fill the age ');
//     return false;
//   } else if (!age.value.match(/[0-9]/)) {
//     ageError.innerHTML = '*Age is required*';
//   }
//   else
//     ageError.innerHTML = '';
// });

// // alert for gender field 
// // let checked = false;
// //   for (let i = 0; i < gender.length; i++) {
// //     if (gender[i].checked) {
// //       checked = true;
// //     }
// //   }
// //   if (!checked) {
// //     alert('Please select gender');
// //   }

// // validate phone field 
// // phone.addEventListener('focusin', () => {
// //   phoneError.innerHTML = '';
// // });

// phone.addEventListener('focusout', () => {
//   if (phone.value == '') {
//     phoneError.innerHTML='*Phone number is required*';
//     alert('Please fill the phone number field  ');
//     return  false;
//   }
//   else if(phone.value.length>11)
//   phoneError.innerHTML='*Check the number*';
//   else if (!phone.value.match(/[0-9]/)) {
//     phoneError.innerHTML = '*Please enter a valid age*';
//   }
//   else{
//     phoneError.innerHTML = '';
//   }
// });

// //validate address field
// // address.addEventListener('focusin',()=>{
// //   addressError.innerHTML='';
// // });

// address.addEventListener('focusout',()=>{
//   if(address.value==''){
//     alert('please typed the address  ');
//     addressError.innerHTML='*address is required*';
//     return false;
//   }
//   else
//   addressError.innerHTML='';
// });

//alert for course
// if (course.value == 'select') {
//       alert('Please select the course  ');
//     }

    //alert for language
// let checked2=false;
// for(let j=0;j<language.length;j++){
//   if (language[j].checked) {
//     checked2 = true;
//   }
// }
// if (!checked2) {
//   alert( 'Please select language  ');
// }

// submit.addEventListener('click', () => {
//   if (alertMsg !== '') {
//     alert(alertMsg);
//   }
// });

function validation(){
  username.addEventListener('keypress',function(event){
    console.log(event.keyCode);
    console.log(event.which);
    var charchode=event.keyCode;
    console.log(charchode);
      if(charchode<65 || charchode>90){
          console.log("inside if");
          return false;
      }else
        return true;
  });
}