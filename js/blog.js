const postsContainer = document.querySelector (".posts-container");

const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts/?_embed";

console.log(url);

async function fetchPosts() {
      const response = await fetch(url);
      const results = await response.json();
      
      const posts = results;
  
      console.log(results);

      postsContainer.innerHTML = "";

      for (let i = 0; i < posts.length; i++) {   

        if(i === 12) {
            break;
        }
        
        postsContainer.innerHTML +=
        `
        <div class="posts">
        <div class="posts-title">
        <a href="/specificpage.html?id=${posts[i].id}">
        <h2>${posts[i].title.rendered}</h2>
        </a>
        <p>Published: ${posts[i].date.replace(`T`, ` Time: `)}</p>
        </div>

        <div class="posts-details">
        <a href="/specificpage.html?id=${posts[i].id}">
        <div class="posts-featured-img">
        <img src="${posts[i]._embedded['wp:featuredmedia'][0].source_url}" alt="${posts[i]._embedded["wp:featuredmedia"][0].alt_text}">
        </div>
        </a>
        
        <div class="posts-text-button">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...</p>
        <a href="/specificpage.html?id=${posts[i].id}">
        <button class="readmore-button">Read More</button>
        </a>
        </div>
        </div>

        </div>
        `;
      }

}

fetchPosts();

