import{j as e,r as c}from"./index-fCZyuqB2.js";import{C as d}from"./Callout-B_CeIBza.js";import{P as n}from"./PracticeProject-aOb4DaIe.js";function l(){return e.jsx("div",{style:{fontFamily:"sans-serif",maxWidth:360},children:e.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"1rem"},children:[e.jsx("p",{style:{color:"#94a3b8",fontSize:"0.8rem",margin:0},children:"// product grid will go here"}),e.jsx("div",{style:{marginTop:"0.75rem",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},children:[1,2,3,4].map(r=>e.jsxs("div",{style:{height:60,background:"#f1f5f9",borderRadius:"0.25rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",fontSize:"0.75rem"},children:["item ",r]},r))})]})})}const a=[{id:1,title:"Wireless Headphones",price:79.99,category:"electronics",emoji:"🎧",rating:4.5},{id:2,title:"Running Shoes",price:89.99,category:"clothing",emoji:"👟",rating:4.2},{id:3,title:"Smart Watch",price:199.99,category:"electronics",emoji:"⌚",rating:4.8},{id:4,title:"Coffee Maker",price:49.99,category:"home",emoji:"☕",rating:4}];function p(){const[r,o]=c.useState("all"),s=["all","electronics","clothing","home"],i=r==="all"?a:a.filter(t=>t.category===r);return e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:380},children:[e.jsx("div",{style:{display:"flex",gap:"0.35rem",marginBottom:"0.75rem",flexWrap:"wrap"},children:s.map(t=>e.jsx("button",{onClick:()=>o(t),style:{padding:"0.25rem 0.6rem",borderRadius:"999px",border:"1px solid #e2e8f0",cursor:"pointer",fontSize:"0.75rem",background:r===t?"#3b82f6":"#fff",color:r===t?"#fff":"#374151",fontWeight:r===t?600:400},children:t},t))}),e.jsxs("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"#64748b"},children:["Showing ",i.length," products"]}),i.length===0?e.jsx("div",{style:{textAlign:"center",padding:"1.5rem",color:"#94a3b8",fontSize:"0.85rem"},children:"🔍 No products found"}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.5rem"},children:i.map(t=>e.jsxs("div",{style:{background:"#fff",border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"0.625rem"},children:[e.jsx("div",{style:{fontSize:"1.75rem",marginBottom:"0.25rem"},children:t.emoji}),e.jsx("p",{style:{margin:"0 0 0.15rem",fontWeight:600,fontSize:"0.78rem",color:"#0f172a"},children:t.title.slice(0,18)}),e.jsxs("p",{style:{margin:"0 0 0.25rem",color:"#2563eb",fontSize:"0.8rem",fontWeight:700},children:["$",t.price]}),e.jsxs("p",{style:{margin:0,fontSize:"0.7rem",color:"#64748b"},children:["⭐ ",t.rating]})]},t.id))})]})}function y(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 5 — Rendering Lists"}),e.jsx("h1",{children:"Practice: Build a Dynamic Product Grid"}),e.jsx("p",{className:"lesson-subtitle",children:"Combine everything from Chapter 5: render lists with map(), add keys, handle empty states, and add a live category filter."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📚 Quick Review"}),e.jsx("p",{children:"Before starting, make sure you can answer these:"}),e.jsxs("ul",{style:{lineHeight:2},children:[e.jsxs("li",{children:["How do you render an array of items in React? ",e.jsx("em",{children:"(hint: map())"})]}),e.jsxs("li",{children:["What prop is required on every list item? ",e.jsx("em",{children:"(hint: key=)"})]}),e.jsx("li",{children:"What should you render when the list is empty?"}),e.jsxs("li",{children:["What's the difference between ",e.jsx("code",{children:"filter()"})," and ",e.jsx("code",{children:"map()"}),"?"]})]})]}),e.jsx(d,{type:"tip",children:"Build each requirement one at a time. Start with just rendering the full list, then add the filter, then the empty state. Small steps!"}),e.jsx(n,{title:"Dynamic Product Grid with Category Filter",difficulty:"medium",description:"Build a React product grid that shows all products by default, lets users filter by category, shows a count, and handles the empty state.",startDesign:e.jsx(l,{}),targetDesign:e.jsx(p,{}),requirements:[{label:"Render an array of 4+ products using map(). Each product shows name, price, and rating",difficulty:"easy"},{label:"Add a unique key prop to each rendered product card",difficulty:"easy"},{label:'Show a count: "Showing X products" above the grid',difficulty:"easy"},{label:"Add category filter buttons (All, Electronics, Clothing, Home) that filter the displayed list",difficulty:"medium"},{label:"When a category has no products, show a friendly empty state message",difficulty:"medium"},{label:"Highlight the active category button with a different background color",difficulty:"medium"},{label:'Add a "Sort by: Price" dropdown that sorts the visible products by price',difficulty:"hard"}],hints:["Start with a simple array in your component: const products = [ { id: 1, title: 'Headphones', price: 79.99, category: 'electronics' }, ... ];","Add category state: const [category, setCategory] = useState('all');","Filter before rendering: const displayed = category === 'all' ? products : products.filter(p => p.category === category);","Then map over displayed: {displayed.map(product => <ProductCard key={product.id} product={product} />)}","For the empty state: {displayed.length === 0 && <p>No products found</p>}","For active button styling: className={category === cat ? 'btn-active' : 'btn-default'}"],steps:[{title:"Define the products array",content:"Create the data array at the top of your component (or import from products.js).",code:`const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99, category: 'electronics', rating: 4.5 },
  { id: 2, title: 'Running Shoes', price: 89.99, category: 'clothing', rating: 4.2 },
  { id: 3, title: 'Smart Watch', price: 199.99, category: 'electronics', rating: 4.8 },
  { id: 4, title: 'Coffee Maker', price: 49.99, category: 'home', rating: 4.0 },
  { id: 5, title: 'Yoga Mat', price: 29.99, category: 'fitness', rating: 4.3 },
];`},{title:"Add category state and filtering",content:"Track which category is selected and compute the filtered list.",code:`const categories = ['all', 'electronics', 'clothing', 'home', 'fitness'];
const [selectedCategory, setSelectedCategory] = useState('all');

const displayedProducts = selectedCategory === 'all'
  ? products
  : products.filter(p => p.category === selectedCategory);`},{title:"Render category buttons",content:"Map over categories and render a button for each.",code:`<div className="category-filter">
  {categories.map(cat => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={selectedCategory === cat ? 'btn-active' : 'btn-default'}
    >
      {cat}
    </button>
  ))}
