import{j as e,r as s}from"./index-fCZyuqB2.js";import{C as h}from"./CodeBlock-y81Z23mq.js";import{C as x}from"./Challenge-B2Dev4fs.js";import{C as g}from"./Callout-B_CeIBza.js";import{F as m}from"./FlowDiagram-DEugCHrd.js";import{I as y}from"./InteractiveDemo-BnwT7BFH.js";function P(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 12 — Search & Filter"}),e.jsx("h1",{children:"The Full Pipeline"}),e.jsx("p",{className:"lesson-subtitle",children:"Chaining array methods for a complete shopping experience"})]}),e.jsx("p",{children:"Now we combine everything: Search + Category Filter + Sorting. This creates a data pipeline. Data goes in at the top, passes through several filters, gets sorted, and then finally renders."}),e.jsx("h2",{children:"Chaining Array Methods"}),e.jsxs("p",{children:["Because ",e.jsx("code",{children:".filter()"})," returns an array, and ",e.jsx("code",{children:".sort()"})," returns an array, we can chain them together continuously. This makes the code very readable."]}),e.jsx(h,{language:"jsx",filename:"ShopHubPipeline.jsx",children:`const displayedProducts = [...products]
  // 1. Filter by category
  .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
  
  // 2. Filter by search term
  .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
  
  // 3. Sort the remaining results
  .sort((a, b) => {
    if (sortOrder === 'price-low') return a.price - b.price;
    if (sortOrder === 'price-high') return b.price - a.price;
    return 0; // default
  });`}),e.jsxs("p",{children:["This is standard vanilla JavaScript! But React's state system makes it incredibly powerful. When ",e.jsx("em",{children:"any"})," of the state variables (",e.jsx("code",{children:"selectedCategory"}),", ",e.jsx("code",{children:"searchTerm"}),", or ",e.jsx("code",{children:"sortOrder"}),") change, React re-runs the entire pipeline and updates the UI instantly."]}),e.jsx("h2",{children:"The Data Flow Visualization"}),e.jsx(m,{steps:[{label:"Original Array",description:"20 items from API",icon:"📦"},{label:"Category Filter",description:"Keeps 12 'Electronics'",icon:"🏷️"},{label:"Search Filter",description:"Keeps 3 matching 'Monitor'",icon:"🔍"},{label:"Sort",description:"Orders the 3 by lowest price",icon:"↕️"},{label:"Render",description:"Creates 3 ProductCard components",icon:"🖥️"}]}),e.jsx("h2",{children:"Active Filter Indicators & Reset"}),e.jsx("p",{children:"When you have a complex filter system, users can get lost. It's good UX to:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Show them exactly how many results matched."}),e.jsx("li",{children:'Provide a "Clear Filters" button to reset everything to default.'})]}),e.jsx(h,{language:"jsx",filename:"ClearFilters.jsx",children:`const resetFilters = () => {
  setSearchTerm('');
  setSelectedCategory('all');
  setSortOrder('default');
};

// ... in JSX
{displayedProducts.length === 0 && (
  <div className="empty-state">
    <p>No products found matching your filters.</p>
    <button onClick={resetFilters}>Clear Filters</button>
  </div>
)}`}),e.jsxs(g,{type:"tip",children:[e.jsxs("strong",{children:["Performance Note: ",e.jsx("code",{children:"useMemo"})]}),e.jsx("br",{}),"If your array has thousands of items, running this pipeline on every render might slow things down. React provides a hook called ",e.jsx("code",{children:"useMemo"})," that caches the result of the pipeline, only re-running it when the filter state actually changes. For arrays under 500 items, you usually don't need it!"]}),e.jsx("h2",{children:"Interactive Demo: Full Pipeline"}),e.jsx(y,{title:"ShopHub Full Pipeline",children:e.jsx(j,{})}),e.jsx(x,{id:"ch12_3_price_range",title:"Price Range Filter",description:"Add a price range filter to the pipeline. You'll need two state variables: minPrice (default 0) and maxPrice (default 1000). Add a new `.filter()` step in the pipeline that ensures the product's price is between the min and max.",hint:"The new filter step will look like: `.filter(p => p.price >= minPrice && p.price <= maxPrice)`",answer:`import React, { useState } from 'react';

export default function PriceRangePipeline({ products }) {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  const [query, setQuery] = useState('');

  const displayed = products
    .filter(p => p.title.toLowerCase().includes(query.toLowerCase()))
    .filter(p => p.price >= min && p.price <= max);

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      
      <input type="number" value={min} onChange={e => setMin(Number(e.target.value))} />
      <input type="number" value={max} onChange={e => setMax(Number(e.target.value))} />
      
      <ul>
        {displayed.map(p => (
          <li key={p.id}>{p.title} - ${p.price}</li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"We just add another piece of state and another link in the `.filter()` chain! It works seamlessly alongside the search query filter.",difficulty:"hard"})]})}const f=[{id:1,title:"Gaming Mouse",price:45,category:"electronics"},{id:2,title:"Mechanical Keyboard",price:120,category:"electronics"},{id:3,title:"Running Shoes",price:85,category:"clothing"},{id:4,title:"Winter Jacket",price:150,category:"clothing"},{id:5,title:"Desk Lamp",price:30,category:"home"}];function j(){const[l,n]=s.useState(""),[r,a]=s.useState("all"),[i,o]=s.useState("price-low"),c=f.filter(t=>r==="all"||t.category===r).filter(t=>t.title.toLowerCase().includes(l.toLowerCase())).sort((t,d)=>i==="price-low"?t.price-d.price:i==="price-high"?d.price-t.price:0),u=()=>{n(""),a("all"),o("price-low")};return e.jsxs("div",{style:{padding:"20px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"15px"},children:[e.jsx("input",{placeholder:"Search...",value:l,onChange:t=>n(t.target.value),style:{flex:1,padding:"5px"}}),e.jsxs("select",{value:r,onChange:t=>a(t.target.value),style:{padding:"5px"},children:[e.jsx("option",{value:"all",children:"All Categories"}),e.jsx("option",{value:"electronics",children:"Electronics"}),e.jsx("option",{value:"clothing",children:"Clothing"}),e.jsx("option",{value:"home",children:"Home"})]}),e.jsxs("select",{value:i,onChange:t=>o(t.target.value),style:{padding:"5px"},children:[e.jsx("option",{value:"price-low",children:"Lowest Price"}),e.jsx("option",{value:"price-high",children:"Highest Price"})]})]}),e.jsxs("div",{style:{marginBottom:"15px",color:"#666",display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:["Showing ",c.length," results"]}),e.jsx("button",{onClick:u,style:{background:"none",border:"none",color:"blue",cursor:"pointer",textDecoration:"underline"},children:"Clear Filters"})]}),e.jsx("div",{style:{display:"grid",gap:"8px"},children:c.map(t=>e.jsxs("div",{style:{background:"#f5f5f5",padding:"10px",display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:[t.title," ",e.jsxs("small",{style:{color:"#888"},children:["(",t.category,")"]})]}),e.jsxs("strong",{children:["$",t.price]})]},t.id))})]})}export{P as default};
