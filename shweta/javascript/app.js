
let dice1=document.querySelector('.dice')
function dice(){
    let dice=Math.ceil(Math.random()*6);
    console.log(dice);
    dice1.innerHTML=dice
}