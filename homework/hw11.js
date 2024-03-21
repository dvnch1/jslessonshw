// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//

 fetch('https://dummyjson.com/carts')
     .then(res => res.json())
     .then(carts => {
         for (const cart of carts.carts) {
             console.log(cart)

             let divCart = document.createElement("div")
             document.body.appendChild(divCart)

             for (const productsFromCart of cart.products) {
                 console.log(productsFromCart)

                 for (let i = 0; i < cart.products.length; i++) {
                     let p = document.createElement("p")
                     divCart.appendChild(p)
                     p.innerHTML = `
                     id = ${productsFromCart.id}
                     Title = ${productsFromCart.title}
                     Price = ${productsFromCart.price}
                     Quantity = ${productsFromCart.quantity}
                     discount = ${productsFromCart.discountedPrice}
                     <img src=${productsFromCart.thumbnail}>
                     `
                 }

             }
         }

     });



//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

 fetch('https://dummyjson.com/recipes')
     .then(res => res.json())
     .then(recipes => {
         for (const recpt of recipes.recipes){
             let divForRec = document.createElement("div")
             document.body.appendChild(divForRec)
             divForRec.innerText = `Dish = ${recpt.name}`
             let ul = document.createElement("ul")
             divForRec.appendChild(ul)
             ul.innerText = `Ingridients`
             for (const part of recpt.ingredients) {
                 let li = document.createElement("li")
                 ul.appendChild(li)
                 li.innerText =`${part}`

             }
         }
     })
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)