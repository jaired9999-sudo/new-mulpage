/* ================================================================
   VELURA — app.js   (all pages are in the SAME folder as index.html)
   Every link uses a flat path: shop.html, cart.html, etc.
================================================================ */

/* ── Product Data ── */
const PRODUCTS = [
  {id:1, name:'Silk Anarkali Suit',       brand:'Biba',              price:5499,  old:7999,  cat:'women', sub:'ethnic',    emoji:'🌸', badge:'sale', rating:4.6, rev:312,  trending:true,  desc:'Floor-length georgette anarkali with intricate embroidery and dupatta. Festive elegance for every occasion.',   sizes:['XS','S','M','L','XL'],       colors:['#8B1A1A','#1A3A5C','#2D5016']},
  {id:2, name:'Linen Blazer',             brand:'Westside',          price:3299,  old:4999,  cat:'men',   sub:'formal',    emoji:'🧥', badge:'sale', rating:4.4, rev:89,   trending:false, desc:'Unstructured Italian linen blazer for effortless summer dressing. Relaxed shoulder.',                           sizes:['S','M','L','XL','XXL'],      colors:['#8B7355','#2C2C2C','#F5F0E8']},
  {id:3, name:'Gold Jhumka Earrings',     brand:'Anouk',             price:1299,  old:null,  cat:'acc',   sub:'jewellery', emoji:'✨', badge:'new',  rating:4.8, rev:456,  trending:true,  desc:'22k gold-plated jhumkas with meenakari detailing. Handcrafted by Jaipur artisans.',                             sizes:['One Size'],                  colors:['#C9A84C','#C0C0C0']},
  {id:4, name:'Velvet Lehenga Set',       brand:'Libas',             price:8999,  old:13999, cat:'women', sub:'ethnic',    emoji:'👗', badge:'lux',  rating:4.9, rev:67,   trending:true,  desc:'Hand-embroidered velvet lehenga with zardozi work. Bridal couture for grand occasions.',                        sizes:['XS','S','M','L'],            colors:['#6B1F3A','#1F3A6B','#2D4A1F']},
  {id:5, name:'Rose Oud Parfum',          brand:'Forest Essentials', price:3800,  old:null,  cat:'beauty',sub:'fragrance', emoji:'🌹', badge:null,   rating:4.7, rev:234,  trending:false, desc:'Pure oud and Bulgarian rose attar. An intoxicating 12-hour fragrance of warm spice and floral depth.',         sizes:['30ml','50ml','100ml'],       colors:['#8B1A1A','#5C3D2E']},
  {id:6, name:'Kashmiri Pashmina',        brand:'Kilmora',           price:4599,  old:6200,  cat:'acc',   sub:'scarves',   emoji:'🧣', badge:'sale', rating:4.5, rev:178,  trending:false, desc:'100% grade-A pashmina from the Changthangi goat of Ladakh. Woven on traditional handlooms.',                   sizes:['One Size'],                  colors:['#F5F0E8','#8B7355','#4A3728']},
  {id:7, name:'Handloom Kurta Set',       brand:'Fabindia',          price:2199,  old:3200,  cat:'men',   sub:'ethnic',    emoji:'👕', badge:null,   rating:4.3, rev:523,  trending:false, desc:'Hand-block-printed cotton kurta with churidar. Traditional craft meets contemporary silhouette.',               sizes:['S','M','L','XL','XXL'],      colors:['#F5F0E8','#8B7355','#2C2C2C']},
  {id:8, name:'Zardozi Clutch Bag',       brand:'Asha Handicrafts',  price:2799,  old:3800,  cat:'acc',   sub:'bags',      emoji:'👜', badge:'sale', rating:4.5, rev:92,   trending:false, desc:'Hand-embroidered zardozi clutch with minaudière frame. The ultimate couture evening accessory.',               sizes:['One Size'],                  colors:['#C9A84C','#8B1A1A','#2C2C2C']},
  {id:9, name:'Bandhani Wrap Dress',      brand:'Good Earth',        price:4200,  old:5500,  cat:'women', sub:'dresses',   emoji:'💃', badge:'sale', rating:4.6, rev:201,  trending:false, desc:'Pure cotton bandhani tie-dye wrap dress. Each piece is unique — hand-knotted in Rajasthan.',                   sizes:['XS','S','M','L','XL'],       colors:['#8B1A1A','#1A5C3A','#C9A84C']},
  {id:10,name:'Kundan Embellished Jutti', brand:'Fizzy Goblet',      price:1899,  old:null,  cat:'women', sub:'footwear',  emoji:'👠', badge:'new',  rating:4.7, rev:389,  trending:true,  desc:'Hand-stitched leather juttis with kundan stone embellishment. Jaipur craft at its finest.',                   sizes:['4','5','6','7','8','9'],     colors:['#C9A84C','#C0392B','#2C2C2C']},
  {id:11,name:'Relaxed Linen Trousers',   brand:'H&M',               price:1999,  old:2799,  cat:'men',   sub:'trousers',  emoji:'👖', badge:null,   rating:4.4, rev:312,  trending:false, desc:'Easy-fit Italian linen trousers with a tapered leg. The cornerstone of warm-weather dressing.',               sizes:['28','30','32','34','36','38'],colors:['#8B7355','#F5F0E8','#2C2C2C']},
  {id:12,name:'Pearl Drop Earrings',      brand:'Zaveri Pearls',     price:3400,  old:null,  cat:'acc',   sub:'jewellery', emoji:'💎', badge:'lux',  rating:4.9, rev:156,  trending:true,  desc:'South Sea pearl drops set in 18k gold vermeil with pavé diamond halos. Timeless and luminous.',               sizes:['One Size'],                  colors:['#F5F0E8','#C9A84C']},
  {id:13,name:'Ayurvedic Night Serum',    brand:'Kama Ayurveda',     price:1800,  old:null,  cat:'beauty',sub:'skincare',  emoji:'🌿', badge:null,   rating:4.5, rev:489,  trending:false, desc:'24k gold and ashwagandha night serum. Ayurveda meets modern formulation for glowing skin.',                    sizes:['30ml'],                      colors:['#C9A84C']},
  {id:14,name:'Embroidered Nehru Jacket', brand:'Manyavar',          price:5200,  old:7800,  cat:'men',   sub:'ethnic',    emoji:'🎩', badge:'sale', rating:4.5, rev:198,  trending:true,  desc:'Rich zari-embroidered Nehru jacket. Perfect for weddings and festive celebrations.',                          sizes:['S','M','L','XL','XXL'],      colors:['#1A3A5C','#8B1A1A','#2D4A1F']},
  {id:15,name:'Block Print Saree',        brand:'Nalli Silks',       price:6800,  old:9200,  cat:'women', sub:'sarees',    emoji:'🥻', badge:'sale', rating:4.8, rev:145,  trending:false, desc:'Hand-block-printed Chanderi saree with gold zari border. A masterpiece from Madhya Pradesh looms.',           sizes:['Free Size'],                 colors:['#8B1A1A','#1A3A5C','#2D5016']},
  {id:16,name:'Sandalwood Face Mask',     brand:'Forest Essentials', price:1200,  old:null,  cat:'beauty',sub:'skincare',  emoji:'🪷', badge:null,   rating:4.6, rev:567,  trending:false, desc:'Multani mitti and pure sandalwood face pack. Deep-cleansing Ayurvedic ritual for luminous skin.',            sizes:['100g','200g'],               colors:['#C9A84C']},
  {id:17,name:'Raw Silk Co-ord Set',      brand:'W for Woman',       price:3600,  old:4900,  cat:'women', sub:'western',   emoji:'🎀', badge:'sale', rating:4.4, rev:221,  trending:true,  desc:'Dupion silk crop blazer and wide-leg trouser set. Power dressing redefined for the modern woman.',            sizes:['XS','S','M','L','XL'],       colors:['#8B7355','#2C2C2C','#8B1A1A']},
  {id:18,name:'Kolhapuri Sandal',         brand:'Metro Shoes',       price:1599,  old:2200,  cat:'men',   sub:'footwear',  emoji:'🥿', badge:'sale', rating:4.3, rev:267,  trending:false, desc:'Genuine leather Kolhapuri chappals handcrafted in Maharashtra. A heritage craft you can wear.',              sizes:['6','7','8','9','10','11'],   colors:['#8B7355','#2C2C2C']},
  {id:19,name:'Oxidised Silver Ring Set', brand:'Voylla',            price:899,   old:1400,  cat:'acc',   sub:'jewellery', emoji:'💍', badge:'sale', rating:4.6, rev:321,  trending:false, desc:'Set of 5 oxidised silver rings with semi-precious stone inlays. Handcrafted in Jaipur.',                     sizes:['5','6','7','8','9'],         colors:['#C0C0C0','#C9A84C']},
  {id:20,name:'Indigo Block Print Kurta', brand:'AVAASA',            price:1299,  old:1999,  cat:'women', sub:'ethnic',    emoji:'🌀', badge:'sale', rating:4.2, rev:445,  trending:false, desc:'Hand-block indigo-printed A-line kurta. Contemporary ethnic inspired by Rajasthani heritage.',                sizes:['XS','S','M','L','XL','XXL'], colors:['#1A3A5C','#F5F0E8']},
];

