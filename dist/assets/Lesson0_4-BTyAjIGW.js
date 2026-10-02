import{j as e,r as l}from"./index-fCZyuqB2.js";import{C as m}from"./CodeBlock-y81Z23mq.js";import{C as b}from"./CodeComparison-B_ysuKRn.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";import{C as f}from"./Challenge-B2Dev4fs.js";import{P as y}from"./PracticeProject-aOb4DaIe.js";function x(){const[d,c]=l.useState(0),[a,u]=l.useState(["Buy milk","Learn React"]),[n,o]=l.useState(""),[s,p]=l.useState({}),t=()=>{n.trim()&&(u(r=>[...r,n.trim()]),o(""))};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1rem"},children:[e.jsxs("div",{style:{padding:"1rem",background:"#1a1a2e",borderRadius:"0.5rem",border:"1px solid #ff4444"},children:[e.jsx("p",{style:{margin:"0 0 0.75rem",fontSize:"0.75rem",color:"#ff6666",fontWeight:700},children:"VANILLA JS (manual DOM)"}),e.jsx("pre",{style:{margin:0,fontSize:"0.75rem",color:"#ccc",lineHeight:1.6},children:`// You write this:
const btn = document.querySelector('#addBtn');
btn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  list.appendChild(li);
  counter.textContent = ++count;
  input.value = '';
});`})]}),e.jsxs("div",{style:{padding:"1rem",background:"#1a2e1a",borderRadius:"0.5rem",border:"1px solid #44ff88"},children:[e.jsx("p",{style:{margin:"0 0 0.75rem",fontSize:"0.75rem",color:"#66ff99",fontWeight:700},children:"REACT (automatic updates)"}),e.jsx("pre",{style:{margin:0,fontSize:"0.75rem",color:"#ccc",lineHeight:1.6},children:`// You write this:
const addItem = () => {
  setItems([...items, input]);
  setInput('');
};
// React updates the DOM for you!`})]})]}),e.jsxs("div",{style:{marginTop:"1rem",padding:"1rem",background:"var(--bg-color)",borderRadius:"0.5rem",border:"1px solid var(--border-color)"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:"✅ Both produce the same result. React's approach scales better:"}),e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"0.5rem"},children:[e.jsx("input",{value:n,onChange:r=>o(r.target.value),onKeyDown:r=>r.key==="Enter"&&t(),placeholder:"Add to-do...",style:{flex:1,padding:"0.375rem",border:"1px solid var(--border-color)",borderRadius:"0.25rem",background:"var(--card-bg)",color:"var(--text-color)",fontSize:"0.85rem"}}),e.jsx("button",{onClick:t,className:"btn",style:{fontSize:"0.85rem"},children:"Add"})]}),e.jsx("ul",{style:{margin:0,paddingLeft:"1.25rem"},children:a.map((r,i)=>e.jsxs("li",{style:{fontSize:"0.875rem",marginBottom:"0.2rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[r,e.jsx("button",{onClick:()=>u(a.filter((C,g)=>g!==i)),style:{background:"none",border:"none",color:"var(--error)",cursor:"pointer",fontSize:"0.75rem"},children:"✕"})]},i))}),e.jsxs("p",{style:{margin:"0.5rem 0 0",fontSize:"0.8rem",color:"var(--text-muted)"},children:[a.length," item",a.length!==1?"s":""]})]})]})}function v(){const[d,c]=l.useState([]),[a,u]=l.useState(""),n=(o,s="")=>c(p=>[`${o}${s?": "+s:""}`,...p].slice(0,8));return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"0.75rem",flexWrap:"wrap"},children:[e.jsx("button",{onClick:()=>n("click"),onMouseEnter:()=>n("mouseenter"),onMouseLeave:()=>n("mouseleave"),className:"btn",style:{fontSize:"0.875rem"},children:"Hover & Click Me"}),e.jsx("input",{value:a,onChange:o=>{u(o.target.value),n("change",`"${o.target.value}"`)},onFocus:()=>n("focus"),onBlur:()=>n("blur"),onKeyDown:o=>n("keydown",o.key),placeholder:"Type here...",style:{padding:"0.375rem 0.75rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)",fontSize:"0.85rem"}})]}),e.jsxs("div",{style:{background:"var(--bg-color)",border:"1px solid var(--border-color)",borderRadius:"0.5rem",padding:"0.625rem",minHeight:"80px"},children:[e.jsx("p",{style:{margin:"0 0 0.25rem",fontSize:"0.75rem",color:"var(--text-muted)"},children:"Events log (newest first):"}),d.length===0?e.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:"Interact above to see events..."}):d.map((o,s)=>e.jsxs("p",{style:{margin:"0.1rem 0",fontSize:"0.8rem",color:s===0?"var(--success)":"var(--text-muted)",opacity:1-s*.1},children:["→ ",o]},s))]})]})}function k(){const[d,c]=l.useState([{id:1,text:"Learn HTML & CSS",done:!0},{id:2,text:"Master JavaScript",done:!1},{id:3,text:"Build a React app",done:!1}]),[a,u]=l.useState(""),n=()=>{a.trim()&&(c(t=>[...t,{id:Date.now(),text:a.trim(),done:!1}]),u(""))},o=t=>c(r=>r.map(i=>i.id===t?{...i,done:!i.done}:i)),s=t=>c(r=>r.filter(i=>i.id!==t)),p=d.filter(t=>t.done).length;return e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:300,background:"#fff",borderRadius:"0.75rem",overflow:"hidden",boxShadow:"0 2px 12px rgba(0,0,0,0.1)"},children:[e.jsxs("div",{style:{background:"#3b82f6",padding:"0.875rem 1rem",color:"#fff"},children:[e.jsx("h3",{style:{margin:0,fontSize:"1rem"},children:"📋 To-Do List"}),e.jsxs("p",{style:{margin:"0.25rem 0 0",fontSize:"0.8rem",opacity:.8},children:[p,"/",d.length," done"]})]}),e.jsxs("div",{style:{padding:"0.75rem"},children:[e.jsxs("div",{style:{display:"flex",gap:"0.35rem",marginBottom:"0.75rem"},children:[e.jsx("input",{value:a,onChange:t=>u(t.target.value),onKeyDown:t=>t.key==="Enter"&&n(),placeholder:"Add task...",style:{flex:1,padding:"0.375rem",border:"1px solid #e2e8f0",borderRadius:"0.25rem",fontSize:"0.85rem"}}),e.jsx("button",{onClick:n,style:{background:"#3b82f6",color:"#fff",border:"none",padding:"0.375rem 0.625rem",borderRadius:"0.25rem",cursor:"pointer",fontSize:"0.85rem"},children:"+"})]}),d.map(t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.375rem 0",borderBottom:"1px solid #f1f5f9"},children:[e.jsx("input",{type:"checkbox",checked:t.done,onChange:()=>o(t.id),style:{cursor:"pointer"}}),e.jsx("span",{style:{flex:1,fontSize:"0.875rem",textDecoration:t.done?"line-through":"none",color:t.done?"#94a3b8":"#0f172a"},children:t.text}),e.jsx("button",{onClick:()=>s(t.id),style:{background:"none",border:"none",color:"#ef4444",cursor:"pointer",fontSize:"0.8rem"},children:"✕"})]},t.id)),d.length===0&&e.jsx("p",{style:{textAlign:"center",color:"#94a3b8",fontSize:"0.875rem"},children:"All done! 🎉"}),d.filter(t=>t.done).length>0&&e.jsx("button",{onClick:()=>c(t=>t.filter(r=>!r.done)),style:{marginTop:"0.5rem",width:"100%",background:"none",border:"1px solid #e2e8f0",borderRadius:"0.25rem",padding:"0.375rem",cursor:"pointer",fontSize:"0.8rem",color:"#64748b"},children:"Clear completed"})]})]})}function T(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 0 — JavaScript Foundations"}),e.jsx("h1",{children:"DOM Manipulation & Events"}),e.jsx("p",{className:"lesson-subtitle",children:"Understand how JavaScript controls the browser — and why React removes most of this complexity."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🌳 What is the DOM?"}),e.jsx("p",{children:`The DOM (Document Object Model) is the browser's representation of your HTML page as a JavaScript object tree. When you load a webpage, the browser reads your HTML and builds the DOM — a hierarchy of "nodes" (elements) that JavaScript can read and modify.`}),e.jsx(m,{language:"html",children:`<!-- This HTML... -->
<body>
  <header id="site-header">
    <h1>ShopHub</h1>
    <nav>
      <a href="/products">Products</a>
      <a href="/cart">Cart <span id="cart-count">0</span></a>
    </nav>
  </header>
  <main id="product-grid"></main>
