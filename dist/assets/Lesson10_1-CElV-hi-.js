import{r as n,j as e}from"./index-fCZyuqB2.js";import{C as r}from"./CodeBlock-y81Z23mq.js";import{C as i}from"./CodeComparison-B_ysuKRn.js";import{C as c}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{S as d}from"./StepByStep-Be1tR1cd.js";import{I as l}from"./InteractiveDemo-BnwT7BFH.js";function j(){const[t,o]=n.useState(0);return n.useEffect(()=>{document.title=`ShopHub — ${t} Products`},[t]),e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 10 — useEffect"}),e.jsx("h1",{children:"What Are Side Effects?"}),e.jsx("p",{className:"lesson-subtitle",children:"Doing things outside of rendering JSX"})]}),e.jsxs("p",{children:["So far, we've focused entirely on ",e.jsx("strong",{children:"rendering UI"}),". Our components take in data (props and state) and output JSX. But what if a component needs to do something else?"]}),e.jsx("h2",{children:"What is a Side Effect?"}),e.jsx("p",{children:'A "side effect" (or just "effect") is anything your component does BESIDES rendering JSX. Common examples include:'}),e.jsxs("ul",{children:[e.jsx("li",{children:"Fetching data from an API"}),e.jsx("li",{children:"Starting or stopping a timer"}),e.jsx("li",{children:"Updating the document title (the text in the browser tab)"}),e.jsxs("li",{children:["Reading or writing to ",e.jsx("code",{children:"localStorage"})]}),e.jsx("li",{children:"Listening to global browser events (like scrolling)"})]}),e.jsx(a,{type:"info",children:'In functional programming terms, a "pure" function only calculates its output based on its inputs, without changing anything in the outside world. React components should generally be pure when they render. Side effects are the exception!'}),e.jsx("h2",{children:"Why Can't We Do These in the Component Body?"}),e.jsxs("p",{children:["You might be wondering: ",e.jsxs("em",{children:[`"Why can't I just call `,e.jsx("code",{children:"fetch()"}),' or update the document title right inside my component function?"']})]}),e.jsxs("p",{children:["Remember that a component's body runs on ",e.jsx("strong",{children:"EVERY render"}),". If you update state, the component re-renders. If a prop changes, it re-renders. If its parent re-renders, it re-renders."]}),e.jsx(r,{language:"jsx",filename:"BrokenComponent.jsx",children:`function ProductList() {
  const [products, setProducts] = useState([]);

  // ❌ DANGER! This will cause an infinite loop!
  fetch('/api/products')
    .then(res => res.json())
    .then(data => {
      // setting state causes a re-render!
      setProducts(data);
    });

  return <div>{/* render products */}</div>;
}`}),e.jsxs("p",{children:["If you put a ",e.jsx("code",{children:"fetch()"})," in the component body that calls ",e.jsx("code",{children:"setProducts()"}),", setting the state causes a re-render. The re-render runs the component body again, which calls ",e.jsx("code",{children:"fetch()"})," again, which calls ",e.jsx("code",{children:"setProducts()"})," again... resulting in an infinite loop that crashes your browser!"]}),e.jsx("h2",{children:"Introducing useEffect"}),e.jsxs("p",{children:["React gives us a special Hook called ",e.jsx("code",{children:"useEffect"})," to handle side effects safely. The core idea is: ",e.jsx("strong",{children:"useEffect runs AFTER the component renders."})]}),e.jsxs("p",{children:['Think of it like a "what to do after class" list. The class (rendering JSX) happens, the students leave (HTML is updated on screen), and ',e.jsx("em",{children:"then"})," you do your side tasks (like grading papers or calling an API)."]}),e.jsx(r,{language:"jsx",filename:"SimpleEffect.jsx",children:`import { useEffect } from 'react';

function ShopHubWelcome() {
  useEffect(() => {
    // This code runs AFTER the component has rendered
    document.title = 'ShopHub — Welcome';
  });

  return <h1>Welcome to ShopHub!</h1>;
}`}),e.jsx("h2",{children:"The Three Forms of useEffect"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"useEffect"})," hook takes two arguments: a function (the effect), and an optional ",e.jsx("strong",{children:"dependency array"}),". The dependency array controls ",e.jsx("em",{children:"when"})," the effect runs."]}),e.jsx(d,{steps:[{title:"No dependency array",code:"useEffect(() => { /* runs after EVERY render */ });",language:"jsx",explanation:"If you don't provide an array at all, the effect runs after every single render. This is rarely what you want, but good to know."},{title:"Empty array []",code:"useEffect(() => { /* runs ONCE */ }, []);",language:"jsx",explanation:"If you provide an empty array, the effect runs exactly ONE time, when the component first mounts (appears on screen). Perfect for initial data fetching."},{title:"Array with dependencies",code:"useEffect(() => { /* runs when deps change */ }, [count]);",language:"jsx",explanation:"If you put variables in the array, the effect will run on the first render, and then again ONLY if one of those variables has changed since the last render."}]}),e.jsx("h2",{children:"Connecting to Vanilla JavaScript"}),e.jsxs("p",{children:["In vanilla JS, you often had to wait for the DOM to be ready before doing things. ",e.jsx("code",{children:"useEffect"})," is somewhat similar to listening for ",e.jsx("code",{children:"DOMContentLoaded"}),", but it's specific to the lifecycle of your React component."]}),e.jsx(i,{leftLabel:"Vanilla JavaScript",rightLabel:"React useEffect",leftCode:`// Wait for page load
document.addEventListener("DOMContentLoaded", () => {
  document.title = "ShopHub loaded";
});`,rightCode:`// Wait for component render
useEffect(() => {
  document.title = "ShopHub loaded";
}, []);`}),e.jsx("h2",{children:"Interactive Demo: Document Title"}),e.jsxs("p",{children:["Try clicking the button below. We are using ",e.jsx("code",{children:"useEffect"})," to update the browser's tab title whenever the count changes!"]}),e.jsx(l,{title:"Document Title Effect",children:e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",textAlign:"center"},children:[e.jsxs("p",{children:["Products in cart: ",t]}),e.jsx("button",{onClick:()=>o(s=>s+1),style:{padding:"8px 16px",background:"#0066cc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Add Product to Cart"}),e.jsx("p",{style:{marginTop:"10px",fontSize:"0.9em",color:"#666"},children:e.jsxs("em",{children:['Look at your browser tab! It should say "ShopHub — ',t,' Products"']})})]})}),e.jsx(c,{id:"ch10_1_title_update",title:"Update the Title!",description:"Write a functional component that accepts a `productCount` prop. Use `useEffect` to change the document title to 'ShopHub | [productCount] Products' whenever the `productCount` changes.",hint:"Don't forget to import useEffect and include the productCount in the dependency array!",answer:`import React, { useEffect } from 'react';

export default function TitleUpdater({ productCount }) {
  useEffect(() => {
    document.title = \`ShopHub | \${productCount} Products\`;
  }, [productCount]); // Run effect when productCount changes

  return (
    <div>
      <h2>Currently tracking {productCount} products in the title.</h2>
    </div>
  );
}`,explanation:"We use useEffect with `productCount` in the dependency array. This guarantees that the title will update on the first render, and exactly when `productCount` changes, rather than on every arbitrary re-render of this component.",difficulty:"easy"})]})}export{j as default};
