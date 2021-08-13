console.log("ji")
let buttons = document.querySelectorAll(".btn");
const screen = document.querySelector("#screen");
let screenValue=""

//buttons.addEventListener("click",(e)=>{
   //// let btnTxt=e.target.innerText;
  //  console.log(btnTxt)
//})
//addEventListener

for (item of buttons){
item.addEventListener("click",(event)=>{
let btnTxt=event.target.innerText;

if(btnTxt== "C"){
    screenValue="";
    screen.value=screenValue
}else if(btnTxt== "="){
    screen.value=eval(screenValue)

}else{
    screenValue+=btnTxt
screen.value= screenValue
}
})}