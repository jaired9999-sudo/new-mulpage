const products = [
    { id: 1, name: "Midnight Suede Loafers", price: 450 },
    { id: 2, name: "Gold-Trimmed Fountain Pen", price: 210 },
    { id: 3, name: "Silk Monogram Scarf", price: 325 }
];

let cart = JSON.parse(localStorage.getItem('luxury_cart')) || [];

// Add Item
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    localStorage.setItem('luxury_cart', JSON.stringify(cart));
    updateUI();
}

// Global UI Update
function updateUI() {
    // 1. Update Navigation Count
    const counts = document.querySelectorAll('.cart-count');
    counts.forEach(el => el.innerText = cart.length);

    // 2. Update Hover Preview
    const previewContainer = document.getElementById('preview-items');
    if (previewContainer) {
        if (cart.length === 0) {
            previewContainer.innerHTML = "<p style='font-size:0.7rem;'>Your collection is empty.</p>";
        } else {
            previewContainer.innerHTML = cart.map(item => `
                <div class="preview-item">
                    <span>${item.name}</span>
                    <span>$${item.price}</span>
                </div>
            `).join('');
        }
    }

    // 3. Update Full Cart Page (if user is on cart.html)
    const fullCartContainer = document.getElementById('full-cart-items');
    const totalEl = document.getElementById('cart-total');
    if (fullCartContainer) {
        fullCartContainer.innerHTML = cart.map(item => `
            <div style="display:flex; justify-content:space-between; padding:15px 0; border-bottom:1px solid #eee;">
                <span>${item.name}</span>
                <span>$${item.price}</span>
            </div>
        `).join('');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalEl.innerText = total;
    }
}

function clearCart() {
    localStorage.removeItem('luxury_cart');
    cart = [];
    updateUI();
}

// Run on page load
window.onload = updateUI;
