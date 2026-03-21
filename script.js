// 1. Data Object (Our Inventory)
const inventory = [
    { id: 1, brand: "Roadster", name: "Cotton Casual Shirt", price: 899, cat: "Men" },
    { id: 2, brand: "HRX", name: "Rapid-Dry Training Tee", price: 1299, cat: "Sport" },
    { id: 3, brand: "Anouk", name: "Printed Pure Cotton Kurta", price: 1599, cat: "Women" },
    { id: 4, brand: "H&M", name: "Relaxed Fit Hoodie", price: 2299, cat: "Men" }
];

let cart = JSON.parse(localStorage.getItem('myntra_cart')) || [];

// 2. Navigation Functions
function goToProduct(id) {
    window.location.href = `product.html?id=${id}`;
}

// 3. Add to Cart Logic
function addToCart(id) {
    const item = inventory.find(p => p.id === id);
    cart.push(item);
    localStorage.setItem('myntra_cart', JSON.stringify(cart));
    updateCartIcon();
    alert("Added to Bag");
}

function updateCartIcon() {
    const icons = document.querySelectorAll('.cart-count');
    icons.forEach(i => i.innerText = cart.length);
}

// 4. Dynamic Page Loader (Runs on product.html)
function loadProductDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const product = inventory.find(p => p.id === id);

    if (product) {
        document.getElementById('p-brand').innerText = product.brand;
        document.getElementById('p-name').innerText = product.name;
        document.getElementById('p-price').innerText = "Rs. " + product.price;
        document.getElementById('add-btn').onclick = () => addToCart(product.id);
    }
}

// 5. Cart Renderer (Runs on cart.html)
function renderBag() {
    const container = document.getElementById('bag-items');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<h3>Your bag is empty</h3>";
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div style="display:flex; border:1px solid #eaeaec; margin-bottom:15px; padding:15px;">
            <div style="flex-grow:1">
                <p><b>${item.brand}</b></p>
                <p>${item.name}</p>
                <p>Rs. ${item.price}</p>
            </div>
            <button onclick="removeFromBag(${index})">Remove</button>
        </div>
    `).join('');
    
    const total = cart.reduce((s, i) => s + i.price, 0);
    document.getElementById('total-amt').innerText = total;
}

function removeFromBag(index) {
    cart.splice(index, 1);
    localStorage.setItem('myntra_cart', JSON.stringify(cart));
    renderBag();
    updateCartIcon();
}

window.onload = () => {
    updateCartIcon();
    if (window.location.pathname.includes('product.html')) loadProductDetails();
    if (window.location.pathname.includes('cart.html')) renderBag();
};
