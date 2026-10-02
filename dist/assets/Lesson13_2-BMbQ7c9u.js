import{j as e,r as s}from"./index-fCZyuqB2.js";import{C as o}from"./CodeBlock-y81Z23mq.js";import{C as i}from"./Challenge-B2Dev4fs.js";import{C as c}from"./Callout-B_CeIBza.js";import{I as l}from"./InteractiveDemo-BnwT7BFH.js";function x(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 13 — Lifting State Up"}),e.jsx("h1",{children:"Sibling Communication"}),e.jsx("p",{className:"lesson-subtitle",children:"Passing functions as props"})]}),e.jsxs("p",{children:["When you lift state up, you need a way for the child component to update the parent's state. To do this, we pass the ",e.jsx("code",{children:"set"})," function (or a custom wrapper function) down as a prop."]}),e.jsx("h2",{children:"Passing the Setter"}),e.jsx("p",{children:"Let's look at the complete implementation of our SearchBar communicating with our ProductList."}),e.jsx(o,{language:"jsx",filename:"ShopHub.jsx",children:`function App() {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="app">
      {/* We pass the setter function as a prop called 'onSearch' */}
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      
      {/* We pass the value to the list */}
      <ProductList searchTerm={searchTerm} />
    </div>
  );
}

// Child 1: The Input
function SearchBar({ searchTerm, onSearch }) {
  return (
    <input 
      value={searchTerm}
      // We call the parent's function when the input changes!
      onChange={(e) => onSearch(e.target.value)} 
    />
  );
}

// Child 2: The Display
function ProductList({ searchTerm }) {
  // ... filter and render
}`}),e.jsx("h2",{children:"Custom Wrapper Functions"}),e.jsxs("p",{children:["Sometimes you don't want to pass the raw ",e.jsx("code",{children:"setState"})," function. You want the parent to do some extra logic before updating the state. You can pass a custom function instead!"]}),e.jsx(o,{language:"jsx",filename:"CustomFunction.jsx",children:`function App() {
  const [category, setCategory] = useState('all');
  
  // Custom function
  const handleCategoryChange = (newCat) => {
    console.log("Changing to:", newCat);
    setCategory(newCat);
    // Maybe trigger an analytics event here!
  };
  
  return <CategoryBar onSelect={handleCategoryChange} />;
}`}),e.jsxs(c,{type:"tip",children:[e.jsx("strong",{children:"Naming Convention:"})," It is standard React convention to name the prop on the child starting with ",e.jsx("code",{children:"on..."})," (e.g., ",e.jsx("code",{children:"onSearch"}),", ",e.jsx("code",{children:"onSelect"}),"), and the actual function in the parent starting with ",e.jsx("code",{children:"handle..."})," (e.g., ",e.jsx("code",{children:"handleSearch"}),", ",e.jsx("code",{children:"handleCategorySelect"}),")."]}),e.jsx("h2",{children:"When State Lifting Hurts (Prop Drilling)"}),e.jsx("p",{children:"This pattern is fantastic, but it has a limit. What if the component that needs the state is nested 5 levels deep?"}),e.jsx("pre",{className:"mermaid",children:`graph TD
      A[App: state lives here] --> B[Layout]
      B --> C[Sidebar]
      C --> D[CategoryMenu]
      D --> E[FilterButton: needs state!]
      `}),e.jsxs("p",{children:["You would have to pass the prop through ",e.jsx("code",{children:"Layout"}),", ",e.jsx("code",{children:"Sidebar"}),", and ",e.jsx("code",{children:"CategoryMenu"})," even though none of those components care about it. This is called ",e.jsx("strong",{children:"Prop Drilling"}),", and we'll solve it in Chapter 14 with Context!"]}),e.jsx("h2",{children:"Interactive Demo: Passing Functions"}),e.jsx(l,{title:"Parent/Child Communication",children:e.jsx(h,{})}),e.jsx(i,{id:"ch13_2_sort_sibling",title:"SortBar Sibling",description:"Write an App component that manages a `sortOrder` state. Render two children: `<SortBar />` (which should contain a select dropdown to change the sort order) and `<ProductList />` (which should display the current sort order text). Implement all three components.",hint:"App holds state. SortBar receives a function prop. ProductList receives a value prop.",answer:`import React, { useState } from 'react';

function SortBar({ currentSort, onSortChange }) {
  return (
    <select value={currentSort} onChange={e => onSortChange(e.target.value)}>
      <option value="price">Price</option>
      <option value="rating">Rating</option>
    </select>
  );
}

function ProductList({ currentSort }) {
  return <p>I am currently rendering sorted by: {currentSort}</p>;
}

export default function App() {
  const [sortOrder, setSortOrder] = useState('price');
  
  return (
    <div>
      <h2>ShopHub Pipeline</h2>
      <SortBar currentSort={sortOrder} onSortChange={setSortOrder} />
      <ProductList currentSort={sortOrder} />
    </div>
  );
}`,explanation:"SortBar receives `onSortChange` and hooks it up to the select's `onChange`. When the user picks an option, the parent's state updates, which causes App to re-render, passing the new `sortOrder` down to ProductList.",difficulty:"medium"})]})}function h(){const[r,t]=s.useState("#eee");return e.jsxs("div",{style:{padding:"20px",background:r,border:"1px solid #ccc"},children:[e.jsx("h3",{children:"Parent Component"}),e.jsx("p",{children:"My background color is managed by my state!"}),e.jsxs("div",{style:{display:"flex",gap:"10px"},children:[e.jsx(n,{targetColor:"#ffcccc",label:"Red",onColorPick:t}),e.jsx(n,{targetColor:"#ccffcc",label:"Green",onColorPick:t}),e.jsx(n,{targetColor:"#ccccff",label:"Blue",onColorPick:t})]})]})}function n({targetColor:r,label:t,onColorPick:a}){return e.jsxs("button",{onClick:()=>a(r),style:{padding:"10px",background:"white",border:"1px solid black",cursor:"pointer"},children:["Make Parent ",t]})}export{x as default};