/* ── Cart (localStorage) ── */
function getCart(){try{return JSON.parse(localStorage.getItem('vc')||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem('vc',JSON.stringify(c));refreshCartUI()}
function addToCart(id,size,color,qty=1){
  const p=PRODUCTS.find(x=>x.id===id);if(!p)return;
  const key=id+'_'+size;const cart=getCart();
  const ex=cart.find(i=>i.key===key);
  if(ex)ex.qty+=qty;else cart.push({key,id,size,color,qty,name:p.name,brand:p.brand,price:p.price,emoji:p.emoji});
  saveCart(cart);showToast('✓ '+p.name+' added to cart');
}
function removeFromCart(key){saveCart(getCart().filter(i=>i.key!==key))}
function updateQty(key,d){
  const c=getCart();const it=c.find(i=>i.key===key);if(!it)return;
  it.qty+=d;if(it.qty<=0){saveCart(c.filter(i=>i.key!==key))}else saveCart(c);
}
function cartCount(){return getCart().reduce((s,i)=>s+i.qty,0)}
function cartTotal(){return getCart().reduce((s,i)=>s+i.price*i.qty,0)}
function refreshCartUI(){
  document.querySelectorAll('.cart-count-el').forEach(el=>{
    const n=cartCount();el.textContent=n;el.style.display=n?'flex':'none';
  });
}

/* ── Wishlist ── */
function getWish(){try{return JSON.parse(localStorage.getItem('vw')||'[]')}catch{return[]}}
function toggleWish(id){
  const w=getWish();const i=w.indexOf(id);
  if(i>=0)w.splice(i,1);else w.push(id);
  localStorage.setItem('vw',JSON.stringify(w));return i<0;
}
function isWished(id){return getWish().includes(id)}

/* ── Toast ── */
let _tTimer;
function showToast(msg){
  let el=document.getElementById('toast');
  if(!el){el=document.createElement('div');el.id='toast';document.body.appendChild(el)}
  el.textContent=msg;el.classList.add('on');
  clearTimeout(_tTimer);_tTimer=setTimeout(()=>el.classList.remove('on'),2800);
}

/* ── Helpers ── */
function inr(n){return '₹'+n.toLocaleString('en-IN')}
function pct(p,o){return o?Math.round((o-p)/o*100):0}
function starStr(r){return '★'.repeat(Math.floor(r))+(r%1>=.5?'☆':'')+'☆'.repeat(5-Math.ceil(r))}

/* ── Product Card ── */
function pCard(p){
  const d=pct(p.price,p.old);
  const w=isWished(p.id);
  const bcls={new:'bnew',sale:'bsale',lux:'blux'}[p.badge]||'';
  const btxt={new:'New',sale:d+'% Off',lux:'Luxury'}[p.badge]||'';
  return `<div class="pcard a1" onclick="location.href='product.html?id=${p.id}'">
    <div class="pcard-img">
      <div class="em">${p.emoji}</div>
      <div class="bsub">${p.brand}</div>
      ${p.badge?`<div class="pbadge ${bcls}">${btxt}</div>`:''}
      <button class="pwish${w?' on':''}" onclick="event.stopPropagation();handleWish(this,${p.id})">${w?'♥':'♡'}</button>
    </div>
    <div class="pinfo">
      <div class="pbrand">${p.brand}</div>
      <div class="pname">${p.name}</div>
      <div class="pprices">
        <span class="pprice">${inr(p.price)}</span>
        ${p.old?`<span class="pold">${inr(p.old)}</span><span class="pdisc">${d}% off</span>`:''}
      </div>
      <div class="prat"><span class="st">${starStr(p.rating)}</span> ${p.rating} (${p.rev})</div>
      <button class="patc" onclick="event.stopPropagation();quickAdd(${p.id})">Add to Cart</button>
    </div>
  </div>`;
}
function handleWish(btn,id){
  const on=toggleWish(id);btn.textContent=on?'♥':'♡';
  btn.classList.toggle('on',on);showToast(on?'♥ Saved to Wishlist':'Removed from Wishlist');
}
function quickAdd(id){const p=PRODUCTS.find(x=>x.id===id);if(p)addToCart(id,p.sizes[0],p.colors[0])}

/* ── Navigation HTML ── ALL links are flat (same directory) ── */
function buildNav(active){
  const links=[
    {l:'Home',       h:'index.html'},
    {l:'Shop',       h:'shop.html'},
    {l:'Women',      h:'women.html'},
    {l:'Men',        h:'men.html'},
    {l:'Accessories',h:'accessories.html'},
    {l:'Beauty',     h:'beauty.html'},
    {l:'Sale',       h:'sale.html', cls:'sale'},
  ];
  return `
  <div class="ann">✦ Free Shipping above ₹2,000 &nbsp;|&nbsp; Code <strong>VELURA10</strong> for 10% off &nbsp;|&nbsp; New Season Live Now ✦</div>
  <nav class="nav">
    <div class="nav-in">
      <div class="logo"><a href="index.html">Vel<span>u</span>ra</a></div>
      <div class="nav-links">
        ${links.map(lk=>`<a href="${lk.h}"${lk.l===active?' class="active'+(lk.cls?' '+lk.cls:'')+ '"':lk.cls?' class="'+lk.cls+'"':''}>${lk.l}</a>`).join('')}
      </div>
      <div class="nav-right">
        <form class="nav-sf" onsubmit="event.preventDefault();goSearch(this.q.value)">
          <span class="nav-sicon">⌕</span>
          <input class="nav-sinp" name="q" placeholder="Search…" autocomplete="off">
        </form>
        <a href="wishlist.html" class="nav-btn" title="Wishlist">♡</a>
        <a href="cart.html" class="cart-pill">
          🛍 Cart <span class="cc cart-count-el" style="display:none">0</span>
        </a>
        <button class="ham" onclick="toggleMob()" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>
  <div class="mob-nav" id="mobNav">
    ${links.map(lk=>`<a href="${lk.h}"${lk.cls?' class="'+lk.cls+'"':''}>${lk.l}</a>`).join('')}
    <a href="wishlist.html">♡ Wishlist</a>
    <a href="cart.html">🛍 Cart</a>
  </div>`;
}

/* ── Footer HTML ── ALL links flat ── */
function buildFooter(){
  return `<footer class="footer">
    <div class="wrap">
      <div class="foot-grid">
        <div class="foot-brand">
          <div class="fl">Vel<span>u</span>ra</div>
          <p>Curating India's finest fashion, jewellery and beauty from celebrated designers and heritage artisans.</p>
          <div class="foot-soc">
            <a href="#" title="Instagram">𝕀</a><a href="#" title="Pinterest">𝕻</a>
            <a href="#" title="Facebook">𝔽</a><a href="#" title="YouTube">▶</a>
          </div>
        </div>
        <div class="foot-col"><h4>Shop</h4><ul>
          <li><a href="women.html">Women</a></li>
          <li><a href="men.html">Men</a></li>
          <li><a href="accessories.html">Accessories</a></li>
          <li><a href="beauty.html">Beauty</a></li>
          <li><a href="sale.html">Sale</a></li>
        </ul></div>
        <div class="foot-col"><h4>Help</h4><ul>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Track My Order</a></li>
          <li><a href="#">Returns & Exchanges</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">FAQ</a></li>
        </ul></div>
        <div class="foot-col"><h4>Company</h4><ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul></div>
      </div>
      <div class="foot-bottom">
        <p>© 2026 Velura. All rights reserved.</p>
        <div class="pay-row">
          <div class="pc">VISA</div><div class="pc">MC</div>
          <div class="pc">UPI</div><div class="pc">RuPay</div><div class="pc">COD</div>
        </div>
      </div>
    </div>
  </footer>`;
}

/* ── Helpers ── */
function toggleMob(){document.getElementById('mobNav')?.classList.toggle('open')}
function goSearch(q){if(q.trim())location.href='shop.html?q='+encodeURIComponent(q.trim())}

/* ── Auto-init ── */
document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.getElementById('site-nav');
  if(nav)nav.innerHTML=buildNav(document.body.dataset.page||'');
  const foot=document.getElementById('site-footer');
  if(foot)foot.innerHTML=buildFooter();
  refreshCartUI();
});
