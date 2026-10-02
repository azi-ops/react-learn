import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeComparison-B_ysuKRn.js";import{C as s}from"./Challenge-B2Dev4fs.js";import{C as t}from"./Callout-B_CeIBza.js";import{S as a}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function h(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 3 — Components"}),e.jsx("h1",{children:"Functional Components"}),e.jsx("p",{className:"lesson-subtitle",children:"Building independent, reusable pieces of user interface."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Creating functional components"}),e.jsx("li",{children:"Why reusability is the superpower of React"}),e.jsx("li",{children:"Rendering multiple instances of a component"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:"In standard web dev, if you want 10 product cards, you copy-paste the HTML 10 times. If the design changes, you have to update 10 places. In React, a component acts as a blueprint. You build the `ProductCard` component ONCE, and render it 10 times. When you change the blueprint, all 10 cards update instantly."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(n,{leftLabel:"Calling a function multiple times",rightLabel:"Rendering a component multiple times",leftCode:`function makeUser(name) { ... }

makeUser('Alice');
makeUser('Bob');`,rightCode:`function User() { return <div>User</div> }

return (
  <>
    <User />
    <User />
  </>
);`,language:"jsx"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(a,{steps:[{title:"Define the Blueprint",code:`function CartItem() {
  return <div className="item">Macbook Pro</div>;
}`,language:"jsx",explanation:"We define the UI logic in one place."},{title:"Reuse It",code:`function Cart() {
  return (
    <div className="cart">
      <CartItem />
      <CartItem />
      <CartItem />
    </div>
  );
}`,language:"jsx",explanation:"We 'call' the component three times using JSX syntax."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsxs("p",{children:['Our ShopHub home page will feature a "Trending Products" section. Instead of writing HTML for 8 different products, we will simply render 8 `',e.jsx(ProductCard,{}),"` components. (Later, we'll learn how to pass different data to each one!)"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(t,{type:"warning",children:"Never define a component inside another component! This forces React to completely destroy and recreate the child component on every render, ruining performance and breaking state."})]}),e.jsx(s,{id:"3-1-challenge",title:"Reusable Badge",description:"Create a 'Badge' component that renders a span with the text 'Sale!'. Then, create a 'Product' component that renders a div containing an h3, and TWO Badge components next to it.",hint:"Define both functions. Use <Badge /> inside Product.",answer:`function Badge() {
  return <span className="badge">Sale!</span>;
}

function Product() {
  return (
    <div>
      <h3>Sneakers</h3>
      <Badge />
      <Badge />
    </div>
  );
}`,explanation:"Components are completely reusable. You can render them as many times as you want, wherever you want.",difficulty:"easy"})]})}export{h as default};
