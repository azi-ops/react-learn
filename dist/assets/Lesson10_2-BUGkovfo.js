import{r as s,j as e}from"./index-fCZyuqB2.js";import{C as a}from"./CodeBlock-y81Z23mq.js";import{C as h}from"./Challenge-B2Dev4fs.js";import{C as u}from"./Callout-B_CeIBza.js";import{I as f}from"./InteractiveDemo-BnwT7BFH.js";function j(){const[r,o]=s.useState(""),[n,i]=s.useState("Electronics"),[l,c]=s.useState([]);return s.useEffect(()=>{c(t=>[...t,`Effect ran! searchTerm: "${r}", category: "${n}"`])},[r,n]),e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 10 — useEffect"}),e.jsx("h1",{children:"The Dependency Array"}),e.jsx("p",{className:"lesson-subtitle",children:"Controlling WHEN your effects run"})]}),e.jsxs("p",{children:["In the previous lesson, we saw that the dependency array controls when ",e.jsx("code",{children:"useEffect"})," executes. Let's look much closer at how this works, because it's the source of 90% of bugs when learning React!"]}),e.jsx("h2",{children:"How Dependencies Work"}),e.jsxs("p",{children:["When React renders your component, it looks at the dependency array you provided to ",e.jsx("code",{children:"useEffect"}),". It compares the values in the array to the values from the ",e.jsx("em",{children:"previous"})," render. If ",e.jsx("strong",{children:"any"})," value has changed (using strict equality ",e.jsx("code",{children:"==="}),"), React runs the effect again."]}),e.jsx(a,{language:"jsx",filename:"ShopHub.jsx",children:`// 1. Fetch products ONCE when the app loads
useEffect(() => {
  fetchProducts();
}, []); // Empty array = never changes = runs only once

// 2. Fetch results whenever the user types
useEffect(() => {
  fetchResults(searchTerm);
}, [searchTerm]); // Runs on mount AND when searchTerm changes

// 3. Update the UI when category OR search changes
useEffect(() => {
  filterProducts(category, searchTerm);
}, [category, searchTerm]); // Runs when EITHER value changes`}),e.jsx("h2",{children:"Common Mistake: Missing Dependencies"}),e.jsx("p",{children:"A very common trap is using a state variable or prop inside your effect, but forgetting to put it in the dependency array."}),e.jsx(a,{language:"jsx",filename:"BadEffect.jsx",children:`function SearchResults({ searchTerm }) {
  // ❌ WRONG: searchTerm is used inside, but not in the array
  useEffect(() => {
    fetchResults(searchTerm);
  }, []); // Claims it has no dependencies!

  // ✅ RIGHT:
  useEffect(() => {
    fetchResults(searchTerm);
  }, [searchTerm]);
}`}),e.jsxs(u,{type:"warning",children:[e.jsx("strong",{children:"The Golden Rule of useEffect:"})," If your effect uses a value from your component (like props, state, or derived variables), it ",e.jsx("strong",{children:"must"})," be included in the dependency array! If you lie to React about your dependencies, you will end up with stale data and confusing bugs."]}),e.jsx("h2",{children:'The "Stale Closure" Problem'}),e.jsx("p",{children:'Why is it a big deal if you miss a dependency? Because of how JavaScript closures work. The effect function "captures" the variables exactly as they were during that specific render.'}),e.jsx("p",{children:"If you don't list a dependency, React won't re-run the effect when that variable changes. If the old effect runs later (e.g., inside a timer), it will still be looking at the old, stale version of the variable from the first render!"}),e.jsx("h2",{children:"Interactive Demo: Dependency Array in Action"}),e.jsxs("p",{children:["Try typing in the search box or changing the category. Notice how the effect runs ",e.jsx("em",{children:"only"})," when those specific values change."]}),e.jsx(f,{title:"Dependency Array Viewer",children:e.jsxs("div",{style:{display:"flex",gap:"20px",flexDirection:"column"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"Search Term:"}),e.jsx("input",{type:"text",value:r,onChange:t=>o(t.target.value),placeholder:"Type here...",style:{padding:"8px",width:"100%"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"5px"},children:"Category:"}),e.jsxs("select",{value:n,onChange:t=>i(t.target.value),style:{padding:"8px",width:"100%"},children:[e.jsx("option",{value:"Electronics",children:"Electronics"}),e.jsx("option",{value:"Clothing",children:"Clothing"}),e.jsx("option",{value:"Books",children:"Books"})]})]}),e.jsxs("div",{style:{background:"#f5f5f5",padding:"10px",maxHeight:"150px",overflowY:"auto",fontFamily:"monospace"},children:[e.jsx("strong",{children:"Effect Execution Log:"}),e.jsx("ul",{style:{margin:0,paddingLeft:"20px"},children:l.map((t,d)=>e.jsx("li",{children:t},d))}),e.jsx("button",{onClick:()=>c([]),style:{marginTop:"10px",fontSize:"12px"},children:"Clear Logs"})]})]})}),e.jsx(h,{id:"ch10_2_product_fetcher",title:"Fetch Product Details",description:"Write a complete component called ProductFetcher. It should have a selectedProductId state (starting at 1). When this ID changes, it should simulate fetching the new product by logging 'Fetching product [selectedProductId]' to the console.",hint:"You'll need a state variable, an effect that depends on it, and a way to change the state (like a button) to prove it works.",answer:`import React, { useState, useEffect } from 'react';

export default function ProductFetcher() {
  const [selectedProductId, setSelectedProductId] = useState(1);

  // The effect MUST have selectedProductId in its dependency array
  useEffect(() => {
    console.log(\`Fetching product \${selectedProductId}\`);
    // In a real app, you'd fetch data here
  }, [selectedProductId]); 

  return (
    <div>
      <h3>Current Product ID: {selectedProductId}</h3>
      <button onClick={() => setSelectedProductId(prev => prev + 1)}>
        Next Product
      </button>
    </div>
  );
}`,explanation:"By including selectedProductId in the dependency array, React ensures the console.log (or real fetch) runs precisely when the ID changes. Without it, the effect would either run only once (if array was empty) or on every single render (if array was missing).",difficulty:"medium"})]})}export{j as default};
