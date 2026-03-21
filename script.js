// Initialize DataLayer for GTM
window.dataLayer = window.dataLayer || [];

const catalog = [
    { id: 'LUX_01', name: 'Onyx Reserve Watch', price: 1200, category: 'Timepieces' },
    { id: 'LUX_02', name: 'Silk Midnight Gown', price: 850, category: 'Apparel' },
    { id: 'LUX_03', name: 'Gold Leaf Cufflinks', price: 300, category: 'Accessories' }
];

// Add to Cart Logic
function addToCart(id) {
    const item = catalog.find(p => p.id === id);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));

    // GA4 Event
    window.dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
            currency: 'USD',
            value: item.price,
            items: [{
                item_id: item.id,
                item_name: item.name,
                price: item.price,
                item_category: item.category,
                quantity: 1
            }]
        }
    });
    alert('Item added to your collection.');
}

// Checkout Trigger
function beginCheckout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) return alert("Your cart is empty.");

    window.dataLayer.push({
        event: 'begin_checkout',
        ecommerce: {
            currency: 'USD',
            value: cart.reduce((acc, i) => acc + i.price, 0),
            items: cart.map(i => ({ item_id: i.id, item_name: i.name, price: i.price }))
        }
    });
    window.location.href = 'checkout.html';
}

// Final Purchase Logic (Success Page)
function finalizePurchase() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if(cart.length === 0) return;

    window.dataLayer.push({
        event: 'purchase',
        ecommerce: {
            transaction_id: 'T' + Date.now(),
            value: cart.reduce((acc, i) => acc + i.price, 0),
            currency: 'USD',
            items: cart.map(i => ({ item_id: i.id, item_name: i.name, price: i.price }))
        }
    });
    localStorage.removeItem('cart'); // Clear after success
}
