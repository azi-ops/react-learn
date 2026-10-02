import{r as a,j as e}from"./index-fCZyuqB2.js";import{C as c}from"./CodeBlock-y81Z23mq.js";import{C as l}from"./Challenge-B2Dev4fs.js";import{C as u}from"./Callout-B_CeIBza.js";import{S as p}from"./StepByStep-Be1tR1cd.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";import{p as m}from"./products-KBKmOQ_X.js";function g({product:r}){return e.jsxs("div",{style:{background:"var(--card-bg)",border:"1px solid var(--border-color)",borderRadius:"0.5rem",padding:"0.75rem",fontSize:"0.85rem"},children:[e.jsxs("div",{style:{fontWeight:600,marginBottom:"0.25rem"},children:[r.title.slice(0,22),"…"]}),e.jsxs("div",{style:{color:"var(--primary)",marginBottom:"0.25rem"},children:["$",r.price.toFixed(2)]}),e.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.75rem"},children:r.category})]})}function P(){const[r,f]=a.useState(!1),[o,i]=a.useState("all"),s=m.slice(0,8),d=o==="all"?s:s.filter(t=>t.category===o),n=["all",...new Set(s.map(t=>t.category))];return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 5 — Rendering Lists"}),e.jsx("h1",{children:"Dynamic Product Lists"}),e.jsx("p",{className:"lesson-subtitle",children:"Build the full ShopHub catalog — with loading states, empty states, and filtering."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Render a full product catalog from an array"}),e.jsx("li",{children:"Add a loading state and an empty state"}),e.jsx("li",{children:"Show a product count that updates dynamically"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 Putting It All Together"}),e.jsxs("p",{children:["In ShopHub, the product list is the heart of the app. It needs to handle three scenarios: ",e.jsx("strong",{children:"loading"})," (waiting for data), ",e.jsx("strong",{children:"empty"})," (no products found), and ",e.jsx("strong",{children:"success"})," (products to display). All three use conditional rendering + ",e.jsx("code",{children:"map()"}),"."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 The Complete ProductList Component"}),e.jsx(p,{steps:[{title:"Step 1: Basic list with hardcoded data",language:"jsx",code:`import { products } from '../data/products';

function ProductList() {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}`,explanation:"Start simple — just render all products. We'll add loading/filter later."},{title:"Step 2: Add a product count header",language:"jsx",code:`function ProductList({ products }) {
  return (
    <section>
      <div className="list-header">
        <h2>Products</h2>
        <span>{products.length} items</span>
      </div>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}`,explanation:"products.length automatically updates whenever the products array changes — no extra code needed!"},{title:"Step 3: Add a loading state",language:"jsx",code:`function ProductList({ products, isLoading }) {
  if (isLoading) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <section>
      <p>{products.length} items</p>
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}`,explanation:"Return early if loading. The rest of the component only runs when we have data."},{title:"Step 4: Add empty state",language:"jsx",code:`function ProductList({ products, isLoading }) {
  if (isLoading) return <LoadingSpinner />;

  if (products.length === 0) {
    return (
      <div className="empty-state">
        <span style={{ fontSize: '3rem' }}>🔍</span>
        <h3>No products found</h3>
        <p>Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <section>
      <p>Showing {products.length} products</p>
      <div className="product-grid">
        {products.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  );
}`,explanation:"Chain your early returns: loading → empty → success. Clean, readable, and handles all cases."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo"}),e.jsxs(h,{title:"Dynamic ShopHub Product Grid",children:[e.jsx("div",{style:{marginBottom:"1rem",display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:n.map(t=>e.jsx("button",{className:o===t?"btn":"btn-secondary",style:{padding:"0.35rem 0.75rem",fontSize:"0.8rem"},onClick:()=>i(t),children:t},t))}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem",marginBottom:"0.75rem"},children:["Showing ",d.length," of ",s.length," products"]}),d.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"2rem",color:"var(--text-muted)"},children:[e.jsx("div",{style:{fontSize:"2rem"},children:"🔍"}),e.jsx("p",{children:"No products in this category"})]}):e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(160px, 1fr))",gap:"0.75rem"},children:d.map(t=>e.jsx(g,{product:t},t.id))})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 Full ShopHub Integration"}),e.jsx(c,{language:"jsx",filename:"App.jsx",children:`function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter products based on search + category
  const displayedProducts = products
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter onSelect={setSelectedCategory} />
      <ProductList
        products={displayedProducts}
        isLoading={isLoading}
      />
    </div>
  );
}`}),e.jsxs(u,{type:"tip",children:["Notice that ",e.jsx("code",{children:"displayedProducts"})," is computed from state — it's not stored in state itself. When ",e.jsx("code",{children:"searchTerm"})," or ",e.jsx("code",{children:"selectedCategory"})," changes, React re-renders and re-computes the filtered list automatically."]})]}),e.jsx(l,{id:"5-3-featured",title:"Featured Products Section",description:"Create a FeaturedProducts component that renders only products with a rating of 4.5 or higher. Show the featured count in the heading. If none qualify, show an empty state message.",hint:"Use filter() to find high-rated products before rendering them with map().",difficulty:"medium",answer:`import { products } from '../data/products';

function FeaturedProducts() {
  const featured = products.filter(p => p.rating.rate >= 4.5);

  if (featured.length === 0) {
    return <p>No featured products at the moment.</p>;
  }

  return (
    <section>
      <h2>⭐ Featured Products ({featured.length})</h2>
      <div className="product-grid">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}`,explanation:"We use filter() to narrow down products, then map() to render them. The count in the heading (featured.length) updates automatically if the filter criteria change."})]})}export{P as default};
