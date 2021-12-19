const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts?_embed";
const carousel = document.querySelector(".carouselbox");
const buttonLeft = document.querySelector(".switchLeft");
const buttonRight = document.querySelector(".switchRight");

async function fetchPosts() {
      const response = await fetch(url);
      const results = await response.json();
      
      const posts = results;
  
      console.log(results);

      carousel.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {
          carousel.innerHTML +=
          `
          <a href="specificpage.html?id=${posts[i].id}" class="item">
          <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}">
          
          <div class="carousel-title">
          <p>${posts[i].title.rendered}</p>
          </div>
          </a>
          `;
      }

}

fetchPosts();

let scrollPerClick = document.querySelector(".carouselbox").clientWidth; 
let scrollAmount = 0; 

buttonLeft.onclick = function () {
    carousel.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: "smooth",
    });

    if(scrollAmount < 0) {
        scrollAmount = 0
    }
}

buttonRight.onclick = function() {
    if(scrollAmount <= carousel.scrollWidth - carousel.clientWidth) {
        carousel.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: "smooth",
        }); 
    }
}

