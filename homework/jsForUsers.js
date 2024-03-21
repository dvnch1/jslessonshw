fetch("http://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
    for (const usr of users) {
        let divUser = document.createElement("div")
        document.body.appendChild(divUser)
        divUser.innerText = `
        id = ${usr.id}
        name = ${usr.name}
        `
        let button = document.createElement("button")
        divUser.appendChild(button)

        button.innerText = "Profile"
        button.onclick = function() {window.location.href = `https://jsonplaceholder.typicode.com/users/${usr.id}`;
        }



    }
})