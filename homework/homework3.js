//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let arr =[
    {name:"one"},
    {name:"two"},
    {name:"three"},
    {name:"four"},
    {name:"five"},
    {name:"six"},
    {name:"seven"},
    {name:"eight"},
    {name:"nine"},
    {name:"ten"}
]
for (let i = 0; i < arr.length; i++) {
    const arrElemennt = arr[i];
    document.write(`<div>${arrElemennt.name}</div>`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
let arr1 =[
    {name:"one1"},
    {name:"two1"},
    {name:"three1"},
    {name:"four1"},
    {name:"five1"},
    {name:"six1"},
    {name:"seven1"},
    {name:"eight1"},
    {name:"nine1"},
    {name:"ten1"}
]
for (let i = 0; i < arr1.length; i++) {
    const arr1Elemennt = arr1[i];
    document.write(`<div>${arr1Elemennt.name}</div>`)
        console.log(`${i}`)
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let arr2 = [
    {name:"one"},
    {name:"two"},
    {name:"three"},
    {name:"four"},
    {name:"five"},
    {name:"six"},
    {name:"seven"},
    {name:"eight"},
    {name:"nine"},
    {name:"ten"},
    {name:"eleven"},
    {name:"twelwe"},
    {name:"thirteen"},
    {name:"fourteen"},
    {name:"fifteen"},
    {name:"sixteen"},
    {name:"seventeen"},
    {name:"eighteen"},
    {name:"nineteen"},
    {name:"twenty"}
]
let i=0
while (i<arr2.length){
    const arr2Elemennt = arr2[i];
    i++;
    document.write(`<h1>${arr2Elemennt.name}</h1>`)
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let arr3 = [
    {name:"one1"},
    {name:"two1"},
    {name:"three1"},
    {name:"four1"},
    {name:"five1"},
    {name:"six1"},
    {name:"seven1"},
    {name:"eight1"},
    {name:"nine1"},
    {name:"ten1"},
    {name:"eleven1"},
    {name:"twelwe1"},
    {name:"thirteen1"},
    {name:"fourteen1"},
    {name:"fifteen1"},
    {name:"sixteen1"},
    {name:"seventeen1"},
    {name:"eighteen1"},
    {name:"nineteen1"},
    {name:"twenty1"}
]

let y=0
while (y<arr3.length){
    const arr3Elemennt = arr3[y];
    y++;
    document.write(`<h1>${arr3Elemennt.name}</h1>`)
    console.log(`${y}`);
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Масив:

   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write(`<ul>`)
for (let i = 0; i < listOfItems.length; i++) {
    const loiElemennt = listOfItems[i];
    document.write(`
<li>${loiElemennt}</li>
`)
}
document.write(`</ul>`)


//    Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
   document.write(`<div>
        <h3>${product.title}. Price - ${product.price}</h3>
        <img src="${product.image}" alt="productfoto" style="width: 200px; height: 200px">
</div>`)
}

//--------------------
//    є масив
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (let user of users) {
    if (user.status === true){
        console.log(user)
    }
}
for (let user of users) {
    if (user.status === false){
        console.log(user)
    }
}
for (let user of users) {
    if (user.age>30){
        console.log(user)
    }
}
//за допомоги циклу вивести:
//    - користувачів зі статусом true
//- користувачів зі статусом false
//- користувачів які старші за 30 років