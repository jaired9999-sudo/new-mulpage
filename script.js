// Product Data
const products = [
    { id: 1, name: "Midnight Suede Loafers", price: 450 },
    { id: 2, name: "Gold-Trimmed Fountain Pen", price: 210 },
    { id: 3, name: "Silk Monogram Scarf", price: 325 }
];

// Initialize Cart
let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];

// 1. Add to Cart Function
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    alert(`${product.name} has been added to your collection.`);
    updateCartCount();
}

// Update Cart Count UI
function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// 2. Begin Checkout Function
function beginCheckout() {
    if (cart.length === 0) {
        alert("Your collection is currently empty.");
        return;
    }
    window.location.href = 'checkout.html';
}

// 3. Complete Purchase Function
function completePurchase(event) {
    event.preventDefault();
    // In a real app, you'd process payment here
    localStorage.removeItem('luxury_cart');
    window.location.href = 'success.html';
}

window.onload = updateCartCount;
