//let h1=document.querySelector('h1');
// h1.style.color="red";
// h1.style.border="2px solid black"
// h1.style.textAlign="center";
// h1.style.backgroundColor="blue"
// h1.innerText="head";
//console.log(h1);

//let h1=document.getElementsByTagName('h1');
// let data=Array.from(h1);
// console.log(data);
// for(let item of data)
// {
//     item.style.color="yellow"
//     item.style.border="3px dotted black"
//     //console.log(item);
// }

// let h1=document.getElementsByClassName('btn')
// let data=Array.from(h1);
// console.log(data);

// for(let item of data)
// {
//     item.style.height="100px"
//     item.style.width="300px"
//     item.style.border="2pc solid black"
//     item.style.borderRadius="12px"
// }


// let h1=document.querySelectorAll('.btn')
// let data=Array.from(h1);
// console.log(data);

// for(let item of data)
// {
//     item.style.height="100px"
//         item.style.width="300px"
//         item.style.border="2pc solid black"
//         item.style.borderRadius="12px"
// }

// function countWordFrequency(str)
// {
//     let words = str.toLowerCase().split(' ');
//     let wordFrequency = {};
//     for(let word of words) {
//         if(wordFrequency[word]) {
//             wordFrequency[word]++;
//         }
//         else{
//             wordFrequency[word] = 1;
//         }
//     }
//     return wordFrequency;
// }
// let text = " This is data data this is data";
// console.log(countWordFrequency(text));

//----------MAP-----------//

let words=str.split(' ');
console.log(words);
const map=new Map();
for(let word of words)
{
    if(map.has(word))
    {
        map.set(word,map.get(word)+1);
    }
    else{
        map.set(word,1);
    }
}
console.log(map);
for(let item of map)
{
    console.log(`${item[0]} => ${item[1]}`);
}

