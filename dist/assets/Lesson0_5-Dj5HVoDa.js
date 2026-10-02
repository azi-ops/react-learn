import{j as e,r as n}from"./index-fCZyuqB2.js";import{C as d}from"./CodeBlock-y81Z23mq.js";import{C as f}from"./CodeComparison-B_ysuKRn.js";import{C as p}from"./Callout-B_CeIBza.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";import{S as g}from"./StepByStep-Be1tR1cd.js";import{C as y}from"./Challenge-B2Dev4fs.js";import{P as x}from"./PracticeProject-aOb4DaIe.js";function j(){const[t,a]=n.useState("idle"),[i,s]=n.useState(null),[o,c]=n.useState(80),l=()=>{a("pending"),s(null),setTimeout(()=>{Math.random()*100<o?(s({id:1,title:"Wireless Headphones",price:79.99}),a("resolved")):(s("Network Error: Failed to fetch"),a("rejected"))},1500)},r={idle:"var(--text-muted)",pending:"#f59e0b",resolved:"var(--success)",rejected:"var(--error)"},h={idle:"⏸",pending:"⏳",resolved:"✅",rejected:"❌"};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap"},children:[e.jsxs("label",{style:{fontSize:"0.85rem"},children:["Success chance: ",o,"%",e.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:m=>c(+m.target.value),style:{marginLeft:"0.5rem",width:100}})]}),e.jsx("button",{className:"btn",onClick:l,disabled:t==="pending",style:{fontSize:"0.875rem"},children:t==="pending"?"⏳ Fetching...":"▶ Simulate Fetch"})]}),e.jsxs("div",{style:{padding:"0.875rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:`2px solid ${r[t]}`,transition:"border-color 0.3s"},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",fontWeight:600,color:r[t]},children:[h[t]," Promise status: ",e.jsx("code",{children:t})]}),t==="pending"&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[e.jsx("div",{style:{width:16,height:16,border:"2px solid var(--border-color)",borderTopColor:"#f59e0b",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),e.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-muted)"},children:"Waiting for server response..."})]}),t==="resolved"&&e.jsx("pre",{style:{margin:0,fontSize:"0.8rem",color:"var(--success)"},children:JSON.stringify(i,null,2)}),t==="rejected"&&e.jsxs("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--error)"},children:["Error: ",i]}),t==="idle"&&e.jsx("p",{style:{margin:0,fontSize:"0.875rem",color:"var(--text-muted)"},children:'Click "Simulate Fetch" to start'})]})]})}function b(){const[t,a]=n.useState({loading:!1,data:null,error:null}),i=async s=>{a({loading:!0,data:null,error:null});try{const o=await fetch(`https://fakestoreapi.com/products/${s}`);if(!o.ok)throw new Error(`HTTP ${o.status}`);const c=await o.json();a({loading:!1,data:c,error:null})}catch(o){a({loading:!1,data:null,error:o.message})}};return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-muted)",marginBottom:"0.75rem"},children:"Fetch a real product from the FakeStore API:"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",flexWrap:"wrap"},children:[[1,2,3,4,5].map(s=>e.jsxs("button",{onClick:()=>i(s),className:"btn-secondary",style:{fontSize:"0.85rem"},children:["Product #",s]},s)),e.jsx("button",{onClick:()=>i(999),style:{padding:"0.375rem 0.75rem",border:"1px solid var(--error)",borderRadius:"0.375rem",background:"transparent",color:"var(--error)",cursor:"pointer",fontSize:"0.85rem"},children:"Trigger Error (id=999)"})]}),t.loading&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{width:20,height:20,border:"3px solid var(--border-color)",borderTopColor:"var(--primary)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.875rem"},children:"Loading from fakestoreapi.com..."})]}),t.error&&e.jsx("div",{style:{padding:"0.875rem",background:"#2d1b1b",border:"1px solid var(--error)",borderRadius:"0.5rem"},children:e.jsxs("p",{style:{margin:0,color:"var(--error)",fontSize:"0.875rem"},children:["❌ Error: ",t.error]})}),t.data&&e.jsxs("div",{style:{padding:"0.875rem",background:"var(--bg-color)",border:"1px solid var(--success)",borderRadius:"0.5rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",color:"var(--success)",fontSize:"0.8rem",fontWeight:600},children:"✅ Response received:"}),e.jsx("p",{style:{margin:"0 0 0.25rem",fontWeight:700,fontSize:"0.9rem"},children:t.data.title}),e.jsxs("p",{style:{margin:"0 0 0.25rem",color:"var(--primary)",fontWeight:600},children:["$",t.data.price]}),e.jsxs("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-muted)"},children:["Category: ",t.data.category]})]})]})}function w(){const[t]=n.useState([{id:1,title:"Wireless Headphones",price:79.99,category:"electronics",image:"🎧",rating:4.5},{id:2,title:"Running Shoes",price:89.99,category:"clothing",image:"👟",rating:4.2},{id:3,title:"Smart Watch",price:199.99,category:"electronics",image:"⌚",rating:4.8},{id:4,title:"Coffee Maker",price:49.99,category:"home",image:"☕",rating:4}]),[a,i]=n.useState(!1),[s,o]=n.useState("all"),c=["all","electronics","clothing","home"],l=s==="all"?t:t.filter(r=>r.category===s);return e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:380},children:[e.jsx("div",{style:{display:"flex",gap:"0.35rem",marginBottom:"0.75rem",flexWrap:"wrap"},children:c.map(r=>e.jsx("button",{onClick:()=>o(r),style:{padding:"0.25rem 0.6rem",borderRadius:"999px",border:"1px solid #e2e8f0",cursor:"pointer",fontSize:"0.75rem",background:s===r?"#3b82f6":"#fff",color:s===r?"#fff":"#374151"},children:r},r))}),a?e.jsx("div",{style:{textAlign:"center",padding:"2rem",color:"#64748b"},children:"⏳ Loading products..."}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},children:l.map(r=>e.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"0.75rem"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.25rem"},children:r.image}),e.jsxs("p",{style:{margin:"0 0 0.15rem",fontWeight:700,fontSize:"0.8rem",color:"#0f172a"},children:[r.title.slice(0,16),"..."]}),e.jsxs("p",{style:{margin:"0 0 0.15rem",color:"#2563eb",fontWeight:700,fontSize:"0.85rem"},children:["$",r.price]}),e.jsxs("p",{style:{margin:0,fontSize:"0.7rem",color:"#64748b"},children:["⭐ ",r.rating]})]},r.id))})]})}function H(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 0 — JavaScript Foundations"}),e.jsx("h1",{children:"async/await & fetch"}),e.jsx("p",{className:"lesson-subtitle",children:"Load real data from the internet — the skill that transforms your app from static to dynamic."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⏳ Why Async Matters"}),e.jsxs("p",{children:["JavaScript runs one line at a time. But fetching data from a server takes time — sometimes 100ms, sometimes 2000ms. Without async, your entire app would ",e.jsx("em",{children:"freeze"})," while waiting. Async JavaScript lets the rest of your code keep running while it waits for the server."]}),e.jsx(d,{language:"js",children:`// ❌ Synchronous (would freeze the browser):
const data = fetch('https://api.example.com/products'); // can't do this!

