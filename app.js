console.log("ji")
let buttons = document.querySelectorAll(".btn");
const screen = document.querySelector("screen");

//buttons.addEventListener("click",(e)=>{
   //// let btnTxt=e.target.innerText;
  //  console.log(btnTxt)
//})
//addEventListener

for (item of buttons){
item.addEventListener("click",(event)=>{
let btnTxt=event.target.innerText;
console.log(btnTxt)
})}