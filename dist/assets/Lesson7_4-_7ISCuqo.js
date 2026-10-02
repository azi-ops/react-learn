import{j as t,r as u}from"./index-fCZyuqB2.js";import{C as m}from"./Callout-B_CeIBza.js";import{P as p}from"./PracticeProject-aOb4DaIe.js";function h(){return t.jsx("div",{style:{fontFamily:"sans-serif",maxWidth:300},children:t.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"1rem"},children:[t.jsx("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.75rem"},children:t.jsx("span",{style:{fontWeight:700,color:"#0f172a"},children:"🛒 Cart (0)"})}),t.jsx("div",{style:{height:80,background:"#f1f5f9",borderRadius:"0.25rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",fontSize:"0.8rem"},children:"cart is empty"}),t.jsx("div",{style:{borderTop:"1px solid #e2e8f0",marginTop:"0.75rem",paddingTop:"0.75rem"},children:t.jsx("button",{style:{width:"100%",background:"#e2e8f0",color:"#94a3b8",border:"none",padding:"0.5rem",borderRadius:"0.375rem",cursor:"not-allowed",fontSize:"0.875rem"},children:"Checkout (not functional)"})})]})})}const y=[{id:1,title:"Wireless Headphones",price:79.99,emoji:"🎧"},{id:2,title:"Smart Watch",price:199.99,emoji:"⌚"},{id:3,title:"Bluetooth Speaker",price:49.99,emoji:"🔊"}];function f(){const[a,o]=u.useState([]),d=e=>{o(i=>i.find(r=>r.id===e.id)?i.map(r=>r.id===e.id?{...r,qty:r.qty+1}:r):[...i,{...e,qty:1}])},n=e=>o(i=>i.filter(s=>s.id!==e)),c=a.reduce((e,i)=>e+i.price*i.qty,0),l=a.reduce((e,i)=>e+i.qty,0);return t.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:320},children:[t.jsx("div",{style:{marginBottom:"0.75rem"},children:y.map(e=>t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.5rem",background:"#f8fafc",borderRadius:"0.375rem",marginBottom:"0.35rem"},children:[t.jsxs("span",{style:{fontSize:"0.85rem"},children:[e.emoji," ",e.title.slice(0,20)]}),t.jsx("button",{onClick:()=>d(e),style:{background:"#3b82f6",color:"#fff",border:"none",padding:"0.2rem 0.5rem",borderRadius:"0.25rem",fontSize:"0.75rem",cursor:"pointer"},children:"Add"})]},e.id))}),t.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"0.75rem"},children:[t.jsxs("div",{style:{fontWeight:700,marginBottom:"0.5rem",color:"#0f172a",fontSize:"0.9rem"},children:["🛒 Cart (",l,")"]}),a.length===0?t.jsx("p",{style:{color:"#94a3b8",fontSize:"0.8rem",textAlign:"center",margin:"0.5rem 0"},children:"Your cart is empty"}):a.map(e=>t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem",fontSize:"0.8rem"},children:[t.jsxs("span",{children:[e.emoji," ",e.title.slice(0,16)," × ",e.qty]}),t.jsxs("div",{style:{display:"flex",gap:"0.25rem",alignItems:"center"},children:[t.jsxs("span",{style:{color:"#2563eb",fontWeight:600},children:["$",(e.price*e.qty).toFixed(2)]}),t.jsx("button",{onClick:()=>n(e.id),style:{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"0.75rem"},children:"✕"})]})]},e.id)),a.length>0&&t.jsxs("div",{style:{borderTop:"1px solid #e2e8f0",marginTop:"0.5rem",paddingTop:"0.5rem"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:"0.9rem"},children:[t.jsx("span",{children:"Total"}),t.jsxs("span",{style:{color:"#2563eb"},children:["$",c.toFixed(2)]})]}),t.jsx("button",{style:{width:"100%",marginTop:"0.5rem",background:"#16a34a",color:"#fff",border:"none",padding:"0.4rem",borderRadius:"0.375rem",cursor:"pointer",fontSize:"0.8rem",fontWeight:600},children:"Checkout"})]})]})]})}function C(){return t.jsxs("div",{className:"lesson",children:[t.jsxs("div",{className:"lesson-header",children:[t.jsx("span",{className:"lesson-tag",children:"Chapter 7 — useState"}),t.jsx("h1",{children:"Practice: Build a Shopping Cart"}),t.jsx("p",{className:"lesson-subtitle",children:"Apply useState patterns to build ShopHub's most important feature — the shopping cart. Add items, remove them, see live totals."})]}),t.jsxs("section",{className:"lesson-section",children:[t.jsx("h2",{children:"📚 Quick Review"}),t.jsx("p",{children:"Before starting, make sure you can answer:"}),t.jsxs("ul",{style:{lineHeight:2},children:[t.jsx("li",{children:"How do you declare state in React?"}),t.jsx("li",{children:"How do you update an array in state without mutating it?"}),t.jsxs("li",{children:["When should you use the functional updater ",t.jsx("code",{children:"prev =>"}),"?"]}),t.jsx("li",{children:'What is a "derived value" vs a value stored in state?'})]})]}),t.jsx(m,{type:"tip",children:"Build it step by step: first get the basic cart working (add/remove), then add the total calculation, then add the item count in the header."}),t.jsx(p,{title:"Shopping Cart with State",difficulty:"medium",description:"Build a fully functional shopping cart using useState. Products can be added (with quantity tracking), removed, and the total updates automatically.",startDesign:t.jsx(h,{}),targetDesign:t.jsx(f,{}),requirements:[{label:'Render a list of 3+ products with an "Add to Cart" button each',difficulty:"easy"},{label:'Clicking "Add to Cart" adds the product to a cart state array',difficulty:"easy"},{label:'If a product is already in cart, clicking "Add" increases its quantity',difficulty:"medium"},{label:"Display the cart items below the product list with quantities",difficulty:"medium"},{label:"Show a live total price (sum of price × qty for each item)",difficulty:"medium"},{label:"Show a cart count (total number of items) in the cart header",difficulty:"medium"},{label:"Add a remove button (×) for each cart item",difficulty:"medium"},{label:"Show an empty state when cart is empty",difficulty:"easy"},{label:'Add a "Checkout" button that appears only when cart has items',difficulty:"hard"}],hints:["Start with: const [cart, setCart] = useState([]); — cart is an array of { ...product, qty: 1 }","To add: check if product already in cart with cart.find(i => i.id === product.id)","If exists: use map() to update qty. If not: use [...cart, { ...product, qty: 1 }]","For total: cart.reduce((sum, item) => sum + item.price * item.qty, 0)","For count: cart.reduce((sum, item) => sum + item.qty, 0)","To remove: cart.filter(i => i.id !== productId)"],steps:[{title:"Set up the products and cart state",content:"Create your products array and initialize cart state as an empty array.",code:`const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99 },
  { id: 2, title: 'Smart Watch', price: 199.99 },
  { id: 3, title: 'Bluetooth Speaker', price: 49.99 },
];

const [cart, setCart] = useState([]);`},{title:"Write the addToCart function",content:'Handle both "add new" and "increase existing quantity" cases.',code:`const addToCart = (product) => {
  setCart(prev => {
    const exists = prev.find(i => i.id === product.id);
    if (exists) {
      // Product already in cart — increase qty
      return prev.map(i =>
        i.id === product.id ? { ...i, qty: i.qty + 1 } : i
      );
    }
    // New product — add with qty 1
    return [...prev, { ...product, qty: 1 }];
  });
};`},{title:"Compute derived values",content:"Calculate total and item count from cart state — don't store these in state!",code:`// Computed from cart — updates automatically when cart changes
const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);`},{title:"Render the cart",content:"Show cart items, empty state, total, and remove buttons.",code:`{cart.length === 0 ? (
  <p>Your cart is empty</p>
) : (
  <>
    {cart.map(item => (
      <div key={item.id}>
        <span>{item.title} × {item.qty}</span>
        <span>\${(item.price * item.qty).toFixed(2)}</span>
        <button onClick={() => removeFromCart(item.id)}>✕</button>
      </div>
    ))}
    <p>Total: \${cartTotal.toFixed(2)}</p>
  </>
)}`}],checkItems:["Products render from an array","Clicking Add to Cart adds the product to state","Adding the same product again increases qty (not duplicate)","Cart items display with name, quantity, and line total","Overall total price is correct and live","Item count shows in cart header","Remove button deletes item from cart","Empty state shows when cart is empty"],answer:`import { useState } from 'react';

const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99 },
  { id: 2, title: 'Smart Watch', price: 199.99 },
  { id: 3, title: 'Bluetooth Speaker', price: 49.99 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>{product.title} — \${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      <h2>Cart ({itemCount})</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some products!</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>{item.title} × {item.qty} = \${(item.price * item.qty).toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <p><strong>Total: \${cartTotal.toFixed(2)}</strong></p>
          <button onClick={() => alert('Order placed!')}>Checkout</button>
        </>
      )}
    </div>
  );
}`})]})}export{C as default};
