//section
let section = document.querySelector('.section');

//container
let container = document.createElement('div');
container.className = 'container';
section.appendChild(container);

//image div
let imagediv=document.createElement('div');
imagediv.className='imagediv';
container.appendChild(imagediv);

//image
let image=document.createElement('img');
image.src='./image/download.jpg';
imagediv.appendChild(image);

//post
let post = document.getElementById('post');
let commentText = document.getElementById('text');
let send = document.getElementById('send');
post.addEventListener('click', () => {
commentText.style.display = 'block';
send.style.display = 'block';
post.remove();
});

function submitComment(container) {
    send.addEventListener('click', () => {
      let newComment = commentText.value;
      if (newComment != '') {
      let commentFn = comment(container, newComment);
      container.appendChild(commentFn);
      commentText.value = '';      
      }
    });
  } 

 function replyComment(commentActions, replyTextArea,replyBtn,parent) {
    replyBtn.addEventListener('click', () => {
    let newComment = replyTextArea.value;
    if (newComment != '') {
      let commentFn = comment(commentActions, newComment);
      commentActions.appendChild(commentFn);
      replyTextArea.value = '';
      replyTextArea.style.display = 'none';
      replyBtn.style.display='none';
  }
  });
  parent.appendChild(replyBtn);
}
function comment(container, newComment) {
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
    let span = document.createElement('span');
    span.innerHTML = 'Raniya Siva';
    commentName.appendChild(span);

    //replysend
    let p = document.createElement('p');
    p.className = 'paraComment';
    p.innerText=newComment;
    p.style.width= '496px';
    commentName.appendChild(p);
   
   //Time function
    function commentTime() {
    let today = new Date();
    let times = today.toLocaleTimeString();
   return times;
    }

    //time
    let time = document.createElement('div');
    time.className = 'time';
    commentDetails.appendChild(time);

    //timestamp
    let currentTime = document.createElement('span');
    currentTime.className = 'comment-currentTime';
    currentTime.innerHTML = commentTime();
    time.appendChild(currentTime);

    //more options
    let moreOptions = document.createElement('span');
    moreOptions.className = 'comment-more';
    moreOptions.innerHTML = '...';
    time.appendChild(moreOptions);

  moreOptions.addEventListener('click', () => {
   let parentOption = currentTime.querySelector('.parentOption');
   //let parentOption = currentTime.parentNode.querySelector('.parentOption');
   if (parentOption) {
   parentOption.style.display = 'none'
   }
   else 
   {
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
   del.addEventListener("click", editFunction);
   }

   //delete
   function editFunction(event) {
    alert('Are you sure want to delete');
    let commentElement = event.target.closest('.comment');
    if (commentElement) {
     commentElement.remove();
    }
    }
   });

    //form
    let textComment = document.createElement('div');
    textComment.className = 'comment-form';
    commentName.appendChild(textComment);

    //actions
    let commentActions = document.createElement('div');
    commentActions.className = 'comment-actions';
    comments.appendChild(commentActions);

    //like
    let like = document.createElement('span');
    like.className = 'comment-like';
    like.innerHTML = "Like  |";
    commentActions.appendChild(like);

    //like count
    let likeCount = 0;
    like.addEventListener('click', () => {
    likeCount++;
    like.innerHTML = "Like " + likeCount + " |";
    });
 
    //parent
    let parent=document.createElement('span');
    parent.className='parentReply';
    commentActions.appendChild(parent)

    //parentReply
    let commentReply = document.createElement('span');
    commentReply.className = 'comment-reply';
    commentReply.innerHTML = 'Reply';
    parent.appendChild(commentReply);

    commentReply.addEventListener('click', () => {  
      let replyTextArea = document.createElement('textarea');
      replyTextArea.className = 'reply';
      replyTextArea.placeholder='Add a comment...'
      replyTextArea.style.display = 'none';
      let replyBtn = document.createElement('button');
      replyBtn.className = 'btn';
      replyBtn.innerHTML = 'Reply';
      replyTextArea.style.display = 'block';
      replyTextArea.appendChild(replyBtn);
      parent.appendChild(replyTextArea);
      replyComment(commentActions, replyTextArea,replyBtn,parent);
  });
      return comments;
}
    submitComment(container);



