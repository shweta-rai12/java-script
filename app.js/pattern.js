//triangle
// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "*";
//     console.log(str.repeat(i));
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let str = "*";
//     let space = ' ';
//     console.log(space.repeat((n-i)) + str.repeat(i));
// }

// let n = 4
// for(let i = 0; i < n; i++)
// {
//     for(let j = 0; j < n; j++){
//         if(i == 0 || i == n-1)
//         console.log("*");
//     if (j == 0 || j == n-1)
//     {
//         console.log("*");
//     }
//     }
// }


// let n = 5;
// for(let i=1;i<=n;i++){
//     let str="";
//     let count=i;
//     for(let j=1;j<=i;j++){
//         str+=count + " ";
//         count++;
//     }
//     console.log(str);
// }

//triangle
// let n = 5;
// let str = " ";
// for(let i =1; i <= n; i++){
//     for(let j = 1; j <= n - 1 + 1; j++){
//         str += j;
//     }
//     str += "\n";
// }
// console.log(str);


//----------------------------toggle word character----------------------

// function func(){
//     let str = 'HeLLoWoRD';
//     let words=str.split('');
//     for(word of words){
//         if(word === word.toLowerCase()){
//             words.toUpperCase();
//         }
//         else{
//             word.toLowerCase();
//         }
//     }
// }

// let words="HeLloWoRlD";
// let res="";
// for(let word of words)
// {
//     if(word === word.toLowerCase())
//     {
//        res+=word.toUpperCase(); 
//     }
//     else{
//         res+=word.toLowerCase();
//     }
// }
// console.log(res);




//upper to lower
// function func(){
//     let str = 'SCHOOL';
//     let string = str.toLowerCase();
//     console.log(string);
// }
// func();

//lower to upper
// function func(){
//     let str = 'school';
//     let string = str.toUpperCase();
//     console.log(string);
// }
// func();