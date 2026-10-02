import{j as e}from"./index-fCZyuqB2.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as t}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{S as l}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function h(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 2 — JSX"}),e.jsx("h1",{children:"JSX Basics"}),e.jsx("p",{className:"lesson-subtitle",children:"Learning the rules of React's HTML-like syntax."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"What JSX actually is under the hood"}),e.jsx("li",{children:"The strict rules of writing JSX"}),e.jsx("li",{children:"Differences between HTML and JSX"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:"JSX stands for JavaScript XML. It allows us to write HTML directly inside our JavaScript code. But browsers don't understand JSX! Under the hood, build tools (like Vite/Babel) transform JSX into standard JavaScript `React.createElement()` function calls. Because it's ultimately JavaScript, JSX has slightly stricter rules than standard HTML."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(s,{leftLabel:"What you write (JSX)",rightLabel:"What the browser sees (JS)",leftCode:'<h1 className="title">ShopHub</h1>',rightCode:`React.createElement(
  'h1', 
  { className: 'title' }, 
  'ShopHub'
)`,language:"javascript"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(l,{steps:[{title:"Rule 1: Return a single root",code:`return (
  <>
    <h1>ShopHub</h1>
    <p>Welcome!</p>
  </>
);`,language:"jsx",explanation:"You can't return two sibling tags. Wrap them in a Fragment <></>."},{title:"Rule 2: Close all tags",code:`<img src="laptop.jpg" alt="Laptop" />
<br />`,language:"jsx",explanation:"Even tags that don't need closing in HTML MUST be self-closed in JSX."},{title:"Rule 3: camelCase attributes",code:`<div className="card" onClick={handleClick}>
</div>`,language:"jsx",explanation:"class becomes className, onclick becomes onClick."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsxs("p",{children:["When building our ShopHub UI, we will paste a lot of standard HTML templates. You must remember to convert all ",e.jsx("code",{children:"class="})," attributes to ",e.jsx("code",{children:"className="}),", and self-close your ",e.jsx("code",{children:"<img />"})," and ",e.jsx("code",{children:"<input />"})," tags!"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsxs(a,{type:"warning",children:["Returning multiple elements without a wrapper. If you try to return an h1 and a p tag side by side without a parent div or Fragment, React will throw an error. Always wrap in one root element or use ",e.jsx("code",{children:"<>...</>"}),"."]})]}),e.jsx(t,{id:"2-1-challenge",title:"Fix the broken JSX",description:"The following JSX is broken. Fix it so it follows React's strict rules.",hint:"Look at the root element, the class attribute, and the unclosed img tag.",answer:`function Product() {
  return (
    <div className="product-card">
      <h2>Laptop</h2>
      <img src="laptop.jpg" alt="Laptop" />
    </div>
  );
}`,explanation:"We wrapped the elements in a single parent div, changed 'class' to 'className', and self-closed the img tag with a forward slash.",difficulty:"easy"})]})}export{h as default};
