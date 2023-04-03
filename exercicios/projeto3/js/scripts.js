const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsConatiner = document.querySelector("#posts-container");

async function getAllPosts() {
    const resposnse = await fetch(url);

    const data = await resposnse.json();

    loadingElement.classList.add("hide");

    data.map((post) => {

        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.textContent = post.title;
        body.textContent = post.body;
        link.textContent = "Ler";
        link.setAttribute("href", `/post.html?id=?${post.id}`)

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsConatiner.appendChild(div);

    })
}

getAllPosts()