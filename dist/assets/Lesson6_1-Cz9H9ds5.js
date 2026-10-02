import{r as s,j as e}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as d}from"./CodeComparison-B_ysuKRn.js";import{C as h}from"./Challenge-B2Dev4fs.js";import{C as c}from"./Callout-B_CeIBza.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";function f(){const[l,o]=s.useState(0),[t,a]=s.useState(null),r=[{id:1,title:"Wireless Headphones",price:79.99},{id:2,title:"Smart Watch",price:199.99},{id:3,title:"Bluetooth Speaker",price:49.99}];return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 6 — Events"}),e.jsx("h1",{children:"Click Events"}),e.jsx("p",{className:"lesson-subtitle",children:"Handle button clicks in React — and understand the #1 beginner mistake."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["How to handle click events in React with ",e.jsx("code",{children:"onClick"})]}),e.jsxs("li",{children:["The critical difference between ",e.jsxs("code",{children:["onClick=","{fn}"]})," and ",e.jsxs("code",{children:["onClick=","{fn()}"]})]}),e.jsx("li",{children:"How to use the event object"}),e.jsx("li",{children:"How React events compare to plain JavaScript events"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx("p",{children:"You already know how to listen for clicks in JavaScript. React's approach is similar but simpler:"}),e.jsx(d,{leftLabel:"Plain JavaScript",rightLabel:"React",leftCode:`// Select the element first
const button = document.querySelector('#addBtn');

// Then attach the listener
button.addEventListener('click', handleClick);

// The handler function
function handleClick() {
  console.log('Button clicked!');
}`,rightCode:`// Everything together in JSX
function AddToCartButton() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  );
}`}),e.jsx(c,{type:"tip",children:"In React, you write the event handler directly on the JSX element as a prop. No need to query the DOM first!"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🚨 The #1 Beginner Mistake"}),e.jsx("p",{children:"This is the most common mistake beginners make with React events:"}),e.jsx(i,{language:"jsx",children:`// ❌ WRONG — Calls handleClick() immediately when rendering!
<button onClick={handleClick()}>Add to Cart</button>
//                          ^^
// The () means "call this function NOW"
// The button hasn't been clicked — React is just rendering!

// ✅ CORRECT — Passes the function reference, called on click
<button onClick={handleClick}>Add to Cart</button>
//                  ^
// No () — we're giving React the function to call LATER`}),e.jsxs(c,{type:"warning",children:[e.jsx("strong",{children:"Think of it like giving someone a phone number vs calling them immediately."}),e.jsx("br",{}),e.jsxs("code",{children:["onClick=","{handleClick}"]}),` = "Here's the number, call when clicked" ✅`,e.jsx("br",{}),e.jsxs("code",{children:["onClick=","{handleClick()}"]}),' = "Calling right now!" ❌']})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo"}),e.jsxs(u,{title:"Click Events in Action",children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center",flexWrap:"wrap",marginBottom:"1rem"},children:[e.jsxs("button",{className:"btn",onClick:()=>o(n=>n+1),children:["🛒 Add to Cart (",l," clicks)"]}),e.jsx("button",{className:"btn-secondary",onClick:()=>o(0),children:"Reset"})]}),e.jsxs("div",{style:{marginBottom:"1rem"},children:[e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem",marginBottom:"0.5rem"},children:'Click a product to "select" it:'}),e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:r.map(n=>e.jsx("button",{className:(t==null?void 0:t.id)===n.id?"btn":"btn-secondary",style:{fontSize:"0.85rem"},onClick:()=>a(n),children:n.title},n.id))})]}),t&&e.jsxs("div",{style:{padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",fontSize:"0.875rem"},children:["Selected: ",e.jsx("strong",{children:t.title})," — $",t.price]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 The Event Object"}),e.jsx("p",{children:"React passes an event object to your handler, just like plain JavaScript:"}),e.jsx(i,{language:"jsx",children:`function SearchBar() {
  function handleKeyDown(event) {
    // The event object works just like in vanilla JS
    console.log(event.key);        // 'Enter', 'a', etc.
    console.log(event.target);     // The DOM element
    event.preventDefault();        // Prevent default behavior
  }

  return <input onKeyDown={handleKeyDown} />;
}

// You can also use arrow functions inline:
<button onClick={(event) => {
  event.stopPropagation(); // Stop event bubbling
  handleAddToCart();
}}>
  Add to Cart
</button>`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx(i,{language:"jsx",filename:"ProductCard.jsx",children:`function ProductCard({ product }) {
  function handleAddToCart() {
    alert(\`Added \${product.title} to cart!\`);
    // In later chapters: addToCart(product)
  }

  function handleFavorite() {
    alert(\`\${product.title} added to favorites!\`);
  }

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <button onClick={handleFavorite}>♡</button>
      </div>
    </div>
  );
}`})]}),e.jsx(h,{id:"6-1-cart-button",title:"Add to Cart Button",description:"Create a ProductCard component with an 'Add to Cart' button. When clicked, it should alert: 'Product name added to cart!'. Use the product's title in the message.",hint:"Define a handleAddToCart function inside the component. Pass it (without parentheses!) to onClick.",difficulty:"easy",answer:`function ProductCard({ product }) {
  function handleAddToCart() {
    alert(\`\${product.title} added to cart!\`);
  }

  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}`,explanation:"handleAddToCart is defined as a function inside the component. We pass it to onClick without (), so React calls it when the button is clicked — not immediately during render. The function can access product.title through the closure."})]})}export{f as default};
