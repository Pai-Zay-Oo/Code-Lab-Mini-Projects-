let tbody = document.getElementById('tbody');
let page = '';

fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>{
        console.log(json);
        for(let i=0;i<json.length;i++){
            page += `<tr>
            <td>${json[i].id}</td>
            <td>${json[i].title}</td>
            <td>${json[i].price}$</td>
            <td>${json[i].id}</td>
            <td>
            <a href="${json[i].image}" target="_blank"><img src = "${json[i].image}" class="productImg"></a>
            </td>
            </tr>
            `
        }
        tbody.innerHTML = page;

    })