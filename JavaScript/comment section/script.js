//section
let section=document.querySelector('.section');

//container
let container = document.createElement('div');
container.className = 'container';
section.appendChild(container);

function comment() {
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
  let currentTime = document.createElement('div');
  currentTime.className = 'comment-currentTime';
  currentTime.innerHTML = commentTime(); 
  time.appendChild(currentTime);

  //more options
  let moreOptions = document.createElement('div');
  moreOptions.className = 'comment-more';
  moreOptions.innerHTML = '...'; 
  time.appendChild(moreOptions);

  moreOptions.addEventListener('click', () => {
    let parentOption = currentTime.querySelector('.parentOption');
    if (parentOption) {
      parentOption.style.display='none'
    } else {
      parentOption = document.createElement('div');
      parentOption.className = 'parentOption';
      let edit = document.createElement('div');
      let del = document.createElement('div');
      edit.className = 'edit';
      edit.innerHTML = 'Edit';
      del.className = 'delete';
      del.innerHTML = 'Delete';
      edit.appendChild(del);
      parentOption.appendChild(edit); 
      currentTime.appendChild(parentOption);
    }
  });
  
  //form
  let form = document.createElement('form');
  form.className = 'comment-form';
  commentName.appendChild(form);

  //actions
  let commentActions=document.createElement('div');
  commentActions.className='comment-actions';
  comments.appendChild(commentActions);

//like
let like = document.createElement('span');
like.className = 'comment-like';
like.innerHTML = "Like  |";
commentActions.appendChild(like);

//like count
let likeCount = 0;
//let likes=document.querySelector('.comment-like');
like.addEventListener('click', () => {
likeCount++;
like.innerHTML = "Like " + likeCount + " |";
});

//parentReply
let commentReply=document.createElement('span');
commentReply.className='comment-reply';
commentReply.innerHTML='Reply';
commentActions.appendChild(commentReply);

//Reply
//let commentreply=document.querySelector('.comment-reply');

function commentFunction() {
  let parentdiv = document.createElement('div');
  parentdiv.className = 'parentreply';
  let replyTextArea = document.createElement('textarea');
  let replyBtn = document.createElement('button');
  replyTextArea.className = 'reply';
  replyBtn.className = 'btn';
  replyBtn.innerHTML = 'Reply';
  replyBtn.style.display = 'block';
  parentdiv.appendChild(replyTextArea);
  parentdiv.appendChild(replyBtn);
  commentActions.appendChild(parentdiv);
return parentdiv;
}
commentReply.addEventListener('click',commentFunction);
return comments;
}

function submitComment() {
  let send = document.getElementById('send');
  send.addEventListener('click', ()=> {
  let commentfn = comment();
  let commentText = document.getElementById('text');
  let newComment = commentText.value;
  if (newComment != '') 
  {
    let commentForm = commentfn.querySelector('.comment-form');
    add(commentForm, newComment,commentfn);
    commentText.value = '';
  }
});
}
submitComment();

function add(commentForm, newComment, commentfn) {
  let commentTextElement = document.createElement('textarea');
  commentTextElement.className = 'newComment';
  commentTextElement.innerText = newComment;
 commentForm.appendChild(commentTextElement);
 let nestedreplays=commentForm.appendChild(commentTextElement);
replyFunction(nestedreplays);
  commentTextElement.addEventListener("click", function(event) {  
    if (event.target.className == 'newComment') {
      commentfn.remove();
      commentTextElement.value='';
    } 
  });
}
function replyFunction(nestedreplays){
  let parentdiv1 = commentFunction();
  let replyBtn = parentdiv1.querySelector('.btn');
  replyBtn.addEventListener('click', ()=>{
    let newComment = parentdiv1.querySelector('.reply').value;
    if (newComment !== '') {
      let commentfn = comment();
      let commentForm = commentfn.querySelector('.comment-form'); 
      add(commentForm, newComment, commentfn);
      let nestReplys=commentfn.querySelector('.comment-reply');
  nestReplys.appendChild(nestedreplays);
//let deleteBtn = commentfn.querSelector('.delete');
      parentdiv1.remove();
    }
  });
}
replyFunction();
// function replyFunction(){
//   let f=commentFunction();
//   let repFn=f.querySelector('.btn');
//   repFn.addEventListener('click',()=>{
//     console.log(f);
//     let parent=f.querySelector('.parentreply');
//     let child=document.querySelector('.comment');
//    child.appendChild(parent);
//    console.log(child);
//   })
   
// }
// replyBtn.addEventListener('click', () => {  
  //   let nestedform = document.querySelector('.reply');
  //   let replyValue = nestedform.value;
  //   if (replyValue !== '') {
  //     let replyElement = document.createElement('div');
  //     replyElement.className='ta';
  //     replyElement.style.display='block';
  //     replyElement.innerText = replyValue;
  //     let parentreply=document.querySelector('.comment-reply');
  //     let nestedReply = document.querySelector('.comment');
  //     let nestComment=document.querySelector('.comment-form');
  //     //nestComment.appendChild(replyElement);
  //     parentreply.appendChild(nestedReply);     
  //     nestedform.value='';
  //   }
  // });
  // replyFunction();
//  function replyFunction() {
//    let rf = commentFunction();
//     let nestedFunction = rf.querySelector('.btn');
//     nestedFunction.addEventListener('click', () => {  
//      let nestedform = rf.querySelector('.reply');
//       let replyValue = nestedform.value;
//       if (replyValue !== '') {
//         // let nestedReply = document.querySelector('.comment');
//         // let parentreply=document.querySelector('.comment-reply');
//         // parentreply.appendChild(nestedReply);
//         let replyElement = document.createElement('div');
//         replyElement.className='ta';
//         replyElement.style.display='block';
//         replyElement.innerText = replyValue;
//         nestedReply.appendChild(replyElement);     
// nestedform.value='';
//       }
//     });
//   }
//   replyFunction();