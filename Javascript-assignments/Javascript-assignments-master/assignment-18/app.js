// You have to use the following api
const URI = 'https://api.covid19api.com/countries';

// fetch the data and create cards and show some details about the countries that is coming from the api on the cards in html (you can choose the details what you want to show by yourself, atleast include 2 to 3 properties about that country)

var filter = document.getElementById('filter');
let DATA = [];


// Filter event
filter.addEventListener('keyup', filterItems);

const createCard = (title, content1, content2) => {
    const card = `
        <h2 class="title">${title}</h2>
        <p class="content">${content1}</p>
        <p class="content">${content2}</p>`
    return card;
};

function renderPosts(data = DATA) {
    const posts = document.querySelector('.posts');
    posts.innerHTML = ""
    data.forEach(function (post) {
        const postCardContent = createCard(post.Country, post.Slug, post.ISO2);
        const postCard = document.createElement('div');
        postCard.className = 'card';
        postCard.innerHTML = postCardContent;
        posts.append(postCard);
    });
}

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch(URI);
        DATA = await response.json();
        renderPosts();
    } catch (error) {
        console.log(error.message);
    }
});

// Filter Items
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    
    if (text) {
        const filteredData = DATA.filter(post => post.Country.toLowerCase().includes(text))
        console.log(filteredData)
        renderPosts(filteredData)
    } else {
        renderPosts();
    }
}