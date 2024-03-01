let arr =[ "https://images.unsplash.com/photo-1709108990264-6646cc1338b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIxfDZzTVZqVExTa2VRfHxlbnwwfHx8fHw%3D",
"https://images.unsplash.com/photo-1555396273-755660f19034?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwOHw2c01WalRMU2tlUXx8ZW58MHx8fHx8",
"https://images.unsplash.com/photo-1456635891046-3a285444795d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExNHw2c01WalRMU2tlUXx8ZW58MHx8fHx8"
];
// let arr=["slider/1pic.jpg","slider/2pic.jpg","slider/3pic.jpg"];

let img = document.querySelector('img');
console.log(img);
let n=arr.length;
let stopid;
for(let count=0;count<n;count++)
{
    stopid=setInterval(()=>{
        img.setAttribute("src",arr[count]);
        console.log(arr[count]);
    },3000);
    if(count===n)
    {
        count=0;
    }
}
setTimeout(()=>{
    console.log(stopid);
    clearInterval(stopid);
},3000);


