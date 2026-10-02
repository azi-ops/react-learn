import{j as e,r as o}from"./index-fCZyuqB2.js";import{C as p}from"./CodeBlock-y81Z23mq.js";import{S as f}from"./StepByStep-Be1tR1cd.js";import{C as g}from"./Challenge-B2Dev4fs.js";import{C as x}from"./Callout-B_CeIBza.js";import{I as m}from"./InteractiveDemo-BnwT7BFH.js";function P(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 11 — API & Async React"}),e.jsx("h1",{children:"Loading & Error Handling"}),e.jsx("p",{className:"lesson-subtitle",children:"Creating a great user experience when things go wrong (or slow)"})]}),e.jsxs("p",{children:['If you only write code for the "happy path" (the network is instant and the server never fails), your app will feel broken to users on slow connections or when APIs have downtime. Professional React developers always handle the three states of data fetching: ',e.jsx("strong",{children:"Loading"}),", ",e.jsx("strong",{children:"Success"}),", and ",e.jsx("strong",{children:"Error"}),"."]}),e.jsx("h2",{children:"The Three States Pattern"}),e.jsx("p",{children:"We need three separate pieces of state to manage the full lifecycle of a request."}),e.jsx(p,{language:"jsx",filename:"ShopHub.jsx",children:`const [products, setProducts] = useState([]); // The data
const [loading, setLoading] = useState(true); // Is it fetching right now?
const [error, setError] = useState(null); // Did it fail?

useEffect(() => {
  async function loadData() {
    try {
      setLoading(true);   // 1. Start loading
      setError(null);     // 2. Clear any old errors
      
      const response = await fetch('https://fakestoreapi.com/products');
      
      // Check HTTP status! (e.g. 404 or 500)
      if (!response.ok) {
        throw new Error(\`Failed to fetch: \${response.status}\`);
      }
      
      const data = await response.json();
      setProducts(data);  // 3. Success! Set data
    } catch (err) {
      setError(err.message); // 4. Uh oh, something failed
    } finally {
      setLoading(false);  // 5. Always stop loading at the end
    }
  }
  
  loadData();
}, []);`}),e.jsx("h2",{children:"Understanding the Logic"}),e.jsx("p",{children:"Let's break down why we do things this way:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"try/catch/finally:"})," This is standard JavaScript. If anything inside the ",e.jsx("code",{children:"try"})," block fails (like a network timeout), JS jumps to the ",e.jsx("code",{children:"catch"})," block. The ",e.jsx("code",{children:"finally"})," block runs no matter what (success or failure)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"response.ok:"})," ",e.jsx("code",{children:"fetch()"})," does NOT throw an error for bad HTTP codes like 404. It only throws an error if the network itself fails (e.g., the user is offline). We have to manually check ",e.jsx("code",{children:"response.ok"})," and throw an error ourselves."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"setLoading(false) in finally:"})," Whether the fetch succeeded or failed, it's done. We must stop showing the loading spinner. Putting it in ",e.jsx("code",{children:"finally"})," guarantees it runs."]})]}),e.jsx("h2",{children:"Rendering the UI"}),e.jsx("p",{children:"Now that we have these three states, rendering becomes simple using early returns or ternary operators."}),e.jsx(f,{steps:[{title:"1. Handle Loading",code:'if (loading) return <div className="spinner">Loading ShopHub...</div>;',language:"jsx",explanation:"If loading is true, we render a spinner and STOP (return early). The rest of the component doesn't run."},{title:"2. Handle Error",code:'if (error) return <div className="error">Oops: {error} <button onClick={retry}>Retry</button></div>;',language:"jsx",explanation:"If we got an error, show it to the user. Providing a Retry button is a great UX touch!"},{title:"3. Handle Success (Empty or Populated)",code:`if (products.length === 0) return <div>No products found.</div>;
return <ProductGrid products={products} />;`,language:"jsx",explanation:"Finally, we have the data! We might want to check if the array is empty, and otherwise, render our main UI."}]}),e.jsxs(x,{type:"tip",children:[e.jsx("strong",{children:"UX Pro-Tip: Skeletons"}),e.jsx("br",{}),`Instead of a generic "Loading..." text or spinner, modern apps use "Skeleton screens"—greyed out boxes that match the shape of the content that's about to load. It makes the app feel faster!`]}),e.jsx("h2",{children:"Interactive Demo: Forcing an Error"}),e.jsx("p",{children:"Try fetching from a fake broken URL to see the error state in action."}),e.jsx(m,{title:"Robust Fetching",children:e.jsx(j,{})}),e.jsx(g,{id:"ch11_3_product_details",title:"Robust Product Details",description:"Write a complete ProductDetails component that fetches a single product by ID (`https://fakestoreapi.com/products/1`). Implement all three states: loading, error, and success.",hint:"Don't forget the try/catch block, response.ok check, and rendering the three different UI states based on your variables!",answer:`import React, { useState, useEffect } from 'react';

export default function ProductDetails() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        setLoading(true);
        const res = await fetch('https://fakestoreapi.com/products/1');
        if (!res.ok) throw new Error('Could not find product');
        
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-card">
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}`,explanation:"This is the gold standard for fetching data in React. We meticulously manage the loading state, catch potential network or HTTP errors, and conditionally render the correct UI for the user.",difficulty:"hard"})]})}function j(){const[r,n]=o.useState(null),[a,i]=o.useState(!1),[s,c]=o.useState(null),l=async d=>{try{i(!0),c(null),n(null),await new Promise(u=>setTimeout(u,1e3));const t=await fetch(d);if(!t.ok)throw new Error(`HTTP Error ${t.status}`);const h=await t.json();n(h)}catch(t){c(t.message)}finally{i(!1)}};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"10px",marginBottom:"20px"},children:[e.jsx("button",{onClick:()=>l("https://fakestoreapi.com/products/1"),children:"Fetch Success URL"}),e.jsx("button",{onClick:()=>l("https://fakestoreapi.com/broken-url-404"),children:"Fetch Broken URL"})]}),e.jsxs("div",{style:{border:"2px solid #ddd",padding:"20px",minHeight:"100px",display:"flex",alignItems:"center",justifyContent:"center"},children:[a&&e.jsx("p",{style:{color:"blue",fontWeight:"bold"},children:"Spinner: Loading..."}),s&&e.jsxs("div",{style:{color:"red"},children:[e.jsx("strong",{children:"Oops! Failed to load."}),e.jsx("p",{children:s})]}),r&&e.jsxs("div",{children:[e.jsx("strong",{children:"Success!"})," loaded: ",r.title]}),!a&&!s&&!r&&e.jsx("p",{style:{color:"#888"},children:"Ready to fetch."})]})]})}export{P as default};