</body>`}),e.jsx("p",{style:{marginTop:"1rem"},children:"...becomes a tree of DOM nodes that JavaScript can access, modify, and listen to for events."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔍 Selecting Elements"}),e.jsx(m,{language:"js",children:`// querySelector — gets the FIRST matching element
const header = document.querySelector('header');
const cartCount = document.querySelector('#cart-count');   // by id
const allLinks = document.querySelector('nav a');          // first link
const card = document.querySelector('.product-card');      // by class

// querySelectorAll — gets ALL matching elements (returns a NodeList)
const allCards = document.querySelectorAll('.product-card');

// Convert NodeList to array to use array methods:
const cardsArray = Array.from(allCards);
// Now you can use: cardsArray.map(), .filter(), .forEach()

// Other selectors (older, but still common):
const myId = document.getElementById('cart-count');
const byClass = document.getElementsByClassName('product-card');`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"✏️ Changing Content & Styles"}),e.jsx(m,{language:"js",children:`const cartCount = document.querySelector('#cart-count');

// ── Text content ──
cartCount.textContent = '3';          // sets text (safe, no HTML parsing)
cartCount.innerHTML = '<b>3</b>';     // can contain HTML (careful with user input!)

// ── Styles ──
cartCount.style.color = 'red';
cartCount.style.backgroundColor = '#3b82f6';
cartCount.style.display = 'none';     // hide it
cartCount.style.display = 'block';   // show it

