import{j as t,r as u}from"./index-fCZyuqB2.js";import{C as p}from"./CodeBlock-y81Z23mq.js";import{C as m}from"./Challenge-B2Dev4fs.js";import{C as x}from"./Callout-B_CeIBza.js";import{I as y}from"./InteractiveDemo-BnwT7BFH.js";import{S as f}from"./StepByStep-Be1tR1cd.js";function T(){return t.jsxs("div",{className:"lesson",children:[t.jsxs("div",{className:"lesson-header",children:[t.jsx("span",{className:"lesson-tag",children:"Chapter 13 — Lifting State Up"}),t.jsx("h1",{children:"Building the Cart"}),t.jsx("p",{className:"lesson-subtitle",children:"Putting it all together for the ultimate e-commerce feature"})]}),t.jsx("p",{children:"It's time to build the core feature of ShopHub: The Shopping Cart! This feature requires complex state logic and lifting state to the very top of our application, because almost every part of the app needs to interact with the cart."}),t.jsx("h2",{children:"Where does the Cart live?"}),t.jsxs("p",{children:["The ",t.jsx("code",{children:"Navbar"})," needs the item count. The ",t.jsx("code",{children:"ProductCard"}),' needs an "Add to Cart" function. The ',t.jsx("code",{children:"CartPage"})," needs the items, the ability to remove them, and change quantities. Therefore, the cart state MUST live at the top level: ",t.jsx("code",{children:"App.jsx"}),"."]}),t.jsx("h2",{children:"The Cart State Shape"}),t.jsxs("p",{children:["A cart isn't just an array of products. If a user adds the same shirt twice, we shouldn't have two identical shirt objects in the array. We should have one object with a ",t.jsx("code",{children:"quantity: 2"})," property."]}),t.jsx(p,{language:"jsx",filename:"App.jsx (Cart Logic)",children:`const [cart, setCart] = useState([]); // Array of { ...product, quantity: number }

const addToCart = (product) => {
  setCart(prevCart => {
    // 1. Check if the item is already in the cart
    const existingItem = prevCart.find(item => item.id === product.id);
    
    if (existingItem) {
      // 2. If it exists, map over cart and increase quantity
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }
    
    // 3. If it's new, add it to the array with quantity 1
    return [...prevCart, { ...product, quantity: 1 }];
  });
};`}),t.jsx("h2",{children:"Other Cart Operations"}),t.jsxs("p",{children:["We need a few more functions in ",t.jsx("code",{children:"App.jsx"})," to make the cart fully functional."]}),t.jsx(f,{steps:[{title:"Remove Item",code:`const removeFromCart = (productId) => {
  setCart(prev => prev.filter(item => item.id !== productId));
};`,language:"jsx",explanation:"Simple Array.filter() to remove the item entirely."},{title:"Update Quantity",code:`const updateQuantity = (productId, newQuantity) => {
  if (newQuantity < 1) return removeFromCart(productId);
  
  setCart(prev => prev.map(item =>
    item.id === productId ? { ...item, quantity: newQuantity } : item
  ));
};`,language:"jsx",explanation:"Map over the cart, finding the correct item, and updating its quantity. Note the guard against quantities less than 1!"},{title:"Calculate Total (Derived State)",code:`const cartTotal = cart.reduce(
  (sum, item) => sum + (item.price * item.quantity), 0
);`,language:"jsx",explanation:"We do NOT put the total in state! We calculate it on the fly using reduce() every time the cart changes."}]}),t.jsxs(x,{type:"warning",children:["Notice how we use the ",t.jsx("strong",{children:"callback form"})," of ",t.jsx("code",{children:"setCart(prev => ...)"})," everywhere! When new state depends on old state (like increasing a quantity), you must use the callback form to guarantee you have the latest data."]}),t.jsx("h2",{children:"Interactive Demo: Working Cart"}),t.jsx(y,{title:"ShopHub Mini Cart",children:t.jsx(C,{})}),t.jsx(m,{id:"ch13_3_clear_cart",title:"Clear the Cart",description:"Add a `clearCart` function to the cart logic. Then, write a simple CartSummary component that takes the `cart` array and the `clearCart` function as props, displays the total number of unique items, and has a 'Clear All' button.",hint:"Clearing the cart is the easiest operation! Just set it back to its initial state.",answer:`import React, { useState } from 'react';

// In App.jsx:
// const clearCart = () => setCart([]);

export default function CartSummary({ cart, clearCart }) {
  if (cart.length === 0) return <p>Cart is empty</p>;

  return (
    <div className="cart-summary">
      <h3>You have {cart.length} unique items in your cart.</h3>
      <button onClick={clearCart} style={{ color: 'red' }}>
        Empty Cart
      </button>
    </div>
  );
}`,explanation:"To clear the cart, we just `setCart([])`. The CartSummary component simply receives that function as a prop and attaches it to the button's onClick event.",difficulty:"medium"})]})}const j=[{id:1,title:"React T-Shirt",price:20},{id:2,title:"JS Mug",price:15}];function C(){const[i,s]=u.useState([]),l=e=>{s(a=>a.find(r=>r.id===e.id)?a.map(r=>r.id===e.id?{...r,quantity:r.quantity+1}:r):[...a,{...e,quantity:1}])},o=(e,a)=>{s(n=>n.map(r=>{if(r.id===e){const c=r.quantity+a;return c<1?r:{...r,quantity:c}}return r}))},d=e=>s(a=>a.filter(n=>n.id!==e)),h=i.reduce((e,a)=>e+a.price*a.quantity,0);return t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsxs("div",{style:{flex:1,borderRight:"1px solid #ccc",paddingRight:"20px"},children:[t.jsx("h3",{children:"Products"}),j.map(e=>t.jsxs("div",{style:{border:"1px solid #eee",padding:"10px",marginBottom:"10px"},children:[t.jsxs("span",{children:[e.title," - $",e.price]}),t.jsx("button",{onClick:()=>l(e),style:{float:"right"},children:"Add"})]},e.id))]}),t.jsxs("div",{style:{flex:1},children:[t.jsxs("h3",{children:["Cart (",i.reduce((e,a)=>e+a.quantity,0)," items)"]}),i.length===0&&t.jsx("p",{style:{color:"#888"},children:"Empty"}),i.map(e=>t.jsxs("div",{style:{borderBottom:"1px solid #eee",paddingBottom:"10px",marginBottom:"10px"},children:[t.jsx("strong",{children:e.title}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"5px"},children:[t.jsxs("div",{children:[t.jsx("button",{onClick:()=>o(e.id,-1),children:"-"}),t.jsx("span",{style:{margin:"0 10px"},children:e.quantity}),t.jsx("button",{onClick:()=>o(e.id,1),children:"+"})]}),t.jsxs("span",{children:["$",e.price*e.quantity]}),t.jsx("button",{onClick:()=>d(e.id),style:{color:"red"},children:"X"})]})]},e.id)),i.length>0&&t.jsxs("h3",{style:{textAlign:"right"},children:["Total: $",h]})]})]})}export{T as default};