// ✅ Asynchronous — the rest of the code keeps running while we wait
console.log('1. Starting fetch...');
fetch('https://api.example.com/products')  // returns a Promise
  .then(response => response.json())
  .then(data => console.log('3. Got data:', data));
console.log('2. This runs IMMEDIATELY (before the data arrives!');`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🤝 Promises — A Contract for Future Data"}),e.jsxs("p",{children:["A Promise is an object that represents something that hasn't happened yet. It's like a restaurant receipt — you don't have your food yet, but you have a ",e.jsx("em",{children:"promise"})," that it's coming."]}),e.jsx(d,{language:"js",children:`// A Promise can be in 3 states:
// 1. pending   — waiting (the request is in flight)
// 2. resolved  — success (data arrived!)
// 3. rejected  — failure (something went wrong)

// Creating a Promise manually (rarely needed — fetch() does this for you)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      resolve({ id: 1, title: 'Headphones' });  // fulfilled!
    } else {
      reject(new Error('Server error'));         // rejected
    }
  }, 1000);
});

// Handling with .then() and .catch()
myPromise
  .then(data => console.log('Got:', data))
  .catch(err => console.error('Error:', err.message));`}),e.jsx(u,{title:"Promise States — Watch It Happen",children:e.jsx(j,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"✨ async/await — Cleaner Syntax"}),e.jsxs("p",{children:[e.jsx("code",{children:"async/await"})," is modern syntax that makes Promises look like normal sequential code — much easier to read and debug."]}),e.jsx(f,{leftLabel:".then() / .catch() — Promise chaining",rightLabel:"async/await — much cleaner",leftCode:`fetch('https://fakestoreapi.com/products/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }
    return response.json();
  })
  .then(product => {
    console.log(product.title);
  })
  .catch(err => {
    console.error('Error:', err.message);
  });`,rightCode:`async function loadProduct() {
  try {
    const response = await fetch(
      'https://fakestoreapi.com/products/1'
    );

    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }

    const product = await response.json();
    console.log(product.title);

  } catch (err) {
    console.error('Error:', err.message);
  }
}`,language:"js"}),e.jsxs(p,{type:"info",children:[e.jsx("strong",{children:"Key rules for async/await:"}),e.jsx("br",{}),"1. ",e.jsx("code",{children:"await"})," can only be used inside an ",e.jsx("code",{children:"async"})," function",e.jsx("br",{}),"2. Always wrap in ",e.jsx("code",{children:"try/catch"})," to handle errors",e.jsx("br",{}),"3. ",e.jsx("code",{children:"await"})," pauses ",e.jsx("em",{children:"just that function"})," — not the entire browser"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🌐 The fetch() API"}),e.jsxs("p",{children:[e.jsx("code",{children:"fetch()"})," is the browser's built-in way to make HTTP requests. It returns a Promise that resolves to a Response object."]}),e.jsx(g,{steps:[{title:"Step 1: Call fetch()",language:"js",code:`const response = await fetch('https://fakestoreapi.com/products');
// response is a Response object, not the data yet!
// It has: response.ok, response.status, response.json()`,explanation:"fetch() returns a Response — you need to call .json() to get the actual data"},{title:"Step 2: Check if the request succeeded",language:"js",code:`if (!response.ok) {
  throw new Error('Server error: ' + response.status);
}
// response.ok is true for status codes 200-299
// response.status is the HTTP status (200, 404, 500, etc.)`,explanation:`fetch() only rejects on network failures (no internet). A 404 or 500 still "succeeds" from fetch's perspective — so always check response.ok!`},{title:"Step 3: Parse the JSON",language:"js",code:`const products = await response.json();
// products is now a JavaScript array or object
// You need await because .json() is also async
console.log(products);      // Array of product objects
console.log(products[0]);   // First product`,explanation:"response.json() reads the response body and parses it from JSON text into a JavaScript object. This is also async."},{title:"Complete fetch pattern with error handling",language:"js",code:`async function loadProducts() {
  try {
    // 1. Make the request
    const response = await fetch('https://fakestoreapi.com/products');

    // 2. Check for HTTP errors
    if (!response.ok) {
      throw new Error('HTTP Error: ' + response.status);
    }

    // 3. Parse the JSON
    const products = await response.json();

    // 4. Use the data
    console.log('Loaded', products.length, 'products');
    return products;

  } catch (error) {
    // Handles both network errors AND our thrown errors
    console.error('Failed to load:', error.message);
    return [];
  }
}

