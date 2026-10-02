import{j as e,r}from"./index-fCZyuqB2.js";import{C as s}from"./CodeBlock-y81Z23mq.js";import{C as c}from"./CodeComparison-B_ysuKRn.js";import{C as i}from"./Challenge-B2Dev4fs.js";import{C as d}from"./Callout-B_CeIBza.js";import{I as l}from"./InteractiveDemo-BnwT7BFH.js";function g(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 11 — API & Async React"}),e.jsx("h1",{children:"fetch() in React"}),e.jsx("p",{className:"lesson-subtitle",children:"Getting real data from the internet"})]}),e.jsxs("p",{children:["Up until now, our components have either hardcoded their data or received it as props. But in the real world, ShopHub needs to pull its product inventory from a server database. To do this, we use the browser's built-in ",e.jsx("code",{children:"fetch()"})," API."]}),e.jsxs("p",{children:["You already know ",e.jsx("code",{children:"fetch()"})," and ",e.jsx("code",{children:"async/await"})," from basic JavaScript. Now we're going to put them inside a React component using ",e.jsx("code",{children:"useEffect"}),"."]}),e.jsx("h2",{children:"The React Fetching Pattern"}),e.jsx("p",{children:"There's a very specific pattern you must follow when fetching data inside a React component. Look closely:"}),e.jsx(s,{language:"jsx",filename:"ProductList.jsx",children:`const [products, setProducts] = useState([]);

useEffect(() => {
  // 1. Define an async function inside the effect
  async function loadProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data); // 3. Update state with the results
  }
  
  // 2. Immediately call the function
  loadProducts();
}, []); // 4. Empty array = fetch ONCE on mount`}),e.jsxs(d,{type:"warning",children:[e.jsx("strong",{children:"Why wrap it in a function?"})," You might be tempted to do ",e.jsx("code",{children:"useEffect(async () => { ... })"}),". ",e.jsx("strong",{children:"Do not do this!"})," React requires the useEffect callback to return either nothing or a cleanup function. If you make it ",e.jsx("code",{children:"async"}),", it returns a Promise, which confuses React. Always define the async function ",e.jsx("em",{children:"inside"})," the effect and call it."]}),e.jsx("h2",{children:"The FakeStore API"}),e.jsx("p",{children:"For ShopHub, we're going to use a free mock API called FakeStoreAPI. It provides realistic e-commerce data. Here are the endpoints we'll use:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"https://fakestoreapi.com/products"})," — Get all products"]}),e.jsxs("li",{children:[e.jsx("code",{children:"https://fakestoreapi.com/products/1"})," — Get a single product by ID"]}),e.jsxs("li",{children:[e.jsx("code",{children:"https://fakestoreapi.com/products/category/electronics"})," — Get products by category"]})]}),e.jsx("p",{children:"A single FakeStore product looks like this:"}),e.jsx(s,{language:"json",filename:"API Response",children:`{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest.",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}`}),e.jsx("h2",{children:"Connecting the Data"}),e.jsxs("p",{children:["Once we fetch this array of products and call ",e.jsx("code",{children:"setProducts(data)"}),", React will re-render our component. During that second render, the ",e.jsx("code",{children:"products"})," state is no longer an empty array, and we can ",e.jsx("code",{children:".map()"})," over it to create our ProductCards."]}),e.jsx(c,{leftLabel:"Vanilla JS Fetch",rightLabel:"React Fetch",leftCode:`async function init() {
  const res = await fetch('/api/data');
  const data = await res.json();
  
  const div = document.getElementById('app');
  div.innerHTML = data.map(item => 
    \`<p>\${item.name}</p>\`
  ).join('');
}

init();`,rightCode:`function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    async function init() {
      const res = await fetch('/api/data');
      const json = await res.json();
      setData(json);
    }
    init();
  }, []);
  
  return data.map(item => (
    <p key={item.id}>{item.name}</p>
  ));
}`}),e.jsx(l,{title:"Live FakeStore Fetch",children:e.jsx(h,{})}),e.jsx(i,{id:"ch11_1_fetch_limit",title:"Fetch Limited Products",description:"FakeStoreAPI supports a `limit` query parameter. Write a component that fetches exactly 5 products from `https://fakestoreapi.com/products?limit=5` when the component mounts, and renders their titles.",hint:"Create a state array, use the useEffect pattern with an empty dependency array, and map over the state in your JSX.",answer:`import React, { useState, useEffect } from 'react';

export default function TopFiveProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchTopFive() {
      const response = await fetch('https://fakestoreapi.com/products?limit=5');
      const data = await response.json();
      setProducts(data);
    }
    
    fetchTopFive();
  }, []);

  return (
    <div>
      <h2>Top 5 Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}`,explanation:"We initialize state with an empty array. The useEffect runs once on mount. The async function fetches the data and calls setProducts. When the data arrives, React re-renders the component and outputs the 5 list items.",difficulty:"medium"})]})}function h(){const[t,a]=r.useState(null),o=async()=>{const n=await(await fetch("https://fakestoreapi.com/products/1")).json();a(n)};return e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("button",{onClick:o,style:{padding:"10px 20px",background:"#0066cc",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Fetch Product 1"}),t&&e.jsxs("div",{style:{marginTop:"20px",display:"flex",gap:"20px",alignItems:"center"},children:[e.jsx("img",{src:t.image,alt:t.title,style:{width:"100px"}}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 10px 0"},children:t.title}),e.jsxs("p",{style:{margin:"0",color:"#666",fontWeight:"bold"},children:["$",t.price]})]})]})]})}export{g as default};
