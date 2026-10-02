import{r as t,j as e}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as c}from"./Challenge-B2Dev4fs.js";import{C as o}from"./Callout-B_CeIBza.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";function b(){const[s,a]=t.useState(!1),[r,l]=t.useState(!1),[n,d]=t.useState(!0),[p,u]=t.useState(0);return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 8 — Conditional Rendering"}),e.jsx("h1",{children:"Ternary & && Operator"}),e.jsx("p",{className:"lesson-subtitle",children:"Show different UI based on state — the two most essential patterns in React."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Use the ternary operator to show one of two things"}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"&&"})," to show something or nothing"]}),e.jsxs("li",{children:["Handle the ",e.jsx("code",{children:"0"})," gotcha with ",e.jsx("code",{children:"&&"})]}),e.jsxs("li",{children:["Use ",e.jsx("code",{children:"if"})," statements outside JSX"]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 You Already Know This — In JavaScript"}),e.jsx("p",{children:"Conditional rendering is just JavaScript's ternary and logical operators used inside JSX. You already know them:"}),e.jsx(i,{language:"js",children:`// JavaScript ternary:
const label = isLoggedIn ? 'Welcome back!' : 'Please log in';

// JavaScript &&:
const discount = isOnSale && '20% OFF';`}),e.jsxs("p",{style:{marginTop:"1rem"},children:["In React, the exact same operators work inside ",e.jsx("code",{children:"{}"})," to conditionally render JSX:"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔀 Ternary Operator — Show One of Two Things"}),e.jsx(i,{language:"jsx",children:`// condition ? <IfTrue /> : <IfFalse />

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav>
      {isLoggedIn
        ? <button onClick={logout}>Log Out</button>
        : <button onClick={goToLogin}>Log In</button>
      }
    </nav>
  );
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"➡️ && Operator — Show or Nothing"}),e.jsx(i,{language:"jsx",children:`// condition && <ShowIfTrue />
// If condition is false/null/undefined, renders nothing

function ProductCard({ product, isOnSale }) {
  return (
    <div className="product-card">
      {isOnSale && <span className="badge">🏷️ Sale</span>}
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
    </div>
  );
}`}),e.jsxs(o,{type:"warning",children:[e.jsx("strong",{children:"Watch out for the 0 gotcha!"}),e.jsx("br",{}),e.jsx("code",{children:"{count && <p>Items: {count}</p>}"}),e.jsx("br",{}),"If ",e.jsx("code",{children:"count"})," is ",e.jsx("code",{children:"0"}),", React renders the number ",e.jsx("strong",{children:"0"})," on the page!",e.jsx("br",{}),"Fix: ",e.jsx("code",{children:"{count > 0 && <p>Items: {count}</p>}"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo"}),e.jsxs(h,{title:"Toggle Conditional Rendering",children:[e.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",marginBottom:"1.5rem"},children:[e.jsxs("button",{className:s?"btn":"btn-secondary",onClick:()=>a(!s),children:["isLoggedIn: ",s?"true":"false"]}),e.jsxs("button",{className:r?"btn":"btn-secondary",onClick:()=>l(!r),children:["isFavorited: ",r?"true":"false"]}),e.jsxs("button",{className:n?"btn":"btn-secondary",onClick:()=>d(!n),children:["isOnSale: ",n?"true":"false"]})]}),e.jsxs("div",{style:{background:"var(--bg-color)",borderRadius:"0.75rem",padding:"1.5rem",border:"1px solid var(--border-color)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"1rem"},children:[e.jsx("div",{children:s?e.jsx("span",{style:{color:"var(--success)"},children:"👋 Welcome back, Alex!"}):e.jsx("span",{style:{color:"var(--text-muted)"},children:"Please log in to continue"})}),e.jsx("span",{style:{fontSize:"1.5rem"},children:r?"❤️":"🤍"})]}),e.jsxs("div",{style:{position:"relative",display:"inline-block"},children:[n&&e.jsx("span",{style:{position:"absolute",top:-8,right:-8,background:"var(--error)",color:"white",borderRadius:"0.25rem",padding:"0.1rem 0.4rem",fontSize:"0.7rem"},children:"SALE"}),e.jsxs("div",{style:{background:"var(--card-bg)",padding:"1rem",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("strong",{children:"Wireless Headphones"})," — $79.99"]})]})]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 if Statement Outside JSX"}),e.jsxs("p",{children:["For complex conditions, use ",e.jsx("code",{children:"if"})," before the ",e.jsx("code",{children:"return"})," statement:"]}),e.jsx(i,{language:"jsx",children:`function ProductStatus({ product, isLoading, error }) {
  // Early returns before the main JSX:
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  // Main render:
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
    </div>
  );
}`}),e.jsx(o,{type:"tip",children:"Early returns (returning JSX early when a condition is true) are cleaner than deeply nested ternaries. Use them for loading states, errors, and guard conditions."})]}),e.jsx(c,{id:"8-1-sale-badge",title:"New Arrival Badge",description:"Create a ProductCard that accepts an `isNewArrival` prop (boolean). Show a '🆕 New' badge using && when it's true. Also show a 'SALE' badge when `isOnSale` prop is true. Use the ternary to show either the sale price or the regular price.",hint:"Use {isNewArrival && <span>🆕 New</span>} and {isOnSale && <span>SALE</span>}. For price: {isOnSale ? salePrice : price}",difficulty:"easy",answer:`function ProductCard({ product, isNewArrival, isOnSale, salePrice }) {
  return (
    <div className="product-card">
      {/* Badges */}
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        {isNewArrival && <span className="badge">🆕 New</span>}
        {isOnSale && <span className="badge sale">SALE</span>}
      </div>

      <h3>{product.title}</h3>

      {/* Price: show sale price or regular price */}
      {isOnSale
        ? <p><del>\${product.price}</del> <strong>\${salePrice}</strong></p>
        : <p>\${product.price}</p>
      }
    </div>
  );
}`,explanation:"The && operator renders the badge only when the boolean prop is true. The ternary shows two different price displays. The del element shows strikethrough for the original price during a sale."})]})}export{b as default};