// Call it:
const products = await loadProducts();`,explanation:"This is the complete, production-ready pattern. You'll use this exact structure in React with useEffect."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔴 Live Demo — Real API Call"}),e.jsx(u,{title:"Fetch from FakeStore API (real HTTP requests!)",children:e.jsx(b,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 How This Connects to React"}),e.jsx(d,{language:"js",children:`// In React, you'll use this pattern inside useEffect:
import { useState, useEffect } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        if (!res.ok) throw new Error('Failed to load');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);  // Always stop loading
      }
    }
    loadProducts();
  }, []);  // [] means: run once when component mounts

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>{p.title} — \${p.price}</div>
      ))}
    </div>
  );
}`}),e.jsxs(p,{type:"tip",children:["You'll learn useEffect in Chapter 10. For now, just understand the ",e.jsx("code",{children:"async function + try/catch + await fetch"})," pattern — that's the heart of it."]})]}),e.jsx(x,{title:"Fetch & Display Real Products",difficulty:"medium",description:"Build a product gallery that fetches real products from an API, shows a loading state while waiting, and handles errors gracefully.",targetDesign:e.jsx(w,{}),requirements:[{label:"Call fetch() to get products from: https://fakestoreapi.com/products?limit=8",difficulty:"easy"},{label:'While waiting for the data, show a "Loading products..." message',difficulty:"easy"},{label:"When data arrives, display each product with its title, price, and image",difficulty:"easy"},{label:"If the fetch fails (check response.ok), show an error message",difficulty:"medium"},{label:'Add a "Retry" button on the error state that calls the fetch function again',difficulty:"medium"},{label:"Add category filter buttons that filter the displayed products client-side",difficulty:"hard"}],hints:["Write: async function loadProducts() { } then call it immediately: loadProducts();","Track three variables: loading=true, products=[], error=null. Update them in the function.",'Show loading: if (loading) { container.innerHTML = "<p>Loading...</p>"; }','Use response.ok to check for success. If !response.ok, throw new Error("...")','In the catch block, set an error message. Show it with a Retry button: <button onclick="loadProducts()">Retry</button>',"Get categories from the fetched products: [...new Set(products.map(p => p.category))]"],steps:[{title:"HTML structure",content:"Simple container and loading indicator.",code:`<div id="app">
  <h1>ShopHub Products</h1>
  <div id="filters"></div>
  <div id="container">Loading...</div>
</div>`},{title:"Fetch function with loading/error states",content:"Complete async fetch with all three states.",code:`const container = document.getElementById('container');

