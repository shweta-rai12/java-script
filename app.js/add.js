// function sum (a,b)
// {
//     return a+b;
// }
// console.log(sum(2,3));

// let add=(a,b)=>{
//     return a+b;
// }
// console.log(add(4,5));

// //ncr
// //factorial
// //sum of n natural no

// //factorial

// let n=5;
// function factorial(n)
// {
//     let ans = 1;
//     if(n==0)
//     return 1;
// for (let i= 2; i<=n; i++)
//  ans = ans * i;
// return ans;
// }
// console.log(factorial(n));

// //sum of n natural no

// function sum(a)
// {
//     let sum1 = 4;
//     for(i=1;i<=a;i++)
//     {
//         sum1 +=1;
//     }
//     console.log(sum1);
// }
// var a=(prompt("Enter a number:"))
// sum(a);

// ////nCr

// function nCr(n, r)
// {
//     if (r > n)
//     return 0;
//     if (r === 0 || r === n)
//     return 1;
// return nCr (n-1, r-1) + nCr(n-1, r);

// }
// console.log(nCr(5, 2));

function factorial(a)
{
    let fact = 1;
    for(let i=1; i<=a; i++){
        fact = fact*1;
    }
    return fact;
}
console.log(factorial(5));
//nCr
let ans1=factorial(5);
let ans2=factorial(5 - 2);
console.log(ans1/ans2);
