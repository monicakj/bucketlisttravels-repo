const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://bucketlisttravels.mskj.one/wp-json/wp/v2/posts/" + id + "?_embed";

const headTitle = document.querySelector("title");
const headMeta = document.querySelector("head");

const detailsContainer = document.querySelector(".post-details");

async function fetchPost() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(details);

        createHtml(details);

} catch(error) {
        console.log("An error has occurred.");
        detailsContainer.innerHTML = displayError();
    }   

    const modalContainer = document.querySelector(".modal-container");
    let modalImg = document.querySelectorAll(".post-content img");
  
        modalImg.forEach (function(images, i)  {
            let image = modalImg[i];

            image.addEventListener("click", function() {
                image.classList.add("modal");
                modalContainer.style.display = "block";
  
  })
    modalContainer.addEventListener("click", closeModal);
    function closeModal() {
      modalContainer.style.display = "none";
      image.classList.remove("modal");
  }
  })
  }
  fetchPost();  


function createHtml(details) {
    headTitle.innerText = `Bucket List Travels | ${details.title.rendered}`;
    headMeta.innerHTML += `<meta name="description" content="${details.title.rendered}">`;

    // modal.innerHTML = `${details.content.rendered}`;

    detailsContainer.innerHTML = 
        `
        <div class="post-content">
         <h1>${details.title.rendered}</h1>

         <div class="post-date">
         <p>Written by: ${details._embedded.author[0].name.replace(`Admin`, `Ola Nordmann`)}</p>
         <p>Published: ${details.date.replace(`T`, ` Time: `)}</p>
         </div>

         ${details.content.rendered}
        </div>
        `;
}