// ── CSS Classes (preferred over style) ──
cartCount.classList.add('active');       // add a class
cartCount.classList.remove('active');    // remove a class
cartCount.classList.toggle('active');    // add if missing, remove if present
cartCount.classList.contains('active'); // check if has class → true/false

// ── Attributes ──
const img = document.querySelector('img');
img.setAttribute('src', 'headphones.jpg');
img.getAttribute('alt');              // read an attribute

// ── Creating & inserting new elements ──
const newCard = document.createElement('div');
newCard.classList.add('product-card');
newCard.textContent = 'New Product';
document.querySelector('#product-grid').appendChild(newCard);`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🖱️ Events — Responding to User Actions"}),e.jsx("p",{children:'Events fire when users interact with the page. You attach "listeners" that run a function when an event occurs.'}),e.jsx(m,{language:"js",children:`const btn = document.querySelector('#add-to-cart');

// addEventListener(eventName, handlerFunction)
btn.addEventListener('click', () => {
  console.log('Button clicked!');
});

// Common events:
element.addEventListener('click',      handler);  // click
element.addEventListener('dblclick',   handler);  // double click
element.addEventListener('mouseenter', handler);  // hover in
element.addEventListener('mouseleave', handler);  // hover out
element.addEventListener('keydown',    handler);  // key pressed
element.addEventListener('keyup',      handler);  // key released
element.addEventListener('change',     handler);  // input changed
element.addEventListener('input',      handler);  // live input update
element.addEventListener('submit',     handler);  // form submitted
element.addEventListener('focus',      handler);  // element focused
element.addEventListener('blur',       handler);  // element lost focus`}),e.jsx(h,{title:"Live Event Log — Interact to See Events",children:e.jsx(v,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 The Event Object"}),e.jsx(m,{language:"js",children:`// The event handler receives an event object (usually called 'e' or 'event')
btn.addEventListener('click', (e) => {
  e.target          // the element that was clicked
  e.target.id       // its id attribute
  e.target.value    // input value (for input events)
  e.target.checked  // checkbox state (for checkboxes)

  e.preventDefault(); // stop default browser behavior
  // e.g., stop a link from navigating, stop a form from reloading the page
});

// Form submission — always call preventDefault()!
const form = document.querySelector('#login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Without this, the page reloads!
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  // process login...
});

// Input — get value as user types
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value;
  console.log('Searching for:', searchTerm);
});`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚛️ Vanilla JS vs React"}),e.jsx("p",{children:"React removes the need to manually query the DOM and update it. Here's why that matters:"}),e.jsx(h,{title:"Vanilla JS vs React — Same Result, Different Approach",children:e.jsx(x,{})}),e.jsx(b,{leftLabel:"Vanilla JS — You manage everything",rightLabel:"React — You just describe what it should look like",leftCode:`// Select elements
const addBtn = document.querySelector('#addBtn');
const input = document.querySelector('#newTodo');
const list = document.querySelector('#todo-list');
let count = 0;

