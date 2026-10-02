import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as r}from"./CodeComparison-B_ysuKRn.js";import{C as o}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{I as i}from"./InteractiveDemo-BnwT7BFH.js";function c(){let t=0;return e.jsxs("div",{style:{textAlign:"center",padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem"},children:[e.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:t}),e.jsx("button",{className:"btn-secondary",onClick:()=>{t++},children:"+ (broken — check console)"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.5rem"},children:"Count variable changes, but UI never updates"})]})}function g(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 7 — useState"}),e.jsx("h1",{children:"The Problem with Variables"}),e.jsx("p",{className:"lesson-subtitle",children:"Understand WHY React state exists — by seeing what breaks without it."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Why changing a regular JavaScript variable doesn't update the UI"}),e.jsx("li",{children:"How React's rendering cycle works"}),e.jsxs("li",{children:["What problem ",e.jsx("code",{children:"useState"})," is designed to solve"]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 Let's Build a Broken Counter"}),e.jsx("p",{children:"Let's try the most natural approach first — a regular JavaScript variable:"}),e.jsx(n,{language:"jsx",children:`function Counter() {
  let count = 0;  // Regular JavaScript variable

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => {
        count++;                     // Variable changes...
        console.log(count);          // Console shows: 1, 2, 3...
        // But the UI still shows 0! Why?
      }}>
        +1
      </button>
    </div>
  );
}`}),e.jsx(a,{type:"warning",children:"Open your browser console and click the button in the demo below. You'll see the count incrementing in the console — but the UI stays at 0."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Broken Counter Demo"}),e.jsxs(i,{title:"The Broken Counter (variable, no state)",children:[e.jsx(c,{}),e.jsx("p",{style:{marginTop:"1rem",fontSize:"0.875rem",color:"var(--text-muted)"},children:"↑ Click the button and watch the browser console (F12). The variable increments but the display never changes."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🤔 Why Doesn't It Update?"}),e.jsxs("p",{children:["React renders your component by ",e.jsx("strong",{children:"calling the function"}),`. When the function runs, it creates the JSX and React turns it into DOM elements. That's one render — one "photo" of your UI.`]}),e.jsxs("p",{style:{marginTop:"1rem"},children:["When you do ",e.jsx("code",{children:"count++"}),`, you change a local variable. But React has no idea you changed it. React doesn't watch regular variables. So it never calls the function again, never takes a new "photo", and the UI stays the same.`]}),e.jsxs("div",{style:{background:"var(--card-bg)",padding:"1.5rem",borderRadius:"0.75rem",marginTop:"1rem",border:"1px solid var(--border-color)"},children:[e.jsx("h3",{style:{marginBottom:"1rem"},children:"React's Rendering Cycle"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[{step:"1. Component function runs",detail:"React calls your function"},{step:"2. JSX is created",detail:'count = 0, UI shows "0"'},{step:"3. React renders to DOM",detail:"User sees the count"},{step:"4. User clicks button",detail:"count++ runs"},{step:"5. Nothing happens",detail:"React was not told to re-render!"}].map(({step:t,detail:s})=>e.jsxs("div",{style:{display:"flex",gap:"1rem",alignItems:"center"},children:[e.jsx("div",{style:{minWidth:8,height:8,borderRadius:"50%",background:"var(--primary)"}}),e.jsxs("div",{children:[e.jsx("strong",{children:t}),e.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:"0.5rem"},children:["— ",s]})]})]},t))})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:'📸 The "Photo" Analogy'}),e.jsx("p",{children:`React takes a "photo" of your UI each time it renders. Changing a regular variable is like changing the real scene — the old photo doesn't update. To get a new photo, you need to tell React to take one.`}),e.jsxs("p",{style:{marginTop:"1rem"},children:["That's exactly what ",e.jsx("strong",{children:"state"})," does: when you update state, React takes a new photo (re-renders the component with the new value)."]}),e.jsx(r,{leftLabel:"Regular Variable (broken)",rightLabel:"React State (works)",leftCode:`let count = 0;

// Changing it doesn't re-render:
<button onClick={() => count++}>+1</button>

// React never sees this change!`,rightCode:`const [count, setCount] = useState(0);

// setCount TELLS React to re-render:
<button onClick={() => setCount(count + 1)}>+1</button>

// React re-renders, count is now 1 ✅`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub Real Example"}),e.jsx("p",{children:`Imagine trying to build a cart without state. Every time a user clicks "Add to Cart", you'd update a variable — but the cart count in the navbar would never change:`}),e.jsx(n,{language:"jsx",children:`// ❌ Broken — cart never shows in UI
let cartItems = [];

function handleAddToCart(product) {
  cartItems.push(product);   // Array changes...
  // But Navbar still shows "Cart (0)" because React didn't re-render!
}

// ✅ Fixed with state (next lesson)
const [cartItems, setCartItems] = useState([]);

function handleAddToCart(product) {
  setCartItems([...cartItems, product]); // React knows to re-render!
  // Navbar now shows "Cart (1)" ✅
}`})]}),e.jsx(o,{id:"7-1-predict",title:"Predict the Output",description:"Without running it, predict what this code does. What will the user see when they click the button 3 times? Why? Then explain how you'd fix it.",hint:"The let variable changes, but React doesn't know about it. What would make React re-render?",difficulty:"easy",answer:`// The component always shows "Favorites: 0" no matter how many times
// you click, because React never re-renders.
// The 'favorites' variable changes in memory, but React doesn't know!

// ❌ Broken:
function FavoriteCount() {
  let favorites = 0;
  return (
    <div>
      <p>Favorites: {favorites}</p>
      <button onClick={() => favorites++}>♡</button>
    </div>
  );
}

// ✅ Fixed with useState:
function FavoriteCount() {
  const [favorites, setFavorites] = useState(0);
  return (
    <div>
      <p>Favorites: {favorites}</p>
      <button onClick={() => setFavorites(favorites + 1)}>♡</button>
    </div>
  );
}`,explanation:"The broken version always shows 0 because React only renders the component once. The variable changes but React never re-renders. With useState, calling setFavorites() signals React to re-render with the new value."})]})}export{g as default};