// //section
// let section = document.querySelector('.section');

// //container
// let container = document.createElement('div');
// container.className = 'container';
// section.appendChild(container);

// //post
// let post = document.getElementById('post');
// let commentText = document.getElementById('text');
// let send = document.getElementById('send');
// post.addEventListener('click', () => {
// commentText.style.display = 'block';
// send.style.display = 'block';
// post.remove();
// });

// function submitComment(container) {
 
//    // let send = document.getElementById('send');
//   //  let commentText = document.getElementById('text');
//     send.addEventListener('click', () => {
//       let newComment = commentText.value;
//       if (newComment != '') {
//         let commentFn = comment(container, newComment);
//         container.appendChild(commentFn);
//         commentText.value = '';      
//       }
//     });
//   } 
//  submitComment(container);

// //  let commentReply = document.createElement('span');
// // commentReply.className = 'comment-reply';
// // commentReply.innerHTML = 'Reply';
// // parentReply.appendChild(commentReply);

// commentReply.addEventListener('click', () => {
//   let replyTextArea = document.createElement('textarea');
//   replyTextArea.className = 'reply';
//   replyTextArea.style.display = 'none';
//   let replyBtn = document.createElement('button');
//   replyBtn.className = 'btn';
//   replyBtn.innerHTML = 'Reply';    
//   replyTextArea.style.display = 'block';
//   let parent = document.querySelector('.parentReply');
//   parent.appendChild(replyTextArea);
//   replyTextArea.appendChild(replyBtn);
//   replyComment(commentActions, replyTextArea, replyBtn);
// });

// function comment(container, newComment) {
//     //comment
//     let comments = document.createElement('div');
//     comments.className = 'comment';
//    // comments.id =commentId;
//     container.appendChild(comments);

//     //comment-content
//     let commentContent = document.createElement('div');
//     commentContent.className = 'comment-content';
//     comments.appendChild(commentContent);

//     //image
//     let commentImage = document.createElement('div');
//     commentImage.className = 'pic';
//     commentContent.appendChild(commentImage);

//     //img
//     let image = document.createElement('img');
//     image.src = "./image/girl.jpg";
//     commentImage.appendChild(image);

//     //details
//     let commentDetails = document.createElement('div');
//     commentDetails.className = 'comment-details';
//     commentContent.appendChild(commentDetails);
    

//     //name
//     let commentName = document.createElement('div');
//     commentName.className = 'comment-name';
//     commentDetails.appendChild(commentName);

//     //span
//     let span = document.createElement('span');
//     span.innerHTML = 'Raniya';
//     commentName.appendChild(span);

//     //replysend
//     let p = document.createElement('p');
//     p.className = 'paraComment';
//     p.innerText=newComment;
//     p.style.width= '496px';
//     commentName.appendChild(p);
   
//     //Time function
//     function commentTime() {
//         let today = new Date();
//         let times = today.toLocaleTimeString();
//         return times;
//     }

//     //time
//     let time = document.createElement('div');
//     time.className = 'time';
//     commentDetails.appendChild(time);

//     //timestamp
//     let currentTime = document.createElement('span');
//     currentTime.className = 'comment-currentTime';
//     currentTime.innerHTML = commentTime();
//     time.appendChild(currentTime);

//     //more options
//     let moreOptions = document.createElement('span');
//     moreOptions.className = 'comment-more';
//     moreOptions.innerHTML = '...';
//     time.appendChild(moreOptions);

