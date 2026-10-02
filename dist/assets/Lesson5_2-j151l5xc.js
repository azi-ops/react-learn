import{j as e}from"./index-fCZyuqB2.js";import{C as s}from"./CodeBlock-y81Z23mq.js";import{C as r}from"./Challenge-B2Dev4fs.js";import{C as t}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 5 — Rendering Lists"}),e.jsx("h1",{children:"The key Prop"}),e.jsx("p",{className:"lesson-subtitle",children:"Why React needs keys — and how to choose the right one."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Why React requires a ",e.jsx("code",{children:"key"})," prop on list items"]}),e.jsx("li",{children:"How React uses keys to efficiently update the DOM"}),e.jsx("li",{children:"What makes a good key vs a bad key"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsxs("p",{children:["When you render a list with ",e.jsx("code",{children:"map()"}),", React needs a way to identify each item. Without keys, if you add, remove, or reorder items, React has to re-render the entire list. With keys, React knows exactly which item changed and only updates that one."]}),e.jsx("p",{style:{marginTop:"1rem"},children:"Think of keys like ID badges at a conference. Without badges, the organizer can't tell who is who. With badges, they can instantly find and update any attendee's info."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔍 What Happens Without a Key"}),e.jsx(s,{language:"jsx",children:`// React will warn you in the console:
// "Each child in a list should have a unique key prop."

{products.map(product => (
  <ProductCard product={product} />  // ❌ Missing key!
))}`}),e.jsx(t,{type:"warning",children:"Without keys, React may re-render more items than necessary, leading to performance issues and bugs — especially when the list changes (items added/removed/reordered)."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"✅ Adding a key"}),e.jsx(s,{language:"jsx",children:`{products.map(product => (
  <ProductCard key={product.id} product={product} />  // ✅ Key added!
))}`}),e.jsxs("p",{children:["The ",e.jsx("code",{children:"key"})," goes on the outermost JSX element returned by ",e.jsx("code",{children:"map()"}),". It is NOT passed as a prop to your component — React uses it internally only."]}),e.jsxs(t,{type:"info",children:["If you try to read ",e.jsx("code",{children:"props.key"})," inside ProductCard, you'll get ",e.jsx("code",{children:"undefined"}),". The key is React's internal mechanism, not a prop you can access."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Good Keys vs Bad Keys"}),e.jsx("h3",{style:{marginBottom:"0.75rem",color:"var(--error)"},children:"❌ Bad: Using array index as key"}),e.jsx(s,{language:"jsx",children:`{products.map((product, index) => (
  <ProductCard key={index} product={product} />  // ❌ Avoid!
))}`}),e.jsxs(t,{type:"warning",children:[e.jsx("strong",{children:"Why index is bad:"})," If you sort or filter the list, the same index now points to a different product. React gets confused and may show the wrong data or lose input state inside your component."]}),e.jsx("h3",{style:{margin:"1.5rem 0 0.75rem",color:"var(--success)"},children:"✅ Good: Using a stable unique ID"}),e.jsx(s,{language:"jsx",children:`// product.id comes from the database — always stable and unique
{products.map(product => (
  <ProductCard key={product.id} product={product} />  // ✅ 
))}

// For categories (strings that are unique):
{categories.map(cat => (
  <button key={cat}>{cat}</button>  // ✅
))}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 Key Rules"}),e.jsxs("ul",{style:{lineHeight:2},children:[e.jsxs("li",{children:["🔑 Keys must be ",e.jsx("strong",{children:"unique among siblings"})," (not globally)"]}),e.jsxs("li",{children:["🔑 Keys must be ",e.jsx("strong",{children:"stable"})," — the same item should always have the same key"]}),e.jsxs("li",{children:["🔑 Use your data's ",e.jsx("strong",{children:"ID field"})," whenever possible"]}),e.jsxs("li",{children:["🔑 Never use ",e.jsx("strong",{children:"Math.random()"})," as a key — it changes every render!"]}),e.jsxs("li",{children:["🔑 Keys are ",e.jsx("strong",{children:"not passed as props"})," — they're React-internal"]})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx(s,{language:"jsx",filename:"ProductList.jsx",children:`// Each product has a unique id from the database/API
{products.map(product => (
  <ProductCard
    key={product.id}     // ✅ Stable, unique
    product={product}
  />
))}

// Each category button uses the category name
{categories.map(category => (
  <button key={category}>   // ✅ Unique strings
    {category}
  </button>
))}

// Cart items use product IDs
{cart.map(item => (
  <CartItem
    key={item.id}         // ✅ Same product ID
    item={item}
  />
))}`})]}),e.jsx(r,{id:"5-2-keys",title:"Fix the Key Problem",description:"The following code uses array index as the key. Refactor it to use the product's id as the key instead. Also add a second example showing what key to use for a list of category strings.",hint:"Replace (product, index) => ... key={index} with product => ... key={product.id}",difficulty:"easy",answer:`// Before (broken):
{products.map((product, index) => (
  <ProductCard key={index} product={product} />
))}

// After (fixed):
{products.map(product => (
  <ProductCard key={product.id} product={product} />
))}

// Categories (strings as keys - fine when strings are unique):
const categories = ['Electronics', 'Clothing', 'Home'];
{categories.map(cat => (
  <button key={cat}>{cat}</button>
))}`,explanation:"product.id is stable and unique — the same product will always have the same id. Array index changes when items are added/removed/sorted, making it unreliable as a key."})]})}export{d as default};
