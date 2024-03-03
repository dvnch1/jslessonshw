// //// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// ////  - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// //
 const f1 = (a, b) => a * b;
 f1(5, 6)
//     //// - створити функцію яка обчислює та повертає площу кола з радіусом r
     const round = (p, r, s) => p * r * s;
 round(5, 6, 7)
//     //
//     //// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
     const cilind = (s, p, r, h, y) => s * p * r * (h + y);
 cilind(5, 3.14, 10, 5, 10)
//     //// - створити функцію яка приймає масив та виводить кожен його елемент
     let array = [
         {name: "steeve1", password: 14242124, login: "Maddog"},
     {name: "bill1", password: 14234332, login: "Killbill"},
     {name: "john1", password: 1342344, login: "Sena"},
     {name: "kira1", password: 12131253, login: "washer69"}]
 const arr1 = () => {
     for (const key in array) {
         arr1(key.name, key.password, key.login)
                 }
 }
 console.log(array)
//     //// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
     text = (block) => {
     document.write(`<p>${block}</p>`)
         }
 let w = "Cтворити функцію яка створює параграф з текстом. Текст задати через аргумент"
     text(w)
//     //// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
     ulli = (text) => {
     document.write(`
          <ul>
             <li>${text}</li>
              <li>${text}</li>
            <li>${text}</li>
         </ul>
            `)
         }
 let q = "Доброго вечора ми з України"
     ulli(q)
//     //// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
     ulli2 = (text, count) => {
     let acc1 = ``;
     for (let i = 0; i < count; i++) {
         acc1 = acc1 + `<li>${text}</li>`
                 }
     return acc1
         }
 www1 = (text, count) => {
     let ter = ulli2(text, count)
             document.write(`<ul>${ter}</ul>`)
         }
 //
 let qq = "Доброго вечора ми з України2"
     www1(qq, 4)
// // - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 let arr2 = ["wwee2",  14242141,  true,  false]
 const list = () => {
     document.write(`<ul>`)
     for (const key of arr2) {
         document.write(`<li>${[key]}</li>`)
     }document.write(`</ul>`)}
 list(arr2)
//
//
//
//
// // - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
 let t=[
     {id:2, name2:"Vova",age:44},
     {id:23, name2:"Lina",age:28},
     {id:24, name2:"Ira",age:33}
 ]
 const data = () =>{
     for (const datum of t) {
         document.write(`
      <div>${datum.id}</div>
      <div>${datum.name2}</div>
      <div>${datum.age}</div>`)
     }
 }
 data(t)
// - створити функцію яка повертає найменьше число з масиву

const minnumb= (arr) => {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];}
    }
    return min;
}
console.log(minnumb([1,2,3,4,5,7]))
// // - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 const sum=(arr)=> {
     let acc = 0;
     for (const property in arr) {
         acc = acc + arr[property]
     }
     return acc
 }
 let a = sum([1,2,10])
 console.log(a)
//
// // - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// // Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
 const swap=(arr,index1,index2)=>{
     const index1Value = arr[index1]
     arr[index1] = arr[index2]
     arr[index2] = index1Value
     return arr
 }

 console.log(swap([11,22,33,44],0,1))
// // - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
 const money_loop=(currencyValues, exchangeCurrency)=> {
     for (const property in currencyValues) {
         if (exchangeCurrency === currencyValues[property].currency) {
             return currencyValues[property].value
         }
     }
 }

 const exchange=(sumUAH,exchangeCurrency)=>{
     let currencyValues= [
         {currency:"USD",value:40},
         {currency:"EUR",value:42},
         {currency:"GBP",value:48}
     ]
     let result= sumUAH / money_loop(currencyValues,exchangeCurrency)
     document.write(`${result} = ${exchangeCurrency}` )
 }
 exchange(100000,"EUR")