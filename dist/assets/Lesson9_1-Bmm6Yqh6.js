import{j as e,r as a}from"./index-fCZyuqB2.js";import{C as c}from"./CodeBlock-y81Z23mq.js";import{C as d}from"./CodeComparison-B_ysuKRn.js";import{C as h}from"./Challenge-B2Dev4fs.js";import{S as u}from"./StepByStep-Be1tR1cd.js";import{I as p}from"./InteractiveDemo-BnwT7BFH.js";function m(){const[n,r]=a.useState(""),[s,o]=a.useState("electronics"),[l,i]=a.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Product Name (text input)"}),e.jsx("input",{type:"text",value:n,onChange:t=>r(t.target.value),placeholder:"e.g. Wireless Headphones",style:{padding:"0.5rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)",width:"100%"}}),e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:["State value: ",e.jsxs("code",{children:['"',n,'"']})]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",color:"var(--text-muted)",marginBottom:"0.25rem"},children:"Category (select)"}),e.jsx("select",{value:s,onChange:t=>o(t.target.value),style:{padding:"0.5rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)"},children:["electronics","clothing","home","accessories"].map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:["State value: ",e.jsxs("code",{children:['"',s,'"']})]})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",cursor:"pointer",fontSize:"0.875rem"},children:[e.jsx("input",{type:"checkbox",checked:l,onChange:t=>i(t.target.checked)}),"In Stock"]}),e.jsxs("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginTop:"0.25rem"},children:["State value: ",e.jsx("code",{children:l?"true":"false"})]})]})]})}function S(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 9 — Forms"}),e.jsx("h1",{children:"Controlled Inputs"}),e.jsx("p",{className:"lesson-subtitle",children:"Make React the single source of truth for all your form inputs."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"The difference between uncontrolled and controlled inputs"}),e.jsx("li",{children:"How to make React control every input value"}),e.jsx("li",{children:"How to handle text inputs, select dropdowns, and checkboxes"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 Controlled vs Uncontrolled"}),e.jsxs("p",{children:["In plain HTML, the browser manages the input's value. You read it with ",e.jsx("code",{children:"document.querySelector"})," when you need it — this is ",e.jsx("strong",{children:"uncontrolled"}),"."]}),e.jsxs("p",{style:{marginTop:"1rem"},children:["In React, we store the input's value in ",e.jsx("strong",{children:"state"})," and bind it to the input. React always knows the current value — this is ",e.jsx("strong",{children:"controlled"}),"."]}),e.jsx(d,{leftLabel:"Uncontrolled (plain HTML)",rightLabel:"Controlled (React)",leftCode:`<!-- Browser manages the value -->
<input type="text" id="search" />

// Read it later:
const value = document.getElementById('search').value;`,rightCode:`// React state manages the value:
const [search, setSearch] = useState('');

<input
  type="text"
  value={search}                          // Bind to state
  onChange={(e) => setSearch(e.target.value)} // Update state on change
/>

// Always know the value: search`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💡 Why Controlled?"}),e.jsxs("ul",{style:{lineHeight:2},children:[e.jsx("li",{children:"✅ React always knows the current value — no DOM querying"}),e.jsx("li",{children:"✅ You can instantly react to changes (filter, validate, auto-suggest)"}),e.jsx("li",{children:"✅ You can programmatically set/clear the value"}),e.jsx("li",{children:"✅ Validation is trivial — just check state values"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Input Types"}),e.jsx(u,{steps:[{title:"Text / Email / Password inputs",language:"jsx",code:`const [email, setEmail] = useState('');

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="your@email.com"
/>`,explanation:"All text-like inputs use e.target.value. The pattern is identical for text, email, password, number, url, etc."},{title:"Select (dropdown)",language:"jsx",code:`const [category, setCategory] = useState('all');

<select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
>
  <option value="all">All Categories</option>
  <option value="electronics">Electronics</option>
  <option value="clothing">Clothing</option>
</select>`,explanation:"Select uses e.target.value just like text inputs. The value prop controls which option is selected."},{title:"Checkbox",language:"jsx",code:`const [inStock, setInStock] = useState(false);

<input
  type="checkbox"
  checked={inStock}          // Use "checked", not "value"!
  onChange={(e) => setInStock(e.target.checked)}  // Use "checked"!
/>`,explanation:"Checkboxes are different! Use checked prop (not value) and e.target.checked (not e.target.value). The value is a boolean."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo — All Input Types"}),e.jsxs(p,{title:"Controlled Inputs Demo",children:[e.jsx(m,{}),e.jsx("p",{style:{marginTop:"1rem",fontSize:"0.8rem",color:"var(--text-muted)"},children:"React state is always in sync with what you see in the inputs. Try typing and see state update instantly."})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub Search — Controlled Input"}),e.jsx(c,{language:"jsx",filename:"SearchBar.jsx",children:`function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}          // ← Controlled: value from state
        onChange={(e) => onSearch(e.target.value)}  // ← Update state
        placeholder="Search ShopHub..."
        className="search-input"
      />
      {searchTerm && (
        <button
          onClick={() => onSearch('')}  // ← Clear: set state to ''
          className="search-clear"
          aria-label="Clear search"
        >
          ✕
        </button>
      )}
    </div>
  );
}

// In App.jsx:
const [searchTerm, setSearchTerm] = useState('');

<SearchBar
  searchTerm={searchTerm}
  onSearch={setSearchTerm}
/>`})]}),e.jsx(h,{id:"9-1-controlled",title:"Controlled Quantity Input",description:"Build a QuantityInput component with a controlled number input. The value should not go below 1 or above 99. If the user types 0 or a negative number, reset it to 1. If they type above 99, cap it at 99.",hint:"Use type='number' input with value={quantity}. In onChange, parse the value as a number and clamp it between 1 and 99.",difficulty:"medium",answer:`function QuantityInput() {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const val = parseInt(e.target.value);
    if (isNaN(val) || val < 1) {
      setQuantity(1);
    } else if (val > 99) {
      setQuantity(99);
    } else {
      setQuantity(val);
    }
  };

  return (
    <div>
      <label>Quantity:</label>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={1}
        max={99}
        style={{ width: '80px', padding: '0.5rem' }}
      />
      <p>You selected: {quantity}</p>
    </div>
  );
}`,explanation:"parseInt() converts the string input to a number. We check for NaN (empty input) and clamp between 1 and 99. The min and max attributes add browser-level hints, but the onChange handler enforces the limits."})]})}export{S as default};
