import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as o}from"./CodeComparison-B_ysuKRn.js";import{C as s}from"./Challenge-B2Dev4fs.js";import{C as n}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 17 — Custom Hooks"}),e.jsx("h1",{children:"What Are Custom Hooks?"}),e.jsx("p",{className:"lesson-subtitle",children:"Extracting stateful logic for reuse"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Reusability Problem"}),e.jsxs("p",{children:["In React, we know how to reuse UI: we extract it into a Component. If you need the same button in 5 places, you make a ",e.jsx("code",{children:"<Button />"})," component."]}),e.jsxs("p",{children:["But what if you need to reuse ",e.jsx("strong",{children:"Stateful Logic"}),"? For example, in ShopHub, we need to fetch data from our API on the Home page (featured products), the Products page (all products), and the Product Detail page (single product)."]}),e.jsx("p",{children:"If we use the standard approach, we end up copying and pasting this exact same block of code everywhere:"}),e.jsx(t,{language:"jsx",filename:"Repeated Logic (Yuck!)",children:`const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  setLoading(true);
  fetch(url)
    .then(res => res.json())
    .then(json => {
      setData(json);
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
}, [url]);`}),e.jsx("h2",{children:"The Solution: Custom Hooks"}),e.jsxs("p",{children:["A custom hook is simply a JavaScript function that starts with the word ",e.jsx("code",{children:"use"})," and calls other hooks (like ",e.jsx("code",{children:"useState"})," or ",e.jsx("code",{children:"useEffect"}),") inside of it."]}),e.jsx("p",{children:"Custom hooks let you extract the logic above into a single function, dramatically cleaning up your components."}),e.jsx(o,{leftLabel:"Without Custom Hook",rightLabel:"With Custom Hook",leftCode:`function ProductsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // 15 lines of fetch logic here...
  }, []);

  if (loading) return <Loading />;
  return <Grid data={data} />;
}`,rightCode:`function ProductsPage() {
  // Look how clean this is!
  const { data, loading } = useFetch('/products');

  if (loading) return <Loading />;
  return <Grid data={data} />;
}`}),e.jsx("h2",{children:"Important Rules of Custom Hooks"}),e.jsx("h3",{children:"1. They DO NOT share state"}),e.jsxs("p",{children:["If Component A and Component B both call ",e.jsx("code",{children:"useFetch()"}),", they do ",e.jsx("strong",{children:"not"})," share the same `data` state. Custom hooks are a mechanism to reuse stateful ",e.jsx("em",{children:"logic"}),", not state itself. Every time you call a hook, it gets completely independent, isolated state."]}),e.jsx("h3",{children:'2. They must start with "use"'}),e.jsxs("p",{children:["React relies on the ",e.jsx("code",{children:"use..."})," naming convention to know that a function is a hook. If you name it ",e.jsx("code",{children:"fetchData()"})," instead of ",e.jsx("code",{children:"useFetch()"}),", React won't let you use ",e.jsx("code",{children:"useState"})," inside it, and the linter will throw an error."]}),e.jsx("h3",{children:"3. They can use other custom hooks"}),e.jsxs("p",{children:["Hooks are composable! You can build a ",e.jsx("code",{children:"useShopHubProducts"})," hook that internally calls your ",e.jsx("code",{children:"useFetch"})," hook."]}),e.jsx("h2",{children:"Analogy: The Specialized Kitchen Tool"}),e.jsxs("p",{children:["Think of basic React hooks (",e.jsx("code",{children:"useState"}),", ",e.jsx("code",{children:"useEffect"}),") as basic kitchen tools: a knife, a cutting board, a bowl."]}),e.jsx("p",{children:"If you want to make an apple pie, you use those basic tools. If you want to make a fruit salad, you use those same basic tools again."}),e.jsx("p",{children:'A custom hook is like building a specialized "Apple Corer & Slicer" machine. Internally, it still uses a knife and a board (useState and useEffect), but it packages them up into a single, easy-to-use tool designed for a specific job.'}),e.jsxs(n,{type:"tip",children:[e.jsx("strong",{children:"Function vs Hook"}),e.jsx("br",{}),"If your helper function doesn't need to use any React Hooks internally, don't make it a custom hook! Just make it a regular utility function in your ",e.jsx("code",{children:"utils/"})," folder."]}),e.jsx(s,{id:"ch17-1-design-hook",title:"Design a useWindowWidth Hook",description:"Imagine we need to know the width of the user's browser window in multiple components to conditionally render mobile vs desktop menus. Sketch out the shell of a useWindowWidth custom hook.",hint:"You'll need a piece of state to hold the number, and an effect to attach a 'resize' event listener to the window.",difficulty:"medium",answer:`import { useState, useEffect } from 'react';

export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup the listener when component unmounts!
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}`,explanation:"This is a classic custom hook! It abstracts away the messy event listener logic. Now any component can just do `const width = useWindowWidth();` and it will automatically re-render whenever the browser is resized."})]})]})}export{d as default};
