const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res => res.json())
    .then(user => {
        const userDetails = document.getElementById('user-details');
        userDetails.innerHTML = `
              <p> ID: ${user.id} </p>
              <p> Name: ${user.name}</p>
              <p> Username: ${user.username}</p>
              <p> Email: ${user.email}</p>
              <p> Phone: ${user.phone}</p>
              <p> Website: ${user.website}</p>
              <p> Company: ${user.company.name}</p>
              <p>Company Slogan: ${user.company.catchPhrase}</p>
              <p> Company Info: ${user.company.bs}</p>
              <p> Address: ${user.address.street} , ${user.address.suite} , ${user.address.city}</p>
               <p>Zipcode: ${user.address.zipcode}</p>
               <p>Location: ${user.address.geo.lat} , ${user.address.geo.lng}</p>

           `;
        let divForButt = document.createElement("div")
        document.body.appendChild(divForButt)
        divForButt.className = "divforbut"
        let butt = document.createElement("button")
        butt.innerText = "Post of current user";
        divForButt.appendChild(butt);
        butt.className ="buttonpost";

        butt.addEventListener('click', () => {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(post => post.json())
                .then(post => {
                    let divForPost = document.createElement("div")
                    document.body.appendChild(divForPost)
                    divForPost.className = "divForPost"

                    for (const keyTitle of post) {
                        let postTitle = document.createElement("div")
                        postTitle.className = "posttitle";
                        divForPost.appendChild(postTitle);
                        postTitle.innerText = `Title: ${keyTitle.title}`;

                        let but = document.createElement("button")
                        postTitle.appendChild(but);
                        but.innerText = `Post details`;
                        but.addEventListener('click', () => {
                            window.location.href = `post-details.html?id=${keyTitle.id}`;
                        })


                    }


                })

        })

    })


