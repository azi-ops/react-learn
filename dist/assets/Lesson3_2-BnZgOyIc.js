import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeComparison-B_ysuKRn.js";import{C as o}from"./Challenge-B2Dev4fs.js";import{C as t}from"./Callout-B_CeIBza.js";import{S as s}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function p(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 3 — Components"}),e.jsx("h1",{children:"Composing Components"}),e.jsx("p",{className:"lesson-subtitle",children:"Putting the LEGO bricks together to build complex applications."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Component composition (nesting)"}),e.jsx("li",{children:"File structure and modularity"}),e.jsx("li",{children:"Exporting and importing components"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsxs("p",{children:["A single React component shouldn't try to do everything. A `Navbar` shouldn't manage the logo layout, the search bar logic, and the cart icon. Instead, we use ",e.jsx("strong",{children:"Composition"}),". The `Navbar` becomes a container that imports and renders smaller, focused components: `",e.jsx(Logo,{}),"`, `",e.jsx(SearchBar,{}),"`, and `",e.jsx(CartButton,{}),"`. Like Russian nesting dolls, components contain other components."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(n,{leftLabel:"Monolithic Function",rightLabel:"Composed Functions",leftCode:`function makeApp() {
  makeHeader();
  makeSidebar();
  makeContent();
}`,rightCode:`function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Content />
    </>
  );
}`,language:"jsx"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(s,{steps:[{title:"Child Component (Logo.jsx)",code:`export default function Logo() {
  return <h2>ShopHub</h2>;
}`,language:"jsx",explanation:"Define the small piece and export it."},{title:"Child Component (Cart.jsx)",code:`export default function Cart() {
  return <button>Cart (0)</button>;
}`,language:"jsx",explanation:"Define another small piece."},{title:"Parent (Navbar.jsx)",code:`import Logo from './Logo';
import Cart from './Cart';

export default function Navbar() {
  return (
    <nav>
      <Logo />
      <Cart />
    </nav>
  );
}`,language:"jsx",explanation:"Bring them together in a layout."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx("p",{children:'We keep our codebase clean by enforcing a "One Component Per File" rule. Our ShopHub `src/components/` folder will eventually have dozens of files, each doing one small job perfectly.'})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(t,{type:"warning",children:'Making "God Components". If your `App.jsx` file is 500 lines long and contains all the HTML for the entire page, you aren\'t really using React properly! Break it down!'})]}),e.jsx(o,{id:"3-2-challenge",title:"Compose a Layout",description:"Assume Sidebar, MainContent, and Footer components exist. Write a PageLayout component that renders a div with className='layout', containing the Sidebar and MainContent side by side (in a div), followed by the Footer below them.",hint:"Just use the component names as self-closing tags.",answer:`function PageLayout() {
  return (
    <div className="layout">
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
}`,explanation:"Composition allows us to build complex page layouts out of simple, semantic tags.",difficulty:"medium"})]})}export{p as default};
