//Масиви та об'єкти:
//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let arr1 = {
    id: 2,
    name: "bob",
    story: "long",
    road: "trip",
    car: "audi",
    sex: "male",
    role: "second",
    hair: "bold",
    focus: "value",
    status: "alive"
}
console.log(arr1.id);
console.log(arr1.name);
console.log(arr1.story);
console.log(arr1.road);
console.log(arr1.car);
console.log(arr1.sex);
console.log(arr1.role);
console.log(arr1.hair);
console.log(arr1.focus);
console.log(arr1.status);




//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Whitefang",
    pageCount: 424,
    genre: "adventure"
}
let book2 ={
    title: "Tomandjerry",
    pageCount: 999,
    genre: "animation"
}
let book3 = {
    title: "JSfordummies",
    pageCount: 5,
    genre: "educational"
}

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: "Whitefang2",
    pageCount: 42,
    genre: "adventure",
    authors: [
        {name: "Olyaua", age: 29}
    ]
}
let book5 ={
    title: "Tomandjerry2",
    pageCount: 9990,
    genre: "animation",
    authors: [
        {name: "pesPatron", age: 27}
    ]
}
let book6 = {
    title: "JSfordummies2",
    pageCount: 55,
    genre: "educational",
    authors: [
        {name:"Hetman", age:65}
]

}
console.log(book4)
console.log(book5)
console.log(book6)
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let arr3 = [
    {name:"Venceslav", username: "Old", password:19932},
    {name:"Mikola", username: "Rota", password:12322},
    {name:"Ivan", username: "Ubiica", password:22231},
    {name:"Nikolai", username: "Who", password:33223},
    {name:"Vlad", username: "Rot_wait", password:122323},
    {name:"Anna", username: "Ivi", password:12334},
    {name:"Varya", username: "WW", password:1124443},
    {name:"Sonya", username: "Blade", password:334123},
    {name:"Victor", username: "Basstard", password:33232},
    {name:"Vova", username: "Clown", password:334122},
];
console.log(arr3[0].password)
console.log(arr3[1].password)
console.log(arr3[2].password)
console.log(arr3[3].password)
console.log(arr3[4].password)
console.log(arr3[5].password)
console.log(arr3[6].password)
console.log(arr3[7].password)
console.log(arr3[8].password)
console.log(arr3[9].password)




//Логічні розгалуження:
//    - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 0;
if (x === 1){
    document.write("<h1>Correct</h1>");

}else if (x === 0) {
    document.write("<h1>Wrong</h1>");

}else if (x === -3) {
    document.write("<h1>Correct</h1>")
}
console.log(x);
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).

let time = 43;
if (time > 0 && time <= 15) {
    document.write("<h1>FirstHalf</h1>");
} else if (time > 15 && time <= 30) {
    document.write("<h1>SecondHalf</h1>");
}else if (time > 30 && time <= 45) {
    document.write("<h1>ThirdHalf</h1>");
} else if (time > 45 && time <= 60) {
    document.write("<h1>ForthHalf</h1>");
}
console.log(time)


//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 22;
if (day >1 && day <=10) {
    document.write("<h1>First</h1>");
}
else if (day >10 && day <=20) {
    document.write("<h1>Second</h1>");
}
else if (day >20 && day <=31) {
    document.write("<h1>Third</h1>");
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let week = 3;
switch (week){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
}

 //   - Користувач вводить або має два числа.
 //       Потрібно знайти та вивести максимальне число з тих двох .
 //       Також потрібно врахувати коли введені рівні числа.

let a = 5
let b = 6
if (a === b) {
    document.write("<h1>Same Numbers</h1>")
}
else if (a > b) {
    document.write("<h1>А win</h1>")
}
else if (a < b) {
    document.write("<h1>B win</h1>")
}
//
 //   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
 //       за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)//

let x1 = 0;
if (x1 === 0 || x1 === "" || x1 === null || x1 === undefined)
{document.write("<p>default</p>")}











