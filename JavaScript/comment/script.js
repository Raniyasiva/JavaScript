//container
// let container=document.createElement('div');
// container.className='container';
// document.body.appendChild(container);

// //comment
// let comment=document.createElement('div');
// comment.className='comment';
// container.appendChild(comment);

// //comment-content
// let commentContent=document.createElement('div');
// commentContent.className='comment-content';
// comment.appendChild(commentContent);

// //image
// let commentImage=document.createElement('div');
// commentImage.className='pic';
// comment.appendChild(commentImage);

// //img
// let image=document.createElement('img');
// image.src=("./image/girl.jpg");
// commentImage.appendChild(image);

// //details
// let commentDetails=document.createElement('div');
// commentDetails.className='comment-details';
// commentImage.appendChild(commentDetails);

// //name
// let commentName=document.createElement('div');
// commentName.className='comment.name';
// commentDetails.appendChild(commentName);

// //span
// let span=document.createElement('span');
// span.innerHTML='Raniya';
// commentName.appendChild(span);

// //form
// let form = document.createElement('form');
// form.className='comment-text';
// commentDetails.appendChild(form);

// //text area
// let textArea=document.createElement('textarea');
// textArea.className='newComment';
// form.appendChild(textArea);

//section
let section=document.querySelector('.section');
//container
let container = document.createElement('div');
container.className = 'container';
section.appendChild(container);

//comment
let comments = document.createElement('div');
comments.className = 'comment';
container.appendChild(comments);

//comment-content
let commentContent = document.createElement('div');
commentContent.className = 'comment-content';
comments.appendChild(commentContent);


//image
let commentImage = document.createElement('div');
commentImage.className = 'pic';
commentContent.appendChild(commentImage);

//img
let image = document.createElement('img');
image.src = "./image/girl.jpg";
commentImage.appendChild(image);

//details
let commentDetails = document.createElement('div');
commentDetails.className = 'comment-details';
commentContent.appendChild(commentDetails);

//name
let commentName = document.createElement('div');
commentName.className = 'comment-name';
commentDetails.appendChild(commentName);

//span
let span = document.createElement('div');
span.innerHTML = 'Raniya';
commentName.appendChild(span);

//Time function
function commentTime(){
  let today = new Date();
  let times = today.toLocaleTimeString();
  return times;
  }

//time
let time=document.createElement('div');
time.className='time';
commentDetails.appendChild(time);

//timestamp
let timestamp = document.createElement('div');
timestamp.className = 'comment-timestamp';
timestamp.innerHTML = commentTime(); 
time.appendChild(timestamp);

//more options
let moreOptions = document.createElement('div');
moreOptions.className = 'comment-more';
moreOptions.innerHTML = '...'; 
time.appendChild(moreOptions);

//form
let form = document.createElement('form');
form.className = 'comment-form';
commentName.appendChild(form);

//actions
let commentActions=document.createElement('div');
commentActions.className='comment-actions';
comments.appendChild(commentActions);

//like
let like=document.createElement('div');
like.className='comment-like';
like.innerHTML='Like |'
commentActions.appendChild(like);

//parentReply
let parentReply=document.createElement('div');
parentReply.className='parentReply';
commentActions.appendChild(parentReply);

//Reply
let commentReply=document.createElement('div');
commentReply.className='comment-reply';
commentReply.innerHTML='Reply';
parentReply.appendChild(commentReply);


function submitComment() {
  let send = document.getElementById('send');
  let commentText = document.getElementById('text');
  //let section = document.querySelector('.section');
  let commentForm=document.querySelector('.comment-form');
  let comment1=document.querySelector('.comment');
  send.addEventListener('click', () => {
    let parentComment = commentText.value;
    if(parentComment != '') {
      let newComment = document.createElement('div');
      newComment.className = 'newComment';
      commentForm.appendChild(newComment);
      newComment.innerText=parentComment;
      comment1.style.display = "block";
      commentText.value = "";
    }
  });
}

submitComment();

function addComment() {
  let commentReply = document.querySelector(".comment-reply");
  let pc=document.querySelector('.parentReply');
  commentReply.addEventListener("click", () => {
  let newChat = document.createElement("textarea");
  newChat.className = 'new';
  pc.appendChild(newChat);

  let msg = newChat.value;
  if (msg != "") {
    newChat.innerHTML = msg;
    newChat.addEventListener("click", editFunction);
  }
});
  function editFunction(event) {  
    if (event.target.className == 'new') {
      event.target.remove();
      textArea.value = event.target.innerText;
    } 
  }
}
addComment();


// //section
// let section=document.querySelector('.section');
// //container
// let container = document.createElement('div');
// container.className = 'container';
// section.appendChild(container);

// //comment
// function comment(){
//   let comments = document.createElement('div');
//   comments.className = 'comment';
//   container.appendChild(comments);

