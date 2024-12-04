let gameSequence=[];
let userSequence=[];

let btns = ['yellow','red','purple','green'];
let started = false;
let level = 0;

let h2=document.querySelector('h2');

document.addEventListener("keydown",function(){
   if(started == false){
    
    started = true;

    levelUp()
   } 
});
 
function gameFlash(btn){
btn.classList.add("flash")
setTimeout(function(){
   btn.classList.remove("flash");
},250);
}

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout(function(){
      btn.classList.remove("userFlash");
   },250);
   }

function levelUp() {
   userSequence = [];
   level++;
   h2.innerText = `level ${level}`;

   //random btn choose
   let randIdx = Math.floor(Math.random()*btns.length);
   let randColor = btns[randIdx];
   let randbtn = document.querySelector(`.${randColor}`);
   // console.log(randIdx);
   // console.log(randColor);
   // console.log(randbtn);
   gameSequence.push(randColor);
   console.log(gameSequence);
   gameFlash(randbtn);
   
}

function checkAsn(idx){
  
   if(userSequence[idx] === gameSequence[idx]){
      // console.log("same value");
      if(userSequence.length == gameSequence.length){
        setTimeout(levelUp,1000);
      }
   }else{
      h2.innerHTML=`Game Over!your score is <b> ${level}</b> <br>press any key to start`;
      document.querySelector('body').style.backgroundColor="red";
          setTimeout(function(){
            document.querySelector('body').style.backgroundColor="white";

          },150);
          reset();
   }
}

function btnPress() {
  let btn = this;
 
  userFlash(btn);

  userColor=btn.getAttribute('id');
  userSequence.push(userColor);

  checkAsn(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
   started = false;
   gameSequence=[];
   userSequence=[];
    level = 0;
}
