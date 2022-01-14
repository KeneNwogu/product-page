class CartItem {
    constructor(item, quantity, price) {
        this.item = item;
        this.quantity = quantity;
        this.price = price;
    }
}

// window.onload(() => {
//     let cart = document.querySelector('#cart');
//     cart.classList.add('none');
// });

let cart_items = [];
let cart = document.querySelector('#cart');
let cart_button = document.querySelector('.dropdown-container');
let item_name = document.querySelector('.product-title').innerHTML;

let item_quantity = document.querySelector('#item-quantity');
let add_item_quantity = document.querySelector('#add-item-quantity');
let minus_item_quantity = document.querySelector('#minus-item-quantity');

let add_to_cart = document.querySelector('.add-to-cart-btn');
let selected_item;

add_item_quantity.addEventListener('click', () => {
    let i = Number(item_quantity.innerHTML) + 1;
    item_quantity.innerHTML = i;
    let price = document.querySelector('.discount-price').innerHTML.split('$')[1];
    selected_item = new CartItem(item_name, i, Number(price));
    console.log(selected_item);
});

minus_item_quantity.addEventListener('click', () => {
    if (Number(item_quantity.innerHTML) > 0) {
        let i = Number(item_quantity.innerHTML) - 1;
        item_quantity.innerHTML = i;
    }
});

add_to_cart.addEventListener('click', () => {
    if (selected_item != null) addToCart(selected_item.item, selected_item.quantity, selected_item.price);
    console.log(cart_items);
})

cart_button.addEventListener('click', () => {
    console.log('clicked');
    remove_empty();
    cart.classList.toggle('none');
});

function remove_empty() {
    if (cart_items.length != 0) {
        let empty = document.querySelector('.empty');
        empty.classList.add('none');
    }

    else {
        let empty = document.querySelector('.empty');
        empty.classList.remove('none');
    }
}


function addToCart(item, quantity, price) {
    let cart_item = new CartItem(item, quantity, price);
    cart_items.push(cart_item);
    remove_empty();
    let cart_item_template = $(`
    <div class="cart-item">
        <div><img class="cart-thumbnail" src="./images/image-product-1-thumbnail.jpg"></div>
        <div class="cart-item-description">
            <p>Fall Limited Edition Sneakers</p>
            <p>$${cart_item.price} x ${cart_item.quantity} <span class="bold">$${cart_item.price * cart_item.quantity}</span></p>
        </div>
        <button class="delete-btn"><img src="./images/icon-delete.svg" alt="" srcset=""></button>
    </div>
    `);

    let $cart = $('#cart');
    $cart.append(cart_item_template);
    // $cart.a

    selected_item = null;
    item_quantity.innerHTML = 0;
}

function removeFromCart(cart_item) {
    // implement here
    cart_items.splice(cart_item);
    cart_items.forEach(element => {
        let cart_item_template = $(`
    <div class="cart-item">
        <div><img class="cart-thumbnail" src="./images/image-product-1-thumbnail.jpg"></div>
        <div class="cart-item-description">
            <p>Fall Limited Edition Sneakers</p>
            <p>$${element.price} x ${element.quantity} <span class="bold">$${element.price * element.quantity}</span></p>
        </div>
        <button class="delete-btn"><img src="./images/icon-delete.svg" alt="" srcset=""></button>
    </div>
    `);

        let $cart = $('#cart');
        $cart.append(cart_item_template);

    });
}

$('.delete-btn').on('click', () => {
    console.log('delted')
    removeFromCart(selected_item);
})
