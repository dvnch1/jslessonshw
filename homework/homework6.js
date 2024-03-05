// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let x = "hello world";
console.log(x.length)
let y = 'lorem ipsum';
console.log(y.length)
let z = 'javascript is cool'
console.log(z.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let w = "hello world";
console.log(w.toUpperCase())
let e = 'lorem ipsum';
console.log(e.toUpperCase())
let r = 'javascript is cool'
console.log(r.toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let q='HELLO WORLD'
console.log(q.toLowerCase())
let t = "LOREM IPSUM"
console.log(t.toLowerCase())
let u = "JAVASCRIPT IS COOL"
console.log(u.toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.replaceAll(" ",""))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
     let str1 = 'Ревуть воли як ясла повні';
let splitarr = str1.split(" ")
 console.log(splitarr)
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let i = [10,8,-7,55,987,-1011,0,1050,0];


let final =i.map( function(str2) {
    return { value: str2 };
});
console.log(final)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(arr,direction){
    switch (direction){
        case "ascending":
            return arr.sort((a, b) => a - b);
        case  "descending":
            return arr.sort ((a, b) => b - a);
    }
}
let m = sortNums(nums, "ascending")
console.log(m)
nums.sort((a, b) => a - b);
nums.sort((a,b)=>b-a);



//
// ==========================
// - є масив
 let coursesAndDurationArray = [
     {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let g = coursesAndDurationArray.sort((first,second) => {
    return second.monthDuration - first.monthDuration
})
console.log(g)

let j = coursesAndDurationArray.filter((course) => course.monthDuration > 5);
console.log(j)

let map =coursesAndDurationArray.map((cours, index)=>{
    let p ={
        title: cours.title,
        monthDuration: cours.monthDuration,
        id: index
    }
    return p
})
console.log(map)
// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
let cards =[
    {value:"6",cardSuit:"spade",color:"black",score:1},
    {value:"6",cardSuit:'diamond',color:'red',score:1},
    {value:"6",cardSuit:'heart',color:'red',score:1},
    {value:"6",cardSuit:'clubs',color:"black",score:1},
    {value:"7",cardSuit:"spade",color:"black",score:2},
    {value:"7",cardSuit:'diamond',color:'red',score:2},
    {value:"7",cardSuit:'heart',color:'red',score:2},
    {value:"7",cardSuit:'clubs',color:"black",score:2},
    {value:"8",cardSuit:"spade",color:"black",score:3},
    {value:"8",cardSuit:'diamond',color:'red',score:3},
    {value:"8",cardSuit:'heart',color:'red',score:3},
    {value:"8",cardSuit:'clubs',color:"black",score:3},
    {value:"9",cardSuit:"spade",color:"black",score:4},
    {value:"9",cardSuit:'diamond',color:'red',score:4},
    {value:"9",cardSuit:'heart',color:'red',score:4},
    {value:"9",cardSuit:'clubs',color:"black",score:4},
    {value:"10",cardSuit:"spade",color:"black",score:5},
    {value:"10",cardSuit:'diamond',color:'red',score:5},
    {value:"10",cardSuit:'heart',color:'red',score:5},
    {value:"10",cardSuit:'clubs',color:"black",score:5},
    {value:"jack",cardSuit:"spade",color:"black",score:6},
    {value:"jack",cardSuit:'diamond',color:'red',score:6},
    {value:"jack",cardSuit:'heart',color:'red',score:6},
    {value:"jack",cardSuit:'clubs',color:"black",score:6},
    {value:"queen",cardSuit:"spade",color:"black",score:7},
    {value:"queen",cardSuit:'diamond',color:'red',score:7},
    {value:"queen",cardSuit:'heart',color:'red',score:7},
    {value:"queen",cardSuit:'clubs',color:"black",score:7},
    {value:"king",cardSuit:"spade",color:"black",score:8},
    {value:"king",cardSuit:'diamond',color:'red',score:8},
    {value:"king",cardSuit:'heart',color:'red',score:8},
    {value:"king",cardSuit:'clubs',color:"black",score:8},
    {value:'ace',cardSuit:"spade",color:"black",score:9},
    {value:'ace',cardSuit:'diamond',color:'red',score:9},
    {value:'ace',cardSuit:'heart',color:'red',score:9},
    {value:'ace',cardSuit:'clubs',color:"black",score:9},

]
let clubace=cards.filter((card)=> card.cardSuit === "clubs" && card.value === "ace");
console.log(clubace)
let six = cards.filter((card) => card.value === "6");
console.log(six)
cards.filter((card) => card.color === "red");
cards.filter((card) => card.cardSuit === "diamond");
let spade = cards.filter((card) => card.cardSuit === "spade" && card.score >= 5);
console.log(spade)
// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let k =cards.reduce((suit,card)=>{
if (card.cardSuit === "spade") {
    suit[0].push(card);
}else if (card.cardSuit === "diamond") {
    suit[1].push(card);
}else
    if (card.cardSuit === "heart") {
        suit[2].push(card);
    } else if (card.cardSuit === "club") {
        suit[3].push(card);
    }
    return suit


},[[],[],[],[]]
);
console.log(k)
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let l = coursesArray.filter((mod) =>mod.modules = "sass");
console.log(l)
let n = coursesArray.filter((mod) =>mod.modules = "docker");
console.log(n)