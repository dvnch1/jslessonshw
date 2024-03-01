// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
 function square (a,b){
     return a * b;
 }
 let x=square(4,9)
 console.log(x)
// //- створити функцію яка обчислює та повертає площу кола з радіусом r
//
 function round(p,r,s){
     return p * r * s;
 }
 let y = round(3.14,50, 2)
 console.log(y)
//
//
// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
 function cilin(s,p,r,h,y){
     return s*p*r*(h+y)
 }
 let e= cilin(2,3.14,10,5,10)
 console.log(e)
// //- створити функцію яка приймає масив та виводить кожен його елемент
 let arr= [
     {name:"steeve", password:1424214, login:"Maddog"},
     {name:"bill", password:1423432, login:"Killbill"},
     {name:"john", password:134234, login:"Sena"},
     {name:"kira", password:1213123, login:"washer69"}
 ]
 for (const key of arr) {
     array(key.name, key.password, key.login)
 }
 function array(name,password,login){
     console.log(`${name},${password},${login}`)
 }
 //
 //
 ////- створити функцію яка створює параграф з текстом. Текст задати через аргумент
 function text(block){
     document.write(`<p>${block}</p>`)
 }
 let w = "створити функцію яка створює параграф з текстом. Текст задати через аргумент"
 text(w)
//
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
 function ulli(text){
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
// ////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 function ulli2(text,count){
    let acc1 = ``;
     for (let i=0; i < count; i++){
        acc1 = acc1 + `<li>${text}</li>`
 }
     return acc1
}
function www1(text,count){
    let ter = ulli2(text,count)
    document.write(`<ul>${ter}</ul>`)
}

 let qq = "Доброго вечора ми з України2"
 www1(qq,4)
// //
// ////- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// //
 let arr1= [
     {mas:"wwee", data2:1424214, data3:true, data4:false},

 ]


 function list(mas,data2,data3,data4){
     document.write(`<ul>
 <li>${mas}</li>
 <li>${data2}</li>
 <li>${data3}</li>
 <li>${data4}</li>
     </ul>`)
 }
 for (const key of arr1) {
     list(key.mas, key.data2, key.data3, key.data4)
//
//
// //
// //- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
 let h=[
     {id:2, name2:"Vova",age:44},
     {id:23, name2:"Lina",age:28},
     {id:24, name2:"Ira",age:33}
 ]

 function data(id,name2,age){

     document.write(`
     <div>${id}</div>
     <div>${name2}</div>
     <div>${age}</div>`)
 }
 for (const datum of h){
     data(datum.id, datum.name2, datum.age)
 }}
//
// //- створити функцію яка повертає найменьше число з масиву
 function numbers(){
     let min = 0;
     let max= 0;
     for (const item of arguments) {
         if (item < min){
             min=item} else if (item > max){
             max = item
         }
     }
     console.log(min)
 }
 numbers(1,5,7,9,10)
// //- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

function sum(arr) {
    let acc = 0;
    for (const property in arr) {
        acc = acc + arr[property]

    }
    return acc
}

let a = sum([1,2,10])
console.log(a)






// //- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// //Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap(arr,index1,index2){

function swap(arr,index1,index2){
    const index1Value = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = index1Value
    return arr
}

console.log(swap([11,22,33,44],0,1))







// swap([11,22,33,44],0,1)
// //- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// //Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//


function money_loop(currencyValues, exchangeCurrency) {
    for (const property in currencyValues) {
        if (exchangeCurrency === currencyValues[property].currency) {
            return currencyValues[property].value
        }
    }
}

 function exchange(sumUAH,exchangeCurrency){
     let currencyValues= [
         {currency:"USD",value:40},
         {currency:"EUR",value:42},
         {currency:"GBP",value:48}
     ]
    let result= sumUAH / money_loop(currencyValues,exchangeCurrency)
     document.write(`${result} = ${exchangeCurrency}` )
 }
 exchange(100000,"EUR")

