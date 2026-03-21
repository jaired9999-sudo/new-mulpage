const products = [
    { id: 1, name: "Midnight Suede Loafers", price: 450 },
    { id: 2, name: "Gold-Trimmed Fountain Pen", price: 210 },
    { id: 3, name: "Silk Monogram Scarf", price: 325 }
];

let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];

// 1. Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    
    updateCartCount(); // Update the number in the nav
    alert(`${product.name} added to collection.`);
}

// 2. Update Cart Count (The number in the Nav)
function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = cart.length;
    }
}

// 3. Render Cart (The "Missing Link" for cart.html)
function renderCart() {
    const cartContainer = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    
    if (!cartContainer) return; // Exit if we aren't on the cart page

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your collection is empty.</p>";
        totalElement.innerText = "0";
        return;
    }

    cartContainer.innerHTML = ""; // Clear placeholder
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const itemDiv = document.createElement('div');
        itemDiv.className = "cart-item";
        itemDiv.style = "display: flex; justify-content: space-between; border-bottom: 1px solid #eee; padding: 10px 0;";
        itemDiv.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price}</span>
        `;
        cartContainer.appendChild(itemDiv);
    });

    totalElement.innerText = total;
}

// 4. Checkout Logic
function beginCheckout() {
    if (cart.length === 0) return alert("Your cart is empty.");
    window.location.href = 'checkout.html';
}

// Run these on every page load
window.onload = () => {
    updateCartCount();
    renderCart(); 
};
