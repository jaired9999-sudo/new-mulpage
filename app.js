/* ================================================================
   VELURA — Shared JavaScript
   Products · Cart · Wishlist · Nav · Footer · Utils
================================================================ */

/* ── Product Database ── */
const PRODUCTS = [
  {id:1,  name:'Silk Anarkali Suit',     brand:'Biba',             price:5499, old:7999,  cat:'women', sub:'ethnic',   emoji:'🌸', badge:'sale',rating:4.6,rev:312, desc:'Floor-length georgette anarkali with intricate embroidery and dupatta. Festive elegance for every occasion.',   colors:['#8B1A1A','#1A3A5C','#2D5016'],sizes:['XS','S','M','L','XL'],trending:true},
  {id:2,  name:'Linen Blazer',           brand:'Westside',         price:3299, old:4999,  cat:'men',   sub:'formal',   emoji:'🧥', badge:'sale',rating:4.4,rev:89,  desc:'Unstructured Italian linen blazer for effortless summer dressing. Relaxed shoulder construction.',           colors:['#8B7355','#2C2C2C','#F5F0E8'],sizes:['S','M','L','XL','XXL'],trending:false},
  {id:3,  name:'Gold Jhumka Earrings',   brand:'Anouk',            price:1299, old:null,  cat:'accessories',sub:'jewellery',emoji:'✨',badge:'new', rating:4.8,rev:456, desc:'22k gold-plated jhumkas with meenakari detailing. Handcrafted by Jaipur artisans.',                        colors:['#C9A84C','#C0C0C0'],           sizes:['One Size'],           trending:true},
  {id:4,  name:'Velvet Lehenga Set',     brand:'Libas',            price:8999, old:13999, cat:'women', sub:'ethnic',   emoji:'👗', badge:'lux', rating:4.9,rev:67,  desc:'Hand-embroidered velvet lehenga with zardozi work. Bridal couture crafted for grand occasions.',           colors:['#6B1F3A','#1F3A6B','#2D4A1F'],sizes:['XS','S','M','L'],      trending:true},
  {id:5,  name:'Rose Oud Parfum',        brand:'Forest Essentials',price:3800, old:null,  cat:'beauty',sub:'fragrance', emoji:'🌹', badge:null,  rating:4.7,rev:234, desc:'Pure oud and Bulgarian rose attar. An intoxicating 12-hour fragrance of warm spice and floral depth.',       colors:['#8B1A1A','#5C3D2E'],           sizes:['30ml','50ml','100ml'], trending:false},
  {id:6,  name:'Kashmiri Pashmina',      brand:'Kilmora',          price:4599, old:6200,  cat:'accessories',sub:'scarves',emoji:'🧣',badge:'sale',rating:4.5,rev:178, desc:'100% grade-A pashmina from the Changthangi goat of Ladakh. Woven on traditional handlooms.',               colors:['#F5F0E8','#8B7355','#4A3728'], sizes:['One Size'],           trending:false},
  {id:7,  name:'Handloom Kurta Set',     brand:'Fabindia',         price:2199, old:3200,  cat:'men',   sub:'ethnic',   emoji:'👕', badge:null,  rating:4.3,rev:523, desc:'Hand-block-printed cotton kurta with churidar. Traditional craft meets contemporary silhouette.',           colors:['#F5F0E8','#8B7355','#2C2C2C'],sizes:['S','M','L','XL','XXL'],trending:false},
  {id:8,  name:'Zardozi Clutch Bag',     brand:'Asha Handicrafts', price:2799, old:3800,  cat:'accessories',sub:'bags',emoji:'👜', badge:'sale',rating:4.5,rev:92,  desc:'Hand-embroidered zardozi clutch with minaudière frame. The ultimate couture evening accessory.',           colors:['#C9A84C','#8B1A1A','#2C2C2C'],sizes:['One Size'],           trending:false},
  {id:9,  name:'Bandhani Wrap Dress',    brand:'Good Earth',       price:4200, old:5500,  cat:'women', sub:'dresses',  emoji:'💃', badge:'sale',rating:4.6,rev:201, desc:'Pure cotton bandhani tie-dye wrap dress. Each piece is unique — hand-knotted in Rajasthan.',               colors:['#8B1A1A','#1A5C3A','#C9A84C'],sizes:['XS','S','M','L','XL'],trending:false},
  {id:10, name:'Kundan Embellished Jutti',brand:'Fizzy Goblet',    price:1899, old:null,  cat:'women', sub:'footwear', emoji:'👠', badge:'new', rating:4.7,rev:389, desc:'Hand-stitched leather juttis with kundan stone embellishment. Jaipur craft at its finest.',               colors:['#C9A84C','#C0392B','#2C2C2C'],sizes:['4','5','6','7','8','9'],trending:true},
  {id:11, name:'Relaxed Linen Trousers', brand:'H&M',              price:1999, old:2799,  cat:'men',   sub:'trousers', emoji:'👖', badge:null,  rating:4.4,rev:312, desc:'Easy-fit Italian linen trousers with a tapered leg. The cornerstone of warm-weather dressing.',           colors:['#8B7355','#F5F0E8','#2C2C2C'],sizes:['28','30','32','34','36','38'],trending:false},
  {id:12, name:'Pearl Drop Earrings',    brand:'Zaveri Pearls',    price:3400, old:null,  cat:'accessories',sub:'jewellery',emoji:'💎',badge:'lux', rating:4.9,rev:156, desc:'South Sea pearl drops set in 18k gold vermeil with pavé diamond halos. Timeless and luminous.',        colors:['#F5F0E8','#C9A84C'],           sizes:['One Size'],           trending:true},
  {id:13, name:'Ayurvedic Night Serum',  brand:'Kama Ayurveda',   price:1800, old:null,  cat:'beauty',sub:'skincare',  emoji:'🌿', badge:null,  rating:4.5,rev:489, desc:'24k gold and ashwagandha night serum. Traditional Ayurveda meets modern formulation for glowing skin.',  colors:['#C9A84C'],                     sizes:['30ml'],               trending:false},
  {id:14, name:'Embroidered Nehru Jacket',brand:'Manyavar',        price:5200, old:7800,  cat:'men',   sub:'ethnic',   emoji:'🎩', badge:'sale',rating:4.5,rev:198, desc:'Rich zari-embroidered Nehru jacket. Perfect for weddings and festive celebrations.',                     colors:['#1A3A5C','#8B1A1A','#2D4A1F'],sizes:['S','M','L','XL','XXL'],trending:true},
  {id:15, name:'Floral Block Print Saree',brand:'Nalli Silks',     price:6800, old:9200,  cat:'women', sub:'sarees',   emoji:'🥻', badge:'sale',rating:4.8,rev:145, desc:'Hand-block-printed Chanderi saree with gold zari border. A masterpiece from the looms of Madhya Pradesh.',colors:['#8B1A1A','#1A3A5C','#2D5016'],sizes:['Free Size'],          trending:false},
  {id:16, name:'Sandalwood Face Mask',   brand:'Forest Essentials',price:1200, old:null,  cat:'beauty',sub:'skincare',  emoji:'🪷', badge:null,  rating:4.6,rev:567, desc:'Multani mitti and pure sandalwood face pack. Deep-cleansing Ayurvedic ritual for luminous skin.',    colors:['#C9A84C'],                     sizes:['100g','200g'],        trending:false},
  {id:17, name:'Raw Silk Co-ord Set',    brand:'W for Woman',      price:3600, old:4900,  cat:'women', sub:'western',  emoji:'🎀', badge:'sale',rating:4.4,rev:221, desc:'Dupion silk crop blazer and wide-leg trouser set. Power dressing redefined for the modern woman.',       colors:['#8B7355','#2C2C2C','#8B1A1A'],sizes:['XS','S','M','L','XL'],trending:true},
  {id:18, name:'Kolhapuri Leather Sandal',brand:'Metro Shoes',     price:1599, old:2200,  cat:'men',   sub:'footwear', emoji:'👡', badge:'sale',rating:4.3,rev:267, desc:'Genuine leather Kolhapuri chappals handcrafted in Maharashtra. A heritage craft you can wear.',         colors:['#8B7355','#2C2C2C'],           sizes:['6','7','8','9','10','11'],trending:false},
  {id:19, name:'Oxidised Silver Ring Set',brand:'Voylla',           price:899,  old:1400,  cat:'accessories',sub:'jewellery',emoji:'💍',badge:'sale',rating:4.6,rev:321, desc:'Set of 5 oxidised silver-toned rings with semi-precious stone inlays. Handcrafted in Jaipur.',       colors:['#C0C0C0','#C9A84C'],           sizes:['5','6','7','8','9'],  trending:false},
  {id:20, name:'Indigo Printed Kurta',   brand:'AVAASA',           price:1299, old:1999,  cat:'women', sub:'ethnic',   emoji:'🌀', badge:'sale',rating:4.2,rev:445, desc:'Hand-block indigo-printed A-line kurta. Contemporary ethnic wear inspired by Rajasthani heritage.',      colors:['#1A3A5C','#F5F0E8'],           sizes:['XS','S','M','L','XL','XXL'],trending:false},
];