</div>`},{title:"Render the product grid",content:"Show the count, handle empty state, then map over displayedProducts.",code:`<p>{displayedProducts.length} products</p>

{displayedProducts.length === 0 ? (
  <div className="empty-state">
    <span>🔍</span>
    <p>No products in this category</p>
  </div>
) : (
  <div className="product-grid">
    {displayedProducts.map(product => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)}`}],checkItems:["Products render from an array using map()","Each product has a unique key prop","Category filter buttons are rendered from an array","Clicking a category filters the displayed products","The product count updates when filtering","When a category is empty, an empty state message shows","The active category button looks visually different"],answer:`import { useState } from 'react';

const products = [
  { id: 1, title: 'Wireless Headphones', price: 79.99, category: 'electronics', rating: 4.5 },
  { id: 2, title: 'Running Shoes', price: 89.99, category: 'clothing', rating: 4.2 },
  { id: 3, title: 'Smart Watch', price: 199.99, category: 'electronics', rating: 4.8 },
  { id: 4, title: 'Coffee Maker', price: 49.99, category: 'home', rating: 4.0 },
  { id: 5, title: 'Yoga Mat', price: 29.99, category: 'fitness', rating: 4.3 },
];

const categories = ['all', 'electronics', 'clothing', 'home', 'fitness'];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p className="price">\${product.price}</p>
      <p className="rating">⭐ {product.rating}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const displayedProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div>
      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? 'btn active' : 'btn'}
          >
            {cat}
          </button>
        ))}
      </div>

      <p>Showing {displayedProducts.length} products</p>

      {displayedProducts.length === 0 ? (
        <div className="empty-state">
          <span>🔍</span>
          <p>No products in this category</p>
        </div>
      ) : (
        <div className="product-grid">
          {displayedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}`})]})}export{y as default};
