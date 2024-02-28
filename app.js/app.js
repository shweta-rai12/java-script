let a=10;
function fun(){
    a=20;
    if(true)//false
    {
        a=30;
    }
     console.log(a);
}
console.log(a);
fun();


function fun1(){
    var s=34;
    if(true)
    {
        s=54;
        console.log(s);
    }
    console.log(s);
}
fun1();



let t=20;
function add()
{
    let t=20;
    {
        t=40;
    }
}