/* ── Detect base path ── */
const _isRoot = !location.pathname.match(/\/[^/]+\.html$/) || location.pathname.endsWith('index.html');
const _inPages = location.pathname.includes('/pages/');
function _base(){ return _inPages ? '../' : './'; }
function _pg(name){ return _inPages ? name : 'pages/'+name; }

/* ── Cart ── */
function getCart(){try{return JSON.parse(localStorage.getItem('v_cart')||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem('v_cart',JSON.stringify(c));_refreshCartUI()}
function addToCart(id,size,color,qty=1){
  const cart=getCart(); const p=PRODUCTS.find(x=>x.id===id); if(!p)return;
  const key=id+'_'+size;
  const ex=cart.find(i=>i.key===key);
  if(ex)ex.qty+=qty; else cart.push({key,id,size,color,qty,name:p.name,brand:p.brand,price:p.price,emoji:p.emoji});
  saveCart(cart); toast('✓ '+p.name+' added to cart');
}
function removeFromCart(key){saveCart(getCart().filter(i=>i.key!==key))}
function updateCartQty(key,d){
  const c=getCart(); const i=c.find(x=>x.key===key); if(!i)return;
  i.qty+=d; if(i.qty<=0){saveCart(c.filter(x=>x.key!==key))}else{saveCart(c)}
}
function cartCount(){return getCart().reduce((s,i)=>s+i.qty,0)}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0)}
function _refreshCartUI(){
  document.querySelectorAll('.cart-count-el').forEach(el=>{
    const c=cartCount(); el.textContent=c; el.style.display=c?'flex':'none';
  });
}

