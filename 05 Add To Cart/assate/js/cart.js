let iconCart = document.querySelector('.cart-icon');
let closeIcon = document.querySelector('.cart-tap .close');
let body = document.querySelector('body');

// open & close tap 
iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTapCart');
});

// closeIcon.addEventListener('click', () => {
//     body.classList.toggle('activeTapCart');
// });

/* Product Cart */

const productGrid = document.querySelector('.product-grid');
const cartCount = document.querySelector('.cart-count');

const products = [
    {
        id : 1,
        title : 'First Product',
        price : 35,
    },
    {
        id : 2,
        title : 'Secound Product',
        price : 45,
    },
    {
        id : 3,
        title : 'Third Product',
        price : 55,
    },
    {
        id : 4,
        title : 'Four Product',
        price : 65,
    },
    {
        id : 5,
        title : 'Five Product',
        price : 75,
    },
    {
        id : 6,
        title : 'Six Product',
        price : 85,
    },
    {
        id : 7,
        title : 'Seven Product',
        price : 95,
    },
    {
        id : 8,
        title : 'Eight Product',
        price : 135,
    },
];

let cartItems = [];

// get dataform local
const getSavedItem = () => {
    let dataFormLocal = JSON.parse(localStorage.getItem('cartitems'));

    if(dataFormLocal){
        cartItems = dataFormLocal;
        // count add to cart
        cartCount.textContent = cartItems.length;
    }
};
getSavedItem();

// Add to cart 
const addToCarts = (element) =>{
    let clickItemId = element.parentElement.getAttribute('data-id');
    let getProduct = products.find((item) => item.id == clickItemId);

    let exactingProduct = cartItems.find((item) => item.id == clickItemId);

    if(exactingProduct){
        exactingProduct.quantity += 1;

    }else{
        let itemToCart = {
            id: getProduct.id,
            title : getProduct.title,
            price : getProduct.price,
            quantity: 1 ,
        };
    
        // push fake arry 
        cartItems.push(itemToCart);
    }

   

    // count add to cart
    cartCount.textContent = cartItems.length;

    // save to local
    saveToLocal();

    console.log(cartItems);
}

// Save to Local storage
const saveToLocal = () =>{
    localStorage.setItem('cartitems', JSON.stringify(cartItems))
} 

// Render Html 
const renderHtml = (product) => {
    let html = `<img src="https://picsum.photos/200" alt="">
                <h3 class="product-title">${product.title}</h3>
                <h3 class="product-price">$${product.price}</h3>
                <button class="addToCart" onclick="addToCarts(this)">Add To Cart</button> `;
    
    let div = document.createElement('div');
    div.classList.add('product-cart');
    div.setAttribute('data-id', product.id);
    div.innerHTML = html ;
    
    productGrid.appendChild(div);
}

// fetch the product 

products.forEach((product) => {
    renderHtml(product);
})