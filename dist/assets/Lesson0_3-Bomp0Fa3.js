import{j as e,r as p}from"./index-fCZyuqB2.js";import{C as d}from"./CodeBlock-y81Z23mq.js";import{C as f}from"./Callout-B_CeIBza.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";import{C as h}from"./Challenge-B2Dev4fs.js";const l=[{id:1,title:"Wireless Headphones",price:79.99,category:"electronics",rating:4.5,inStock:!0},{id:2,title:"Running Shoes",price:89.99,category:"clothing",rating:4.2,inStock:!0},{id:3,title:"Smart Watch",price:199.99,category:"electronics",rating:4.8,inStock:!1},{id:4,title:"Coffee Maker",price:49.99,category:"home",rating:4,inStock:!0},{id:5,title:"Yoga Mat",price:29.99,category:"fitness",rating:4.3,inStock:!0},{id:6,title:"Bluetooth Speaker",price:59.99,category:"electronics",rating:4.6,inStock:!0}];function y({label:t,value:c}){const n=Array.isArray(c)?c.map(r=>typeof r=="object"?JSON.stringify(r):String(r)).join(`
`):typeof c=="object"?JSON.stringify(c,null,2):String(c);return e.jsxs("div",{style:{marginTop:"0.75rem"},children:[t&&e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:["→ ",t,":"]}),e.jsx("pre",{style:{background:"var(--bg-color)",border:"1px solid var(--border-color)",borderRadius:"0.375rem",padding:"0.75rem",margin:0,fontSize:"0.8rem",overflowX:"auto",whiteSpace:"pre-wrap",color:"var(--success)"},children:n||"(empty array)"})]})}function x(){const[t,c]=p.useState([]),n=()=>{const r=[];l.slice(0,3).forEach((i,m)=>{r.push(`[${m}] ${i.title} — $${i.price}`)}),c(r)};return e.jsxs("div",{children:[e.jsx(d,{language:"js",children:"PRODUCTS.forEach((product, index) => {\n  console.log(`[${index}] ${product.title} — $${product.price}`);\n});"}),e.jsx("button",{className:"btn",style:{marginTop:"0.75rem",fontSize:"0.875rem"},onClick:n,children:"▶ Run forEach"}),t.length>0&&e.jsx(y,{label:"console output",value:t})]})}function j(){const[t,c]=p.useState(null),n={titles:{label:"Extract titles",code:"PRODUCTS.map(p => p.title)",run:()=>l.map(r=>r.title)},prices:{label:"Get all prices",code:"PRODUCTS.map(p => p.price)",run:()=>l.map(r=>r.price)},formatted:{label:"Format for display",code:"PRODUCTS.map(p => `${p.title}: $${p.price}`)",run:()=>l.map(r=>`${r.title}: $${r.price}`)},discounted:{label:"Apply 10% off",code:"PRODUCTS.map(p => ({ ...p, price: +(p.price * 0.9).toFixed(2) }))",run:()=>l.map(r=>({...r,price:+(r.price*.9).toFixed(2)}))}};return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)",marginBottom:"0.5rem"},children:"Click a transformation:"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"},children:Object.entries(n).map(([r,i])=>e.jsx("button",{onClick:()=>c(r),style:{padding:"0.35rem 0.75rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:t===r?"var(--primary)":"var(--bg-color)",color:t===r?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.8rem"},children:i.label},r))}),t&&e.jsxs(e.Fragment,{children:[e.jsx("pre",{style:{background:"var(--bg-color)",border:"1px solid var(--border-color)",borderRadius:"0.375rem",padding:"0.5rem 0.75rem",fontSize:"0.8rem",color:"var(--primary)"},children:n[t].code}),e.jsx(y,{label:`Result (${n[t].run().length} items)`,value:n[t].run()})]})]})}function b(){const[t,c]=p.useState("all"),[n,r]=p.useState(200),[i,m]=p.useState(!1);let o=l;t!=="all"&&(o=o.filter(s=>s.category===t)),o=o.filter(s=>s.price<=n),i&&(o=o.filter(s=>s.inStock));const a=["all","electronics","clothing","home","fitness"];return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",marginBottom:"0.75rem"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Category:"}),e.jsx("div",{style:{display:"flex",gap:"0.35rem",flexWrap:"wrap"},children:a.map(s=>e.jsx("button",{onClick:()=>c(s),style:{padding:"0.25rem 0.6rem",border:"1px solid var(--border-color)",borderRadius:"999px",background:t===s?"var(--primary)":"var(--bg-color)",color:t===s?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.78rem"},children:s},s))})]}),e.jsxs("label",{style:{fontSize:"0.8rem"},children:["Max price: $",n,e.jsx("input",{type:"range",min:"20",max:"200",step:"10",value:n,onChange:s=>r(+s.target.value),style:{marginLeft:"0.75rem",width:120}})]}),e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.8rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:i,onChange:s=>m(s.target.checked)}),"In stock only"]})]}),e.jsxs("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginBottom:"0.35rem"},children:["Showing ",o.length," of ",l.length," products"]}),o.length===0?e.jsx("p",{style:{color:"var(--text-muted)",textAlign:"center",padding:"1rem"},children:"No products match"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem"},children:o.map(s=>e.jsxs("div",{style:{padding:"0.5rem",background:"var(--bg-color)",borderRadius:"0.375rem",border:"1px solid var(--border-color)",fontSize:"0.78rem"},children:[e.jsx("div",{style:{fontWeight:600,color:"var(--text-color)"},children:s.title}),e.jsxs("div",{style:{color:"var(--primary)"},children:["$",s.price]}),e.jsx("div",{style:{color:s.inStock?"var(--success)":"var(--error)",fontSize:"0.7rem"},children:s.inStock?"✅ In stock":"❌ Out"})]},s.id))})]})}function v(){const[t,c]=p.useState(3),n=l.find(i=>i.id===t),r=l.findIndex(i=>i.id===t);return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"},children:[l.map(i=>e.jsxs("button",{onClick:()=>c(i.id),style:{padding:"0.3rem 0.6rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:t===i.id?"var(--primary)":"var(--bg-color)",color:t===i.id?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.78rem"},children:["id=",i.id]},i.id)),e.jsx("button",{onClick:()=>c(99),style:{padding:"0.3rem 0.6rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:t===99?"var(--error)":"var(--bg-color)",color:t===99?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.78rem"},children:"id=99 (missing)"})]}),e.jsxs("pre",{style:{background:"var(--bg-color)",border:"1px solid var(--border-color)",borderRadius:"0.375rem",padding:"0.75rem",fontSize:"0.8rem",color:n?"var(--success)":"var(--error)"},children:[`find(p => p.id === ${t}):
`,n?JSON.stringify(n,null,2):"undefined  ← not found!",`

findIndex(p => p.id === ${t}): ${r}  ${r===-1?"← -1 means not found":""}`]})]})}function S(){const[t,c]=p.useState([{id:1,title:"Headphones",price:79.99,qty:2},{id:3,title:"Smart Watch",price:199.99,qty:1}]),n=t.reduce((o,a)=>o+a.price*a.qty,0),r=t.reduce((o,a)=>o+a.qty,0),i=o=>c(a=>a.filter(s=>s.id!==o)),m=t.map((o,a)=>({label:`Step ${a+1}: ${o.title} × ${o.qty}`,acc:t.slice(0,a+1).reduce((s,g)=>s+g.price*g.qty,0)}));return e.jsxs("div",{children:[t.map(o=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"0.5rem",background:"var(--bg-color)",borderRadius:"0.375rem",marginBottom:"0.35rem",border:"1px solid var(--border-color)"},children:[e.jsxs("span",{style:{fontSize:"0.85rem"},children:[o.title," × ",o.qty]}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[e.jsxs("span",{style:{color:"var(--primary)",fontWeight:600,fontSize:"0.85rem"},children:["$",(o.price*o.qty).toFixed(2)]}),e.jsx("button",{onClick:()=>i(o.id),style:{background:"none",border:"none",color:"var(--error)",cursor:"pointer",fontSize:"0.75rem"},children:"✕"})]})]},o.id)),e.jsxs("div",{style:{marginTop:"0.5rem",padding:"0.5rem 0.75rem",background:"#1e3a5f",borderRadius:"0.375rem",fontSize:"0.85rem"},children:[e.jsx("p",{style:{margin:"0 0 0.25rem"},children:"reduce() trace:"}),m.map((o,a)=>e.jsxs("p",{style:{margin:"0.1rem 0",color:"var(--text-muted)",fontSize:"0.78rem"},children:[o.label," → accumulator = ",e.jsxs("strong",{style:{color:"var(--success)"},children:["$",o.acc.toFixed(2)]})]},a)),t.length===0&&e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.78rem"},children:"Start value: 0 → final result: 0"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem",fontWeight:700,padding:"0.5rem 0.75rem",background:"var(--bg-color)",borderRadius:"0.375rem"},children:[e.jsxs("span",{children:["Total (",r," items):"]}),e.jsxs("span",{style:{color:"var(--primary)"},children:["$",n.toFixed(2)]})]})]})}function k(){const[t,c]=p.useState(null),n=t?[...l].sort((r,i)=>t==="price-asc"?r.price-i.price:t==="price-desc"?i.price-r.price:t==="rating"?i.rating-r.rating:t==="title"?r.title.localeCompare(i.title):0):l;return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"},children:[{key:null,label:"Original"},{key:"price-asc",label:"💰 Price ↑"},{key:"price-desc",label:"💰 Price ↓"},{key:"rating",label:"⭐ Rating"},{key:"title",label:"🔤 A–Z"}].map(({key:r,label:i})=>e.jsx("button",{onClick:()=>c(r),style:{padding:"0.3rem 0.7rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:t===r?"var(--primary)":"var(--bg-color)",color:t===r?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.8rem"},children:i},String(r)))}),n.map((r,i)=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"0.4rem 0.75rem",background:"var(--bg-color)",borderRadius:"0.25rem",marginBottom:"0.25rem",border:"1px solid var(--border-color)",fontSize:"0.8rem"},children:[e.jsxs("span",{children:[e.jsxs("span",{style:{color:"var(--text-muted)",marginRight:"0.5rem"},children:["#",i+1]}),r.title]}),e.jsxs("span",{style:{color:"var(--primary)"},children:["$",r.price,"   ⭐",r.rating]})]},r.id))]})}function I(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 0 — JavaScript Foundations"}),e.jsx("h1",{children:"Array Methods"}),e.jsx("p",{className:"lesson-subtitle",children:"forEach, map, filter, find, reduce, sort — the 6 methods you'll use in every React app."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 Why Array Methods Matter"}),e.jsxs("p",{children:["In React, ",e.jsx("strong",{children:"your UI is driven by arrays of data"}),". Every product grid, cart list, filter, search result, and price calculation uses array methods. These 6 methods will appear in almost every React component you write."]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.5rem",marginTop:"1rem"},children:[{name:"forEach",icon:"🔁",use:"Loop and do side effects"},{name:"map",icon:"🔄",use:"Transform each item"},{name:"filter",icon:"🔍",use:"Keep matching items"},{name:"find",icon:"🎯",use:"Find one item"},{name:"reduce",icon:"🧮",use:"Accumulate into one value"},{name:"sort",icon:"📊",use:"Re-order items"}].map(t=>e.jsxs("div",{style:{padding:"0.75rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)",textAlign:"center"},children:[e.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"0.25rem"},children:t.icon}),e.jsxs("code",{style:{color:"var(--primary)",fontWeight:700},children:[t.name,"()"]}),e.jsx("p",{style:{margin:"0.25rem 0 0",fontSize:"0.75rem",color:"var(--text-muted)"},children:t.use})]},t.name))}),e.jsx("p",{style:{marginTop:"1rem"},children:"All of these live demos use this same products array:"}),e.jsx(d,{language:"js",children:`const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99,  category: 'electronics', rating: 4.5, inStock: true  },
  { id: 2, title: 'Running Shoes',        price: 89.99,  category: 'clothing',    rating: 4.2, inStock: true  },
  { id: 3, title: 'Smart Watch',          price: 199.99, category: 'electronics', rating: 4.8, inStock: false },
  { id: 4, title: 'Coffee Maker',         price: 49.99,  category: 'home',        rating: 4.0, inStock: true  },
  { id: 5, title: 'Yoga Mat',             price: 29.99,  category: 'fitness',     rating: 4.3, inStock: true  },
  { id: 6, title: 'Bluetooth Speaker',    price: 59.99,  category: 'electronics', rating: 4.6, inStock: true  },
];`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔁 forEach — Loop and Do Something"}),e.jsxs("p",{children:[e.jsx("code",{children:"forEach"})," runs a function for each item. Use it when you need to ",e.jsx("em",{children:"do something"})," with each item (like logging or updating the DOM), not when you need a new array."]}),e.jsx(d,{language:"js",children:`// Basic forEach
products.forEach((product) => {
  console.log(product.title);
});

