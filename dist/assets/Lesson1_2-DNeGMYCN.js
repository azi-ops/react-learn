import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeComparison-B_ysuKRn.js";import{C as n}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{S as s}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function p(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 1 — What is React?"}),e.jsx("h1",{children:"Your First Component"}),e.jsx("p",{className:"lesson-subtitle",children:"Learn the fundamental building block of all React applications."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"What a React component actually is"}),e.jsx("li",{children:"Writing your first component using JSX"}),e.jsx("li",{children:"How to use and nest components"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:"A React Component is simply a JavaScript function that returns JSX (HTML-like syntax). That's it! Because they are just functions, they can contain JavaScript logic, variables, and eventually, return the visual representation of that logic. You call these functions by writing them like custom HTML tags."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(t,{leftLabel:"Standard JS Function",rightLabel:"React Component",leftCode:`function getGreeting() {
  return "Hello, ShopHub!";
}

getGreeting();`,rightCode:`function Greeting() {
  return <h1>Hello, ShopHub!</h1>;
}

<Greeting />`,language:"jsx"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(s,{steps:[{title:"Basic Component",code:`function Header() {
  return <header>ShopHub</header>;
}`,language:"jsx",explanation:"A valid component. Notice the Capitalized name."},{title:"Nesting Elements",code:`function Header() {
  return (
    <header className="nav">
      <h1>ShopHub</h1>
    </header>
  );
}`,language:"jsx",explanation:"Wrap multi-line JSX in parentheses. Use className instead of class."},{title:"Using It",code:`function App() {
  return (
    <div>
      <Header />
      <main>Welcome!</main>
    </div>
  );
}`,language:"jsx",explanation:"Use the component as a self-closing tag inside another component."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx("p",{children:"Every piece of our ShopHub interface will be a component. We'll have a `Navbar`, a `Hero` section, a `ProductList`, and a `Footer`. These components combine to form the `App`."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(a,{type:"warning",children:"React component names MUST start with a Capital Letter. If you name it `header()` instead of `Header()`, React will treat it as a standard HTML tag and it won't work."})]}),e.jsx(n,{id:"1-2-challenge",title:"Create a Footer Component",description:"Create a functional component named Footer that returns a standard HTML footer tag containing a paragraph with the ShopHub copyright text.",hint:"Don't forget to return the JSX and capitalize the function name!",answer:`function Footer() {
  return (
    <footer>
      <p>&copy; 2024 ShopHub. All rights reserved.</p>
    </footer>
  );
}`,explanation:"We declare a JS function starting with a capital letter, and we return the JSX markup. We can now use <Footer /> anywhere in our app.",difficulty:"easy"})]})}export{p as default};
