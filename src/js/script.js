function init() {

    const urlParams = new URLSearchParams(window.location.search)
    let category = ""

    if (urlParams.get("category"))
        category = "/category/" + urlParams.get("category")

    const card = document.querySelector('#produto');

    console.log(category)

    fetch(`https://diwserver.vps.webdock.cloud/products${category}?page_items=20`).then(response =>
        response.json()).then(data => {
            for (let i = 0; i < data.products.length ?? data.length; i++) {
                const produto = data.products[i] ?? data[i];
                card.innerHTML += `
            <div class="p-3">
            <div class="card h-100 shadow">
                        <img src="${produto.image}" class="card-img-top-fluid" alt="...">
                        <div class="card-body">
                            <h4 class="card-title text-truncate">${produto.title}</h4>
                            <p class="card-text">${produto.usage}</p>
                            <h6 class="card-subtitle mb-2 text-muted">R$ ${produto.price},00</h6>
                            <a href="detalhes.html?id=${produto.id}" class="btn btn-danger">Comprar</a>    
                        </div>
                        </div>
                </div>`
            }
        })
}

function searchCategory() {
    window.location.href = "/?category=" + document.getElementById("category").value;
}



function search() {
    const search = document.getElementById("search").value
    card.innerHTML = ""

    fetch(`https://diwserver.vps.webdock.cloud/products/search?page_items=20&query=${search}`).then(response => response.json()).then(data => {
        console.log(data)
        if (data.length)
            data.forEach(produto => {
                card.innerHTML += `
                <div class="col-md-4">
                <div class="card h-100 shadow">
                            <img src="${produto.image}" class="card-img-top-fluid" alt="...">
                            <div class="card-body">
                                <h4 class="card-title text-truncate">${produto.title}</h4>
                                <p class="card-text">${produto.usage}</p>
                                <h6 class="card-subtitle mb-2 text-muted">R$ ${produto.price},00</h6>
                                <a href="detalhes.html?id=${produto.id}" class="btn btn-danger">Comprar</a>    
                            </div>
                            </div>
                    </div>`
            })

    })
}

fetch('https://diwserver.vps.webdock.cloud/products/categories').then(response => response.json()).then(data =>{
    console.log(data)
})


init()