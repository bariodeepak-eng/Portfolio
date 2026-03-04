const imgs = document.querySelectorAll('.mainbody1 ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n=0;

function changeslide(){
    for (let i = 0; i< imgs.length; i++) {
       imgs[i].style.display = 'none';
        
    }
    imgs[n].style.display ='block';
}
changeslide();

prev_btn.addEventListener('click',(e)=>{
    if(n>0)
    {
        n--;
    }
    else{
        n=imgs.length-1;
    }
    changeslide();
})

next_btn.addEventListener('click',(e)=>{
    if(n<imgs.length-1)
    {
        n++;
    }
    else{
        n=0;
    }
    changeslide();
})


 function loginmodel() {
           document.querySelector('.login').classList.add('loginclose')
           document.querySelector('.backshadow').classList.add('backshadow1')
           
            }

             function logincmodel() {
           document.querySelector('.login').classList.remove('loginclose')
           document.querySelector('.backshadow').classList.remove('backshadow1')
          
            }
function sideicon(){
    document.querySelector('.sidebar').classList.add('sidebar1')
   
}

function closeiconside(){
    document.querySelector('.sidebar').classList.remove('sidebar1')
}

