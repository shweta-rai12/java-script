let input = document.querySelectorAll('input');
let span= document.querySelector('span');
let data = Array.from(input);
console.log(data[0]);

function validate()
{
    if(data[0].innerHTML.length<=3)
    {
        span.innerHTML="**length too short"
    }

}