// With index
products.forEach((product, index) => {
  console.log(\`\${index + 1}. \${product.title} — $\${product.price}\`);
});

// ⚠️ forEach does NOT return anything!
const result = products.forEach(p => p.title);
console.log(result);  // undefined  ← can't use this in React!`}),e.jsxs(f,{type:"warning",children:[e.jsx("strong",{children:"forEach vs map:"})," ",e.jsx("code",{children:"forEach"})," returns ",e.jsx("code",{children:"undefined"}),". You cannot use it to render lists in React — use ",e.jsx("code",{children:"map()"})," for that. Use ",e.jsx("code",{children:"forEach"})," only for side effects (logging, updating external state)."]}),e.jsx(u,{title:"forEach — Live Output",children:e.jsx(x,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔄 map — Transform Every Item"}),e.jsxs("p",{children:[e.jsx("code",{children:"map"})," creates a ",e.jsx("strong",{children:"new array"})," by transforming each item. It's the most important array method in React — you use it every time you render a list."]}),e.jsx(d,{language:"js",children:`// Extract one field from each object
const titles = products.map(p => p.title);
// ['Wireless Headphones', 'Running Shoes', ...]

// Format for display
const labels = products.map(p => \`\${p.title}: $\${p.price}\`);

// Transform the whole object (create new objects)
const discounted = products.map(p => ({
  ...p,                              // copy all properties
  price: +(p.price * 0.9).toFixed(2),  // override price with 10% off
  onSale: true,                     // add new property
}));

// In React — map returns JSX elements:
// products.map(p => <ProductCard key={p.id} product={p} />)

// Key rule: map gives back the same number of items as the input
console.log(products.length);    // 6
console.log(discounted.length);  // 6  ← always same length`}),e.jsx(u,{title:"map — Click a Transformation",children:e.jsx(j,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔍 filter — Keep Only Matching Items"}),e.jsxs("p",{children:[e.jsx("code",{children:"filter"})," creates a new array with only the items that pass your test. Use it for category filters, search, price ranges, and removing cart items."]}),e.jsx(d,{language:"js",children:`// Filter by category
const electronics = products.filter(p => p.category === 'electronics');
// 3 items: Headphones, Watch, Speaker

// Filter by price
const affordable = products.filter(p => p.price < 80);
// 3 items: Headphones, Coffee Maker, Yoga Mat

// Filter with multiple conditions (AND)
const inStockElectronics = products
  .filter(p => p.category === 'electronics')
  .filter(p => p.inStock);
// OR equivalently:
// .filter(p => p.category === 'electronics' && p.inStock)

// Remove an item by id (classic cart pattern)
const cartAfterRemove = cart.filter(item => item.id !== 3);

// filter keeps the same structure but fewer items:
console.log(products.length);    // 6
console.log(electronics.length); // 3  ← fewer items`}),e.jsx(u,{title:"filter — Live Product Filter",children:e.jsx(b,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 find & findIndex — Get One Item"}),e.jsxs("p",{children:[e.jsx("code",{children:"find"})," returns the ",e.jsx("strong",{children:"first item"})," that matches — not an array, just one object (or ",e.jsx("code",{children:"undefined"})," if not found). Use it to get a specific product by ID."]}),e.jsx(d,{language:"js",children:`// Get one product by ID
const headphones = products.find(p => p.id === 1);
// { id: 1, title: 'Wireless Headphones', price: 79.99, ... }

const missing = products.find(p => p.id === 99);
// undefined  ← returns undefined when not found!

// ⚠️ Always check before using!
if (headphones) {
  console.log(headphones.title);  // safe
}

// findIndex — returns the position, not the item (-1 if not found)
const idx = products.findIndex(p => p.id === 3);
// 2  ← Smart Watch is at index 2

// Use findIndex when you need to UPDATE an item in an array:
const updatedProducts = products.map((p, i) =>
  i === idx ? { ...p, price: 179.99 } : p
);`}),e.jsx(u,{title:"find & findIndex — Click an ID",children:e.jsx(v,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🧮 reduce — Accumulate Into One Value"}),e.jsxs("p",{children:[e.jsx("code",{children:"reduce"})," collapses an array into a ",e.jsx("strong",{children:"single value"})," — a number, object, or string. The most common use is calculating a cart total."]}),e.jsx(d,{language:"js",children:`// Anatomy of reduce:
array.reduce((accumulator, currentItem) => {
  return newAccumulator;
}, startingValue);

// ── Cart total ──
const cart = [
  { title: 'Headphones', price: 79.99, qty: 2 },
  { title: 'Smart Watch', price: 199.99, qty: 1 },
];

const total = cart.reduce((sum, item) => {
  return sum + item.price * item.qty;
}, 0);  // ← start at 0

// Step-by-step:
// Start: sum=0
// Step 1: sum = 0 + (79.99 × 2) = 159.98
// Step 2: sum = 159.98 + (199.99 × 1) = 359.97
// Result: 359.97

console.log(total.toFixed(2));  // "359.97"

// ── Count items ──
const itemCount = cart.reduce((count, item) => count + item.qty, 0);
// 3

// ── Group by category ──
const grouped = products.reduce((acc, product) => {
  const cat = product.category;
  acc[cat] = acc[cat] || [];
  acc[cat].push(product);
  return acc;
}, {});

// Result: { electronics: [...], clothing: [...], ... }`}),e.jsx(u,{title:"reduce — Cart Total Calculator",children:e.jsx(S,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📊 sort — Re-Order Items"}),e.jsxs("p",{children:[e.jsx("code",{children:"sort"})," re-orders an array ",e.jsx("strong",{children:"in place"})," — so always copy with spread first when you don't want to mutate the original."]}),e.jsx(d,{language:"js",children:`// ⚠️ sort MUTATES the original array!
// Always spread first to avoid mutation:
const sorted = [...products].sort((a, b) => a.price - b.price);

// Sort by price: cheapest first
const byPriceAsc = [...products].sort((a, b) => a.price - b.price);

// Sort by price: most expensive first
const byPriceDesc = [...products].sort((a, b) => b.price - a.price);

// Sort by rating: highest first
const byRating = [...products].sort((a, b) => b.rating - a.rating);

// Sort by title: A → Z (alphabetical)
const byTitle = [...products].sort((a, b) =>
  a.title.localeCompare(b.title)
);

// How the comparator works:
// Return negative → a comes first
// Return positive → b comes first
// Return 0 → same order

// Simple strings (no special characters):
const byTitleSimple = [...products].sort((a, b) =>
  a.title < b.title ? -1 : a.title > b.title ? 1 : 0
);`}),e.jsx(u,{title:"sort — Click to Re-Order",children:e.jsx(k,{})}),e.jsxs(f,{type:"warning",children:[e.jsx("strong",{children:"Always spread before sorting:"})," ",e.jsx("code",{children:"[...products].sort(...)"})," — not ",e.jsx("code",{children:"products.sort(...)"}),". The sort() method mutates the original array, which breaks React's change detection."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 Method Chaining — Combine Them"}),e.jsx("p",{children:"You can chain multiple methods together to build powerful data pipelines:"}),e.jsx(d,{language:"js",children:`// Get sorted titles of in-stock electronics under $100
const result = products
  .filter(p => p.category === 'electronics')   // keep electronics
  .filter(p => p.inStock)                       // keep in-stock ones
  .filter(p => p.price < 100)                  // keep under $100
  .sort((a, b) => a.price - b.price)           // sort by price
  .map(p => \`\${p.title} — $\${p.price}\`);      // format for display

// result: ['Bluetooth Speaker — $59.99', 'Wireless Headphones — $79.99']

// Quick reference:
products.filter(fn)    // → array (same or fewer items)
products.map(fn)       // → array (always same length, transformed)
products.find(fn)      // → single item or undefined
products.findIndex(fn) // → number (-1 if not found)
products.forEach(fn)   // → undefined (side effects only)
products.reduce(fn, 0) // → single value (number, string, object)
[...products].sort(fn) // → array (same length, reordered)`})]}),e.jsx("section",{className:"lesson-section",children:e.jsx("h2",{children:"🎯 Practice Challenges"})}),e.jsx(h,{id:"0-3-a-map",title:"Price Tags",description:"Using the products array, use map() to create an array of formatted strings like: 'Wireless Headphones — $79.99'. Then log each one.",hint:"Use map() with a template literal: p => `${p.title} — $${p.price}`",difficulty:"easy",answer:`const priceTags = products.map(p => \`\${p.title} — $\${p.price}\`);
priceTags.forEach(tag => console.log(tag));

// Output:
// Wireless Headphones — $79.99
// Running Shoes — $89.99
// ...`,explanation:"map() transforms each product object into a formatted string. forEach then loops over those strings to log them. Notice map returns a new array — forEach just executes for each item."}),e.jsx(h,{id:"0-3-b-filter",title:"In-Stock Products Under $100",description:"Filter the products array to only keep products that are: (1) inStock is true, AND (2) price is less than $100. Then map() the result to get only the titles.",hint:"You can chain: products.filter(...).filter(...).map(...) or combine with &&",difficulty:"easy",answer:`const result = products
  .filter(p => p.inStock && p.price < 100)
  .map(p => p.title);

console.log(result);
// ['Wireless Headphones', 'Running Shoes', 'Coffee Maker', 'Yoga Mat', 'Bluetooth Speaker']`,explanation:"We chain filter() and map() together. The filter keeps only items where BOTH conditions are true (&&). Then map() extracts just the title from each remaining item."}),e.jsx(h,{id:"0-3-c-reduce",title:"Cart Total",description:`Given this cart array:
const cart = [
  { title: 'Headphones', price: 79.99, qty: 2 },
  { title: 'Watch', price: 199.99, qty: 1 },
  { title: 'Speaker', price: 59.99, qty: 3 },
];
Use reduce() to calculate the total price (price × qty for each item).`,hint:"Start accumulator at 0. Each step: return acc + (item.price * item.qty)",difficulty:"medium",answer:`const cart = [
  { title: 'Headphones', price: 79.99, qty: 2 },
  { title: 'Watch', price: 199.99, qty: 1 },
  { title: 'Speaker', price: 59.99, qty: 3 },
];

const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
console.log(\`Total: $\${total.toFixed(2)}\`);  // "Total: $539.94"

// Step-by-step trace:
// sum=0       + (79.99 × 2)  = 159.98
// sum=159.98  + (199.99 × 1) = 359.97
// sum=359.97  + (59.99 × 3)  = 539.94`,explanation:"reduce() starts with sum=0. For each cart item, it adds price × qty to the accumulator. The .toFixed(2) converts the floating-point number to a string with 2 decimal places."}),e.jsx(h,{id:"0-3-d-sort",title:"Top-Rated Products",description:"Sort a copy of the products array by rating (highest first) and return only the top 3 titles. Don't mutate the original!",hint:"Use [...products].sort() then .slice(0, 3) to take the first 3, then .map() for titles",difficulty:"medium",answer:`const topRated = [...products]
  .sort((a, b) => b.rating - a.rating)  // highest rating first
  .slice(0, 3)                          // take top 3
  .map(p => p.title);                   // get titles

console.log(topRated);
// ['Smart Watch', 'Bluetooth Speaker', 'Wireless Headphones']

// Verify original is unchanged:
console.log(products[0].title);  // 'Wireless Headphones' — still the same order`,explanation:"The spread [...products] creates a copy so sort() doesn't mutate the original. We sort descending (b - a for highest first), take the top 3 with slice(), then extract just the titles with map()."})]})}export{I as default};
