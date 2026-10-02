import{j as e,r as n}from"./index-fCZyuqB2.js";import{C as r}from"./CodeBlock-y81Z23mq.js";import{C as i}from"./CodeComparison-B_ysuKRn.js";import{C as o}from"./Challenge-B2Dev4fs.js";import{C as c}from"./Callout-B_CeIBza.js";import{S as l}from"./StepByStep-Be1tR1cd.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";function S(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 13 — Lifting State Up"}),e.jsx("h1",{children:"Why Lift State?"}),e.jsx("p",{className:"lesson-subtitle",children:"Solving the sibling communication problem"})]}),e.jsxs("p",{children:["As your app grows, you start breaking it into smaller components. You might put your search input into a ",e.jsx("code",{children:"SearchBar"})," component, and your product mapping into a ",e.jsx("code",{children:"ProductList"})," component. But this creates a huge problem."]}),e.jsx("h2",{children:"The Sibling Problem"}),e.jsxs("p",{children:["In React, data flows ",e.jsx("strong",{children:"down"})," from parent to child via props. Sibling components (components at the same level) cannot talk to each other directly."]}),e.jsx(r,{language:"jsx",filename:"BrokenArchitecture.jsx",children:`function App() {
  return (
    <div>
      <SearchBar />     {/* Has the searchTerm state */}
      <ProductList />   {/* NEEDS the searchTerm to filter products! */}
    </div>
  );
}`}),e.jsxs("p",{children:["If ",e.jsx("code",{children:"searchTerm"})," lives inside ",e.jsx("code",{children:"SearchBar"}),", the ",e.jsx("code",{children:"ProductList"})," can't see it. It's locked inside that component's scope."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Analogy:"})," Imagine two kids (siblings) sitting in the back seat of a car. They refuse to talk directly to each other. If Kid A wants to tell Kid B something, Kid A has to tell Mom (the Parent), and Mom tells Kid B."]}),e.jsx("h2",{children:"The Solution: Lift it UP!"}),e.jsxs("p",{children:["When two components need access to the same state, you must move that state to their ",e.jsx("strong",{children:"closest common ancestor"}),". In this case, the ",e.jsx("code",{children:"App"})," component."]}),e.jsx(i,{leftLabel:"State Too Low",rightLabel:"State Lifted Up",leftCode:`function SearchBar() {
  const [term, setTerm] = useState('');
  return <input onChange={...} />
}

function ProductList() {
  // ERROR: 'term' is undefined here!
  const filtered = products.filter(...)
}`,rightCode:`function App() {
  // 1. Move state here
  const [term, setTerm] = useState('');
  
  return (
    <>
      <SearchBar term={term} setTerm={setTerm} />
      <ProductList term={term} />
    </>
  )
}`}),e.jsxs(c,{type:"info",children:[e.jsx("strong",{children:"Rule of Thumb:"})," State should live in the LOWEST common ancestor that needs it. Don't put everything in ",e.jsx("code",{children:"App"})," if only a small section of the page needs it."]}),e.jsx("h2",{children:"Passing State Down"}),e.jsxs("p",{children:["Once the state is in the parent, we pass the ",e.jsx("em",{children:"value"})," to the component that displays it, and we pass the ",e.jsx("em",{children:"setter function"})," to the component that changes it."]}),e.jsx(l,{steps:[{title:"1. Parent manages state",code:"const [term, setTerm] = useState('');",language:"jsx",explanation:"App.jsx owns the data."},{title:"2. Pass to SearchBar",code:"<SearchBar currentTerm={term} onSearchChange={setTerm} />",language:"jsx",explanation:"We give SearchBar the current text AND the ability to change it."},{title:"3. Pass to ProductList",code:"<ProductList searchTerm={term} />",language:"jsx",explanation:"ProductList only needs to READ the term, so we just pass the value."}]}),e.jsx(h,{title:"Lifted State Visualization",children:e.jsx(d,{})}),e.jsx(o,{id:"ch13_1_cart_location",title:"Where Should Cart State Live?",description:"Imagine ShopHub has a <Navbar> (which displays a cart icon with an item count bubble) and a <Main> area (which displays the <ProductList> where users click 'Add to Cart'). Where should the `cart` state live? Write a simple skeleton structure proving your answer.",hint:"Look for the closest common ancestor of both the Navbar and the ProductList.",answer:`import React, { useState } from 'react';

// The state MUST live in App, because it's the parent of both Navbar and Main
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      {/* Navbar needs to read the cart to show the count */}
      <Navbar cartItemCount={cart.length} />
      
      {/* Main needs the cart AND the ability to change it */}
      <Main cart={cart} setCart={setCart} />
    </div>
  );
}`,explanation:"Because Navbar and Main are siblings, neither can hold the state if they both need it. App is their common parent, so App must own the cart state and pass it down.",difficulty:"easy"})]})}function d(){const[t,s]=n.useState("Type below...");return e.jsxs("div",{style:{border:"2px solid #333",padding:"20px",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Parent Component (App)"}),e.jsxs("p",{children:["State: ",e.jsxs("strong",{children:['"',t,'"']})]}),e.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px"},children:[e.jsxs("div",{style:{flex:1,border:"2px dashed blue",padding:"15px"},children:[e.jsx("h4",{children:"Sibling 1 (Input)"}),e.jsx("input",{value:t,onChange:a=>s(a.target.value),style:{width:"100%",padding:"5px"}}),e.jsxs("small",{children:["Uses ",e.jsx("code",{children:"setLiftedText"})]})]}),e.jsxs("div",{style:{flex:1,border:"2px dashed green",padding:"15px"},children:[e.jsx("h4",{children:"Sibling 2 (Display)"}),e.jsx("div",{style:{fontSize:"1.5em",color:"green"},children:t}),e.jsxs("small",{children:["Uses ",e.jsx("code",{children:"liftedText"})," value"]})]})]})]})}export{S as default};
