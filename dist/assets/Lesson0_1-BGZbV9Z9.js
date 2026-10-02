import{j as e,r as a}from"./index-fCZyuqB2.js";import{C as i}from"./CodeBlock-y81Z23mq.js";import{C as p}from"./CodeComparison-B_ysuKRn.js";import{C as m}from"./Callout-B_CeIBza.js";import{I as h}from"./InteractiveDemo-BnwT7BFH.js";import{P as u}from"./PracticeProject-aOb4DaIe.js";function g(){const[r,d]=a.useState("semantic"),s=["non-semantic","semantic"],l=()=>e.jsxs("div",{style:{fontFamily:"sans-serif",fontSize:"0.85rem",background:"#fff",color:"#000",padding:"1rem",borderRadius:"0.375rem"},children:[e.jsx("div",{style:{fontWeight:700,fontSize:"1.1rem",marginBottom:"0.5rem"},children:"ShopHub"}),e.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"0.75rem",fontSize:"0.8rem"},children:[e.jsx("div",{children:"Products"}),e.jsx("div",{children:"Cart"}),e.jsx("div",{children:"About"})]}),e.jsx("div",{style:{fontWeight:700,marginBottom:"0.35rem"},children:"Wireless Headphones"}),e.jsx("div",{style:{marginBottom:"0.5rem",color:"#555",fontSize:"0.8rem"},children:"Premium noise-cancelling headphones"}),e.jsx("div",{style:{fontWeight:700,color:"#2563eb",marginBottom:"0.35rem"},children:"$79.99"}),e.jsx("div",{style:{fontSize:"0.75rem",color:"#888"},children:"All rights reserved"})]}),o=()=>e.jsxs("div",{style:{fontFamily:"sans-serif",fontSize:"0.85rem",background:"#fff",color:"#000",padding:"1rem",borderRadius:"0.375rem"},children:[e.jsx("header",{style:{fontWeight:700,fontSize:"1.1rem",marginBottom:"0.5rem",borderBottom:"2px solid #2563eb",paddingBottom:"0.5rem"},children:"🛒 ShopHub"}),e.jsxs("nav",{style:{display:"flex",gap:"1rem",marginBottom:"0.75rem",fontSize:"0.8rem",color:"#2563eb"},children:[e.jsx("span",{children:"Products"}),e.jsx("span",{children:"Cart"}),e.jsx("span",{children:"About"})]}),e.jsx("main",{children:e.jsxs("article",{style:{border:"1px solid #e2e8f0",borderRadius:"0.5rem",padding:"0.75rem"},children:[e.jsx("h2",{style:{margin:"0 0 0.35rem",fontSize:"1rem"},children:"Wireless Headphones"}),e.jsx("p",{style:{margin:"0 0 0.5rem",color:"#555",fontSize:"0.8rem"},children:"Premium noise-cancelling headphones"}),e.jsx("strong",{style:{color:"#2563eb"},children:"$79.99"})]})}),e.jsx("footer",{style:{marginTop:"0.75rem",fontSize:"0.75rem",color:"#888",borderTop:"1px solid #eee",paddingTop:"0.5rem"},children:"All rights reserved"})]});return e.jsxs("div",{children:[e.jsx("div",{style:{display:"flex",gap:"0.5rem",marginBottom:"1rem"},children:s.map(n=>e.jsx("button",{onClick:()=>d(n),style:{padding:"0.375rem 0.875rem",borderRadius:"0.375rem",border:"1px solid var(--border-color)",background:r===n?"var(--primary)":"var(--bg-color)",color:r===n?"white":"var(--text-muted)",cursor:"pointer",fontSize:"0.85rem"},children:n==="semantic"?"✅ Semantic HTML":"❌ Non-Semantic"},n))}),r==="semantic"?e.jsx(o,{}):e.jsx(l,{}),e.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"0.75rem"},children:r==="semantic"?"✅ Meaningful tags (header, nav, main, article, footer) — screen readers and Google understand the structure":"❌ All divs — the browser renders it the same, but there's no semantic meaning"})]})}function f(){const[r,d]=a.useState("row"),[s,l]=a.useState("flex-start"),[o,n]=a.useState("stretch");return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:"1rem",marginBottom:"1rem",flexWrap:"wrap",fontSize:"0.825rem"},children:[e.jsxs("label",{children:["Direction:",e.jsx("select",{value:r,onChange:t=>d(t.target.value),style:{marginLeft:"0.5rem",background:"var(--bg-color)",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:"0.25rem",padding:"0.25rem"},children:["row","row-reverse","column","column-reverse"].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("label",{children:["justify-content:",e.jsx("select",{value:s,onChange:t=>l(t.target.value),style:{marginLeft:"0.5rem",background:"var(--bg-color)",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:"0.25rem",padding:"0.25rem"},children:["flex-start","center","flex-end","space-between","space-around"].map(t=>e.jsx("option",{value:t,children:t},t))})]}),e.jsxs("label",{children:["align-items:",e.jsx("select",{value:o,onChange:t=>n(t.target.value),style:{marginLeft:"0.5rem",background:"var(--bg-color)",color:"var(--text-color)",border:"1px solid var(--border-color)",borderRadius:"0.25rem",padding:"0.25rem"},children:["stretch","center","flex-start","flex-end"].map(t=>e.jsx("option",{value:t,children:t},t))})]})]}),e.jsx("div",{style:{display:"flex",flexDirection:r,justifyContent:s,alignItems:o,gap:"0.5rem",minHeight:"100px",background:"#f1f5f9",borderRadius:"0.5rem",padding:"0.75rem",border:"2px dashed #94a3b8"},children:["Item 1","Item 2","Item 3"].map((t,c)=>e.jsx("div",{style:{background:"#3b82f6",color:"white",padding:"0.5rem 0.75rem",borderRadius:"0.375rem",fontSize:"0.8rem",fontWeight:600,height:c===1?"50px":"32px",display:"flex",alignItems:"center"},children:t},c))}),e.jsx("p",{style:{fontSize:"0.8rem",color:"var(--text-muted)",marginTop:"0.75rem",fontFamily:"monospace"},children:`display: flex; flex-direction: ${r}; justify-content: ${s}; align-items: ${o};`})]})}function b(){const[r,d]=a.useState(!1),[s,l]=a.useState(!1);return e.jsx("div",{style:{maxWidth:220,fontFamily:"sans-serif"},children:e.jsxs("div",{style:{border:"1px solid #e2e8f0",borderRadius:"0.75rem",overflow:"hidden",boxShadow:"0 2px 8px rgba(0,0,0,0.08)",background:"#fff"},children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("div",{style:{height:120,background:"linear-gradient(135deg,#dbeafe,#ede9fe)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3rem"},children:"🎧"}),e.jsx("button",{onClick:()=>d(o=>!o),style:{position:"absolute",top:8,right:8,background:"white",border:"none",borderRadius:"50%",width:30,height:30,fontSize:"1rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 1px 4px rgba(0,0,0,0.15)"},children:r?"❤️":"🤍"}),e.jsx("span",{style:{position:"absolute",top:8,left:8,background:"#3b82f6",color:"white",fontSize:"0.65rem",fontWeight:700,padding:"0.15rem 0.4rem",borderRadius:"0.25rem"},children:"NEW"})]}),e.jsxs("div",{style:{padding:"0.875rem"},children:[e.jsx("p",{style:{margin:"0 0 0.25rem",fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:"Wireless Headphones"}),e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.75rem",color:"#64748b"},children:"⭐ 4.5 (234 reviews)"}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("p",{style:{margin:0,fontWeight:700,color:"#2563eb",fontSize:"1rem"},children:"$79.99"}),e.jsx("button",{onClick:()=>l(o=>!o),style:{background:s?"#16a34a":"#3b82f6",color:"white",border:"none",borderRadius:"0.375rem",padding:"0.35rem 0.75rem",fontSize:"0.78rem",cursor:"pointer",fontWeight:600},children:s?"✓ Added":"+ Cart"})]})]})]})})}function x(){return e.jsx("div",{style:{maxWidth:220,fontFamily:"sans-serif"},children:e.jsxs("div",{style:{border:"1px solid #e2e8f0",borderRadius:"0.25rem",padding:"0.75rem",background:"#fff"},children:[e.jsx("div",{style:{height:80,background:"#f1f5f9",marginBottom:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#94a3b8",fontSize:"0.75rem"},children:"[ image ]"}),e.jsx("p",{style:{margin:"0 0 0.25rem",fontWeight:700,fontSize:"0.9rem",color:"#0f172a"},children:"Wireless Headphones"}),e.jsx("p",{style:{margin:"0 0 0.5rem",color:"#2563eb",fontSize:"0.9rem"},children:"$79.99"}),e.jsx("button",{style:{background:"#3b82f6",color:"white",border:"none",padding:"0.35rem 0.75rem",fontSize:"0.78rem",cursor:"pointer"},children:"Add to Cart"})]})})}function k(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 0 — Foundations"}),e.jsx("h1",{children:"HTML & CSS Foundations"}),e.jsx("p",{className:"lesson-subtitle",children:"Build a solid foundation before React — understand the HTML structure and CSS styling you'll use every day."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏗️ Part 1: HTML — Structure"}),e.jsxs("p",{children:["HTML is the skeleton of every web page. It defines ",e.jsx("strong",{children:"what"})," is on the page — headings, paragraphs, images, buttons, links. CSS then styles it, and JavaScript makes it interactive. React uses the same HTML elements, just written inside JavaScript functions."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 Essential HTML Tags"}),e.jsx(i,{language:"html",children:`<!-- Text elements -->
<h1>Main Title</h1>        <!-- Largest heading -->
<h2>Section Title</h2>     <!-- Sub-heading -->
<h3>Sub-section</h3>
<p>A paragraph of text.</p>
<strong>Bold text</strong>
<em>Italic text</em>
<span>Inline container</span>

<!-- Structure elements -->
<div>Block container</div>  <!-- Generic block wrapper -->
<section>Themed section</section>
<article>Self-contained content</article>

<!-- Links & Images -->
<a href="https://example.com">Click me</a>
<img src="laptop.jpg" alt="A laptop" />

<!-- Lists -->
<ul>
  <li>Unordered item</li>
  <li>Another item</li>
</ul>
<ol>
  <li>First step</li>
  <li>Second step</li>
</ol>

<!-- Forms -->
<input type="text" placeholder="Type here..." />
<input type="checkbox" />
<button>Click me</button>
<select>
  <option value="electronics">Electronics</option>
  <option value="clothing">Clothing</option>
</select>`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏷️ Semantic HTML — The Right Tag for the Job"}),e.jsxs("p",{children:["Semantic HTML means using the ",e.jsx("strong",{children:"most meaningful tag"})," for your content. Instead of every element being a ",e.jsx("code",{children:"<div>"}),", you use tags that describe their purpose. This helps screen readers, Google's search engine, and other developers understand your page."]}),e.jsx(h,{title:"Semantic vs Non-Semantic HTML",children:e.jsx(g,{})}),e.jsx(i,{language:"html",children:`<!-- ❌ Non-semantic: all divs, no meaning -->
<div class="header">ShopHub</div>
<div class="nav">Products | Cart</div>
<div class="main">
  <div class="card">Wireless Headphones</div>
</div>
<div class="footer">© 2024</div>

<!-- ✅ Semantic: meaningful tags -->
<header>ShopHub</header>
<nav>
  <a href="/products">Products</a>
  <a href="/cart">Cart</a>
</nav>
<main>
  <article class="product-card">
    <h2>Wireless Headphones</h2>
    <p>Premium noise-cancelling headphones</p>
    <strong>$79.99</strong>
  </article>
</main>
<footer>© 2024 ShopHub</footer>`}),e.jsxs(m,{type:"tip",children:[e.jsx("strong",{children:"Rule of thumb:"})," Use ",e.jsx("code",{children:"<div>"})," only when no semantic tag fits. For page sections use ",e.jsx("code",{children:"<header>"}),", ",e.jsx("code",{children:"<nav>"}),", ",e.jsx("code",{children:"<main>"}),", ",e.jsx("code",{children:"<section>"}),", ",e.jsx("code",{children:"<article>"}),", ",e.jsx("code",{children:"<footer>"}),"."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📝 HTML Forms — Collecting User Input"}),e.jsx("p",{children:"Forms are how users search for products, log in, and check out. Every React form starts with these same HTML inputs."}),e.jsx(i,{language:"html",children:`<form>
  <!-- Text input (search, name, email) -->
  <input type="text" placeholder="Search products..." />

  <!-- Email -->
  <input type="email" placeholder="your@email.com" />

  <!-- Password -->
  <input type="password" placeholder="Password" />

  <!-- Dropdown menu -->
  <select>
    <option value="all">All Categories</option>
    <option value="electronics">Electronics</option>
    <option value="clothing">Clothing</option>
  </select>

  <!-- Checkbox -->
  <label>
    <input type="checkbox" />
    In Stock Only
  </label>

  <!-- Submit button -->
  <button type="submit">Search</button>
</form>`}),e.jsx(m,{type:"info",children:`In React, these same HTML inputs become "controlled inputs" — React state keeps track of what the user typed. You'll learn this in Chapter 9!`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎨 Part 2: CSS — Styling"}),e.jsxs("p",{children:["CSS makes your HTML look beautiful. It controls colors, fonts, spacing, layout, and animations. In React, you'll use the same CSS — the main difference is that ",e.jsx("code",{children:"class"})," becomes ",e.jsx("code",{children:"className"}),"."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📦 The Box Model"}),e.jsx("p",{children:"Every HTML element is a box. The box model controls how much space it takes up:"}),e.jsx(i,{language:"css",children:`.product-card {
  /* Content size */
  width: 300px;
  height: 400px;

  /* Padding — space INSIDE the border */
  padding: 1rem;           /* All 4 sides */
  padding: 1rem 2rem;      /* Top/bottom  Left/right */
  padding-top: 0.5rem;     /* Single side */

  /* Margin — space OUTSIDE the border */
  margin: 0 auto;          /* Center horizontally */
  margin-bottom: 1.5rem;

  /* Border */
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;  /* Rounded corners */

  /* Background */
  background-color: white;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);

  /* Shadow */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🖋️ Typography & Colors"}),e.jsx(i,{language:"css",children:`body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-size: 16px;           /* Base font size */
  line-height: 1.6;          /* Line spacing */
  color: #0f172a;            /* Default text color */
  background-color: #f8fafc;
}

h1 { font-size: 2.25rem; font-weight: 700; }
h2 { font-size: 1.5rem;  font-weight: 600; }
h3 { font-size: 1.25rem; font-weight: 600; }

/* Colors */
.price        { color: #2563eb; }
.text-muted   { color: #64748b; }
.text-success { color: #16a34a; }
.text-error   { color: #dc2626; }

/* Text utilities */
.text-center  { text-align: center; }
.text-sm      { font-size: 0.875rem; }
.font-bold    { font-weight: 700; }`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📐 Flexbox — Layouts"}),e.jsx("p",{children:"Flexbox is the most important layout tool. It makes it easy to arrange items in rows or columns, space them out, and center things. ShopHub's navbar, product grid, and buttons all use flexbox."}),e.jsx(h,{title:"Interactive Flexbox Playground",children:e.jsx(f,{})}),e.jsx(i,{language:"css",children:`/* Navbar: logo on left, links on right */
.navbar {
  display: flex;
  justify-content: space-between;  /* Push to opposite ends */
  align-items: center;             /* Vertically center */
  padding: 1rem 2rem;
}

/* Product card: image + info side by side */
.product-row {
  display: flex;
  gap: 1.5rem;             /* Space between items */
  align-items: flex-start; /* Align to top */
}

/* Center content vertically and horizontally */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📱 CSS Grid — Product Grids"}),e.jsx(i,{language:"css",children:`/* Responsive product grid */
.product-grid {
  display: grid;

  /* Auto-fill columns, minimum 280px wide */
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  gap: 1.5rem;  /* Space between all cells */
}

/* 3-column grid on desktop */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

/* Stack on mobile, side by side on desktop */
@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;  /* Single column */
  }
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 CSS Selectors & Specificity"}),e.jsx(i,{language:"css",children:`/* Element selector — targets ALL p tags */
p { color: #374151; }

/* Class selector — targets elements with class="card" */
.card { border-radius: 0.5rem; }

/* ID selector — targets ONE element with id="hero" */
#hero { background: #0f172a; }

/* Descendant: button inside .card */
.card button { padding: 0.5rem 1rem; }

/* Hover state */
.btn:hover { background-color: #1d4ed8; }

/* Active/pressed */
.btn:active { transform: scale(0.98); }

/* Responsive: apply below 768px */
@media (max-width: 768px) {
  .sidebar { display: none; }
  .main    { margin-left: 0; }
}`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🧩 Styling a Complete Product Card"}),e.jsx(p,{leftLabel:"HTML structure",rightLabel:"CSS styling",leftCode:`<div class="product-card">
  <div class="badge">NEW</div>
  <img src="headphones.jpg"
       alt="Wireless Headphones" />
  <div class="card-body">
    <h3>Wireless Headphones</h3>
    <p class="rating">⭐ 4.5 (234)</p>
    <div class="card-footer">
      <span class="price">$79.99</span>
      <button class="btn-cart">Add to Cart</button>
    </div>
  </div>
</div>`,rightCode:`.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.card-body { padding: 1rem; }
h3 { font-size: 1rem; margin: 0 0 0.25rem; }
.price { color: #2563eb; font-weight: 700; }
.btn-cart {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  cursor: pointer;
}`,language:"css"})]}),e.jsx(u,{title:"Build a Product Card",difficulty:"easy",description:"Build a complete styled product card using HTML and CSS — the foundation of the ShopHub UI you'll build in React.",startDesign:e.jsx(x,{}),targetDesign:e.jsx(b,{}),requirements:[{label:'Create the HTML structure: image placeholder, product name, price, and "Add to Cart" button',difficulty:"easy"},{label:"Style the card with padding, border, border-radius, and a hover effect",difficulty:"easy"},{label:'Add a "NEW" badge positioned in the top-left corner using position: absolute',difficulty:"medium"},{label:"Add a favorite heart button (🤍) in the top-right corner",difficulty:"medium"},{label:"Make the card responsive — full width on mobile, max 280px on desktop",difficulty:"medium"},{label:"Add a star rating row and a subtle box-shadow on hover",difficulty:"hard"}],hints:["Start with the HTML structure first — no CSS at all. Just get the elements on the page.",'For the card, use a div with class="product-card". Add border, border-radius: 0.75rem, and overflow: hidden.',"For the badge, use position: relative on the image container, and position: absolute on the badge span.","For the buttons, use display: flex; justify-content: space-between; align-items: center on the footer row.","For responsive, use max-width: 280px on the card, and width: 100% on mobile with a media query."],steps:[{title:"Write the HTML skeleton",content:"Create the basic HTML structure with image area, card body, product name, rating, price, and button — no styles yet.",code:`<div class="product-card">
  <div class="card-image">
    <img src="" alt="Product" />
    <span class="badge">NEW</span>
    <button class="btn-fav">🤍</button>
  </div>
  <div class="card-body">
    <h3>Wireless Headphones</h3>
    <p class="rating">⭐ 4.5 (234 reviews)</p>
    <div class="card-footer">
      <span class="price">$79.99</span>
      <button class="btn-cart">Add to Cart</button>
    </div>
  </div>
</div>`},{title:"Add card and image styles",content:"Style the card container and image area.",code:`.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 0.75rem;
  overflow: hidden;
  max-width: 280px;
  background: white;
  transition: transform 0.2s, box-shadow 0.2s;
}
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}
.card-image { position: relative; }
.card-image img { width: 100%; height: 180px; object-fit: cover; }`},{title:"Position the badge and favorite button",content:"Use absolute positioning on the badge and favorite button.",code:`.badge {
  position: absolute;
  top: 8px; left: 8px;
  background: #3b82f6;
  color: white;
  padding: 0.2rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.7rem;
  font-weight: 700;
}
.btn-fav {
  position: absolute;
  top: 8px; right: 8px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px; height: 30px;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.15);
}`},{title:"Style the card body",content:"Style the card body, price, and buttons.",code:`.card-body { padding: 1rem; }
h3 { margin: 0 0 0.25rem; font-size: 0.95rem; color: #0f172a; }
.rating { margin: 0 0 0.75rem; font-size: 0.8rem; color: #64748b; }
.card-footer { display: flex; justify-content: space-between; align-items: center; }
.price { font-weight: 700; color: #2563eb; font-size: 1rem; }
.btn-cart {
  background: #3b82f6;
  color: white;
  border: none;
  padding: 0.4rem 0.875rem;
  border-radius: 0.375rem;
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: 600;
}
.btn-cart:hover { background: #1d4ed8; }`}],checkItems:["Card has a border, border-radius, and overflow: hidden",'"NEW" badge is positioned in the top-left corner of the image',"Favorite heart button is in the top-right corner","Product name, star rating, and price are visible in the card body",'"Add to Cart" button is styled and positioned correctly',"Card has a hover effect (scale or shadow)","Card is max 280px wide but expands on small screens"],answer:`<!-- index.html -->
<div class="product-card">
  <div class="card-image">
    <img src="https://picsum.photos/280/180" alt="Wireless Headphones" />
    <span class="badge">NEW</span>
    <button class="btn-fav" id="favBtn">🤍</button>
  </div>
  <div class="card-body">
    <h3>Wireless Headphones</h3>
    <p class="rating">⭐ 4.5 (234 reviews)</p>
    <div class="card-footer">
      <span class="price">$79.99</span>
      <button class="btn-cart">Add to Cart</button>
    </div>
  </div>
</div>

/* styles.css */
.product-card { border:1px solid #e2e8f0; border-radius:0.75rem; overflow:hidden; max-width:280px; background:#fff; transition:transform 0.2s,box-shadow 0.2s; }
.product-card:hover { transform:translateY(-4px); box-shadow:0 8px 24px rgba(0,0,0,.12); }
.card-image { position:relative; }
.card-image img { width:100%; height:180px; object-fit:cover; }
.badge { position:absolute; top:8px; left:8px; background:#3b82f6; color:#fff; padding:.2rem .5rem; border-radius:.25rem; font-size:.7rem; font-weight:700; }
.btn-fav { position:absolute; top:8px; right:8px; background:#fff; border:none; border-radius:50%; width:30px; height:30px; cursor:pointer; box-shadow:0 1px 4px rgba(0,0,0,.15); }
.card-body { padding:1rem; }
h3 { margin:0 0 .25rem; font-size:.95rem; color:#0f172a; }
.rating { margin:0 0 .75rem; font-size:.8rem; color:#64748b; }
.card-footer { display:flex; justify-content:space-between; align-items:center; }
.price { font-weight:700; color:#2563eb; font-size:1rem; }
.btn-cart { background:#3b82f6; color:#fff; border:none; padding:.4rem .875rem; border-radius:.375rem; cursor:pointer; font-size:.8rem; font-weight:600; }
.btn-cart:hover { background:#1d4ed8; }`})]})}export{k as default};