//   moreOptions.addEventListener('click', () => {
//    let parentOption = currentTime.querySelector('.parentOption');
//    if (parentOption) {
//    parentOption.style.display = 'none'
//    }
//    else 
//    {
//    parentOption = document.createElement('div');
//    parentOption.className = 'parentOption';
//    let edit = document.createElement('div');
//    let del = document.createElement('div');
//    edit.className = 'edit';
//    edit.innerHTML = 'Edit';
//    del.className = 'delete';
//    del.innerHTML = 'Delete';
//    edit.appendChild(del);
//    parentOption.appendChild(edit);
//    currentTime.appendChild(parentOption);
//   del.addEventListener("click", editFunction);
//    }
//    //delete
//    function editFunction(event) {
//     alert('Are you sure want to delete');
//     let commentElement = event.target.closest('.comment');
//     if (commentElement) {
//         commentElement.remove();
//     }
// }

//    });

//     //form
//     let textComment = document.createElement('div');
//     textComment.className = 'comment-form';
//     commentName.appendChild(textComment);

//     //actions
//     let commentActions = document.createElement('div');
//     commentActions.className = 'comment-actions';
//     comments.appendChild(commentActions);

//     //like
//     let like = document.createElement('span');
//     like.className = 'comment-like';
//     like.innerHTML = "Like  |";
//     commentActions.appendChild(like);

//     //like count
//     let likeCount = 0;
//     like.addEventListener('click', () => {
//     likeCount++;
//     like.innerHTML = "Like " + likeCount + " |";
//     });

//     let parentReply = document.createElement('span');
//     parentReply.className = 'parentReply';
//     //commentReply.innerHTML = 'Reply';
//     commentActions.appendChild(parentReply);

//     parentReply
//     let commentReply = document.createElement('span');
//     commentReply.className = 'comment-reply';
//     commentReply.innerHTML = 'Reply';
//     paraentReply.appendChild(commentReply);
    
//     commentReply.addEventListener('click', () => {
//       let replyTextArea = document.createElement('textarea');
//       replyTextArea.className = 'reply';
//       replyTextArea.style.display = 'none';
//       let replyBtn = document.createElement('button');
//       replyBtn.className = 'btn';
//       replyBtn.innerHTML = 'Reply';    
//       replyTextArea.style.display = 'block';
//       let Parent=document.querySelector('.parentReply');
//       Parent.appendChild(replyTextArea);
//       replyTextArea.appendChild(replyBtn);
//       replyComment(commentActions, replyTextArea,replyBtn);
//     });
    
//       return comments;
//     }
//     submitComment(container);

//     //section
// let section = document.querySelector('.section');

// //container
// let container = document.createElement('div');
// container.className = 'container';
// section.appendChild(container);

// //post
// let post = document.getElementById('post');
// let commentText = document.getElementById('text');
// let send = document.getElementById('send');
// post.addEventListener('click', () => {
// commentText.style.display = 'block';
// send.style.display = 'block';
// post.remove();
// });

// function submitComment(container) {
 
//    let send = document.getElementById('send');
//   let commentText = document.getElementById('text');
//     send.addEventListener('click', () => {
//       let newComment = commentText.value;
//       if (newComment != '') {
//         let commentFn = comment(container, newComment);
//         container.appendChild(commentFn);
//         commentText.value = '';      
//       }
//     });
//   } 
//  submitComment(container);

//  function replyComment(actions, replyTextArea,parentdiv) {
//   let replyBtn = actions.querySelector('.btn');
//   replyBtn.addEventListener('click', () => {
//     let newComment = replyTextArea.value;
//     if (newComment != '') {
//       let commentFn = comment(actions,newComment,container);
//       actions.appendChild(commentFn);
//       replyTextArea.value='';
//       parentdiv.style.display = 'none';
//     }
//   });
// }
 
// function comment(container, newComment,actions) {

//     //comment
//     let comments = document.createElement('div');
//     comments.className = 'comment';
//     container.appendChild(comments);