//   //comment-content
//   let commentContent = document.createElement('div');
//   commentContent.className = 'comment-content';
//   comments.appendChild(commentContent);

//   //image
//   let commentImage = document.createElement('div');
//   commentImage.className = 'pic';
//   commentContent.appendChild(commentImage);

//   //img
//   let image = document.createElement('img');
//   image.src = "./image/girl.jpg";
//   commentImage.appendChild(image);

//   //details
//   let commentDetails = document.createElement('div');
//   commentDetails.className = 'comment-details';
//   commentContent.appendChild(commentDetails);

//   //name
//   let commentName = document.createElement('div');
//   commentName.className = 'comment-name';
//   commentDetails.appendChild(commentName);

//   //span
//   let span = document.createElement('div');
//   span.innerHTML = 'Raniya';
//   commentName.appendChild(span);

//   //time
//   let time=document.createElement('div');
//   time.className='time';
//   commentDetails.appendChild(time);

//   //timestamp
//   let timestamp = document.createElement('div');
//   timestamp.className = 'comment-timestamp';
//   timestamp.innerHTML = 'time'; 
//   time.appendChild(timestamp);

//   //more options
//   let moreOptions = document.createElement('div');
//   moreOptions.className = 'comment-more';
//   moreOptions.innerHTML = '...'; 
//   time.appendChild(moreOptions);

//   //form
//   let form = document.createElement('form');
//   form.className = 'comment-form';
//   commentName.appendChild(form);

//   //text area
//   // let textArea = document.createElement('textarea');
//   // textArea.id = 'newComment';
//   // form.appendChild(textArea);

//   //actions
//   let commentActions=document.createElement('div');
//   commentActions.className='comment-actions';
//   form.appendChild(commentActions);

//   //like
//   let like=document.createElement('div');
//   like.className='comment-like';
//   like.innerHTML='Like |';
//   commentActions.appendChild(like);

//   //Reply
//   let reply=document.createElement('div');
//   reply.id='comment-reply';
//   reply.innerHTML='  Reply';
//   commentActions.appendChild(reply);
// }

// function submitComment() {
//   let send = document.getElementById('send');
//   let commentText = document.getElementById('text');
//   let section = document.querySelector('.section');
//   let commentForm=document.querySelector('.comment-form');

//   send.addEventListener('click', () => {
//     let parentComment = commentText.value;
//     if(parentComment != '') {
//       comment();
//       let newComment = document.querySelector('.newComment');
//       commentForm.innerText = parentComment;
//       commentText.value = "";
//     }
//   });
// }

// function submitComment() {
//   let send = document.getElementById('send');
//   let commentText = document.getElementById('text');
//   let section = document.querySelector('.section');

//   send.addEventListener('click', () => {
//     let parentComment = commentText.value;
//     if(parentComment != '') {
//       let newComment = document.createElement('div');
//       newComment.className = 'newComment';
//       newComment.innerHTML = addComment();
//       section.appendChild(newComment);
//     }
//   });
// }

// submitComment();

// function addComment() {
//   let commentReply = document.getElementById("comment-reply");
//   let commentForm=document.querySelector('#newComment');

//   commentReply.addEventListener("click", () => {
//     let msg = commentForm.value;
//     if (msg != "") 
//     {
//       let newChat = document.createElement("div");
//       newChat.className = 'new';
//       //newChat.classList.add('new');
//       newChat.innerHTML = msg;
//       reply.appendChild(newChat);
//       newChat.addEventListener("click", editFunction);
//     }   
//   });

//   function editFunction(event)
//   {  
//     if (event.target.className == 'new') 
//     {
//       event.target.remove(event.target);
//       commentForm.value = event.target.innerText;
//     } 
//   } 
// }
// function submitComment(){
//   let send=document.getElementById('send');
//   let commentText=document.getElementById('text');
  
//   send.addEventListener('click',()=>{
//     let parentComment=commentText.value;
//     if(parentComment!='')
//     {
//       let newComment=document.createElement('div');
//       newComment.className='newComment';
//       newComment.innerHTML=addComment();
//       section.appendChild(newComment);
//       newComment.addEventListener('click',addComment);
//     }
//   });
//   }
//   submitComment();
//addComment();

// let commentSection = document.getElementsByClassName("section");
// let commentReply = document.getElementById("comment-reply");
// let commentForm=document.querySelector('#newComment');
// commentReply.addEventListener("click", () => {
//   let msg = commentForm.value;
//   if (msg != "") 
//   {
//     let newChat = document.createElement("div");
//     newChat.className = 'new';
//     //newChat.classList.add('new');
//     newChat.innerHTML = msg;
//     reply.appendChild(newChat);
//     newChat.addEventListener("click", editFunction);
//   }   
// });

// function editFunction(event)
// {  
//       if (event.target.className == 'new') 
//       {
//         event.target.remove(event.target);
//         commentForm.value = event.target.innerText;
//       } 
// }