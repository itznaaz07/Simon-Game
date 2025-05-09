let gameseq=[];
let userseq=[];
let btns=['red','blue','yellow','green']

let started=false;
let level=0;
let h3=document.querySelector('h3');
document.addEventListener('keypress',()=>{
    if(started==false){
        console.log('game is started');
        started=true;
        levelup();
    }
   });
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove('flash')
    },250)

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove('userflash')
    },250)

}
function levelup(){
    userseq=[];
    level++;
    h3.innerText=`Level ${level}`;
    let randidx=Math.floor(Math.random()*4);
    let rndcolor=btns[randidx];
    let randbtn=document.querySelector(`.${rndcolor}`);
    // console.log(randbtn);
    // console.log(rndcolor);
    console.log(randidx);
    gameseq.push(rndcolor);
    console.log(gameseq);
    gameflash(randbtn);
 }
function checkans(){
    console.log(`level is ${level}`)
    let idx=userseq.length-1;
    if(userseq[idx]===gameseq[idx]){
       if(userseq.length===gameseq.length){
        setTimeout(levelup,1000)
       }
    }else{
        h3.innerHTML=`Game over!! your score is ${level} <br><br> press any key to start`;
         document.querySelector('body').style.backgroundColor='red'
         setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white'
         },150)
        reset();
    }
}
 function btnpress(){
  
    let btn=this;
    gameflash(btn);
    usercolor=btn.getAttribute('id');
    userseq.push(usercolor);
    checkans();
 }
 let allbtns=document.querySelectorAll('.btn');
 for(btn of allbtns){
    btn.addEventListener('click',btnpress);
}
function reset(){
        started=false;
        gameseq=[];
        userseq=[];
        level=0;
}
