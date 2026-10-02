import{j as e,r as o}from"./index-fCZyuqB2.js";import{C as s}from"./CodeBlock-y81Z23mq.js";import{S as d}from"./StepByStep-Be1tR1cd.js";import{C as h}from"./Challenge-B2Dev4fs.js";import{C as p}from"./Callout-B_CeIBza.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";function b(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 12 — Search & Filter"}),e.jsx("h1",{children:"Sorting and Category Filters"}),e.jsx("p",{className:"lesson-subtitle",children:"Organizing your data array before rendering"})]}),e.jsx("p",{children:`Now that we know how to text-search our array, let's add categorical filtering (e.g. "Only show Electronics") and sorting (e.g. "Price: High to Low"). The principles are exactly the same: we use derived state!`}),e.jsx("h2",{children:"Category Filtering"}),e.jsx("p",{children:'To filter by category, we need a piece of state to track what the user selected. If they select "all", we skip the filter.'}),e.jsx(s,{language:"jsx",filename:"CategoryFilter.jsx",children:`const [selectedCategory, setSelectedCategory] = useState('all');

// Derived state for the category
const categoryFilteredProducts = products.filter(product => {
  // If 'all' is selected, return true (keep everything)
  if (selectedCategory === 'all') return true;
  // Otherwise, only keep items that match the selected category
  return product.category === selectedCategory;
});`}),e.jsx("h2",{children:"Sorting Arrays in React"}),e.jsxs("p",{children:["Sorting requires a bit of special attention in React. In JavaScript, the ",e.jsx("code",{children:".sort()"})," method ",e.jsx("strong",{children:"mutates (changes) the original array"}),"."]}),e.jsxs(p,{type:"warning",children:[e.jsx("strong",{children:"Never mutate state directly!"})," If you run ",e.jsx("code",{children:"products.sort()"}),", you are modifying the React state variable behind React's back. This can cause bizarre bugs and UI glitches. Always make a copy of the array first using the spread operator ",e.jsx("code",{children:"[...array]"}),"."]}),e.jsx(s,{language:"jsx",filename:"SortProducts.jsx",children:`const [sortOrder, setSortOrder] = useState('default');

// 1. We spread the array into a NEW array to avoid mutation!
// 2. We chain the .sort() onto the new array
const sortedProducts = [...products].sort((a, b) => {
  if (sortOrder === 'price-low') {
    return a.price - b.price; // Lowest price first
  }
  if (sortOrder === 'price-high') {
    return b.price - a.price; // Highest price first
  }
  if (sortOrder === 'rating') {
    return b.rating.rate - a.rating.rate; // Highest rating first
  }
  return 0; // 'default' - don't sort
});`}),e.jsx("h2",{children:"Building the UI Controls"}),e.jsx("p",{children:"How do we let the user change these state variables? Buttons and Dropdowns!"}),e.jsx(d,{steps:[{title:"Category Buttons",code:`<button onClick={() => setSelectedCategory('electronics')} className={selectedCategory === 'electronics' ? 'active' : ''}>
  Electronics
</button>`,language:"jsx",explanation:"We set the state onClick. Notice how we use a ternary operator to conditionally add an 'active' class if this category is currently selected!"},{title:"Sort Dropdown (Select)",code:`<select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
  <option value="default">Recommended</option>
  <option value="price-low">Price: Low to High</option>
  <option value="price-high">Price: High to Low</option>
</select>`,language:"jsx",explanation:"A standard controlled input. The select's value is tied to state, and changing it updates the state."}]}),e.jsx("h2",{children:"Interactive Demo: Filter & Sort"}),e.jsx(u,{title:"ShopHub Controls",children:e.jsx(x,{})}),e.jsx(h,{id:"ch12_2_rating_filter",title:"Highly Rated Filter",description:"Write a component that receives an array of products. Add a checkbox (or toggle button) that says 'Only show 4+ star ratings'. When toggled on, it should filter out any products with a rating less than 4.0. When off, show all products.",hint:"You need a boolean state: `const [showTopRated, setShowTopRated] = useState(false)`. Then create a derived array that checks this boolean in its filter function!",answer:`import React, { useState } from 'react';

export default function RatingFilter({ products }) {
  const [showTopRated, setShowTopRated] = useState(false);

  // Derived state
  const filteredProducts = products.filter(product => {
    if (showTopRated) {
      return product.rating.rate >= 4.0;
    }
    return true; // Keep all if toggle is off
  });

  return (
    <div>
      <label>
        <input 
          type="checkbox" 
          checked={showTopRated}
          onChange={(e) => setShowTopRated(e.target.checked)}
        />
        Only show highly rated (4.0+)
      </label>

      <ul>
        {filteredProducts.map(p => (
          <li key={p.id}>
            {p.title} - ⭐ {p.rating.rate}
          </li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"This uses a boolean for state. Inside the filter function, if `showTopRated` is true, we enforce the rule `rating >= 4.0`. If it's false, we return `true` to let everything pass through.",difficulty:"medium"})]})}const g=[{id:1,title:"Backpack",price:109.95,cat:"gear"},{id:2,title:"T-Shirt",price:22.3,cat:"clothing"},{id:3,title:"Hard Drive",price:64,cat:"electronics"},{id:4,title:"Monitor",price:399,cat:"electronics"},{id:5,title:"Jacket",price:55.99,cat:"clothing"}];function x(){const[r,l]=o.useState("all"),[i,n]=o.useState("price-low"),c=[...g].filter(t=>r==="all"?!0:t.cat===r).sort((t,a)=>i==="price-low"?t.price-a.price:i==="price-high"?a.price-t.price:0);return e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsxs("div",{style:{display:"flex",gap:"20px",marginBottom:"20px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"Category:"}),e.jsxs("select",{value:r,onChange:t=>l(t.target.value),style:{padding:"5px"},children:[e.jsx("option",{value:"all",children:"All"}),e.jsx("option",{value:"clothing",children:"Clothing"}),e.jsx("option",{value:"electronics",children:"Electronics"}),e.jsx("option",{value:"gear",children:"Gear"})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"Sort By:"}),e.jsxs("select",{value:i,onChange:t=>n(t.target.value),style:{padding:"5px"},children:[e.jsx("option",{value:"price-low",children:"Price: Low to High"}),e.jsx("option",{value:"price-high",children:"Price: High to Low"})]})]})]}),e.jsx("div",{style:{display:"grid",gap:"10px"},children:c.map(t=>e.jsxs("div",{style:{padding:"10px",background:"#f0f8ff",display:"flex",justifyContent:"space-between",borderRadius:"4px"},children:[e.jsx("strong",{children:t.title}),e.jsxs("span",{style:{color:"green",fontWeight:"bold"},children:["$",t.price.toFixed(2)]})]},t.id))})]})}export{b as default};
