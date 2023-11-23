const apiKey = `X0A0Vnz2KtQWIuObokzzXwOAIKppryYChozd8wLwZ-8`;

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
const searchBtn = document.getElementById("search-btn");
const pageNot = document.getElementById("pageNot");
// console.log("searFrom", searchForm);
// console.log("searBox", searchBox);
// console.log("searRe", searchResult)
// console.log("ShowMore", showMoreBtn)


let keyWord = "bird";
let page = 1;

async function searchImage() {
    keyWord = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyWord}&client_id=${apiKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.total <= 0) {

        pageNot.style.display = "block"
        showMoreBtn.style.display = "none";
        searchResult.innerHTML = "";
        return;
    }
    const results = data.results;
    if (page === 1) {
        searchResult.innerHTML = "";
    }


    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html;
        imageLink.target = "_blank";

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block";
    pageNot.style.display = "none"
}


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    page = 1;
    searchImage();

})

showMoreBtn.addEventListener("click", (e) => {
    page++;
    searchImage();
})


