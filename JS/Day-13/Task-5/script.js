let btn=document.getElementById("btn")
let cnt=document.getElementById("cnt")
let bgColour=true
cnt.style.padding="100px"
btn.style.marginLeft="700px"
 btn.style.background="gray"
btn.style.padding="15px"
btn.addEventListener("click",()=>{
    if(bgColour){
        cnt.style.background="black"
        cnt.style.color="white"
        bgColour=false;
        btn.textContent="light theme"
    }
    else{
         cnt.style.background="white"
        cnt.style.color="black"
        bgColour=true;
        btn.textContent="dark theme"
    }
})