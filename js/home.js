console.log('home.js is running');


let productContainer = document.getElementById('product_selection');

const fetchPromise = fetch("../db.json");

fetchPromise.then(response => {
    // console.log(response);
    return response.json();
}).then(data => {
    

    
    console.log(data.length);
    let count = 0;
    let containerDiv = document.createElement('div');
    containerDiv.classList.add('d-flex');
    containerDiv.classList.add('flex-row');
    data.forEach((datum) => {
        
        if (count % 3 != 0) {
            productContainer.innerHTML += `<div class="card"><h4 class="card-title">${datum.title}</h4> <p>${datum.description}</p></div>`
        } else {

        }
        // console.log(datum);
        
        count++;
    });

    // for (let i = 0; i < data.length; i++) {
    //     console.log(data[i]);
    // }

    
    // products = data.map(data => `<h4>${data.title}</h4>`).join('\n');
    // productContainer.innerHTML = products;
})

console.log(fetchPromise);