import{j as t,r as o}from"./index-fCZyuqB2.js";import{C as d}from"./CodeBlock-y81Z23mq.js";import{C as c}from"./CodeComparison-B_ysuKRn.js";import{C as l}from"./Challenge-B2Dev4fs.js";import{C as h}from"./Callout-B_CeIBza.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";function T(){return t.jsxs("div",{className:"lesson",children:[t.jsxs("div",{className:"lesson-header",children:[t.jsx("span",{className:"lesson-tag",children:"Chapter 14 — Context API"}),t.jsx("h1",{children:"Using the Context Hook"}),t.jsx("p",{className:"lesson-subtitle",children:"Tuning into the broadcast to consume data"})]}),t.jsx("p",{children:"We've created our Context, Provider, and custom hook. We've wrapped our App in the Provider. Now comes the fun part: deleting props and using the hook!"}),t.jsx("h2",{children:"Consuming Context"}),t.jsxs("p",{children:["Inside any component that is a child of the Provider, you simply call your custom hook (like ",t.jsx("code",{children:"useCart()"}),") and destructure the values you need."]}),t.jsx(c,{leftLabel:"Before (Prop Drilling)",rightLabel:"After (Context API)",leftCode:`// ProductCard.jsx
export default function ProductCard({ 
  product, 
  addToCart // Had to be passed down!
}) {
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}`,rightCode:`// ProductCard.jsx
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  // Pull exactly what we need from context!
  const { addToCart } = useCart();
  
  return (
    <div className="card">
      <h3>{product.title}</h3>
      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}`}),t.jsxs("p",{children:["Notice how clean the right side is! The ",t.jsx("code",{children:"ProductCard"})," no longer requires the parent to know about ",t.jsx("code",{children:"addToCart"}),". The parent (",t.jsx("code",{children:"ProductList"}),") just passes the ",t.jsx("code",{children:"product"})," data, and the Card handles its own cart logic by pulling it from Context."]}),t.jsx("h2",{children:"Using Multiple Contexts"}),t.jsx("p",{children:"A component can consume as many contexts as it needs. For example, the Navbar might need to know the cart count AND whether a user is logged in."}),t.jsx(d,{language:"jsx",filename:"Navbar.jsx",children:`import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={\`navbar \${theme}\`}>
      <h2>ShopHub</h2>
      
      <button onClick={toggleTheme}>Toggle Theme</button>
      
      <div className="cart-icon">
        🛒 {cart.length} items
      </div>

      {user ? (
        <span>Hi {user.name}! <button onClick={logout}>Exit</button></span>
      ) : (
        <a href="/login">Log In</a>
      )}
    </nav>
  );
}`}),t.jsxs(h,{type:"warning",children:[t.jsx("strong",{children:"Performance Consideration:"})," When a Context value changes, EVERY component that calls that hook will re-render. If you have a massive app with hundreds of components listening to a single context that changes constantly, it can cause performance issues. (For ShopHub, it's perfectly fine!)"]}),t.jsx("h2",{children:"Interactive Demo: Context in Action"}),t.jsx("p",{children:"Below is a simulated multi-level app using Context. The deeply nested buttons can change the global theme, affecting components all the way at the top!"}),t.jsx(u,{title:"Theme Context Simulator",children:t.jsx(x,{})}),t.jsx(l,{id:"ch14_3_cart_total",title:"Cart Total Component",description:"Assume there is a `useCart()` hook that returns `{ cartTotal: number }`. Write a `CheckoutButton` component that consumes this context and renders a button saying 'Pay $[total]'. If the total is 0, the button should be disabled.",hint:"Import the hook (faked for this challenge), call it, extract cartTotal, and use standard JSX conditional logic for the disabled prop.",answer:`import React from 'react';
// import { useCart } from '../context/CartContext';

export default function CheckoutButton() {
  // Call the hook to get data without props!
  const { cartTotal } = useCart();

  return (
    <button disabled={cartTotal === 0}>
      {cartTotal === 0 ? 'Cart is Empty' : \`Pay $\${cartTotal}\`}
    </button>
  );
}`,explanation:"By using Context, the CheckoutButton can be placed ANYWHERE in the app—in a sidebar, in a modal, or in the navbar—and it will always have access to the exact cart total without anyone needing to pass props to it.",difficulty:"easy"})]})}const r=o.createContext(null);function p({children:e}){const[n,a]=o.useState(!1),s=()=>a(i=>!i);return t.jsx(r.Provider,{value:{isDark:n,toggle:s},children:e})}function x(){return t.jsx(p,{children:t.jsx(m,{})})}function m(){const{isDark:e}=o.useContext(r);return t.jsxs("div",{style:{padding:"20px",background:e?"#222":"#fff",color:e?"#fff":"#000",border:"2px solid #888",borderRadius:"8px",transition:"all 0.3s"},children:[t.jsx("h3",{style:{marginTop:0},children:"Layout (Level 1)"}),t.jsxs("p",{children:["Current Theme: ",e?"Dark Mode":"Light Mode"]}),t.jsxs("div",{style:{padding:"20px",border:"1px dashed #888",marginTop:"20px"},children:[t.jsx("h4",{children:"Sidebar (Level 2)"}),t.jsx(C,{})]})]})}function C(){const{isDark:e,toggle:n}=o.useContext(r);return t.jsxs("div",{style:{padding:"20px",background:e?"#444":"#eee",borderRadius:"4px"},children:[t.jsx("h5",{children:"Deep Settings Panel (Level 3)"}),t.jsx("button",{onClick:n,style:{padding:"10px",background:e?"#fff":"#000",color:e?"#000":"#fff",border:"none",cursor:"pointer",borderRadius:"4px"},children:"Toggle Global Theme from Level 3!"})]})}export{T as default};
