let radii=[1,2,3,4,5,6,7];
function Calculate(logic)
{
    let res=[];
    for(let radius of radii)
    {
        res.push(logic(radius));
    }
    return res;
}
function area(r){
    return Math.PI*r*r;
}
function peri(r)
{
    return 2*Math.PI*r;
}
function vol(r)
{
    return 4/3*(Math.PI*r*r*r);
}

function hemi(r)
{
    return 2/3*(Math.PI*r*r*r);
}


console.log(Calculate(area));
console.log(Calculate(peri));
console.log(Calculate(vol));
console.log(Calculate(hemi));



let Person={
    name:"shweta",
    fun:function(){
        console.log("inside Person Object");
    }
};

let a=Object.create(Person);
let b=Object.create(a);