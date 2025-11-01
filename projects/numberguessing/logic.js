let randomnumber=Math.round(Math.random()*100);
let guessremaining=10;
let gameover=false
let userinput=[]
const forms=document.querySelector("form")
forms.addEventListener("submit",function(item){
    item.preventDefault();
  
if (gameover) {
    document.getElementById("number").disabled = true;
    return;}  
let uservalue=parseInt(document.getElementById("number").value)
document.getElementById("number").value = "";


if(uservalue<0 || uservalue>100 ||isNaN(uservalue)){
    document.getElementById("error").innerHTML=`please enter valid number `
    return;
    
}
if(uservalue===randomnumber && gameover==false){
    document.getElementById("error").innerHTML='Correct Guess, Well played'
    document.getElementById("play-again").style.display = "inline";
    gameover=true 
    return;
}
userinput.push(uservalue)
guessremaining-=1
if(guessremaining==0){
    document.getElementById("error").innerHTML=`❌ The answer is ${randomnumber} 
    <p>Game Over!!!</p>`
    
document.getElementById("rg").innerHTML=""
document.getElementById("remain").innerHTML=""

    gameover=true
    document.getElementById("number").disabled = true;
    document.querySelector("#btn").disabled = true;
    document.getElementById("play-again").style.display = "inline";

    return;
}
 if (uservalue > randomnumber) {
        document.getElementById("error").innerHTML = "Too high!";
    } 
    else {
    document.getElementById("error").innerHTML = "Too low!";
    }

if(guessremaining>=1){
document.getElementById("rg").innerHTML=`${guessremaining}`}

document.getElementById("pg").innerHTML=userinput.map(n => `<span>${n}</span>`).join(", ")


})
document.getElementById("play-again").addEventListener("click", function () {
 
  guessremaining = 10;
  gameover = false;
  userinput = [];
  randomnumber = Math.round(Math.random() * 100);


  document.getElementById("error").innerHTML = "";
  document.getElementById("rg").innerHTML = "10";
  document.getElementById("pg").innerHTML = "";
  document.getElementById("number").disabled = false;
  document.getElementById("number").value = "";
  document.getElementById("play-again").style.display = "none";
});