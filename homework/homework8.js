// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id,name,surname,email,phone){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
}
let arr =[
    new User(1,"Sanya", "Banya","snya445@mail.com","5553234"),
    new User(2,"Danya", "Ganya","wewewa@mail.com","4343423234"),
    new User(3,"Hanya", "Aanya","w2131@mail.com","534523421"),
    new User(4,"Tanya", "Qanya","fffaa@mail.com","5435345"),
    new User(5,"Xanya", "Kanya","torrent@mail.com","12312321"),
    new User(6,"Janya", "Manya","carwasher69@mail.com","43242566"),
    new User(7,"Panya", "Wanya","helllow@mail.com","876786654"),
    new User(8,"Kanya", "Lanya","popoers@mail.com","56452234"),
    new User(7,"Nanya", "OOanya","hssse@mail.com","8767877854"),
    new User(10,"Vanya", "HHEanya","wwwqqss@mail.com","56451231334"),
]


//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
let b1 = arr.filter(function (e){
    return e.id % 2 === 0;
})
console.log(b1)



// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let a = arr.sort( function (a, b){
    if (a.id > b.id){
        return 1;
    }
    if (a.id <b.id){
        return -1;
    }
    return 0;
})
console.log(a)

//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client{
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clientBase = [
    new Client(1,"Ivan","Polanov","nekusjii@mail.com","8843432233",["car","bed","rambler","Dendi"]),
    new Client(2,"Van","Bolanov","eqweqw@mail.com","43432233",["Box","bed"]),
    new Client(3,"Wan","Nolanov","ndsdsdii@mail.com","83432233",["Neet","bed","rambler"]),
    new Client(4,"Gan","Golanov","ggtgr@mail.com","8843433",["pillow","rambler"]),
    new Client(5,"Han","Jolanov","bfgbfg@mail.com","882233",["worker","bed1","rambler"]),
    new Client(6,"Jan","Lolanov","ikuiku@mail.com","884233",["colide","rambler"]),
    new Client(7,"Lan","Rolanov","tregeg@mail.com","8843423",["strider","bed","rambler"]),
    new Client(8,"Pan","Golanov","nghng@mail.com","4454533",["alllin"]),
    new Client(9,"Yan","Holanov","wawasd@mail.com","5786578233",["smoker","bed","rambler"]),
    new Client(10,"Tan","Yolanov","bgfss@mail.com","575732233",["cig","rambler"]),

]

console.log(clientBase)

let c = clientBase.sort(function (a, b){
    if (a.order.length > b.order.length){
        return 1;
    }
    if (a.order.length < b.order.length){
        return -1;
    }
    return 0;
})
console.log(c)

//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue

//
function Car(model,company,year,maxSpeed,engine,driver=[]){
        this.model = model;
        this.company = company;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.addDriver = [""];
        function drive() {
        console.log("Їдемо" + " " + "зі" + " " + "швидкістю" +" "+ `${arr2.maxSpeed}`+ " "+ "на" + " " + "годину")
    }


}
let arr2 = new Car("Volvo","Japan","1999",180,"2.0");

function drive() {
    console.log("Їдемо" + " " + "зі" + " " + "швидкістю" +" "+ `${arr2.maxSpeed}`+ " "+ "на" + " " + "годину")
}

drive(arr2)
function info(){
    document.write(
        'модель'+` `+`${arr2.model}`,
        "Виробник"+" "+ `${arr2.company}`,
        "Рік Випуску"+" "+`${arr2.year}`,
        "Максимальна Швидкість"+" "+ `${arr2.maxSpeed}`,
        "Об'єм двигуна" +" "+`${arr2.engine}`
)
}
info(arr2)

function increaseMaxSpeed (obj,newSpeed){
   return  console.log(arr2.maxSpeed + newSpeed)
}
increaseMaxSpeed(arr2,100)

function changeYear (obj,newValue) {
    return console.log(arr2.year = newValue)
}
changeYear(arr2, 2002)

arr2.addDriver.push("12",23,"toyota")




// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
class Cars{
    constructor(model,company,year,maxSpeed,engine,driver = []) {
        this.model = model;
        this.company = company
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
        this.addDriver = [];

    }
}
let arr3 = new Cars("Volvo","Japan","1989",199,"2.5");
function drive2() {
    console.log("Їдемо" + " " + "зі" + " " + "швидкістю" +" "+ `${arr3.maxSpeed}`+ " "+ "на" + " " + "годину")
}
drive2(arr3)
function info1(){
    document.write(
        'модель'+` `+`${arr3.model}`,
        "Виробник"+" "+ `${arr3.company}`,
        "Рік Випуску"+" "+`${arr3.year}`,
        "Максимальна Швидкість"+" "+ `${arr3.maxSpeed}`,
        "Об'єм двигуна" +" "+`${arr3.engine}`
    )
}
info1(arr3)
function increaseMaxSpeed1 (obj,newSpeed){
    return  console.log(arr3.maxSpeed + newSpeed)
}
increaseMaxSpeed1(arr3,110)
function changeYear1 (obj,newValue) {
    return console.log(arr3.year = newValue)
}
changeYear1(arr3, 2003)
arr3.addDriver.push("13",55,"bmw")
console.log(arr3)
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size = size
    }
}
let popey = [
        new Popelushka("Anna",15,30),
        new Popelushka("Ira",17,27),
        new Popelushka("Kira",19,31),
        new Popelushka("Alla",20,29),
    new Popelushka("Jenia",24,28),
    new Popelushka("Vira",33,32),
    new Popelushka("Lena",29,33),
    new Popelushka("Luna",18,26),
    new Popelushka("Karya",17,34)]
console.log(popey)

class Prince{
    constructor(name,age,foundsize){
        this.name=name;
        this.age=age;
        this.foundsize = foundsize
    }
}
let we= new Prince("Askold",25,26)
console.log(we)

for (const key of popey) {
    if (key.size === we.foundsize) {
        console.log(`${we.name}`+" "+"loves"+" "+`${key.name}`)
    }
}


console.log(popey.find(c => c.size === we.foundsize));