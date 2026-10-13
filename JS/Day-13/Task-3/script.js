let para=document.getElementById("para")
let sbtn=document.getElementById("sbtn")
let hbtn=document.getElementById("hbtn")

hbtn.addEventListener("click",()=>{
    para.style.display="none"
})
sbtn.addEventListener("click",()=>{
    para.style.display="block"
})