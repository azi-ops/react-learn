import{j as e,r as i}from"./index-fCZyuqB2.js";import{C as d}from"./Challenge-B2Dev4fs.js";import{C as l}from"./Callout-B_CeIBza.js";import{S as c}from"./StepByStep-Be1tR1cd.js";import{I as u}from"./InteractiveDemo-BnwT7BFH.js";import"./CodeBlock-y81Z23mq.js";function h(){const[r,t]=i.useState("idle"),[o,s]=i.useState([]),n=a=>{t("loading"),setTimeout(()=>{a==="success"?(s([{id:1,title:"Wireless Headphones",price:79.99},{id:2,title:"Smart Watch",price:199.99}]),t("success")):t("error")},1500)};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"0.75rem",marginBottom:"1rem",flexWrap:"wrap"},children:[e.jsx("button",{className:"btn",onClick:()=>n("success"),children:"Simulate Success"}),e.jsx("button",{className:"btn-secondary",onClick:()=>n("error"),children:"Simulate Error"}),e.jsx("button",{className:"btn-secondary",onClick:()=>{t("idle"),s([])},children:"Reset"})]}),r==="idle"&&e.jsx("p",{style:{color:"var(--text-muted)"},children:"Click a button above to simulate a data fetch."}),r==="loading"&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",color:"var(--text-muted)"},children:[e.jsx("div",{style:{width:20,height:20,border:"3px solid var(--border-color)",borderTopColor:"var(--primary)",borderRadius:"50%",animation:"spin 0.8s linear infinite"}}),"Loading products…"]}),r==="error"&&e.jsxs("div",{style:{color:"var(--error)",padding:"1rem",border:"1px solid var(--error)",borderRadius:"0.5rem"},children:["❌ Failed to load products. ",e.jsx("button",{style:{color:"var(--primary)",background:"none",border:"none",cursor:"pointer",textDecoration:"underline"},onClick:()=>n("success"),children:"Retry"})]}),r==="success"&&o.map(a=>e.jsxs("div",{style:{padding:"0.75rem",background:"var(--bg-color)",borderRadius:"0.5rem",marginBottom:"0.5rem"},children:[a.title," — $",a.price]},a.id))]})}function j(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 8 — Conditional Rendering"}),e.jsx("h1",{children:"Loading & Error States"}),e.jsx("p",{className:"lesson-subtitle",children:"Every data-fetching component needs three states — here's how to build them all."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The three states of any data-fetching component: loading, error, success"}),e.jsx("li",{children:"How to show a loading indicator"}),e.jsx("li",{children:"How to show a meaningful error message with a retry button"}),e.jsx("li",{children:"The pattern used in every real React application"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 Why Loading States Matter"}),e.jsx("p",{children:"When you fetch data from an API, it takes time. Without a loading state, the user sees a blank page and doesn't know if the app is working. With a loading state, they see feedback immediately."}),e.jsxs("p",{style:{marginTop:"1rem"},children:["Every data-fetching component in a real app has exactly ",e.jsx("strong",{children:"three states"}),":"]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"1rem",marginTop:"1rem"},children:[{icon:"⏳",label:"Loading",desc:"Waiting for data",color:"var(--warning)"},{icon:"✅",label:"Success",desc:"Data arrived, show it",color:"var(--success)"},{icon:"❌",label:"Error",desc:"Something failed",color:"var(--error)"}].map(({icon:r,label:t,desc:o,color:s})=>e.jsxs("div",{style:{padding:"1rem",borderRadius:"0.5rem",border:`1px solid ${s}`,background:"var(--bg-color)"},children:[e.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"0.5rem"},children:r}),e.jsx("strong",{style:{color:s},children:t}),e.jsx("p",{style:{color:"var(--text-muted)",fontSize:"0.875rem",marginTop:"0.25rem"},children:o})]},t))})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 The Complete Pattern"}),e.jsx(c,{steps:[{title:"Step 1: Set up state variables",language:"jsx",code:`const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);  // Start true!
const [error, setError] = useState(null);`,explanation:"loading starts as true because data isn't ready yet. error starts as null (no error). products starts empty."},{title:"Step 2: Fetch with loading/error handling",language:"jsx",code:`useEffect(() => {
  async function loadProducts() {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://fakestoreapi.com/products');
      if (!res.ok) throw new Error('Failed to load products');
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);  // Always runs, success or fail
    }
  }
  loadProducts();
}, []);`,explanation:"try/catch handles errors. finally runs in both cases — it sets loading to false whether the fetch succeeded or failed."},{title:"Step 3: Render based on state",language:"jsx",code:`function ProductList() {
  // ... state and useEffect above ...

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner" />
        <p>Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <p>⚠️ {error}</p>
        <button onClick={reload}>Try Again</button>
      </div>
    );
  }

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-grid">
      {products.map(p => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}`,explanation:"Early returns for each state. The final return only runs when data is available and there are no errors."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo — Simulated Fetch"}),e.jsx(u,{title:"Loading / Error / Success States",children:e.jsx(h,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsxs(l,{type:"warning",children:[e.jsx("strong",{children:"Don't forget to handle errors."})," A fetch that fails silently leaves users staring at a loading spinner forever. Always wrap fetches in try/catch and show a meaningful error message."]}),e.jsxs(l,{type:"warning",children:[e.jsx("strong",{children:"Always set loading to false in finally."})," If you only set it in the try block, an error will leave loading as true and the spinner will spin forever!"]})]}),e.jsx(d,{id:"8-2-retry",title:"Loading State with Retry",description:"Create a ProductList component that has loading, error, and success states. Add a 'Retry' button on the error state that re-triggers the fetch. Use the pattern from the lesson.",hint:"Extract the fetch logic into a function like loadProducts(). Call it in useEffect and also when the Retry button is clicked.",difficulty:"medium",answer:`function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch('https://fakestoreapi.com/products?limit=4');
      if (!res.ok) throw new Error('Server error: ' + res.status);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;

  if (error) return (
    <div>
      <p style={{ color: 'red' }}>Error: {error}</p>
      <button onClick={loadProducts}>Retry</button>
    </div>
  );

  return (
    <div>
      {products.map(p => (
        <div key={p.id}>{p.title} - \${p.price}</div>
      ))}
    </div>
  );
}`,explanation:"Extracting fetch logic into a named function (loadProducts) lets us call it both from useEffect (on mount) and from the Retry button's onClick. This is cleaner than duplicating the fetch code."})]})}export{j as default};
