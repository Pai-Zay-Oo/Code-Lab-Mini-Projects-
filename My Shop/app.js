let tbody = document.getElementById('tbody');
let page = '';
let card = document.getElementById("card");

card.style.display = "none";

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        for(let i=0;i<json.length;i++){
            page += `<tr onclick = "detail(${json[i].id})">
            <td>${json[i].id}</td>
            <td>${json[i].title}</td>
            <td>${json[i].price}$</td>
            <td>${json[i].category}</td>
            <td>
            <a href="${json[i].image}" target="_blank"><img src = "${json[i].image}" class="productImg"></a>
            </td>
            </tr>
            `
        }
        tbody.innerHTML = page;

    });
    function detail(id){
        fetch('https://fakestoreapi.com/products/' + id)
        .then(res=>res.json())
        .then(json =>{
            card.innerHTML = `
            <div class="cardBody">
            <div>
                <img src="${json.image}">
            </div>
            <div>
                <p>${json.title}</p>
                <p>${json.price}</p>
                <p>${json.category}</p>
            </div>
        </div>`
        card.style.display = "block";
        })
    }