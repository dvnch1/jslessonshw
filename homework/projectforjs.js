let mainBlock = document.createElement("div")
document.body.appendChild(mainBlock)
mainBlock.className = "mainBlock"

fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        for (const user of users) {
            let divUser = document.createElement("div")
            mainBlock.appendChild(divUser)
            divUser.innerText = `
        id: ${user.id}
        name: ${user.name}
       
        `
            divUser.className = "userBlock"
            let button = document.createElement("button")
            divUser.appendChild(button)

            button.innerText = "Details"
            button.addEventListener('click', () => {
            window.location.href = `user-details.html?id=${user.id}`;
            })

        }
    })


// Стилизація проєкта -
// index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.
//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .
//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати, так, щоб було видно що це блоки (дати фон. марджини і тд)