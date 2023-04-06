const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");

const postsConatiner = document.querySelector("#posts-container");

const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#posts-container")
const commentsContainer = document.querySelector("#comments-container")

const urlSearch = new URLSearchParams(window.location.search);

const postId = urlSearch.get("id");

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
        link.setAttribute("href", `/exercicios/projeto3/post.html?id=?${post.id}`)

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsConatiner.appendChild(div);

    })
}

async function getPost(id) {
    const [resposnsePost, resposnseComment] = await Promise.all ([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await resposnsePost.json();

    const dataComment = await resposnseComment.json();

    loadingElement.classList.add("hide");

    postPage.classList.remove("hide")

}

if (!postId) {
    getAllPosts()
}
else {
    getPost(postId)
}