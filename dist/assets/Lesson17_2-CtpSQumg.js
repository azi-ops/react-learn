import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as r}from"./Challenge-B2Dev4fs.js";import{C as s}from"./Callout-B_CeIBza.js";import{S as n}from"./StepByStep-Be1tR1cd.js";function u(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 17 — Custom Hooks"}),e.jsx("h1",{children:"Building useFetch"}),e.jsx("p",{className:"lesson-subtitle",children:"Creating a robust data fetching hook"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Constructing our useFetch hook"}),e.jsxs("p",{children:["Let's build the ",e.jsx("code",{children:"useFetch"})," hook we've been talking about. We want it to be robust: it needs to handle the data, loading states, and potential API errors."]}),e.jsx(n,{steps:[{title:"1. The Setup",code:`import { useState, useEffect } from 'react';

export function useFetch(url) {
  // Set up the three pieces of state we need
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Return them so components can use them
  return { data, loading, error };
}`,language:"jsx",explanation:"We start by defining our state and returning it as an object."},{title:"2. The Effect",code:`export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If no URL is provided, do nothing
    if (!url) return;
    
    setLoading(true);
    
    fetch(url)
      .then(res => {
        if (!res.ok) throw new Error('Network error');
        return res.json();
      })
      .then(json => {
        setData(json);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]); // Re-run if the URL changes

  return { data, loading, error };
}`,language:"jsx",explanation:"We add the useEffect block that actually makes the network request. Notice we depend on [url]."}]}),e.jsx("h2",{children:'The "Unmounted Component" Warning'}),e.jsx("p",{children:"The code above works, but it has a hidden bug. Imagine this scenario:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"User clicks to view a Product Detail page."}),e.jsxs("li",{children:[e.jsx("code",{children:"useFetch"})," fires the API request (which takes 2 seconds)."]}),e.jsx("li",{children:'After 1 second, the user clicks the "Back" button, leaving the page.'}),e.jsx("li",{children:"The Product Detail component unmounts (is destroyed)."}),e.jsxs("li",{children:["At 2 seconds, the API request finishes, and calls ",e.jsx("code",{children:"setData(json)"}),"."]})]}),e.jsxs("p",{children:["React will throw a warning: ",e.jsx("em",{children:`"Can't perform a React state update on an unmounted component."`}),"We are trying to update state on a component that no longer exists!"]}),e.jsx("h3",{children:"Fixing it with a Cleanup Flag"}),e.jsx("p",{children:"We can fix this by using a boolean flag inside our effect, and returning a cleanup function."}),e.jsx(t,{language:"jsx",filename:"hooks/useFetch.js (Final Version)",children:`import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    
    // 1. Create a flag
    let isCancelled = false;
    
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Error ' + res.status);
        const json = await res.json();
        
        // 2. Only update state if the component is still mounted!
        if (!isCancelled) {
          setData(json);
          setError(null);
        }
      } catch (err) {
        if (!isCancelled) setError(err.message);
      } finally {
        if (!isCancelled) setLoading(false);
      }
    };
    
    fetchData();

    // 3. Cleanup function runs when component unmounts
    return () => {
      isCancelled = true;
    };
  }, [url]);

  return { data, loading, error };
}`}),e.jsxs(s,{type:"info",children:["In modern React, instead of the boolean flag, developers often use the ",e.jsx("code",{children:"AbortController"})," API to literally cancel the network request in-flight. Both approaches solve the problem, but AbortController saves network bandwidth too!"]}),e.jsx("h2",{children:"Using the Hook in ShopHub"}),e.jsx("p",{children:"Now that we have this powerful tool, look how easy our components become:"}),e.jsx(t,{language:"jsx",filename:"pages/ProductsPage.jsx",children:`import { useFetch } from '../hooks/useFetch';
import ProductGrid from '../components/features/ProductGrid';
import ErrorMessage from '../components/ui/ErrorMessage';
import LoadingSpinner from '../components/ui/LoadingSpinner';

function ProductsPage() {
  // Destructure the values from our custom hook
  const { data: products, loading, error } = useFetch('https://fakestoreapi.com/products');

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="products-page">
      <h1>All Products</h1>
      {/* We know products exists here because loading is false */}
      <ProductGrid products={products} />
    </div>
  );
}`}),e.jsx(r,{id:"ch17-2-refetch",title:"Add a Refetch Feature",description:"Sometimes we want to manually reload the data (e.g., a 'Refresh' button). Modify the return statement of useFetch to also include a 'refetch' function.",hint:"You don't need to copy the whole fetch logic. Can you use a piece of state to trigger the useEffect to run again?",difficulty:"hard",answer:`import { useState, useEffect } from 'react';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Create a dummy state just to trigger re-renders
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    // Changing this state will cause a re-render...
    setTrigger(prev => prev + 1);
  };

  useEffect(() => {
    // ...and adding 'trigger' to the dependency array makes the effect run again!
    // (insert the rest of the fetch logic here)
  }, [url, trigger]);

  // Return the new function alongside the data
  return { data, loading, error, refetch };
}`,explanation:"By adding a dummy state variable 'trigger' and including it in the useEffect dependency array, we can force the effect to re-run simply by updating that state, effectively giving us a manual 'refetch' capability!"})]})]})}export{u as default};