//     //comment-content
//     let commentContent = document.createElement('div');
//     commentContent.className = 'comment-content';
//     comments.appendChild(commentContent);

//     //image
//     let commentImage = document.createElement('div');
//     commentImage.className = 'pic';
//     commentContent.appendChild(commentImage);

//     //img
//     let image = document.createElement('img');
//     image.src = "./image/girl.jpg";
//     commentImage.appendChild(image);

//     //details
//     let commentDetails = document.createElement('div');
//     commentDetails.className = 'comment-details';
//     commentContent.appendChild(commentDetails);

//     //name
//     let commentName = document.createElement('div');
//     commentName.className = 'comment-name';
//     commentDetails.appendChild(commentName);

//     //span
//     let span = document.createElement('span');
//     span.innerHTML = 'Raniya';
//     commentName.appendChild(span);

//     //replysend
//     let p = document.createElement('p');
//     p.className = 'paraComment';
//     p.innerText=newComment;
//     p.style.width= '496px';
//     commentName.appendChild(p);
   
//     //Time function
//     function commentTime() {
//         let today = new Date();
//         let times = today.toLocaleTimeString();
//         return times;
//     }

//     //time
//     let time = document.createElement('div');
//     time.className = 'time';
//     commentDetails.appendChild(time);

//     //timestamp
//     let currentTime = document.createElement('span');
//     currentTime.className = 'comment-currentTime';
//     currentTime.innerHTML = commentTime();
//     time.appendChild(currentTime);

//     //more options
//     let moreOptions = document.createElement('span');
//     moreOptions.className = 'comment-more';
//     moreOptions.innerHTML = '...';
//     time.appendChild(moreOptions);

//     moreOptions.addEventListener('click', () => {
//         let parentOption = currentTime.querySelector('.parentOption');
//         if (parentOption) {
//             parentOption.style.display = 'none'
//         } else {
//             parentOption = document.createElement('div');
//             parentOption.className = 'parentOption';
//             let edit = document.createElement('div');
//             let del = document.createElement('div');
//             edit.className = 'edit';
//             edit.innerHTML = 'Edit';
//             del.className = 'delete';
//             del.innerHTML = 'Delete';
//             edit.appendChild(del);
//             parentOption.appendChild(edit);
//             currentTime.appendChild(parentOption);
//         }
//     });

//     //form
//     let textComment = document.createElement('div');
//     textComment.className = 'comment-form';
//     commentName.appendChild(textComment);

//     //actions
//     let commentActions = document.createElement('div');
//     commentActions.className = 'comment-actions';
//     comments.appendChild(commentActions);

//     //like
//     let like = document.createElement('span');
//     like.className = 'comment-like';
//     like.innerHTML = "Like  |";
//     commentActions.appendChild(like);

//     //like count
//     let likeCount = 0;
//     like.addEventListener('click', () => {
//     likeCount++;
//     like.innerHTML = "Like " + likeCount + " |";
//     });

//     //parentReply
//     let commentReply = document.createElement('span');
//     commentReply.className = 'comment-reply';
//     commentReply.innerHTML = 'Reply';
//     commentActions.appendChild(commentReply);
    

//     function commentFunction(actions) {
//         let parentdiv = document.createElement('div');
//         parentdiv.className = 'parentreply';
//         let replyTextArea = document.createElement('textarea');
//         let replyBtn = document.createElement('button');
//         replyTextArea.className = 'reply';
//         replyBtn.className = 'btn';
//         replyBtn.innerHTML = 'Reply';
//         replyBtn.style.display = 'block';
//         parentdiv.appendChild(replyTextArea);
//         parentdiv.appendChild(replyBtn);
//         actions.appendChild(parentdiv);     
//         replyComment(actions, replyTextArea,parentdiv);     
//       } 
//       commentReply.addEventListener('click', () => {
//       commentFunction(commentActions);
//       });   
//       return comments;
//     }
//     submitComment(container);
