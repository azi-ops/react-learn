import{j as t,r as c}from"./index-fCZyuqB2.js";import{C as l}from"./CodeBlock-y81Z23mq.js";import{C as u}from"./Callout-B_CeIBza.js";import{P as a}from"./PracticeProject-aOb4DaIe.js";function p(){return t.jsxs("div",{style:{background:"#fff",padding:"1rem",borderRadius:"0.5rem",fontFamily:"sans-serif",maxWidth:280},children:[t.jsx("h3",{style:{margin:"0 0 0.75rem",color:"#0f172a",fontSize:"1rem"},children:"Product Counter"}),t.jsx("p",{style:{margin:"0 0 0.5rem",color:"#374151",fontSize:"0.875rem"},children:"Count: 0"}),t.jsx("button",{style:{background:"#e5e7eb",color:"#374151",border:"none",padding:"0.4rem 1rem",borderRadius:"0.375rem",cursor:"not-allowed",fontSize:"0.875rem",marginRight:"0.5rem"},children:"−"}),t.jsx("button",{style:{background:"#e5e7eb",color:"#374151",border:"none",padding:"0.4rem 1rem",borderRadius:"0.375rem",cursor:"not-allowed",fontSize:"0.875rem"},children:"+"}),t.jsx("p",{style:{margin:"0.75rem 0 0",color:"#9ca3af",fontSize:"0.8rem"},children:"(buttons don't work yet)"})]})}function h(){var s;const[e,i]=c.useState(1),[o,d]=c.useState([]),r=o.length>0;return t.jsxs("div",{style:{background:"#fff",padding:"1rem",borderRadius:"0.5rem",fontFamily:"sans-serif",maxWidth:280},children:[t.jsx("h3",{style:{margin:"0 0 0.25rem",color:"#0f172a",fontSize:"1rem"},children:"Wireless Headphones"}),t.jsx("p",{style:{margin:"0 0 0.75rem",color:"#2563eb",fontWeight:700},children:"$79.99"}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",marginBottom:"0.75rem"},children:[t.jsx("button",{onClick:()=>i(n=>Math.max(1,n-1)),style:{background:"#f1f5f9",color:"#374151",border:"1px solid #e2e8f0",width:32,height:32,borderRadius:"0.375rem",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"−"}),t.jsx("span",{style:{fontWeight:700,fontSize:"1.1rem",minWidth:24,textAlign:"center",color:"#0f172a"},children:e}),t.jsx("button",{onClick:()=>i(n=>Math.min(10,n+1)),style:{background:"#f1f5f9",color:"#374151",border:"1px solid #e2e8f0",width:32,height:32,borderRadius:"0.375rem",cursor:"pointer",fontSize:"1rem",display:"flex",alignItems:"center",justifyContent:"center"},children:"+"}),e>=10&&t.jsx("span",{style:{fontSize:"0.7rem",color:"#ef4444"},children:"Max!"})]}),t.jsxs("p",{style:{margin:"0 0 0.75rem",fontSize:"0.85rem",color:"#64748b"},children:["Total: ",t.jsxs("strong",{style:{color:"#0f172a"},children:["$",(79.99*e).toFixed(2)]})]}),t.jsx("button",{onClick:()=>d(r?[]:[{count:e}]),style:{width:"100%",padding:"0.5rem",border:"none",borderRadius:"0.375rem",cursor:"pointer",fontWeight:600,fontSize:"0.875rem",background:r?"#16a34a":"#3b82f6",color:"white",transition:"background 0.2s"},children:r?`✓ In Cart (${(s=o[0])==null?void 0:s.count})`:`Add ${e} to Cart`})]})}function b(){return t.jsxs("div",{className:"lesson",children:[t.jsxs("div",{className:"lesson-header",children:[t.jsx("span",{className:"lesson-tag",children:"Chapter 0 — Foundations"}),t.jsx("h1",{children:"Practice: JavaScript Fundamentals"}),t.jsx("p",{className:"lesson-subtitle",children:"Apply everything from Chapter 0 — variables, functions, arrays, events, and async — in a real product feature."})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"📋 What You'll Practice"}),t.jsx("p",{children:"This practice session combines all JavaScript concepts from Chapter 0 into real ShopHub features. Each challenge builds on the previous one."}),t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"0.75rem",marginTop:"1rem"},children:[{icon:"📦",label:"Variables & functions"},{icon:"🔢",label:"Arrays & objects"},{icon:"🗂️",label:"map, filter, find"},{icon:"🖱️",label:"DOM & events"},{icon:"⏳",label:"async/await & fetch"}].map(({icon:e,label:i})=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.625rem",background:"var(--bg-color)",borderRadius:"0.375rem",border:"1px solid var(--border-color)"},children:[t.jsx("span",{style:{fontSize:"1.25rem"},children:e}),t.jsx("span",{style:{fontSize:"0.875rem"},children:i})]},i))})]}),t.jsx(u,{type:"tip",children:"Try each challenge on your own first. Use hints only if you're stuck after 5 minutes. The goal is to practice thinking like a programmer, not to get the answer quickly."}),t.jsx(a,{title:"Interactive Quantity Selector",difficulty:"easy",description:"Build a JavaScript-powered quantity selector for a product page. The + button increases the count, the − button decreases it (min: 1, max: 10). Show the total price dynamically.",startDesign:t.jsx(p,{}),targetDesign:t.jsx(h,{}),requirements:[{label:"HTML: Create a counter with −, quantity display, and + elements",difficulty:"easy"},{label:"JS: Clicking + increases quantity by 1 (max 10)",difficulty:"easy"},{label:"JS: Clicking − decreases quantity by 1 (min 1)",difficulty:"easy"},{label:"JS: Show a running total (quantity × $79.99)",difficulty:"medium"},{label:"JS: Disable the + button when quantity reaches 10",difficulty:"medium"},{label:'JS: Clicking "Add to Cart" shows "✓ Added!" and disables the button',difficulty:"medium"}],hints:["Start with: let quantity = 1; Then write two functions: increase() and decrease().",'To update the display: document.getElementById("qty").textContent = quantity;',"For total: (quantity * 79.99).toFixed(2) — update a <span> in the DOM.","To disable a button: btn.disabled = true; and style it with opacity: 0.5;",'For "Add to Cart": change the button text with btn.textContent = "✓ Added!"; and set btn.disabled = true;'],steps:[{title:"Write the HTML",content:"Create the structure with buttons, a quantity display, a total price display, and an Add to Cart button.",code:`<div class="quantity-selector">
  <h3>Wireless Headphones — $79.99</h3>
  <div class="qty-controls">
    <button id="decreaseBtn">−</button>
    <span id="quantity">1</span>
    <button id="increaseBtn">+</button>
  </div>
  <p>Total: $<span id="total">79.99</span></p>
  <button id="cartBtn">Add to Cart</button>
</div>`},{title:"Write the JavaScript variables and helpers",content:"Set up your variables and a helper function to update the UI.",code:`let quantity = 1;
const PRICE = 79.99;
const MAX = 10;

// Grab DOM elements
const qtyDisplay = document.getElementById('quantity');
const totalDisplay = document.getElementById('total');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const cartBtn = document.getElementById('cartBtn');

function updateDisplay() {
  qtyDisplay.textContent = quantity;
  totalDisplay.textContent = (quantity * PRICE).toFixed(2);
  decreaseBtn.disabled = quantity <= 1;
  increaseBtn.disabled = quantity >= MAX;
}`},{title:"Add event listeners",content:"Wire up the click events for the + and − buttons.",code:`increaseBtn.addEventListener('click', () => {
  if (quantity < MAX) {
    quantity++;
    updateDisplay();
  }
});

decreaseBtn.addEventListener('click', () => {
  if (quantity > 1) {
    quantity--;
    updateDisplay();
  }
});

cartBtn.addEventListener('click', () => {
  cartBtn.textContent = \`✓ Added \${quantity} to Cart!\`;
  cartBtn.disabled = true;
  cartBtn.style.background = '#16a34a';
});

// Initial update
updateDisplay();`}],checkItems:["The quantity starts at 1","Clicking + increases the quantity (up to 10)","Clicking − decreases the quantity (down to 1)","The total price updates automatically","The + button is disabled when quantity = 10","The − button is disabled when quantity = 1",'"Add to Cart" shows confirmation and disables itself'],answer:`<!DOCTYPE html>
<html>
<head>
  <style>
    .qty-controls { display:flex; align-items:center; gap:1rem; margin:1rem 0; }
    button { padding:.4rem .875rem; border:1px solid #e2e8f0; border-radius:.375rem; cursor:pointer; font-size:.9rem; }
    button:disabled { opacity:.5; cursor:not-allowed; }
    #cartBtn { background:#3b82f6; color:white; border:none; width:100%; padding:.6rem; font-weight:600; border-radius:.375rem; }
  </style>
</head>
<body>
  <div class="quantity-selector">
    <h3>Wireless Headphones — $79.99</h3>
    <div class="qty-controls">
      <button id="decreaseBtn">−</button>
      <span id="quantity">1</span>
      <button id="increaseBtn">+</button>
    </div>
    <p>Total: $<span id="total">79.99</span></p>
    <button id="cartBtn">Add 1 to Cart</button>
  </div>

  <script>
    let quantity = 1;
    const PRICE = 79.99, MAX = 10;
    const qtyDisplay = document.getElementById('quantity');
    const totalDisplay = document.getElementById('total');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const cartBtn = document.getElementById('cartBtn');

    function updateDisplay() {
      qtyDisplay.textContent = quantity;
      totalDisplay.textContent = (quantity * PRICE).toFixed(2);
      cartBtn.textContent = \`Add \${quantity} to Cart\`;
      decreaseBtn.disabled = quantity <= 1;
      increaseBtn.disabled = quantity >= MAX;
    }

    increaseBtn.addEventListener('click', () => { if(quantity < MAX){ quantity++; updateDisplay(); } });
    decreaseBtn.addEventListener('click', () => { if(quantity > 1){ quantity--; updateDisplay(); } });
    cartBtn.addEventListener('click', () => {
      cartBtn.textContent = \`✓ Added \${quantity} to Cart!\`;
      cartBtn.disabled = true;
      cartBtn.style.background = '#16a34a';
    });

    updateDisplay();
  <\/script>
</body>
</html>`}),t.jsxs("section",{className:"lesson-section",style:{marginTop:"2.5rem"},children:[t.jsx("h2",{children:"Challenge 2 — Filter a Product Array"}),t.jsx("p",{children:"Using the product array below, complete the JavaScript tasks:"}),t.jsx(l,{language:"js",children:`const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99, category: 'electronics', inStock: true },
  { id: 2, title: 'Running Shoes', price: 89.99, category: 'clothing', inStock: true },
  { id: 3, title: 'Smart Watch', price: 199.99, category: 'electronics', inStock: false },
  { id: 4, title: 'Coffee Maker', price: 49.99, category: 'home', inStock: true },
  { id: 5, title: 'Yoga Mat', price: 29.99, category: 'fitness', inStock: true },
  { id: 6, title: 'Bluetooth Speaker', price: 59.99, category: 'electronics', inStock: true },
];`})]}),t.jsx(a,{title:"Product Array Challenges",difficulty:"medium",description:"Practice the array methods you'll use every single day in React — map, filter, and find — on real product data.",requirements:[{label:"Easy: Get all product titles as an array of strings",difficulty:"easy"},{label:"Easy: Find all products priced under $80",difficulty:"easy"},{label:"Easy: Find the product with id = 3",difficulty:"easy"},{label:"Medium: Get all in-stock electronics products",difficulty:"medium"},{label:"Medium: Get titles of products priced between $50–$150",difficulty:"medium"},{label:"Hard: Sort products by price (cheapest first) and display them",difficulty:"hard"}],hints:["For titles: use products.map(p => p.title)","For under $80: use products.filter(p => p.price < 80)","For id=3: use products.find(p => p.id === 3)",'Chain filter calls: products.filter(p => p.category === "electronics").filter(p => p.inStock)',"For price range: p.price >= 50 && p.price <= 150 inside the filter","For sorting: use [...products].sort((a, b) => a.price - b.price) — note the spread to avoid mutating original"],checkItems:["Can get all product titles with map()","Can filter by price with filter()","Can find a specific product with find()","Can chain multiple filter() calls","Can combine map() and filter() in a pipeline","Can sort without mutating the original array"],answer:`const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99, category: 'electronics', inStock: true },
  { id: 2, title: 'Running Shoes', price: 89.99, category: 'clothing', inStock: true },
  { id: 3, title: 'Smart Watch', price: 199.99, category: 'electronics', inStock: false },
  { id: 4, title: 'Coffee Maker', price: 49.99, category: 'home', inStock: true },
  { id: 5, title: 'Yoga Mat', price: 29.99, category: 'fitness', inStock: true },
  { id: 6, title: 'Bluetooth Speaker', price: 59.99, category: 'electronics', inStock: true },
];

// 1. All titles
const titles = products.map(p => p.title);
console.log(titles);

// 2. Under $80
const cheap = products.filter(p => p.price < 80);
console.log(cheap);

// 3. Find by id
const watch = products.find(p => p.id === 3);
console.log(watch);

// 4. In-stock electronics
const inStockElectronics = products
  .filter(p => p.category === 'electronics')
  .filter(p => p.inStock);
console.log(inStockElectronics);

// 5. Titles of $50-$150 products
const midRange = products
  .filter(p => p.price >= 50 && p.price <= 150)
  .map(p => p.title);
console.log(midRange);

// 6. Sorted by price
const sorted = [...products].sort((a, b) => a.price - b.price);
sorted.forEach(p => console.log(\`\${p.title}: $\${p.price}\`));`}),t.jsxs("section",{className:"lesson-section",style:{marginTop:"2.5rem"},children:[t.jsx("h2",{children:"Challenge 3 — Fetch Products from an API"}),t.jsx("p",{children:"The last step before React: fetch real data from an API and display it on the page. This is exactly what your React app will do — you'll just write it differently."})]}),t.jsx(a,{title:"Fetch & Display Products",difficulty:"medium",description:"Fetch 6 products from the FakeStore API and display them as product cards on a page. Handle the loading and error states.",requirements:[{label:"Fetch products from: https://fakestoreapi.com/products?limit=6",difficulty:"easy"},{label:'While loading, show a "Loading products..." message',difficulty:"easy"},{label:"When loaded, render each product with title, image, price, and a button",difficulty:"medium"},{label:"If the fetch fails, show an error message with a Retry button",difficulty:"medium"},{label:"Add a filter: show only products with rating.rate >= 4",difficulty:"hard"}],hints:["Use async function loadProducts() { } and call it immediately.",'Show loading: document.getElementById("container").innerHTML = "<p>Loading...</p>";',"Use try/catch to handle fetch errors. Set error message in the catch block.","To render each product: products.forEach(p => { container.innerHTML += `<div>...</div>`; })",'For the retry button: add onclick="loadProducts()" to the error button.'],checkItems:["Fetch call uses async/await correctly","Loading message shows while waiting","Products display with title, image, and price","Error is caught and shown to the user","Retry button re-runs the fetch"],answer:`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; }
    .product-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
    .product-card { border: 1px solid #e2e8f0; border-radius: .75rem; overflow: hidden; }
    .product-card img { width: 100%; height: 180px; object-fit: contain; padding: 1rem; }
    .card-body { padding: 1rem; }
    .loading { text-align: center; padding: 4rem; font-size: 1.1rem; color: #64748b; }
    .error { color: #dc2626; padding: 1rem; text-align: center; }
  </style>
</head>
<body>
  <h1>ShopHub Products</h1>
  <div id="container"><p class="loading">Loading products...</p></div>

  <script>
    const container = document.getElementById('container');

    async function loadProducts() {
      try {
        container.innerHTML = '<p class="loading">Loading products...</p>';
        const response = await fetch('https://fakestoreapi.com/products?limit=6');
        if (!response.ok) throw new Error('Server error: ' + response.status);
        const products = await response.json();
        renderProducts(products);
      } catch (err) {
        container.innerHTML = \`
          <div class="error">
            <p>❌ Failed to load: \${err.message}</p>
            <button onclick="loadProducts()">Retry</button>
          </div>\`;
      }
    }

    function renderProducts(products) {
      container.innerHTML = '<div class="product-grid"></div>';
      const grid = container.querySelector('.product-grid');
      products.forEach(product => {
        grid.innerHTML += \`
          <div class="product-card">
            <img src="\${product.image}" alt="\${product.title}" />
            <div class="card-body">
              <h3>\${product.title.slice(0, 40)}...</h3>
              <p><strong>$\${product.price}</strong></p>
              <button>Add to Cart</button>
            </div>
          </div>\`;
      });
    }

    loadProducts();
  <\/script>
</body>
</html>`})]})}export{b as default};
