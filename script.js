let modalQt = 1;
let cart = [];
let modalKey = 0;

const q = e=>document.querySelector(e);
const qa = e=>document.querySelectorAll(e);

pizzaJson.map((item, index)=>{
    let pizzaItem = q('.models .pizza-item').cloneNode(true);

    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        q('.pizzaBig img').src = pizzaJson[key].img;
        q('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        q('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        q('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
        q('.pizzaInfo--size.selected').classList.remove('selected');

        qa('.pizzaInfo--size').forEach((size, sizeIndex) => {
            if(sizeIndex == 2) {
                size.classList.add('selected');
            }
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });

        q('.pizzaInfo--qt').innerHTML = modalQt;

        q('.pizzaWindowArea').style.display = 'flex';
        setTimeout(() => {
            q('.pizzaWindowArea').style.opacity = 1;
        }, 200);
    });

    q('.pizza-area').append(pizzaItem);
});

// Eventos do Modal
function closeModal() {
    q('.pizzaWindowArea').style.opacity = 0;
    setTimeout(() => {
        q('.pizzaWindowArea').style.display = 'none';
    }, 200);
}

qa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});

q('.pizzaInfo--qtmais').addEventListener('click', ()=>{
    modalQt++;
    q('.pizzaInfo--qt').innerHTML = modalQt;
});

q('.pizzaInfo--qtmenos').addEventListener('click', ()=>{
    if(modalQt > 1) {
        modalQt--;
        q('.pizzaInfo--qt').innerHTML = modalQt;
    }
});

qa('.pizzaInfo--size').forEach((size, sizeIndex) => {
    size.addEventListener('click', ()=>{
        q('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

q('.pizzaInfo--addButton').addEventListener('click', ()=>{

})