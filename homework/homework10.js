// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
// // ==========================
let www = [];
form1.onsubmit = function (e) {
    e.preventDefault();
    console.log(e);
    let obj = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value

    }
    www.push(obj);
    console.log(www)

}
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// ==========================

if (localStorage.getItem('refreshCount') === null) {

    localStorage.setItem('refreshCount', '0');
}
let refreshCount = parseInt(localStorage.getItem('refreshCount'));
refreshCount++;
localStorage.setItem('refreshCount', refreshCount.toString());






// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
function updateVisitCount() {

    let count = localStorage.getItem('visitCount');
    if (!count) {
        count = 0;
    } else {
        count = parseInt(count);
    }
    count++;
    localStorage.setItem('visitCount', count);
    document.getElementById('visitCount').textContent = count;
}
updateVisitCount();
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
  let arr = [
      {name: "vano1"},{name: "vano2"},
      {name: "vano3"},{name: "vano4"},
      {name: "vano5"},{name: "vano6"},
      {name: "vano7"},{name: "vano8"},
      {name: "vano9"},{name: "vano10"},
      {name: "vano11"},{name: "vano12"},
      {name: "vano13"},{name: "vano14"},
      {name: "vano15"},{name: "vano16"},
      {name: "vano17"},{name: "vano18"},
      {name: "vano19"},{name: "vano20"},
      {name: "vano21"},{name: "vano22"},
      {name: "vano23"},{name: "vano24"},
      {name: "vano25"},{name: "vano26"},
      {name: "vano27"},{name: "vano28"},
      {name: "vano29"},{name: "vano30"},
      {name: "vano31"},{name: "vano32"},
      {name: "vano33"},{name: "vano34"},
      {name: "vano35"},{name: "vano36"},
      {name: "vano37"},{name: "vano38"},
      {name: "vano39"},{name: "vano40"},
      {name: "vano41"},{name: "vano42"},
      {name: "vano43"},{name: "vano44"},
      {name: "vano45"},{name: "vano46"},
      {name: "vano47"},{name: "vano48"},
      {name: "vano49"},{name: "vano50"},
      {name: "vano51"},{name: "vano52"},
      {name: "vano53"},{name: "vano54"},
      {name: "vano55"},{name: "vano56"},
      {name: "vano57"},{name: "vano58"},
      {name: "vano59"},{name: "vano60"},
      {name: "vano61"},{name: "vano62"},
      {name: "vano63"},{name: "vano64"},
      {name: "vano65"},{name: "vano66"},
      {name: "vano67"},{name: "vano68"},
      {name: "vano69"},{name: "vano70"},
      {name: "vano71"},{name: "vano72"},
      {name: "vano73"},{name: "vano74"},
      {name: "vano75"},{name: "vano76"},
      {name: "vano77"},{name: "vano78"},
      {name: "vano79"},{name: "vano80"},
      {name: "vano81"},{name: "vano82"},
      {name: "vano83"},{name: "vano84"},
      {name: "vano85"},{name: "vano86"},
      {name: "vano87"},{name: "vano88"},
      {name: "vano89"},{name: "vano90"},
      {name: "vano91"},{name: "vano92"},
      {name: "vano93"},{name: "vano94"},
      {name: "vano95"},{name: "vano96"},
  ]

let start = 0;
let step = 10;
let limit = start + step



  let next = document.createElement("button")
  let prev = document.createElement("button")
  document.body.append(next,prev)
  next.innerText = "Next"
  prev.innerText = "Prev"
next.onclick = function () {
    for (let i = start; i < limit; i++){
        console.log(arr[i])
    }
    start = limit;
    limit = start + step;
};
prev.onclick = function (){
    let revArr = arr.reverse()

    for (let i = start; i < limit; i++){
        console.log(revArr[i])
    }
    start = limit;
    limit = start + step;
}
// //

// //
// //
// //
// // - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let id = document.createElement("div")
let button = document.createElement("button")
button.innerText = `id="text"`
document.body.appendChild(id)
id.appendChild(button)
button.onclick = function (e){
     button.innerText = ""
}

//
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function validateAge() {
    let ageInput = document.getElementById("age");
    let age = parseInt(ageInput.value);

    if (isNaN(age)) {
        document.write("Age is too low.");
        return false;
    }

    let minimumAge = 18;
    if (age < minimumAge) {
        document.write("You must be at least " + minimumAge + " years old.");
        return false;
    }
    return true;}



//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
function generateGrid() {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    let content = document.getElementById('content').value;

    let gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = content;
            gridContainer.appendChild(gridItem);
        }
    }
    gridContainer.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
}
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається