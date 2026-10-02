import{j as e}from"./index-fCZyuqB2.js";import{C as a}from"./CodeBlock-y81Z23mq.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as c}from"./Challenge-B2Dev4fs.js";import{C as o}from"./Callout-B_CeIBza.js";import{S as i}from"./StepByStep-Be1tR1cd.js";import{I as n}from"./InteractiveDemo-BnwT7BFH.js";import{p as d}from"./products-KBKmOQ_X.js";function l({items:t}){return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"1rem",marginTop:"1rem"},children:t.map(r=>e.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-color)",borderRadius:"0.5rem",padding:"0.75rem",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{fontWeight:600,marginBottom:"0.25rem"},children:[r.title.slice(0,25),"…"]}),e.jsxs("div",{style:{color:"var(--primary)"},children:["$",r.price.toFixed(2)]})]},r.id))})}function f(){const t=d.slice(0,4);return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 5 — Rendering Lists"}),e.jsx("h1",{children:"Using map() in React"}),e.jsx("p",{className:"lesson-subtitle",children:"Transform your products array into a full UI — one component per item."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["How to use JavaScript's ",e.jsx("code",{children:"map()"})," inside JSX"]}),e.jsx("li",{children:"How React turns an array into multiple UI elements"}),e.jsx("li",{children:"How to render the ShopHub product catalog dynamically"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsxs("p",{children:["You have an array of products. You want to show a card for each one. In plain JavaScript, you'd loop over the array and manually create DOM elements. In React, you use ",e.jsx("strong",{children:"map()"})," to transform each data object into a JSX element — React handles the rest."]}),e.jsxs(o,{type:"tip",children:["You already know ",e.jsx("code",{children:"map()"})," from Chapter 0. In React, the only difference is that you return JSX instead of plain values."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(s,{leftLabel:"Vanilla JS — Manual DOM",rightLabel:"React — map() to JSX",leftCode:`// Add one card at a time to the DOM
products.forEach(product => {
  const div = document.createElement('div');
  div.innerHTML = \`
    <h3>\${product.title}</h3>
    <p>$\${product.price}</p>
  \`;
  container.appendChild(div);
});`,rightCode:`// React: map returns JSX, React renders it
{products.map(product => (
  <div key={product.id}>
    <h3>{product.title}</h3>
    <p>\${product.price}</p>
  </div>
))}

// That's it. React handles the DOM updates.`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Step by Step"}),e.jsx(i,{steps:[{title:"Step 1: A static product card",language:"jsx",code:`function ProductList() {
  return (
    <div>
      <div>Laptop - $999</div>
      <div>Phone - $599</div>
      {/* You'd need to write one for each product... */}
    </div>
  );
}`,explanation:"Hardcoded — not scalable. Imagine 100 products!"},{title:"Step 2: Use an array + map()",language:"jsx",code:`const products = [
  { id: 1, title: 'Laptop', price: 999 },
  { id: 2, title: 'Phone', price: 599 },
  { id: 3, title: 'Tablet', price: 349 },
];

function ProductList() {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>\${product.price}</p>
        </div>
      ))}
    </div>
  );
}`,explanation:"Now adding a product to the array automatically adds a card to the UI!"},{title:"Step 3: Extract to ProductCard component",language:"jsx",code:`function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="price">\${product.price.toFixed(2)}</p>
      <button>Add to Cart</button>
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`,explanation:"Clean separation: ProductList handles rendering the array, ProductCard handles displaying one product."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo"}),e.jsxs(n,{title:"Products Rendered with map()",children:[e.jsxs("p",{style:{color:"var(--text-muted)",marginBottom:"0.5rem",fontSize:"0.875rem"},children:["These ",t.length," products are rendered from an array using ",e.jsx("code",{children:"map()"}),":"]}),e.jsx(l,{items:t}),e.jsx(a,{language:"jsx",children:`{products.slice(0, 4).map(product => (
  <ProductCard key={product.id} product={product} />
))}`})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsxs("p",{children:["The entire ShopHub product catalog is rendered with ",e.jsx("code",{children:"map()"}),". When products load from the API, React automatically renders a ",e.jsx("code",{children:"ProductCard"})," for each one:"]}),e.jsx(a,{language:"jsx",filename:"ProductList.jsx",children:`import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <p>{products.length} items available</p>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsxs(o,{type:"warning",children:[e.jsx("strong",{children:"Don't use forEach()!"})," ",e.jsx("code",{children:"forEach()"})," returns ",e.jsx("code",{children:"undefined"}),". ",e.jsx("code",{children:"map()"})," returns a new array of JSX — which is what React needs to render. Always use ",e.jsx("code",{children:"map()"})," when rendering lists."]}),e.jsxs(o,{type:"warning",children:[e.jsx("strong",{children:"Don't forget the key prop!"})," We'll cover this in the next lesson, but every item in a mapped list needs a ",e.jsx("code",{children:"key"})," prop."]})]}),e.jsx(c,{id:"5-1-product-list",title:"Render a Category List",description:"Create a CategoryFilter component that renders a button for each category in this array: ['All', 'Electronics', 'Clothing', 'Accessories', 'Home']. Each button should display the category name.",hint:"Use map() on the categories array. Return a <button> for each category.",difficulty:"easy",answer:`const categories = ['All', 'Electronics', 'Clothing', 'Accessories', 'Home'];

function CategoryFilter() {
  return (
    <div className="category-filter">
      {categories.map(category => (
        <button key={category} className="btn-secondary">
          {category}
        </button>
      ))}
    </div>
  );
}`,explanation:"We map over the categories array and return a <button> for each one. The key={category} uses the category name itself since all category names are unique. We'll add click handlers and active styling in the Events chapter."})]})}export{f as default};
