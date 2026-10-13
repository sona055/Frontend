let head=document.getElementById("head")
let btn=document.getElementById("btn")
let isVisible=true
btn.addEventListener("click",()=>{
if(isVisible){
    head.style.display="none"
    isVisible=false
    btn.textContent="show"
}
else{
    head.style.display="block"
    isVisible=true
    btn.textContent="hide"
}
})

