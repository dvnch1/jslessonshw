const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');



fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => post.json())
    .then(post => {

        const postDetails = document.getElementById('post-details');
        postDetails.innerHTML = `
                <p>Title: ${post.title}</p>
                <p>UserId: ${post.userId}</p>
                <p>Body: ${post.body}</p>
                <p>Id: ${post.id}</p>`
        fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
            .then(res => res.json())
            .then(comments => {
                for (const comment of comments) {
                    let divComment = document.createElement("div")
                    divComment.className ="divcomment"
                    document.body.appendChild(divComment)
                    divComment.innerHTML = `
                    <p>PostId: ${comment.postId}</p>
                    <p>Id: ${comment.id}</p>
                    <p>Email: ${comment.email}</p>
                    <p>Body: ${comment.body}</p>
                    `
                }
            })
    })

