import{r as i,j as e}from"./index-fCZyuqB2.js";import{C as d}from"./CodeBlock-y81Z23mq.js";import{C as m}from"./Challenge-B2Dev4fs.js";import{C as p}from"./Callout-B_CeIBza.js";import{I as n}from"./InteractiveDemo-BnwT7BFH.js";function f(){const[s,c]=i.useState(!1),[a,o]=i.useState([]),[r,h]=i.useState("laptop"),l=[{id:1,title:"Laptop",price:999},{id:2,title:"Phone",price:599}].filter(t=>t.title.toLowerCase().includes(r.toLowerCase()));return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 8 — Conditional Rendering"}),e.jsx("h1",{children:"Empty States & Auth UI"}),e.jsx("p",{className:"lesson-subtitle",children:'Handle the "nothing here" moment and show different UI based on login status.'})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"How to build friendly empty state UI"}),e.jsx("li",{children:"Empty cart, empty search results, empty wishlist"}),e.jsx("li",{children:"How to show different UI for logged-in vs guest users"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📦 Empty States"}),e.jsx("p",{children:"An empty state appears when data exists but is empty — the cart is empty, search found nothing, the wishlist has no items. A good empty state explains WHY it's empty and guides the user on what to do next."}),e.jsx(d,{language:"jsx",children:`function CartPage({ cart }) {
  // Empty state
  if (cart.length === 0) {
    return (
      <div className="empty-state">
        <span style={{ fontSize: '4rem' }}>🛒</span>
        <h2>Your cart is empty</h2>
        <p>Looks like you haven't added anything yet.</p>
        <Link to="/products" className="btn">
          Start Shopping
        </Link>
      </div>
    );
  }

  // Normal state
  return (
    <div>
      {cart.map(item => <CartItem key={item.id} item={item} />)}
    </div>
  );
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demos"}),e.jsxs(n,{title:"Empty Cart State",children:[e.jsxs("div",{style:{marginBottom:"1rem",display:"flex",gap:"0.5rem"},children:[e.jsx("button",{className:"btn",style:{fontSize:"0.85rem"},onClick:()=>o([{id:1,title:"Headphones",qty:1}]),children:"Add Item to Cart"}),e.jsx("button",{className:"btn-secondary",style:{fontSize:"0.85rem"},onClick:()=>o([]),children:"Clear Cart"})]}),a.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)",border:"1px dashed var(--border-color)",borderRadius:"0.75rem"},children:[e.jsx("div",{style:{fontSize:"3rem",marginBottom:"0.5rem"},children:"🛒"}),e.jsx("h3",{children:"Your cart is empty"}),e.jsx("p",{style:{fontSize:"0.875rem",marginTop:"0.25rem"},children:"Add items above to get started"})]}):e.jsx("div",{children:a.map(t=>e.jsxs("div",{style:{padding:"0.75rem",background:"var(--bg-color)",borderRadius:"0.5rem"},children:[t.title," × ",t.qty]},t.id))})]}),e.jsxs(n,{title:"Auth UI — Logged In vs Guest",children:[e.jsx("button",{className:s?"btn-secondary":"btn",onClick:()=>c(!s),style:{marginBottom:"1rem"},children:s?"Log Out":"Log In"}),e.jsx("div",{style:{padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:s?e.jsxs("div",{children:[e.jsxs("p",{children:["👋 Welcome back, ",e.jsx("strong",{children:"Alex!"})]}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginTop:"0.75rem",fontSize:"0.875rem"},children:[e.jsx("a",{href:"#",style:{color:"var(--primary)"},children:"My Orders"}),e.jsx("a",{href:"#",style:{color:"var(--primary)"},children:"Profile"}),e.jsx("a",{href:"#",style:{color:"var(--primary)"},children:"Favorites"})]})]}):e.jsxs("div",{children:[e.jsx("p",{style:{color:"var(--text-muted)"},children:"Sign in to see your orders and favorites"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.75rem"},children:[e.jsx("button",{className:"btn",style:{fontSize:"0.85rem"},children:"Log In"}),e.jsx("button",{className:"btn-secondary",style:{fontSize:"0.85rem"},children:"Register"})]})]})})]}),e.jsxs(n,{title:"Empty Search Results",children:[e.jsx("input",{type:"text",value:r,onChange:t=>h(t.target.value),placeholder:"Search products...",style:{padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid var(--border-color)",background:"var(--bg-color)",color:"var(--text-color)",width:"100%",marginBottom:"1rem"}}),l.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"1.5rem",color:"var(--text-muted)"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:"🔍"}),e.jsxs("p",{children:['No results for "',e.jsx("strong",{children:r}),'"']}),e.jsx("p",{style:{fontSize:"0.8rem"},children:"Try a different search term"})]}):l.map(t=>e.jsxs("div",{style:{padding:"0.5rem",marginBottom:"0.25rem",background:"var(--bg-color)",borderRadius:"0.375rem"},children:[t.title," — $",t.price]},t.id))]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub Auth Pattern"}),e.jsx(d,{language:"jsx",filename:"Navbar.jsx",children:`function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">ShopHub</Link>

      <div className="nav-actions">
        {isLoggedIn ? (
          // Logged in: show user info and logout
          <>
            <span>Hi, {user.name}!</span>
            <Link to="/favorites">❤️ Favorites</Link>
            <button onClick={handleLogout}>Log Out</button>
          </>
        ) : (
          // Guest: show login/register
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register" className="btn">Sign Up</Link>
          </>
        )}

        {/* Cart always visible */}
        <Link to="/cart">
          🛒 {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </Link>
      </div>
    </nav>
  );
}`})]}),e.jsx(p,{type:"tip",children:'Good empty states reduce user frustration. Instead of a blank area, guide users to the next action. "Your cart is empty" + "Start Shopping" button is much better than just nothing.'}),e.jsx(m,{id:"8-3-wishlist",title:"Wishlist Empty State",description:"Create a WishlistPage component. It receives a 'wishlist' prop (array of products). If empty, show a friendly empty state with a 🤍 icon, a message, and a 'Discover Products' button. If not empty, render the list of product names.",hint:"Use wishlist.length === 0 to check for empty state. Return the empty state JSX early.",difficulty:"easy",answer:`function WishlistPage({ wishlist }) {
  if (wishlist.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🤍</div>
        <h2>Your wishlist is empty</h2>
        <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
          Save items you love for later by clicking the heart icon.
        </p>
        <a href="/products" className="btn">
          Discover Products
        </a>
      </div>
    );
  }

  return (
    <div>
      <h2>❤️ Your Wishlist ({wishlist.length} items)</h2>
      <ul>
        {wishlist.map(product => (
          <li key={product.id}>
            {product.title} — \${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"Early return for empty state keeps code clean. The empty state gives context (why it's empty) and a clear next action (Discover Products). The normal state renders when wishlist has items."})]})}export{f as default};
