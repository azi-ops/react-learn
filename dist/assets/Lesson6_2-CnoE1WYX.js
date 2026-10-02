import{r as s,j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as d}from"./CodeComparison-B_ysuKRn.js";import{C as u}from"./Challenge-B2Dev4fs.js";import{C as p}from"./Callout-B_CeIBza.js";import{I as m}from"./InteractiveDemo-BnwT7BFH.js";function C(){const[r,c]=s.useState(""),[a,l]=s.useState("All"),[o,i]=s.useState(!1),h=["All","Electronics","Clothing","Home","Accessories"];return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 6 — Events"}),e.jsx("h1",{children:"Input & Change Events"}),e.jsx("p",{className:"lesson-subtitle",children:"Capture what users type, select, and toggle — and react to every change instantly."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Using ",e.jsx("code",{children:"onChange"})," to respond to input changes"]}),e.jsxs("li",{children:["Reading ",e.jsx("code",{children:"event.target.value"})," to get the typed text"]}),e.jsx("li",{children:"Handling different input types: text, select, checkbox"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(d,{leftLabel:"Vanilla JS",rightLabel:"React",leftCode:`const input = document.querySelector('#search');

input.addEventListener('input', function(event) {
  console.log(event.target.value);
  // Manually update DOM...
  resultsDiv.textContent = filterProducts(event.target.value);
});`,rightCode:`function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      placeholder="Search products..."
    />
  );
}
// React handles DOM updates automatically!`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 The onChange Pattern"}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"onChange"})," event fires every time the input value changes — on each keystroke. The key information is ",e.jsx("code",{children:"event.target.value"}),":"]}),e.jsx(n,{language:"jsx",children:`function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    // event.target is the input element
    // event.target.value is what the user typed
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search ShopHub..."
      />
      <p>You typed: "{searchTerm}"</p>
    </div>
  );
}`}),e.jsxs(p,{type:"tip",children:["The pattern ",e.jsxs("code",{children:["onChange=","{(e) => setX(e.target.value)}"]})," is so common that you'll write it dozens of times. It's often shortened with an inline arrow function."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo — Capturing Input"}),e.jsx(m,{title:"Live Input Capture",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem",color:"var(--text-muted)"},children:"Text Input (onChange)"}),e.jsx("input",{type:"text",value:r,onChange:t=>c(t.target.value),placeholder:"Type something...",style:{padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid var(--border-color)",background:"var(--bg-color)",color:"var(--text-color)",width:"100%"}}),e.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:["Value: ",e.jsxs("code",{style:{color:"var(--primary)"},children:['"',r,'"']})," (",r.length," chars)"]})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",marginBottom:"0.5rem",fontSize:"0.875rem",color:"var(--text-muted)"},children:"Select Dropdown (onChange)"}),e.jsx("select",{value:a,onChange:t=>l(t.target.value),style:{padding:"0.5rem",borderRadius:"0.375rem",border:"1px solid var(--border-color)",background:"var(--bg-color)",color:"var(--text-color)"},children:h.map(t=>e.jsx("option",{value:t,children:t},t))}),e.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:["Selected: ",e.jsx("strong",{children:a})]})]}),e.jsxs("div",{children:[e.jsxs("label",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.875rem",cursor:"pointer"},children:[e.jsx("input",{type:"checkbox",checked:o,onChange:t=>i(t.target.checked)}),"In Stock Only"]}),e.jsxs("p",{style:{marginTop:"0.5rem",fontSize:"0.875rem"},children:["Filter active: ",e.jsx("strong",{children:o?"Yes":"No"})]})]})]})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 Input Types & Their event.target Properties"}),e.jsx(n,{language:"jsx",children:`// Text input — use event.target.value
<input type="text" onChange={(e) => setName(e.target.value)} />

// Number input — value is a string, convert with Number() or parseInt
<input type="number" onChange={(e) => setPrice(Number(e.target.value))} />

// Select dropdown — use event.target.value
<select onChange={(e) => setCategory(e.target.value)}>
  <option value="electronics">Electronics</option>
  <option value="clothing">Clothing</option>
</select>

// Checkbox — use event.target.checked (boolean!)
<input type="checkbox" onChange={(e) => setInStock(e.target.checked)} />`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub Search Bar"}),e.jsx(n,{language:"jsx",filename:"SearchBar.jsx",children:`function SearchBar({ searchTerm, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products, brands..."
        className="search-input"
      />
      {searchTerm && (
        <button
          onClick={() => onSearch('')}
          className="search-clear"
        >
          ✕
        </button>
      )}
    </div>
  );
}`})]}),e.jsx(u,{id:"6-2-search-input",title:"Live Search Input",description:"Create a SearchBar component with a text input. As the user types, show the text below: Searching for: [typed text]. Add a clear button (×) that resets the search to empty.",hint:"Store the search term in useState. Use onChange to update it. Show it below the input with {}.",difficulty:"easy",answer:`function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
        />
        {searchTerm && (
          <button onClick={() => setSearchTerm('')}>×</button>
        )}
      </div>
      {searchTerm && (
        <p>Searching for: "{searchTerm}"</p>
      )}
    </div>
  );
}`,explanation:"useState stores the search term. onChange fires on every keystroke and updates state. The clear button sets state to empty string, which clears the input (since value={searchTerm} is controlled). The display text uses && to only show when there's something to show."})]})}export{C as default};
