import{r as c,j as t}from"./index-fCZyuqB2.js";import{C as r}from"./CodeBlock-y81Z23mq.js";import{C as l}from"./Challenge-B2Dev4fs.js";import{C as u}from"./Callout-B_CeIBza.js";import{S as p}from"./StepByStep-Be1tR1cd.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";function b(){const[d,a]=c.useState([]),s=[{id:1,title:"Headphones",price:79.99},{id:2,title:"Smart Watch",price:199.99},{id:3,title:"Speaker",price:49.99}],i=e=>{a(o=>o.find(n=>n.id===e.id)?o.map(n=>n.id===e.id?{...n,qty:n.qty+1}:n):[...o,{...e,qty:1}])};return t.jsxs("div",{className:"lesson",children:[t.jsxs("div",{className:"lesson-header",children:[t.jsx("span",{className:"lesson-tag",children:"Chapter 6 — Events"}),t.jsx("h1",{children:"Event Handlers & Arguments"}),t.jsx("p",{className:"lesson-subtitle",children:"Pass data to your event handlers — the right way."})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"🎯 What You'll Learn"}),t.jsxs("ul",{children:[t.jsx("li",{children:"How to pass arguments (like a product) to event handlers"}),t.jsx("li",{children:"When to use arrow function wrappers vs direct references"}),t.jsx("li",{children:"How to call multiple functions from one event handler"})]})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"📖 The Problem: Passing Arguments"}),t.jsxs("p",{children:["You have an ",t.jsx("code",{children:"Add to Cart"})," button inside ",t.jsx("code",{children:"ProductCard"}),". When clicked, you need to call ",t.jsx("code",{children:"addToCart"})," with the specific product. But ",t.jsx("code",{children:"onClick"})," only passes the event object — how do you also pass the product?"]}),t.jsx(r,{language:"jsx",children:`// ❌ This only gives you the event object:
<button onClick={handleAddToCart}>Add to Cart</button>
//              ^-- No product here!

// ✅ Arrow function wrapper passes the product:
<button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//               ^--- Creates a new function that calls handleAddToCart(product)`}),t.jsxs(u,{type:"tip",children:["The arrow function ",t.jsx("code",{children:"() => handleAddToCart(product)"})," creates a new function that React stores and calls when clicked. When called, it runs ",t.jsx("code",{children:"handleAddToCart(product)"})," — passing the product as an argument."]})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"💻 Step by Step"}),t.jsx(p,{steps:[{title:"Step 1: Handler with no arguments",language:"jsx",code:`function handleAddToCart() {
  console.log('Added something to cart');
}

<button onClick={handleAddToCart}>Add to Cart</button>
// Only tells us something was clicked, not WHAT`,explanation:"Basic click handler — no data passed. Works for simple actions."},{title:"Step 2: Pass product with arrow wrapper",language:"jsx",code:`function handleAddToCart(product) {
  console.log('Added:', product.title, 'Price:', product.price);
}

// Arrow function creates a wrapper that calls with product
<button onClick={() => handleAddToCart(product)}>
  Add to Cart
</button>`,explanation:"The arrow function () => ... is called by React on click. It then calls handleAddToCart(product) with the specific product."},{title:"Step 3: Full ProductCard with multiple handlers",language:"jsx",code:`function ProductCard({ product, onAddToCart, onFavorite }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={() => onAddToCart(product)}>
          Add to Cart
        </button>
        <button onClick={() => onFavorite(product.id)}>
          ♡
        </button>
      </div>
    </div>
  );
}

// In App:
<ProductCard
  product={product}
  onAddToCart={handleAddToCart}
  onFavorite={handleFavorite}
/>`,explanation:"Each button passes different data. onAddToCart receives the full product object. onFavorite only needs the ID."}]})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"⚡ Live Demo — Add to Cart"}),t.jsxs(h,{title:"Products with Add to Cart",children:[t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.75rem",marginBottom:"1rem"},children:s.map(e=>t.jsxs("div",{style:{background:"var(--bg-color)",border:"1px solid var(--border-color)",borderRadius:"0.5rem",padding:"0.75rem"},children:[t.jsx("div",{style:{fontWeight:600,fontSize:"0.9rem",marginBottom:"0.25rem"},children:e.title}),t.jsxs("div",{style:{color:"var(--primary)",marginBottom:"0.5rem"},children:["$",e.price]}),t.jsx("button",{className:"btn",style:{fontSize:"0.8rem",padding:"0.35rem 0.6rem",width:"100%"},onClick:()=>i(e),children:"+ Add to Cart"})]},e.id))}),t.jsxs("div",{style:{background:"var(--bg-color)",borderRadius:"0.5rem",padding:"1rem",fontSize:"0.875rem"},children:[t.jsxs("strong",{children:["Cart (",d.reduce((e,o)=>e+o.qty,0)," items):"]}),d.length===0?t.jsx("p",{style:{color:"var(--text-muted)",marginTop:"0.5rem"},children:"Empty — click Add to Cart above"}):t.jsx("ul",{style:{marginTop:"0.5rem",paddingLeft:"1rem"},children:d.map(e=>t.jsxs("li",{children:[e.title," × ",e.qty]},e.id))})]})]})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"📋 Calling Multiple Functions"}),t.jsx(r,{language:"jsx",children:`// Call multiple actions from one click:
function handleAddToCart(product) {
  addToCart(product);          // 1. Add to cart state
  showNotification('Added!');  // 2. Show toast
  trackAnalytics('add_to_cart', product.id); // 3. Analytics
}

<button onClick={() => handleAddToCart(product)}>
  Add to Cart
</button>

// Or inline (for simple cases):
<button onClick={() => {
  addToCart(product);
  closeModal();
}}>
  Confirm
</button>`})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"⚠️ Common Mistake: Calling with () vs Without"}),t.jsx(r,{language:"jsx",children:`// ❌ WRONG: Calls handleAddToCart() immediately, doesn't pass product
<button onClick={handleAddToCart(product)}>

// ✅ CORRECT: Arrow wrapper, product passed when clicked
<button onClick={() => handleAddToCart(product)}>

// ✅ ALSO CORRECT: Reference only (when you don't need to pass args)
<button onClick={handleAddToCart}>`})]}),t.jsx(l,{id:"6-3-quantity",title:"Quantity Selector",description:"Create a QuantitySelector component with + and - buttons and a quantity display. Clicking + should call an onIncrease(productId) prop, clicking - should call onDecrease(productId). Pass the product id to both.",hint:"Use arrow functions: onClick={() => onIncrease(productId)} and onClick={() => onDecrease(productId)}",difficulty:"medium",answer:`function QuantitySelector({ productId, quantity, onIncrease, onDecrease }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <button
        onClick={() => onDecrease(productId)}
        disabled={quantity <= 1}
      >
        −
      </button>
      <span>{quantity}</span>
      <button
        onClick={() => onIncrease(productId)}
        disabled={quantity >= 10}
      >
        +
      </button>
    </div>
  );
}

// Usage in parent:
function App() {
  const [quantities, setQuantities] = useState({ 1: 1, 2: 1 });

  const handleIncrease = (id) =>
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));

  const handleDecrease = (id) =>
    setQuantities(prev => ({ ...prev, [id]: Math.max(1, prev[id] - 1) }));

  return (
    <QuantitySelector
      productId={1}
      quantity={quantities[1]}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
}`,explanation:"Arrow functions () => onIncrease(productId) wrap the calls so the productId is passed when clicked. disabled={quantity <= 1} prevents going below 1. The parent owns the quantities state and passes handlers down."})]})}export{b as default};
