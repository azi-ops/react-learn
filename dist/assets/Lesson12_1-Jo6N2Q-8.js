import{j as e,r as o}from"./index-fCZyuqB2.js";import{C as a}from"./CodeBlock-y81Z23mq.js";import{C as c}from"./CodeComparison-B_ysuKRn.js";import{C as l}from"./Challenge-B2Dev4fs.js";import{C as d}from"./Callout-B_CeIBza.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";function j(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 12 — Search & Filter"}),e.jsx("h1",{children:"Building a Search Feature"}),e.jsx("p",{className:"lesson-subtitle",children:"Using derived state to filter data instantly"})]}),e.jsxs("p",{children:["Now that ShopHub has real data from an API, we need to let users search through it. In React, building a live-filtering search bar is incredibly elegant. It relies on a concept called ",e.jsx("strong",{children:"Derived State"}),"."]}),e.jsx("h2",{children:"The Concept: Derived State"}),e.jsxs("p",{children:["A common beginner mistake is to create two separate state variables: one for the ",e.jsx("code",{children:"products"})," and another for the ",e.jsx("code",{children:"filteredProducts"}),"."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Don't do this!"})," If you store the filtered array in state, you have to constantly keep it synchronized with the main products array and the search term. Instead, we compute the filtered results ",e.jsx("em",{children:"on the fly"})," during the render phase."]}),e.jsx(a,{language:"jsx",filename:"ShopHubSearch.jsx",children:`function Shop() {
  const [products, setProducts] = useState([]);     // Fetch from API
  const [searchTerm, setSearchTerm] = useState(''); // Text input

  // DERIVED STATE: Calculated every time the component renders
  // We do NOT use useState for this!
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Search ShopHub..." 
      />
      
      <p>Showing {filteredProducts.length} results</p>
      
      {/* Map over the FILTERED list, not the main list! */}
      {filteredProducts.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}`}),e.jsx("h2",{children:"Why This Works Perfectly"}),e.jsx("p",{children:`Let's trace what happens when a user types "a" in the search box:`}),e.jsxs("ol",{children:[e.jsxs("li",{children:['User types "a". The ',e.jsx("code",{children:"onChange"})," handler calls ",e.jsx("code",{children:'setSearchTerm("a")'}),"."]}),e.jsx("li",{children:"State changed! React triggers a re-render of the component."}),e.jsxs("li",{children:["During the new render, ",e.jsx("code",{children:"searchTerm"}),' is now "a".']}),e.jsxs("li",{children:["The ",e.jsx("code",{children:"products.filter()"}),' runs, checking every product. It returns a new array containing only items with "a" in the title.']}),e.jsxs("li",{children:["The JSX uses this new ",e.jsx("code",{children:"filteredProducts"})," array to render the product cards."]})]}),e.jsxs(d,{type:"info",children:["Because standard array methods like ",e.jsx("code",{children:".filter()"})," are fast, doing this calculation on every keystroke is perfectly fine for hundreds of items!"]}),e.jsx("h2",{children:"Connecting to Vanilla JS"}),e.jsxs("p",{children:["You already know the array ",e.jsx("code",{children:".filter()"})," method. React just takes that exact same vanilla JS logic and makes the UI update automatically."]}),e.jsx(c,{leftLabel:"Vanilla JS Search",rightLabel:"React Search",leftCode:`const input = document.querySelector('input');
const container = document.querySelector('#grid');

input.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  
  // Filter array
  const filtered = products.filter(p => 
    p.title.toLowerCase().includes(term)
  );
  
  // Manually wipe and rebuild DOM
  container.innerHTML = '';
  filtered.forEach(p => {
    // create and append elements
  });
});`,rightCode:`function Search() {
  const [term, setTerm] = useState('');
  
  const filtered = products.filter(p => 
    p.title.toLowerCase().includes(term.toLowerCase())
  );
  
  return (
    <>
      <input 
        value={term} 
        onChange={e => setTerm(e.target.value)} 
      />
      {filtered.map(p => <Card p={p} />)}
    </>
  );
}`}),e.jsx("h2",{children:"Advanced Search Tricks"}),e.jsxs("p",{children:["You can easily upgrade your filter function to search in multiple fields. For example, search the title ",e.jsx("em",{children:"or"})," the description:"]}),e.jsx(a,{language:"jsx",filename:"AdvancedSearch.jsx",children:`const filteredProducts = products.filter(product => {
  const term = searchTerm.toLowerCase();
  const titleMatch = product.title.toLowerCase().includes(term);
  const descMatch = product.description.toLowerCase().includes(term);
  
  return titleMatch || descMatch;
});`}),e.jsx("h2",{children:"Interactive Demo: Live Filter"}),e.jsx(h,{title:"Live Search Demo",children:e.jsx(u,{})}),e.jsx(l,{id:"ch12_1_multi_search",title:"Search by Category",description:"Write a component that takes an array of products. Add a search input. The derived state should filter products where the search term is found in EITHER the product's title OR its category name. Render the resulting array.",hint:"Use the logic shown in 'Advanced Search Tricks'. Remember to convert everything to lowercase to make the search case-insensitive!",answer:`import React, { useState } from 'react';

export default function CatalogSearch({ products }) {
  const [query, setQuery] = useState('');

  const searchResults = products.filter(product => {
    const q = query.toLowerCase();
    return (
      product.title.toLowerCase().includes(q) ||
      product.category.toLowerCase().includes(q)
    );
  });

  return (
    <div>
      <input 
        type="text"
        placeholder="Search title or category..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <p>Found {searchResults.length} items.</p>
      <ul>
        {searchResults.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong> - <small>{p.category}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"This uses derived state exactly as prescribed! We calculate searchResults directly from the query state and the products prop during every render. The UI is guaranteed to stay perfectly in sync with what the user typed.",difficulty:"medium"})]})}const i=[{id:1,title:"Fjallraven Backpack",category:"clothing"},{id:2,title:"Mens Casual T-Shirt",category:"clothing"},{id:3,title:"WD 2TB Hard Drive",category:"electronics"},{id:4,title:"Acer Gaming Monitor",category:"electronics"},{id:5,title:"Silver Dragon Ring",category:"jewelery"}];function u(){const[s,n]=o.useState(""),r=i.filter(t=>t.title.toLowerCase().includes(s.toLowerCase()));return e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("input",{type:"text",value:s,onChange:t=>n(t.target.value),placeholder:"Search products...",style:{width:"100%",padding:"10px",marginBottom:"15px"}}),e.jsxs("p",{style:{color:"#666",fontSize:"0.9em"},children:["Found ",r.length," of ",i.length," items"]}),e.jsxs("ul",{style:{listStyle:"none",padding:0},children:[r.map(t=>e.jsxs("li",{style:{padding:"10px",background:"#f5f5f5",marginBottom:"5px",borderRadius:"4px"},children:[t.title," ",e.jsx("span",{style:{color:"#888",fontSize:"0.8em",float:"right"},children:t.category})]},t.id)),r.length===0&&e.jsx("li",{style:{padding:"10px",color:"red"},children:"No items match your search."})]})]})}export{j as default};
