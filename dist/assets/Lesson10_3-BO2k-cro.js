import{r as o,j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as i}from"./Challenge-B2Dev4fs.js";import{C as c}from"./Callout-B_CeIBza.js";import{I as l}from"./InteractiveDemo-BnwT7BFH.js";function g(){const[t,r]=o.useState(!1);return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 10 — useEffect"}),e.jsx("h1",{children:"Cleanup & localStorage"}),e.jsx("p",{className:"lesson-subtitle",children:"Tidying up after your effects"})]}),e.jsxs("p",{children:["Sometimes, the side effects we start in ",e.jsx("code",{children:"useEffect"})," need to be stopped when the component disappears. For example, if you start a timer, you need to clear it. If you attach an event listener to the window, you need to remove it."]}),e.jsx("h2",{children:"The Cleanup Function"}),e.jsx("p",{children:"If your effect returns a function, React will run that function when it's time to clean up. This happens in two scenarios:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Right before the effect runs again (due to a dependency change)."}),e.jsx("li",{children:"Right before the component is completely removed from the screen (unmounted)."})]}),e.jsx(n,{language:"jsx",filename:"Timer.jsx",children:`useEffect(() => {
  const timerId = setInterval(() => {
    console.log('Tick!');
  }, 1000);
  
  // This function is returned! React will run it to clean up.
  return () => {
    clearInterval(timerId); // Turn off the timer!
  };
}, []);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Analogy:"})," Cleanup is like turning off the lights when you leave a room. You turn them on when you enter (the effect), and you turn them off when you leave (the cleanup)."]}),e.jsx("h2",{children:"Interactive Demo: Timer Cleanup"}),e.jsx("p",{children:"Toggle the timer component below. If we didn't have a cleanup function, the timer would keep ticking forever in the background even after you hide it!"}),e.jsx(l,{title:"Mounting and Unmounting",children:e.jsxs("div",{style:{textAlign:"center",padding:"20px"},children:[e.jsx("button",{onClick:()=>r(!t),children:t?"Hide Timer Component":"Show Timer Component"}),e.jsx("div",{style:{marginTop:"20px",minHeight:"50px"},children:t?e.jsx(h,{}):e.jsx("p",{style:{color:"#888"},children:"Component is unmounted."})})]})}),e.jsx("h2",{children:"Real World: localStorage"}),e.jsxs("p",{children:["One of the most practical uses for ",e.jsx("code",{children:"useEffect"})," in ShopHub is keeping data in ",e.jsx("code",{children:"localStorage"})," so it survives page refreshes. Let's see how we can persist our shopping cart."]}),e.jsx(n,{language:"jsx",filename:"CartPersist.jsx",children:`function ShopHub() {
  const [cart, setCart] = useState([]);

  // 1. LOAD from localStorage when component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('shophub_cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []); // Empty array: run once on mount

  // 2. SAVE to localStorage whenever the cart changes
  useEffect(() => {
    localStorage.setItem('shophub_cart', JSON.stringify(cart));
  }, [cart]); // Dependency array: run when cart changes

  // ... render cart
}`}),e.jsxs(c,{type:"tip",children:["Notice how we separated the logic into ",e.jsx("strong",{children:"two distinct effects"}),"! One for loading (runs once), and one for saving (runs on changes). It's a best practice to create separate effects for separate concerns, rather than cramming everything into one giant ",e.jsx("code",{children:"useEffect"}),"."]}),e.jsx(i,{id:"ch10_3_localstorage",title:"Persist Sort Order",description:"We want to remember the user's preferred sort order ('price-low', 'price-high', or 'popular'). Write a component that initializes state from localStorage (key: 'sort_order') if it exists, otherwise defaults to 'popular'. Then write an effect that saves the sortOrder to localStorage whenever it changes.",hint:"You can actually initialize state directly using a function: `useState(() => localStorage.getItem('key') || 'default')`. Then use useEffect to save it!",answer:`import React, { useState, useEffect } from 'react';

export default function SortPreference() {
  // Initialize state from localStorage (or use default)
  const [sortOrder, setSortOrder] = useState(() => {
    return localStorage.getItem('sort_order') || 'popular';
  });

  // Save to localStorage whenever sortOrder changes
  useEffect(() => {
    localStorage.setItem('sort_order', sortOrder);
  }, [sortOrder]);

  return (
    <div>
      <label>Sort by: </label>
      <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
        <option value="popular">Popularity</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    </div>
  );
}`,explanation:"By passing a function to useState, we load the initial value synchronously before the first render! Then we use an effect dependent on [sortOrder] to automatically save the user's choice every time they pick a new option from the dropdown.",difficulty:"hard"})]})}function h(){const[t,r]=o.useState(0);return o.useEffect(()=>{const s=setInterval(()=>{r(a=>a+1)},1e3);return()=>clearInterval(s)},[]),e.jsxs("div",{style:{padding:"10px",background:"#e3f2fd",borderRadius:"8px",color:"#0d47a1",fontWeight:"bold"},children:["Timer is running: ",t," seconds"]})}export{g as default};