// Add event listener
addBtn.addEventListener('click', () => {
  // Manually create DOM elements
  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  const text = document.createTextNode(input.value);

  // Manually set up events on the new element
  checkbox.addEventListener('change', (e) => {
    text.parentElement.style.textDecoration =
      e.target.checked ? 'line-through' : 'none';
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  list.appendChild(li);
  count++;
  counter.textContent = count;
  input.value = '';
});`,rightCode:`// React: just describe the state and UI
const [todos, setTodos] = useState([]);
const [input, setInput] = useState('');

const addTodo = () => {
  setTodos([...todos, { text: input, done: false }]);
  setInput('');
};

const toggle = (i) => setTodos(
  todos.map((t, idx) =>
    idx === i ? { ...t, done: !t.done } : t
  )
);

// JSX — React updates the DOM automatically:
return (
  <>
    <input value={input}
      onChange={e => setInput(e.target.value)} />
    <button onClick={addTodo}>Add</button>
    {todos.map((t, i) => (
      <li key={i}
        style={{ textDecoration: t.done ? 'line-through' : 'none' }}
        onClick={() => toggle(i)}>
        {t.text}
      </li>
    ))}
  </>
);`})]}),e.jsx(y,{title:"Vanilla JS To-Do List",difficulty:"medium",description:"Build a working to-do list using only HTML, CSS, and Vanilla JavaScript — no React. This is exactly the kind of DOM manipulation React replaces.",targetDesign:e.jsx(k,{}),requirements:[{label:"HTML: input field + Add button + unordered list",difficulty:"easy"},{label:"JS: Clicking Add creates a new list item with the input text",difficulty:"easy"},{label:"JS: Pressing Enter also adds the item",difficulty:"easy"},{label:"CSS: Nice styling — rounded corners, blue button, clean list",difficulty:"easy"},{label:"JS: Checkbox next to each item — checking it strikes through the text",difficulty:"medium"},{label:"JS: Remove button (✕) on each item that deletes it",difficulty:"medium"},{label:"JS: Show a count of remaining items",difficulty:"medium"},{label:'JS: "Clear completed" button removes all checked items',difficulty:"hard"}],hints:['Start with the HTML structure: an input, a button, and an empty <ul id="todo-list">','addEventListener("click") on the button. Inside it, create a new <li> with document.createElement("li")','For Enter key: input.addEventListener("keydown", e => { if (e.key === "Enter") addTodo(); })','For checkbox: create an <input type="checkbox"> element and add a "change" event listener',"For the remove button: create a <button> inside each li. Its click handler should call li.remove()","For the count: keep a counter variable. Add +1 when adding, -1 when removing. Update a <span> with textContent"],steps:[{title:"HTML skeleton",content:"Create the form inputs and empty list container.",code:`<div class="app">
  <h1>📋 To-Do List</h1>
  <div class="input-row">
    <input type="text" id="todoInput" placeholder="Add a task..." />
    <button id="addBtn">Add</button>
  </div>
  <p id="count">0 tasks</p>
  <ul id="todoList"></ul>
  <button id="clearBtn" style="display:none">Clear Completed</button>
</div>`},{title:"Add items with JavaScript",content:"Select elements and write the addTodo function.",code:`const input = document.getElementById('todoInput');
const list = document.getElementById('todoList');
const countEl = document.getElementById('count');
let count = 0;

function addTodo() {
  const text = input.value.trim();
  if (!text) return;  // don't add empty items

  const li = document.createElement('li');
  li.className = 'todo-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const label = document.createElement('span');
  label.textContent = text;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✕';
  removeBtn.className = 'remove-btn';

  // Checkbox toggles strike-through
  checkbox.addEventListener('change', () => {
    label.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
    updateCount();
  });

  // Remove button deletes the item
  removeBtn.addEventListener('click', () => {
    li.remove();
    updateCount();
  });

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(removeBtn);
  list.appendChild(li);

  input.value = '';
  updateCount();
}

function updateCount() {
  const items = list.querySelectorAll('li');
  countEl.textContent = items.length + ' task' + (items.length !== 1 ? 's' : '');
}

document.getElementById('addBtn').addEventListener('click', addTodo);
input.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });`},{title:"Style it",content:"Add CSS for a polished look.",code:`.app { max-width: 360px; margin: 2rem auto; font-family: sans-serif; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
h1 { background: #3b82f6; color: white; margin: 0; padding: 1rem; font-size: 1.1rem; }
.input-row { display: flex; gap: 0.5rem; padding: 0.75rem; background: #f8fafc; }
input[type=text] { flex: 1; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; }
button#addBtn { background: #3b82f6; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.375rem; cursor: pointer; }
#todoList { list-style: none; margin: 0; padding: 0 0.75rem 0.75rem; }
.todo-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem; border-bottom: 1px solid #f1f5f9; }
.remove-btn { margin-left: auto; background: none; border: none; color: #ef4444; cursor: pointer; }`}],checkItems:["Input field and Add button are present","Clicking Add creates a new list item","Pressing Enter also adds the item","Each item has a checkbox that strikes through the text","Each item has a remove button that deletes it","Task count updates when adding or removing","Clear Completed button removes all checked items","App looks clean and styled"],answer:`<!DOCTYPE html>
<html>
<head>
  <style>
    * { box-sizing: border-box; }
    body { font-family: sans-serif; background: #f1f5f9; display: flex; justify-content: center; padding: 2rem; }
    .app { width: 360px; border-radius: 0.75rem; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.12); }
    .header { background: #3b82f6; color: white; padding: 1rem; }
    .header h1 { margin: 0; font-size: 1.1rem; }
    .header p { margin: 0.25rem 0 0; font-size: 0.8rem; opacity: 0.8; }
    .input-row { display: flex; gap: 0.5rem; padding: 0.75rem; background: #f8fafc; }
    input[type=text] { flex: 1; padding: 0.5rem; border: 1px solid #e2e8f0; border-radius: 0.375rem; }
    #addBtn { background: #3b82f6; color: white; border: none; padding: 0.5rem 0.875rem; border-radius: 0.375rem; cursor: pointer; font-size: 1rem; }
    ul { list-style: none; margin: 0; padding: 0 0.75rem 0.75rem; }
    .todo-item { display: flex; align-items: center; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid #f1f5f9; }
    .todo-item span { flex: 1; font-size: 0.9rem; }
    .remove-btn { background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.8rem; }
    #clearBtn { display: none; margin: 0 0.75rem 0.75rem; padding: 0.375rem; width: calc(100% - 1.5rem); background: none; border: 1px solid #e2e8f0; border-radius: 0.375rem; cursor: pointer; color: #64748b; font-size: 0.85rem; }
    #count { margin: 0; padding: 0.25rem 0.75rem; font-size: 0.8rem; color: #64748b; background: #f8fafc; }
  </style>
</head>
<body>
<div class="app">
  <div class="header">
    <h1>📋 To-Do List</h1>
  </div>
  <div class="input-row">
    <input type="text" id="todoInput" placeholder="Add a task..." />
    <button id="addBtn">+</button>
  </div>
  <p id="count">0 tasks</p>
  <ul id="todoList"></ul>
  <button id="clearBtn">Clear Completed</button>
</div>
<script>
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  const countEl = document.getElementById('count');
  const clearBtn = document.getElementById('clearBtn');

  function updateCount() {
    const total = list.querySelectorAll('li').length;
    const done = list.querySelectorAll('input:checked').length;
    countEl.textContent = total + ' task' + (total !== 1 ? 's' : '') + (done > 0 ? ' · ' + done + ' done' : '');
    clearBtn.style.display = done > 0 ? 'block' : 'none';
  }

  function addTodo() {
    const text = input.value.trim();
    if (!text) return;
    const li = document.createElement('li');
    li.className = 'todo-item';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    const span = document.createElement('span');
    span.textContent = text;
    const btn = document.createElement('button');
    btn.textContent = '✕';
    btn.className = 'remove-btn';
    cb.addEventListener('change', () => {
      span.style.textDecoration = cb.checked ? 'line-through' : 'none';
      span.style.color = cb.checked ? '#94a3b8' : '#0f172a';
      updateCount();
    });
    btn.addEventListener('click', () => { li.remove(); updateCount(); });
    li.append(cb, span, btn);
    list.appendChild(li);
    input.value = '';
    updateCount();
  }

  document.getElementById('addBtn').addEventListener('click', addTodo);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') addTodo(); });
  clearBtn.addEventListener('click', () => {
    list.querySelectorAll('input:checked').forEach(cb => cb.closest('li').remove());
    updateCount();
  });
<\/script>
</body>
</html>`}),e.jsx(f,{id:"0-4-quick",title:"Cart Count Badge",description:"Write JavaScript that selects a button with id 'add-btn' and a span with id 'cart-count'. Each click should increment the count by 1 and update the span's text.",hint:"Use querySelector, addEventListener, a counter variable, and textContent to update the display.",difficulty:"easy",answer:`const addBtn = document.getElementById('add-btn');
const cartCount = document.getElementById('cart-count');
let count = 0;

addBtn.addEventListener('click', () => {
  count++;
  cartCount.textContent = count;
  // Optional: add visual feedback
  cartCount.style.background = '#3b82f6';
  cartCount.style.color = 'white';
});`,explanation:"We use a closure — the count variable lives in the outer scope and the click handler can access and modify it. Each click increments count and updates the DOM via textContent."})]})}export{T as default};