async function loadProducts() {
  try {
    // Show loading
    container.innerHTML = '<p>⏳ Loading products...</p>';

    const response = await fetch('https://fakestoreapi.com/products?limit=8');

    if (!response.ok) {
      throw new Error('Server error: ' + response.status);
    }

    const products = await response.json();
    renderProducts(products);

  } catch (error) {
    container.innerHTML = \`
      <p style="color:red">❌ \${error.message}</p>
      <button onclick="loadProducts()">Retry</button>
    \`;
  }
}

loadProducts(); // Call it!`},{title:"Render the products",content:"Display each product as a card.",code:`function renderProducts(products) {
  container.innerHTML = products.map(p => \`
    <div class="product-card">
      <img src="\${p.image}" alt="\${p.title}" />
      <h3>\${p.title.slice(0, 30)}...</h3>
      <p class="price">$\${p.price}</p>
      <span class="category">\${p.category}</span>
    </div>
  \`).join('');
}`}],checkItems:["fetch() is called with async/await","Loading state shows while waiting","Products display with title, image, and price","response.ok is checked — errors are caught","Error message is displayed when fetch fails","Retry button re-runs the fetch"],answer:`<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: sans-serif; max-width: 900px; margin: 0 auto; padding: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 1.5rem; }
    .card { border: 1px solid #e2e8f0; border-radius: .75rem; overflow: hidden; }
    .card img { width: 100%; height: 160px; object-fit: contain; padding: .75rem; background: #f8fafc; }
    .card-body { padding: .75rem; }
    h3 { margin: 0 0 .25rem; font-size: .85rem; }
    .price { color: #2563eb; font-weight: 700; margin: 0; }
    .loading, .error { text-align: center; padding: 3rem; }
    button { padding: .5rem 1rem; border-radius: .375rem; cursor: pointer; border: none; }
    .retry { background: #3b82f6; color: white; margin-top: 1rem; }
    .filters { display: flex; gap: .5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
    .filter-btn { background: white; border: 1px solid #e2e8f0; border-radius: 999px; padding: .3rem .75rem; font-size: .85rem; cursor: pointer; }
    .filter-btn.active { background: #3b82f6; color: white; border-color: #3b82f6; }
  </style>
</head>
<body>
  <h1>ShopHub Products</h1>
  <div id="filters" class="filters"></div>
  <div id="container" class="loading"><p>⏳ Loading products...</p></div>

  <script>
    let allProducts = [];
    const container = document.getElementById('container');
    const filtersEl = document.getElementById('filters');

    async function loadProducts() {
      try {
        container.innerHTML = '<div class="loading"><p>⏳ Loading products...</p></div>';
        const res = await fetch('https://fakestoreapi.com/products?limit=8');
        if (!res.ok) throw new Error('HTTP ' + res.status);
        allProducts = await res.json();
        setupFilters();
        renderProducts(allProducts);
      } catch (err) {
        container.innerHTML = \`
          <div class="error">
            <p>❌ \${err.message}</p>
            <button class="retry" onclick="loadProducts()">Try Again</button>
          </div>\`;
      }
    }

    function setupFilters() {
      const cats = ['all', ...new Set(allProducts.map(p => p.category))];
      filtersEl.innerHTML = cats.map(c =>
        \`<button class="filter-btn\${c === 'all' ? ' active' : ''}" onclick="filterBy('\${c}')">\${c}</button>\`
      ).join('');
    }

    function filterBy(cat) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      event.target.classList.add('active');
      const shown = cat === 'all' ? allProducts : allProducts.filter(p => p.category === cat);
      renderProducts(shown);
    }

    function renderProducts(products) {
      container.innerHTML = '<div class="grid">' + products.map(p => \`
        <div class="card">
          <img src="\${p.image}" alt="\${p.title}" />
          <div class="card-body">
            <h3>\${p.title.slice(0, 35)}...</h3>
            <p class="price">$\${p.price}</p>
          </div>
        </div>\`).join('') + '</div>';
    }

    loadProducts();
  <\/script>
</body>
</html>`}),e.jsx(y,{id:"0-5-quick",title:"Fetch One Product",description:"Write an async function called getProduct(id) that fetches a product from https://fakestoreapi.com/products/{id} and returns the product object. If the request fails, return null.",hint:"Use async/await. Check response.ok. Wrap in try/catch and return null in the catch block.",difficulty:"easy",answer:`async function getProduct(id) {
  try {
    const response = await fetch(\`https://fakestoreapi.com/products/\${id}\`);
    if (!response.ok) {
      throw new Error('Product not found: ' + response.status);
    }
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error.message);
    return null;
  }
}

// Usage:
const product = await getProduct(1);
if (product) {
  console.log(product.title, product.price);
}`,explanation:"The function is async so we can use await. We check response.ok before calling .json(). The try/catch handles both network errors and our thrown error. Returning null on failure lets callers handle the error gracefully."})]})}export{H as default};
