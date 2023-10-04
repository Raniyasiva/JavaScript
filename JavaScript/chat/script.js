// let chat = document.getElementById("chat");
// let message = document.getElementById("message");
// let send = document.getElementById("send");
// let backup = document.getElementById("backup");

// send.addEventListener("click", () => {
//     let msg = message.value;
//     if (msg != "") {
//         let newChat = document.createElement("div");
//         newChat.className='new';
//         newChat.classList.add('new');
//         newChat.innerHTML = msg;
//         chat.appendChild(newChat);
//         chat.addEventListener("click", (event) => {
//             if (event.target == ('.new'));
//             event.target.remove('new');
//             backup.value = newChat.innerHTML;
//             //console.log(event)
//         });
//     }
// });

let chat = document.getElementById("chat");
let message = document.getElementById("message");
let send = document.getElementById("send");
let backup = document.getElementById("backup");

send.addEventListener("click", () => {
  let msg = backup.value;
  if (msg != "") 
  {
    let newChat = document.createElement("div");
    newChat.className = 'new';
    //newChat.classList.add('new');
    newChat.innerHTML = msg;
    chat.appendChild(newChat);
    newChat.addEventListener("click", editFunction);
    backup.value='';
  }   
});

function editFunction(event)
{  
      if (event.target.className == 'new') 
      {
        event.target.remove(event.target);
        backup.value = event.target.innerText;
      } 
}