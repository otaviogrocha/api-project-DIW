const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get("id");

const card = document.querySelector('.product-details');
fetch(`https://diwserver.vps.webdock.cloud/products/${id}`).then(response => response.json())
    .then(data => {
        card.innerHTML += `
        <img class="product-image" src="${data.image}" alt="Product Image">
        <h2 class="product-title">${data.title}</h2>
        <p class="product-description">${data.description}</p>
        <p class="card-text">${data.usage}</p>
        <h6 class="product-price card-subtitle mb-2 text-muted">R$ ${data.price},00</h6>
        <a href="#" class="product-buy-button btn btn-danger">Comprar</a>
      </div>
        `
    });