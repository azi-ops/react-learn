import{j as e,r}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as c}from"./CodeComparison-B_ysuKRn.js";import{C as l}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{S as u}from"./StepByStep-Be1tR1cd.js";import{I as o}from"./InteractiveDemo-BnwT7BFH.js";function d(){const[t,n]=r.useState(0);return e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem",padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",justifyContent:"center"},children:[e.jsx("button",{className:"btn-secondary",style:{width:"40px",height:"40px",fontSize:"1.25rem"},onClick:()=>n(s=>Math.max(0,s-1)),children:"−"}),e.jsx("span",{style:{fontSize:"2rem",fontWeight:700,minWidth:"60px",textAlign:"center"},children:t}),e.jsx("button",{className:"btn",style:{width:"40px",height:"40px",fontSize:"1.25rem"},onClick:()=>n(s=>s+1),children:"+"})]})}function h(){const[t,n]=r.useState(!1);return e.jsxs("button",{onClick:()=>n(!t),style:{fontSize:"1.5rem",background:"none",border:"none",cursor:"pointer"},children:[t?"❤️":"🤍"," ",t?"In Favorites":"Add to Favorites"]})}function y(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 7 — useState"}),e.jsx("h1",{children:"The useState Hook"}),e.jsx("p",{className:"lesson-subtitle",children:"React's most important hook — make your UI respond to data changes."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["How to declare state with ",e.jsx("code",{children:"useState"})]}),e.jsx("li",{children:"How to read and update state values"}),e.jsx("li",{children:"How state triggers re-renders"}),e.jsx("li",{children:"Build real ShopHub features: cart, favorites, mobile menu"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 Introducing useState"}),e.jsx(i,{language:"jsx",children:`import { useState } from 'react';

function Counter() {
  // Declare state: [currentValue, setterFunction] = useState(initialValue)
  const [count, setCount] = useState(0);
  //     ^^^^^   ^^^^^^^^^             ^
  //     |       |                     |
  //     |       |                     Starting value: 0
  //     |       Function to update count (triggers re-render)
  //     The current count value

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}`}),e.jsxs("p",{style:{marginTop:"1rem"},children:["Let's break down ",e.jsx("code",{children:"const [count, setCount] = useState(0)"}),":"]}),e.jsxs("ul",{style:{marginTop:"0.5rem",lineHeight:2},children:[e.jsxs("li",{children:[e.jsx("code",{children:"useState(0)"})," — creates a state variable, starting at ",e.jsx("strong",{children:"0"})]}),e.jsxs("li",{children:["It returns an array of two things: ",e.jsx("code",{children:"[currentValue, setter]"})]}),e.jsxs("li",{children:["We ",e.jsx("strong",{children:"destructure"})," that array: ",e.jsx("code",{children:"count"})," = value, ",e.jsx("code",{children:"setCount"})," = setter"]}),e.jsxs("li",{children:["Calling ",e.jsx("code",{children:"setCount(newValue)"})," updates the value ",e.jsx("strong",{children:"and triggers a re-render"})]})]}),e.jsxs(a,{type:"tip",children:["The naming convention is always: ",e.jsx("code",{children:"[thing, setThing]"}),". For example: ",e.jsx("code",{children:"[cart, setCart]"}),", ",e.jsx("code",{children:"[isOpen, setIsOpen]"}),", ",e.jsx("code",{children:"[searchTerm, setSearchTerm]"}),"."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Working Counter"}),e.jsxs(o,{title:"useState Counter (this one works!)",children:[e.jsx(d,{}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"var(--text-muted)"},children:["Every click calls ",e.jsx("code",{children:"setCount()"})," → React re-renders → UI shows new value ✅"]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(c,{leftLabel:"Vanilla JS — manual updates",rightLabel:"React — useState",leftCode:`let count = 0;
const display = document.getElementById('count');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  count++;
  // Manually update the DOM every time:
  display.textContent = count;
});`,rightCode:`function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
}
// React handles the DOM update automatically!`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Building ShopHub Features with State"}),e.jsx(u,{steps:[{title:"1. Cart Item Count (number state)",language:"jsx",code:`function Navbar() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <nav>
      <span>ShopHub</span>
      <button onClick={() => setCartCount(cartCount + 1)}>
        🛒 Cart ({cartCount})
      </button>
    </nav>
  );
}`,explanation:"cartCount starts at 0. Each click increments it. React re-renders the count display automatically."},{title:"2. Favorite Toggle (boolean state)",language:"jsx",code:`function FavoriteButton({ productId }) {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <button
      onClick={() => setIsFavorited(!isFavorited)}
      className={isFavorited ? 'btn-active' : 'btn-secondary'}
    >
      {isFavorited ? '❤️ Favorited' : '🤍 Favorite'}
    </button>
  );
}`,explanation:"!isFavorited flips the boolean. Each click toggles between true and false."},{title:"3. Mobile Menu (boolean state)",language:"jsx",code:`function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰ Menu
      </button>
      {isMenuOpen && (
        <div className="mobile-menu">
          <a href="/products">Products</a>
          <a href="/cart">Cart</a>
          <a href="/login">Login</a>
        </div>
      )}
    </nav>
  );
}`,explanation:"isMenuOpen controls visibility. Clicking toggles between open and closed."},{title:"4. Search Term (string state)",language:"jsx",code:`function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search products..."
      />
      <p>{filtered.length} results</p>
    </div>
  );
}`,explanation:"Every keystroke updates searchTerm state. React re-renders, filter runs again, result count updates."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Favorite Button Demo"}),e.jsxs(o,{title:"useState Toggle — Favorite Button",children:[e.jsx(h,{}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"var(--text-muted)"},children:[e.jsx("code",{children:"const [isFavorited, setIsFavorited] = useState(false)"}),e.jsx("br",{}),"Click toggles between ",e.jsx("code",{children:"true"})," and ",e.jsx("code",{children:"false"})]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Rules of Hooks"}),e.jsxs(a,{type:"warning",children:[e.jsx("strong",{children:"Only call hooks at the top level"})," — never inside if statements, loops, or nested functions.",e.jsx("br",{}),e.jsx("br",{}),e.jsx("code",{children:"// ❌ WRONG:"}),e.jsx("br",{}),e.jsxs("code",{children:["if (isLoggedIn) ","{ const [x, setX] = useState(0); }"]}),e.jsx("br",{}),e.jsx("br",{}),e.jsx("code",{children:"// ✅ CORRECT — always at the top:"}),e.jsx("br",{}),e.jsx("code",{children:"const [x, setX] = useState(0);"}),e.jsx("br",{}),e.jsxs("code",{children:["if (isLoggedIn) ","{ ... }"]})]}),e.jsxs(a,{type:"warning",children:[e.jsx("strong",{children:"Only call hooks inside React function components"})," (or custom hooks). Never in regular JS functions."]})]}),e.jsx(l,{id:"7-2-quantity",title:"Product Quantity Selector",description:"Build a QuantitySelector component using useState. It should show: a minus button, the current quantity (starts at 1), and a plus button. The quantity cannot go below 1 or above 10. Display 'Max quantity reached' when at 10.",hint:"Use useState(1). For minus: setQuantity(Math.max(1, quantity - 1)). For plus: setQuantity(Math.min(10, quantity + 1)).",difficulty:"medium",answer:`function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          disabled={quantity <= 1}
        >
          −
        </button>

        <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
          {quantity}
        </span>

        <button
          onClick={() => setQuantity(Math.min(10, quantity + 1))}
          disabled={quantity >= 10}
        >
          +
        </button>
      </div>

      {quantity === 10 && (
        <p style={{ color: 'orange' }}>Max quantity reached!</p>
      )}
    </div>
  );
}`,explanation:"useState(1) starts at 1. Math.max(1, quantity-1) prevents going below 1. Math.min(10, quantity+1) prevents exceeding 10. The disabled prop on buttons provides visual feedback. The warning message uses conditional rendering with &&."})]})}export{y as default};