/* ── Wishlist ── */
function getWish(){try{return JSON.parse(localStorage.getItem('v_wish')||'[]')}catch{return[]}}
function toggleWish(id){
  const w=getWish(); const i=w.indexOf(id);
  if(i>=0)w.splice(i,1); else w.push(id);
  localStorage.setItem('v_wish',JSON.stringify(w));
  return i<0;
}
function isWished(id){return getWish().includes(id)}

/* ── Toast ── */
let _tt;
function toast(msg){
  let el=document.getElementById('toast');
  if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el)}
  el.textContent=msg; el.classList.add('on');
  clearTimeout(_tt); _tt=setTimeout(()=>el.classList.remove('on'),2800);
}

/* ── Helpers ── */
function inr(n){return '₹'+n.toLocaleString('en-IN')}
function disc(p,o){return o?Math.round((o-p)/o*100):0}
function stars(r){return '★'.repeat(Math.floor(r))+(r%1>=.5?'★':'')+'☆'.repeat(5-Math.ceil(r))}

/* ── Product Card HTML ── */
function productCard(p){
  const d=disc(p.price,p.old);
  const w=isWished(p.id);
  const bclass={new:'badge-new',sale:'badge-sale',lux:'badge-lux'}[p.badge]||'';
  const btxt={new:'New',sale:d+'% Off',lux:'Luxury'}[p.badge]||'';
  return `<div class="p-card anim-1" onclick="window.location='${_pg('product.html')}?id=${p.id}'">
    <div class="p-card-img">
      <div class="emoji">${p.emoji}</div>
      <div class="brand-sub">${p.brand}</div>
      ${p.badge?`<div class="p-badge ${bclass}">${btxt}</div>`:''}
      <button class="p-wish${w?' on':''}" onclick="event.stopPropagation();handleWish(this,${p.id})">${w?'♥':'♡'}</button>
    </div>
    <div class="p-info">
      <div class="p-brand">${p.brand}</div>
      <div class="p-name">${p.name}</div>
      <div class="p-prices">
        <span class="p-price">${inr(p.price)}</span>
        ${p.old?`<span class="p-old">${inr(p.old)}</span><span class="p-disc">${d}% off</span>`:''}
      </div>
      <div class="p-rating"><span class="stars">${stars(p.rating)}</span> ${p.rating} (${p.rev})</div>
      <button class="p-atc" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
    </div>
  </div>`;
}
function handleWish(btn,id){const on=toggleWish(id);btn.textContent=on?'♥':'♡';btn.classList.toggle('on',on);toast(on?'♥ Saved to Wishlist':'Removed from Wishlist')}
function quickAdd(id){const p=PRODUCTS.find(x=>x.id===id);if(p)addToCart(id,p.sizes[0],p.colors[0])}

