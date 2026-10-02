import{j as e,r as l}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as u}from"./Challenge-B2Dev4fs.js";import{C as o}from"./Callout-B_CeIBza.js";import{S as p}from"./StepByStep-Be1tR1cd.js";import{I as m}from"./InteractiveDemo-BnwT7BFH.js";import{p as h}from"./products-KBKmOQ_X.js";function v(){const[a,n]=l.useState([]),d=h.slice(0,4),c=t=>{n(r=>r.find(s=>s.id===t.id)?r.filter(s=>s.id!==t.id):[...r,t])};return e.jsxs("div",{children:[e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"0.75rem",marginBottom:"1rem"},children:d.map(t=>{const r=a.find(s=>s.id===t.id);return e.jsxs("div",{style:{background:"var(--bg-color)",border:`1px solid ${r?"var(--error)":"var(--border-color)"}`,borderRadius:"0.5rem",padding:"0.75rem"},children:[e.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:600,marginBottom:"0.25rem"},children:[t.title.slice(0,20),"…"]}),e.jsxs("div",{style:{color:"var(--primary)",fontSize:"0.85rem",marginBottom:"0.5rem"},children:["$",t.price]}),e.jsx("button",{onClick:()=>c(t),style:{background:"none",border:"none",cursor:"pointer",fontSize:"1.2rem"},children:r?"❤️":"🤍"})]},t.id)})}),e.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)"},children:["Favorites (",a.length,"): ",a.map(t=>t.title.slice(0,15)).join(", ")||"none"]})]})}function S(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 7 — useState"}),e.jsx("h1",{children:"Common State Patterns"}),e.jsx("p",{className:"lesson-subtitle",children:"State with objects, arrays, and the patterns you'll use in every React app."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"State with objects (and why you must spread to update)"}),e.jsx("li",{children:"State with arrays (add, remove, update items)"}),e.jsxs("li",{children:["Functional updates with ",e.jsx("code",{children:"prev =>"})]}),e.jsx("li",{children:"Build ShopHub's favorites and cart state"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📦 State with Objects"}),e.jsx(i,{language:"jsx",children:`// State can hold an object:
const [user, setUser] = useState({
  name: '',
  email: '',
  isLoggedIn: false
});

// ❌ WRONG — mutating state directly:
user.name = 'Alice';        // React doesn't know about this!
setUser(user);              // Won't re-render correctly

// ✅ CORRECT — always create a new object with spread:
setUser({ ...user, name: 'Alice' });
// The ...user copies all existing properties
// Then we override just the 'name' property`}),e.jsxs(o,{type:"warning",children:[e.jsx("strong",{children:"Never mutate state directly."})," Always create a new object or array using spread ",e.jsx("code",{children:"..."}),". React compares the old reference to the new one — if they're the same object, React won't re-render!"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 State with Arrays — The ShopHub Cart"}),e.jsx(p,{steps:[{title:"Cart state setup",language:"jsx",code:`const [cart, setCart] = useState([]);
// cart is an array of product objects`,explanation:"Start with an empty array. Each cart item will be a product with a quantity."},{title:"Add item to cart",language:"jsx",code:`const addToCart = (product) => {
  setCart(prevCart => {
    // Check if already in cart
    const exists = prevCart.find(item => item.id === product.id);

    if (exists) {
      // ✅ Update quantity (don't mutate — map returns new array)
      return prevCart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    // ✅ Add new item (spread creates new array)
    return [...prevCart, { ...product, quantity: 1 }];
  });
};`,explanation:"We use prevCart => to get the latest state. map() returns a NEW array with the updated item. spread [...prevCart, newItem] creates a NEW array."},{title:"Remove item from cart",language:"jsx",code:`const removeFromCart = (productId) => {
  setCart(prevCart =>
    prevCart.filter(item => item.id !== productId)
    // filter returns a NEW array without the removed item
  );
};`,explanation:"filter() always returns a new array. Items where the condition is false are excluded."},{title:"Cart total (derived value)",language:"jsx",code:`// Don't store total in state — compute it from cart:
const cartTotal = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);

// Usage:
<p>Total: \${cartTotal.toFixed(2)}</p>`,explanation:"cartTotal is computed from cart state — not stored separately. When cart updates, cartTotal automatically recalculates on next render."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Favorites Demo"}),e.jsx(m,{title:"Array State — Favorites List",children:e.jsx(v,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔄 Functional Updates (prev =>)"}),e.jsx(i,{language:"jsx",children:`// When your new state depends on the previous state,
// use the functional form: setX(prev => newValue)

// ✅ Safe — always uses the latest state:
setCount(prev => prev + 1);
setCart(prev => [...prev, newItem]);
setFavorites(prev => prev.filter(id => id !== productId));

// ⚠️ Can be stale — might miss rapid updates:
setCount(count + 1);  // count could be outdated in async scenarios`}),e.jsxs(o,{type:"tip",children:["When in doubt about using ",e.jsx("code",{children:"prev =>"}),", use it. It's always safe, and it prevents tricky bugs when state updates happen rapidly."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub State Architecture"}),e.jsx(i,{language:"jsx",filename:"App.jsx",children:`function App() {
  // Shopping cart (array of items with quantity)
  const [cart, setCart] = useState([]);

  // Favorites (array of product IDs)
  const [favorites, setFavorites] = useState([]);

  // UI states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Derived values (computed, not stored in state)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Actions
  const addToCart = (product) => { /* ... */ };
  const removeFromCart = (id) => { /* ... */ };
  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fId => fId !== id) : [...prev, id]
    );
  };

  return ( /* ... */ );
}`})]}),e.jsx(u,{id:"7-3-favorites",title:"Favorites List",description:"Build a favorites system: an array of product IDs in state. Create a toggleFavorite(id) function. Render a list of 3 products, each with a heart button. Clicking adds or removes from favorites. Show the favorites count.",hint:"Use useState([]). To add: [...prev, id]. To remove: prev.filter(fId => fId !== id). Use prev.includes(id) to check if already favorited.",difficulty:"medium",answer:`function FavoritesList() {
  const [favorites, setFavorites] = useState([]);

  const products = [
    { id: 1, title: 'Laptop', price: 999 },
    { id: 2, title: 'Phone', price: 599 },
    { id: 3, title: 'Tablet', price: 349 },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev =>
      prev.includes(id)
        ? prev.filter(fId => fId !== id)
        : [...prev, id]
    );
  };

  return (
    <div>
      <h2>❤️ Favorites ({favorites.length})</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.title} — \${product.price}</span>
          <button onClick={() => toggleFavorite(product.id)}>
            {favorites.includes(product.id) ? '❤️' : '🤍'}
          </button>
        </div>
      ))}
    </div>
  );
}`,explanation:"favorites is an array of IDs. toggleFavorite checks if the id is already included: if yes, filter it out; if no, add it with spread. favorites.includes(id) shows the correct heart icon for each product."})]})}export{S as default};
