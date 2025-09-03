document.addEventListener('DOMContentLoaded',()=>{
fetchAPI()


})

const fetchAPI = async ()=> {
    const url = './data.json';

    try{
        const api = await fetch(url);
        const responses = await api.json();
        console.log(responses)
        updateDOM(responses)
        buttons(responses)
       
 

        
    }
   

    catch(error){
        console.log(error)
    }
   

}

const updateDOM =(data)=>{
    const commentSection = document.querySelector('.commentSection')
    const replySection = document.querySelector('.JSON')
    let comments = data.comments
    let mainC = document.querySelectorAll('.mainComments')
    
    let empty = ''
    let replyEmpty = ''

    comments.forEach(element => {
    
      
     let mainComment = `
         <section class="mainComments">
      <div class="mobileReplyBtn">
      <aside class="increment">
        <figure class="plus"><img src="./images/icon-plus.svg" alt=""></figure>
        <p class="number">${element.score}</p>
        <figure class="minus"><img src="./images/icon-minus.svg" alt=""></figure>
      </aside>
      <aside class="replyBtn mobile">
          <figure><img src="./images/icon-reply.svg" alt=""></figure>
          <p>Reply</p> 
      </aside>
      </div>
      <section class="commentBody">  
      <aside class="commentDetails">
        <article class="about">
          <figure><img src="${element.user.image.png}" alt=""></figure>
          <b class="name">${element.user.username}</b>
          <p class="time">${element.createdAt}</p>
        </article>
        <article class="replyBtn desktop">
          <figure><img src="./images/icon-reply.svg" alt=""></figure>
          <p>Reply</p> 
        </article>         
      </aside>
      <p class="commentWriting">
        ${element.content}
      </p>
     </section>
    </section>
     `
    empty += mainComment 
    commentSection.innerHTML = empty
    
      console.log(mainC);
      
    mainC.forEach(eachMain =>{
     let username = eachMain.querySelector('.name')
     let deleteBtn = eachMain.querySelector('.deleteBtn')
     let editBtn = eachMain.querySelector('.editBtn')
     let replyBtn = eachMain.querySelector('.replyBtn')

     console.log(eachMain);
     
     if (username.textContent === 'juliusomo'){
      replyBtn.style.display = 'none'
     }
     else{
      editBtn.style.display = 'flex'
      deleteBtn.style.display = 'none'

     }

    })

    element.replies.forEach(each =>{
  
      let mainReply =`
 <section class="replies">
    <article class="mobileReplyBtn">
      <aside class="increment">
      <figure class="plus"><img src="./images/icon-plus.svg" alt=""></figure>
      <p class="number">${each.score}</p>
      <figure class="minus"><img src="./images/icon-minus.svg" alt=""></figure>
    </aside>
    <aside class="Btn mobile">
          <section class="replyBtn" style="display: none${each.user.display.reply} ;">
            <figure><img src="./images/icon-reply.svg" alt=""></figure>
            <p>Reply</p>
          </section>
          <section class="deleteBtn" style="display: ${each.user.display.delete};">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn" style="display:${each.user.display.edit} ;">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
    </aside>
    </article>
    <aside class="replyBody">
      <section class="replyDetails">
        <aside class="aboutReply">
          <figure class="replyImg"><img src="${each.user.image.png}" alt=""></figure>
          <b class="name">${each.user.username}</b>
          <p class="time">${each.createdAt}</p>
          <p class="you">you</p>
        </aside>
        <aside class="buttons desktop">
          <section class="replyBtn" style="display: none ${each.user.display.reply};">
            <figure><img src="./images/icon-reply.svg" alt=""></figure>
            <p>Reply</p>
          </section>
          <section class="deleteBtn" style="display: ${each.user.display.delete};">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn" style="display:${each.user.display.edit} ;">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
        </aside>
      </section>
        <p class="replyWriting"><b>@${each.replyingTo}</b>
        ${each.content}
          </p>
    </aside>
      </section>
    
      `
      replyEmpty += mainReply
      replySection.innerHTML = replyEmpty

      buttons()
    })
  })


      
} 
const buttons=()=>{  
  const you =document.querySelectorAll('.you')
  const name = document.querySelectorAll('.name')
  const textArea = document.querySelector('#text')
  const sendBtn = document.querySelector('.sendBtn')
  const deleteBtn = document.querySelectorAll('.deleteBtn')
  const replyBtn = document.querySelectorAll('.replyBtn')
  const editBtn = document.querySelectorAll('.editBtn')
  let content = textArea.value.trim()
        // bindDeleteBtns()
    deleteBtn.forEach(eachDel =>{
      eachDel.addEventListener('click', ()=>{

      })
    })    

    you[0].classList.add('none');


  replyBtn.forEach(eachReply =>{
    eachReply.addEventListener('click', ()=>{
      
      

    })
  })
  bindDeleteBtns()
  name.forEach(eachName =>{
    // console.log(eachName)
    if(eachName.textContent === 'juliusomo'){
      // replyBtn.style.display='none'
      // console.log('yes');

      
    }
    else{
      // console.log('no');
      
    }
   
    
  })

  sendBtn.addEventListener('click',()=>{
    let content = textArea.value.trim()
    
    const commentSection = document.querySelector('.commentSection')


    
        
      let mainComment = `
          <section class="mainComments">
        <div class="mobileReplyBtn">
        <aside class="increment">
          <figure class="plus"><img src="./images/icon-plus.svg" alt=""></figure>
          <p class="number">0</p>
          <figure class="minus"><img src="./images/icon-minus.svg" alt=""></figure>
        </aside>
        <aside class="Btn mobile">
          <section class="deleteBtn">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
    </aside>
        </div>
        <section class="commentBody">  
        <aside class="commentDetails">
          <article class="about">
            <figure><img src="./images/avatars/image-juliusomo.png" alt=""></figure>
            <b class="name">juliusomo</b>
            <p class="time">now</p>
            <p class= "you">you</p>
          </article>
          <aside class="buttons desktop">
          <section class="deleteBtn">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
        </aside>        
        </aside>
        <p class="commentWriting">
          ${content}
        </p>
      </section>
      </section>
      `
      if(content){
      commentSection.insertAdjacentHTML('beforeend', mainComment) ;
      }
      bindDeleteBtns()
      const commentWriting = document.querySelector('#text');
      commentWriting.value = '';

  
    })
function bindDeleteBtns (){
  const deleteBtn = document.querySelectorAll('.deleteBtn')
  const editBtn = document.querySelectorAll('.editBtn')
  
    
  deleteBtn.forEach(eachDel =>{
    eachDel.addEventListener('click', ()=>{
        
        let replies = eachDel.closest('.replies')
        let comments = eachDel.closest('.mainComments')
      if(replies){ 
        replies.style.display ='none'
      }
      if(comments){
        comments.style.display ='none'
      }
    })
  })    
    
  editBtn.forEach(eachEdit =>{
    eachEdit.addEventListener('click',()=>{
        let replies = eachEdit.closest('.replies')
        let comments = eachEdit.closest('.mainComments')
        

        const writing = replies? replies.querySelector('.replyWriting') : comments.querySelector('.commentWriting')
        const originalText = writing.textContent.replace('save','');

        
        
        writing.innerHTML = ` <textArea class="editText">${originalText}</textArea> <button class="saveBtn">save</button>`
        const saveBtn = document.querySelectorAll('.saveBtn')
      if(writing.querySelector('.editText').value){

        saveBtn.forEach(eachSave =>{
          eachSave.addEventListener('click',()=>{
            let values = writing.querySelector('.editText').value
            writing.textContent = values
          })
        })
      }
     })
    
  })
}
const replySection = document.querySelector('.JSON')
replyBtn.forEach(eachReply =>{
  eachReply.addEventListener('click', ()=>{
   let mainComment = eachReply.closest('.mainComments')
   let main = mainComment.querySelector('.commentBody')
   const name = mainComment.querySelector('.name')
   const replyTextBtn = document.querySelectorAll('.replytext')
  //  let replyEmpty=''

   if(main.children.length === 2 ){
    main.innerHTML += `<div class ="toReply"><textarea  placeHolder ="add a reply..." id="reply"></textarea> <button class="replyText"> Reply</button><div>`

  
  
     
   buttons()

  //  let replies = eachReply.closest('.replies')
  //  let mainReply = replies.querySelector('.replyBody')
  //  if(mainReply.children.length === 2){
  //   mainReply.innerHTML += `<div class ="toReply"><textarea placeHolder ="add a reply..." id="text"></textarea> <button class="replyText"> Reply</button><div>`

  //  }
  //  console.log(replyTextBtn);
   
   const replyArea = main.querySelector('#reply')
   const replyBtn = main.querySelector('.replyText')
   const toReply = main.querySelector('.toReply')

   toReply.style.display = 'flex'
 
   replyBtn.addEventListener('click',()=>{
    let theReply = replyArea.value
    toReply.style.display = 'none'

  if(theReply){
 
  
      

     let reply =`
 <section class="replies">
    <article class="mobileReplyBtn">
      <aside class="increment"> 
      <figure class="plus"><img src="./images/icon-plus.svg" alt=""></figure>
      <p class="number">0</p>
      <figure class="minus"><img src="./images/icon-minus.svg" alt=""></figure>
    </aside>
    <aside class="Btn mobile">
          <section class="replyBtn" style="display:none;">
            <figure><img src="./images/icon-reply.svg" alt=""></figure>
            <p>Reply</p>
          </section>
          <section class="deleteBtn">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
    </aside>
    </article>
    <aside class="replyBody">
      <section class="replyDetails">
        <aside class="aboutReply">
          <figure class="replyImg"><img src="./images/avatars/image-juliusomo.png" alt=""></figure>
          <b class="name">juliusomo</b>
          <p class="time">Now</p>
          <p class="you">you</p>
        </aside>
        <aside class="buttons desktop">
          <section class="replyBtn" style="display:none;">
            <figure><img src="./images/icon-reply.svg" alt=""></figure>
            <p>Reply</p>
          </section>
          <section class="deleteBtn">
            <figure><img src="./images/icon-delete.svg" alt=""></figure>
            <p>Delete</p>
          </section>
          <section class="editBtn">
            <figure><img src="./images/icon-edit.svg" alt=""></figure>
            <p>Edit</p>
          </section>
        </aside>
      </section>
        <p class="replyWriting"><b>@${name.textContent}</b>
        ${theReply}
          </p>
    </aside>
      </section>
    
      `
      // replyEmpty += reply
      replySection.innerHTML += reply

      


   
    bindDeleteBtns()
  
    }
  })
 }
    })
   })  
  

  bindDeleteBtns()

}