/* ── Nav Renderer ── */
function renderNav(active){
  const base=_base();
  const links=[
    {label:'Home',    href:base+'index.html'},
    {label:'Shop',    href:_inPages?'shop.html':base+'pages/shop.html'},
    {label:'Women',   href:_inPages?'women.html':base+'pages/women.html'},
    {label:'Men',     href:_inPages?'men.html':base+'pages/men.html'},
    {label:'Accessories',href:_inPages?'accessories.html':base+'pages/accessories.html'},
    {label:'Beauty',  href:_inPages?'beauty.html':base+'pages/beauty.html'},
    {label:'Sale',    href:_inPages?'sale.html':base+'pages/sale.html',cls:'sale-link'},
  ];
  const cartHref=_inPages?'cart.html':base+'pages/cart.html';
  const wishHref=_inPages?'wishlist.html':base+'pages/wishlist.html';
  const h=`
  <div class="ann-bar">✦ Free Shipping above ₹2,000 &nbsp;|&nbsp; Use code <strong>VELURA10</strong> for 10% off &nbsp;|&nbsp; New Season Now Live ✦</div>
  <nav class="nav">
    <div class="nav-inner">
      <div class="nav-logo"><a href="${base}index.html">Vel<span>u</span>ra</a></div>
      <div class="nav-links" id="navLinks">
        ${links.map(l=>`<a href="${l.href}"${l.cls?' class="'+(l.label===active?l.cls+' active':l.cls)+'"':l.label===active?' class="active"':''}>${l.label}</a>`).join('')}
      </div>
      <div class="nav-right">
        <form class="nav-search-form" onsubmit="event.preventDefault();doSearch(this.q.value)">
          <span class="nav-search-icon">⌕</span>
          <input class="nav-search" name="q" placeholder="Search…" autocomplete="off">
        </form>
        <a href="${wishHref}" class="nav-btn" title="Wishlist">♡</a>
        <a href="${cartHref}" class="nav-cart-pill">
          🛍 Cart <span class="c-count cart-count-el" style="display:none">0</span>
        </a>
        <button class="nav-ham" onclick="toggleMobMenu()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="mob-menu" id="mobMenu">
    ${links.map(l=>`<a href="${l.href}"${l.cls?' class="'+l.cls+'"':''}>${l.label}</a>`).join('')}
    <a href="${wishHref}">♡ Wishlist</a>
    <a href="${cartHref}">🛍 Cart</a>
  </div>`;
  const el=document.getElementById('site-nav');
  if(el)el.innerHTML=h;
  _refreshCartUI();
}

/* ── Footer Renderer ── */
function renderFooter(){
  const base=_base();
  const el=document.getElementById('site-footer');
  if(!el)return;
  el.innerHTML=`<footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">Vel<span>u</span>ra</div>
          <p>Curating India's finest fashion, jewellery and beauty from celebrated designers and heritage artisans.</p>
          <div class="footer-social">
            <a href="#" title="Instagram">𝕀</a><a href="#" title="Pinterest">𝕻</a>
            <a href="#" title="Facebook">𝔽</a><a href="#" title="YouTube">▶</a>
          </div>
        </div>
        <div class="footer-col"><h4>Shop</h4><ul>
          <li><a href="${_inPages?'women.html':base+'pages/women.html'}">Women</a></li>
          <li><a href="${_inPages?'men.html':base+'pages/men.html'}">Men</a></li>
          <li><a href="${_inPages?'accessories.html':base+'pages/accessories.html'}">Accessories</a></li>
          <li><a href="${_inPages?'beauty.html':base+'pages/beauty.html'}">Beauty</a></li>
          <li><a href="${_inPages?'sale.html':base+'pages/sale.html'}">Sale</a></li>
        </ul></div>
        <div class="footer-col"><h4>Help</h4><ul>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Track My Order</a></li>
          <li><a href="#">Returns & Exchanges</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">FAQ</a></li>
        </ul></div>
        <div class="footer-col"><h4>Company</h4><ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul></div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Velura. All rights reserved.</p>
        <div class="footer-pay">
          <div class="pay-chip">VISA</div><div class="pay-chip">MC</div>
          <div class="pay-chip">UPI</div><div class="pay-chip">RuPay</div>
          <div class="pay-chip">COD</div>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ── Mobile Menu ── */
function toggleMobMenu(){document.getElementById('mobMenu')?.classList.toggle('open')}

/* ── Search ── */
function doSearch(q){
  if(!q.trim())return;
  window.location=(_inPages?'shop.html':'pages/shop.html')+'?q='+encodeURIComponent(q.trim());
}

/* ── Auto Init ── */
document.addEventListener('DOMContentLoaded',()=>{
  renderNav(document.body.dataset.page||'');
  renderFooter();
  _refreshCartUI();
});
