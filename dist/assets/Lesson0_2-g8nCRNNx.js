import{j as e,r as s}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as u}from"./Callout-B_CeIBza.js";import{I as p}from"./InteractiveDemo-BnwT7BFH.js";import{C as h}from"./Challenge-B2Dev4fs.js";function y(){const[o,l]=s.useState(`let name = "Alex";
name = "Jordan"; // works
console.log(name);`),r={let:`let can be changed ✅
name was "Alex", now "Jordan"`,const:`const cannot be changed ❌
TypeError: Assignment to constant variable.`,var:`var is function-scoped (old way)
Avoid var — use let/const instead`},[c,n]=s.useState("");return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)",marginBottom:"0.75rem"},children:"Click each keyword to see what happens:"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem",flexWrap:"wrap"},children:Object.entries(r).map(([a,d])=>e.jsx("button",{onClick:()=>n(d),style:{padding:"0.375rem 0.875rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--primary)",cursor:"pointer",fontFamily:"monospace",fontSize:"0.9rem"},children:a},a))}),c&&e.jsx("pre",{style:{background:"var(--bg-color)",padding:"0.75rem",borderRadius:"0.375rem",border:"1px solid var(--border-color)",fontSize:"0.875rem",color:"var(--success)"},children:c})]})}function b(){const[o,l]=s.useState("Alex"),[r,c]=s.useState(79.99),[n,a]=s.useState(10),d=t=>`Hello, ${t}! Welcome to ShopHub 👋`,m=(t,x)=>t-t*x/100,g=t=>t>0?"✅ In Stock":"❌ Out of Stock";return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:"greet(name) — function with a parameter"}),e.jsx("input",{value:o,onChange:t=>l(t.target.value),placeholder:"Enter name",style:{padding:"0.375rem",border:"1px solid var(--border-color)",borderRadius:"0.25rem",background:"var(--card-bg)",color:"var(--text-color)",marginBottom:"0.5rem",display:"block"}}),e.jsx("code",{style:{color:"var(--success)",fontSize:"0.875rem"},children:d(o)})]}),e.jsxs("div",{style:{padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:"discountedPrice(price, discount%)"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"0.5rem",flexWrap:"wrap"},children:[e.jsx("input",{type:"number",value:r,onChange:t=>c(+t.target.value),style:{width:80,padding:"0.375rem",border:"1px solid var(--border-color)",borderRadius:"0.25rem",background:"var(--card-bg)",color:"var(--text-color)"}}),e.jsx("input",{type:"number",value:n,onChange:t=>a(+t.target.value),min:"0",max:"100",style:{width:60,padding:"0.375rem",border:"1px solid var(--border-color)",borderRadius:"0.25rem",background:"var(--card-bg)",color:"var(--text-color)"}}),e.jsx("span",{style:{alignSelf:"center",fontSize:"0.8rem",color:"var(--text-muted)"},children:"% off"})]}),e.jsxs("code",{style:{color:"var(--success)",fontSize:"0.875rem"},children:["$",m(r,n).toFixed(2)," (was $",r,")"]})]}),e.jsxs("div",{style:{padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:"inStock(qty) — returns different values based on condition"}),e.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:[0,1,5,100].map(t=>e.jsxs("button",{onClick:()=>{},style:{padding:"0.25rem 0.5rem",border:"1px solid var(--border-color)",borderRadius:"0.25rem",background:"var(--bg-color)",color:"var(--text-color)",cursor:"default",fontSize:"0.8rem"},children:["qty=",t,": ",g(t)]},t))})]})]})}function j(){const[o,l]=s.useState({id:1,title:"Wireless Headphones",price:79.99,category:"electronics",inStock:!0}),[r,c]=s.useState(0),n=r>0?{...o,price:+(o.price*(1-r/100)).toFixed(2),onSale:!0}:o;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[e.jsxs("div",{style:{padding:"0.875rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--text-muted)",fontWeight:600},children:"product (original object — never mutated)"}),e.jsx("pre",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-color)"},children:JSON.stringify(o,null,2)})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[e.jsxs("label",{style:{fontSize:"0.875rem"},children:["Apply discount: ",r,"%"]}),e.jsx("input",{type:"range",min:"0",max:"50",value:r,onChange:a=>c(+a.target.value),style:{flex:1}})]}),e.jsxs("div",{style:{padding:"0.875rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:`1px solid ${r>0?"var(--success)":"var(--border-color)"}`},children:[e.jsxs("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--success)",fontWeight:600},children:["{","...product, price: ",n.price,r>0?", onSale: true":"","}"]}),e.jsx("pre",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-color)"},children:JSON.stringify(n,null,2)})]}),e.jsxs("p",{style:{margin:0,fontSize:"0.8rem",color:"var(--text-muted)"},children:["The original product is ",e.jsx("strong",{children:"unchanged"})," — the spread operator created a new object."]})]})}function C(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 0 — JavaScript Foundations"}),e.jsx("h1",{children:"Variables, Functions & Objects"}),e.jsx("p",{className:"lesson-subtitle",children:"The core JavaScript building blocks you'll use in every line of React code."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📦 Variables — Storing Data"}),e.jsxs("p",{children:["Variables hold values. In modern JavaScript you'll use ",e.jsx("code",{children:"let"})," and ",e.jsx("code",{children:"const"}),"."]}),e.jsx(i,{language:"js",children:`// const — for values that won't be reassigned (use this by default)
const productName = 'Wireless Headphones';
const price = 79.99;
const isAvailable = true;

// let — for values that WILL change
let cartCount = 0;
cartCount = cartCount + 1;  // ✅ OK — let can change

// const productName = 'Monitor';  // ❌ ERROR — const can't be reassigned

// Data types
const name = 'Alex';          // string
const age = 25;               // number
const isLoggedIn = false;     // boolean
const selectedProduct = null; // null (intentionally empty)
let userAddress;              // undefined (declared but not assigned yet)`}),e.jsx(p,{title:"let vs const vs var",children:e.jsx(y,{})}),e.jsxs(u,{type:"tip",children:[e.jsx("strong",{children:"Rule:"})," Always start with ",e.jsx("code",{children:"const"}),". Switch to ",e.jsx("code",{children:"let"})," only if you need to reassign it. Never use ",e.jsx("code",{children:"var"})," in modern code."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📝 Template Literals — String Formatting"}),e.jsx("p",{children:"Template literals (backticks) let you embed variables directly in strings. You'll use this constantly."}),e.jsx(i,{language:"js",children:`const product = 'Headphones';
const price = 79.99;
const qty = 2;

// ❌ Old way — clunky
const msg1 = 'You added ' + qty + ' ' + product + ' for $' + (qty * price);

// ✅ Template literal — clean and readable
const msg2 = \`You added \${qty} \${product} for $\${(qty * price).toFixed(2)}\`;

console.log(msg2);
// "You added 2 Headphones for $159.98"

// Multi-line strings
const html = \`
  <div class="product">
    <h3>\${product}</h3>
    <p>$\${price}</p>
  </div>
\`;`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚙️ Functions — Reusable Logic"}),e.jsx("p",{children:"Functions let you group code and reuse it. React components are just functions that return JSX."}),e.jsx(i,{language:"js",children:`// Function Declaration — hoisted (can be called before definition)
function greet(name) {
  return 'Hello, ' + name + '!';
}

// Arrow Function — shorter, modern syntax (used in React)
const greet = (name) => {
  return 'Hello, ' + name + '!';
};

// Arrow shorthand — when the body is a single return expression
const greet = (name) => 'Hello, ' + name + '!';

// ── Multiple parameters ──
const discountedPrice = (price, discountPercent) => {
  const saving = price * (discountPercent / 100);
  return price - saving;
};

console.log(discountedPrice(100, 20));  // 80

// ── Default parameters ──
const formatPrice = (price, currency = 'USD') => \`\${price} \${currency}\`;

console.log(formatPrice(79.99));        // "79.99 USD"
console.log(formatPrice(79.99, 'EUR')); // "79.99 EUR"

// ── Function that returns an object ──
const createProduct = (title, price) => ({
  id: Math.random(),
  title,       // shorthand for title: title
  price,
  createdAt: new Date(),
});`}),e.jsx(p,{title:"Live Function Examples",children:e.jsx(b,{})}),e.jsxs(u,{type:"info",children:[e.jsx("strong",{children:"Why does React use arrow functions everywhere?"})," Arrow functions have a cleaner syntax and fix certain ",e.jsx("code",{children:"this"})," binding issues from older JavaScript. In React, you'll write almost every function as an arrow function."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🗂️ Objects — Grouping Related Data"}),e.jsx("p",{children:"An object groups related data into one value. Every product, user, and cart item in ShopHub is an object."}),e.jsx(i,{language:"js",children:`// Creating an object
const product = {
  id: 1,
  title: 'Wireless Headphones',
  price: 79.99,
  category: 'electronics',
  inStock: true,
  specs: { weight: '250g', battery: '30h' },  // nested object
};

// ── Reading properties ──
console.log(product.title);          // "Wireless Headphones"
console.log(product.specs.battery);  // "30h"
console.log(product['price']);       // 79.99 (bracket notation)

// ── Destructuring — extract properties into variables ──
const { title, price, category } = product;
console.log(title);    // "Wireless Headphones"
console.log(price);    // 79.99

// With rename:
const { title: productTitle, price: productPrice } = product;

// With defaults:
const { rating = 0, title: name } = product;
console.log(rating);  // 0 (default because product.rating is undefined)

// ── Spread operator — create a modified copy ──
// NEVER mutate objects directly in React!
// product.price = 50;  // ❌ BAD — mutates the original

const cheaperProduct = { ...product, price: 50 };   // ✅ Creates new object
const withRating = { ...product, rating: 4.5 };     // ✅ Adds a new field

// ── Object methods ──
const cart = {
  items: [],
  total: 0,
  addItem(product) {
    this.items.push(product);
    this.total += product.price;
  },
};`}),e.jsx(p,{title:"Spread Operator — Immutable Updates",children:e.jsx(j,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 Arrays — Lists of Data"}),e.jsx("p",{children:"Arrays hold ordered lists. Your product catalog, cart items, and search results are all arrays."}),e.jsx(i,{language:"js",children:`// Creating arrays
const prices = [79.99, 199.99, 49.99];
const categories = ['electronics', 'clothing', 'home'];
const products = [
  { id: 1, title: 'Headphones', price: 79.99 },
  { id: 2, title: 'Watch', price: 199.99 },
];

// ── Reading items ──
console.log(prices[0]);      // 79.99  (first item, index 0)
console.log(prices[2]);      // 49.99  (third item, index 2)
console.log(prices.length);  // 3

// ── Destructuring arrays ──
const [first, second, ...rest] = prices;
console.log(first);   // 79.99
console.log(second);  // 199.99
console.log(rest);    // [49.99]

// ── Spreading arrays (immutable updates — critical for React) ──
const cart = [{ id: 1, title: 'Headphones' }];

// Add item — DON'T use push() in React!
// cart.push(newItem);  // ❌ Mutates the original

const newCart = [...cart, { id: 2, title: 'Watch' }];  // ✅
console.log(cart.length);    // 1 — original unchanged
console.log(newCart.length); // 2

// Remove item — DON'T use splice() in React!
const withoutFirst = cart.filter(item => item.id !== 1);  // ✅`}),e.jsxs(u,{type:"warning",children:[e.jsx("strong",{children:"React golden rule:"})," Never mutate (directly change) arrays or objects in state. Instead, always create new ones using spread syntax or array methods. React needs to detect changes to re-render — and it can't detect mutations."]})]}),e.jsx("section",{className:"lesson-section",children:e.jsx("h2",{children:"🎯 Practice Challenges"})}),e.jsx(h,{id:"0-2-a-variables",title:"Product Discount",description:"Write a function called applyDiscount(product, percent) that takes a product object and a discount percent, and returns a NEW object with the discounted price (original stays unchanged).",hint:"Use the spread operator: { ...product, price: newPrice }. Calculate newPrice = product.price * (1 - percent/100).",difficulty:"easy",answer:`function applyDiscount(product, percent) {
  const discountedPrice = product.price * (1 - percent / 100);
  return { ...product, price: +discountedPrice.toFixed(2) };
}

// Test it:
const headphones = { id: 1, title: 'Headphones', price: 79.99 };
const onSale = applyDiscount(headphones, 20);

console.log(headphones.price);  // 79.99 — UNCHANGED
console.log(onSale.price);      // 63.99 — new object`,explanation:"The spread operator creates a copy of the product object. We then override the price property with the discounted value. The original product remains untouched."}),e.jsx(h,{id:"0-2-b-destructure",title:"Destructure a Cart Item",description:"You have a cart item: { id: 3, title: 'Smart Watch', price: 199.99, qty: 2 }. Destructure it to get title, price, and qty. Then log: 'Smart Watch × 2 = $399.98'",hint:"Use const { title, price, qty } = cartItem; Then use a template literal.",difficulty:"easy",answer:`const cartItem = { id: 3, title: 'Smart Watch', price: 199.99, qty: 2 };

const { title, price, qty } = cartItem;

const total = (price * qty).toFixed(2);
console.log(\`\${title} × \${qty} = $\${total}\`);
// "Smart Watch × 2 = $399.98"`,explanation:"We destructure three properties at once from the object. Then we use a template literal to build the formatted string."}),e.jsx(h,{id:"0-2-c-immutable",title:"Add Item to Cart (Immutably)",description:"You have: const cart = [{ id: 1, title: 'Headphones', price: 79.99 }]. Write code to add { id: 2, title: 'Watch', price: 199.99 } to the cart WITHOUT mutating the original array. Log both arrays to prove the original is unchanged.",hint:"Use the spread operator: const newCart = [...cart, newItem];",difficulty:"easy",answer:`const cart = [{ id: 1, title: 'Headphones', price: 79.99 }];

const newItem = { id: 2, title: 'Watch', price: 199.99 };

// Create a new array instead of mutating
const newCart = [...cart, newItem];

console.log(cart.length);    // 1 — original unchanged
console.log(newCart.length); // 2 — new array with item added
console.log(newCart);`,explanation:"The spread operator [...cart, newItem] creates a brand new array. The original cart array stays at length 1. This is exactly the pattern used in React's setState."})]})}export{C as default};
