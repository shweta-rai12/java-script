let input=document.querySelectorAll('input');
let span=document.querySelector('span');
let btn=document.querySelector('#btn');
let name=document.querySelector('name');
let last=document.querySelector('.last');
let tel=document.querySelector('.tel');
let pass=document.querySelector('.pass');
let pass1=document.querySelector('.pass1');


let data=Array.from(input);

// console.log(data[0]);


function validation(){
    let name=data[0].value.length;
    let lastname=data[2].value.length;
    let no=data[6].value.length;
    let password=data[8].value.length;
    let password1=data[9].value.length;

    if(name<=3)
    {
        span.innerHTML="**name is too short";
        btn.type="hidden";
    }
    if(name===0)
    {
        span.innerHTML="**name not be empty";
        btn.type="hidden";
    }
    if(lastname===0)
    {
        last.innerHTML="**last name not be empty";
        btn.type="hidden";
    }
    if(no!=parseInt() && no<9)
    {
        tel.innerHTML="**enter your no";
        btn.type="hidden";
    }
    if(password<=5 && password1<=5){
        pass.innerHTML="**enter your password";
        pass1.innerHTML="**re-enter your password";
        btn.type="hidden";
    }
    if(password!=password1)
    {
        pass.innerHTML="**match your password";
        pass1.innerHTML="**re-match your password";
    }
}



