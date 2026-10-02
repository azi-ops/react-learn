import{j as e}from"./index-fCZyuqB2.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as t}from"./Challenge-B2Dev4fs.js";import{C as n}from"./Callout-B_CeIBza.js";import{S as o}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 4 — Props"}),e.jsx("h1",{children:"Introduction to Props"}),e.jsx("p",{className:"lesson-subtitle",children:"How components communicate by passing data down the tree."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"What Props (Properties) are"}),e.jsx("li",{children:"How to pass props to a component"}),e.jsx("li",{children:"How to read props inside a component"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:`A reusable component isn't very useful if it always displays the exact same text. We need to customize components when we use them. "Props" are just custom attributes you add to a JSX tag. React bundles all these attributes into a single JavaScript object and passes it to your component function as its first argument.`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(s,{leftLabel:"JS Function Arguments",rightLabel:"React Component Props",leftCode:`function greet(name, age) {
  console.log(name, age);
}

greet('Alice', 25);`,rightCode:`function Greet(props) {
  return <p>{props.name} is {props.age}</p>;
}

<Greet name="Alice" age={25} />`,language:"jsx"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(o,{steps:[{title:"Passing Props",code:'<ProductCard title="Laptop" price={999} />',language:"jsx",explanation:"Strings use quotes. Numbers (and variables) use curly braces."},{title:"Receiving Props",code:`function ProductCard(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>Price: ${props.price}</p>
    </div>
  );
}`,language:"jsx",explanation:"The component receives a 'props' object: { title: 'Laptop', price: 999 }"}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsxs("p",{children:["We will fetch an array of 20 products from our database. We will `map()` over that array, and render 20 `",e.jsx(ProductCard,{}),"` components, passing the unique data for each product down as props!"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(n,{type:"warning",children:"Props are READ-ONLY! A child component cannot modify the props it receives from its parent. `props.price = 500` will crash your app. Data flow is strictly one-way."})]}),e.jsx(t,{id:"4-1-challenge",title:"Create a PriceTag Component",description:"Write a PriceTag component that accepts a single prop object. It should read 'props.price' and 'props.currency' and display them in a span tag.",hint:"Don't forget to pass 'props' as the argument to the function!",answer:`function PriceTag(props) {
  return (
    <span className="price">
      {props.currency}{props.price}
    </span>
  );
}`,explanation:"The parent can now call <PriceTag price={99} currency='$' /> and the component will dynamically render it.",difficulty:"easy"})]})}export{d as default};
