import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeComparison-B_ysuKRn.js";import{C as t}from"./Challenge-B2Dev4fs.js";import{C as s}from"./Callout-B_CeIBza.js";import{S as o}from"./StepByStep-Be1tR1cd.js";import"./CodeBlock-y81Z23mq.js";function h(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 4 — Props"}),e.jsx("h1",{children:"Functions as Props"}),e.jsx("p",{className:"lesson-subtitle",children:"How child components communicate back to their parents."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Passing functions down to children"}),e.jsx("li",{children:"Calling parent functions from child events"}),e.jsx("li",{children:"Why this pattern is necessary for interaction"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsxs("p",{children:["We know data flows down. But what if a user clicks a button in a child component (like a `ProductCard`), and we need to update the cart data living in the parent (`App`)? The solution: The parent passes a ",e.jsx("strong",{children:"function"})," down as a prop. The child simply calls that function when the button is clicked!"]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(n,{leftLabel:"Passing Callbacks (JS)",rightLabel:"Passing Callbacks (React)",leftCode:`function execute(callback) {
  callback();
}
execute(() => console.log('Hi'));`,rightCode:`function Child({ onAction }) {
  return <button onClick={onAction}>Click</button>;
}
<Child onAction={() => console.log('Hi')} />`,language:"javascript"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(o,{steps:[{title:"Parent defines logic",code:`function App() {
  function handleAdd(item) {
    console.log("Adding", item);
  }
  return <Card onAdd={handleAdd} />;
}`,language:"jsx",explanation:"The parent owns the function because it owns the data."},{title:"Child calls it",code:`function Card({ onAdd }) {
  return <button onClick={() => onAdd('Laptop')}>Buy</button>;
}`,language:"jsx",explanation:"The child connects the parent's function to a DOM event (onClick)."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx("p",{children:"When you click the heart icon on a `ProductCard` to favorite it, the card itself doesn't update the database. It simply triggers the `onFavorite(product.id)` function passed down from the top-level app, telling the app to save the favorite."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsxs(s,{type:"warning",children:["Avoid calling the function immediately! ",e.jsx("code",{children:'onClick={onAdd("Laptop")}'})," runs at render time, not on click. Always wrap in an arrow function: ",e.jsx("code",{children:'onClick={() => onAdd("Laptop")}'}),"."]})]}),e.jsx(t,{id:"4-3-challenge",title:"Trigger a Delete Event",description:"Write a CartItem component that accepts a 'productName' and an 'onDelete' function as props. It should render a button that, when clicked, calls onDelete and passes the productName to it.",hint:"Use an arrow function inside the onClick attribute.",answer:`function CartItem({ productName, onDelete }) {
  return (
    <div>
      <span>{productName}</span>
      <button onClick={() => onDelete(productName)}>
        Remove
      </button>
    </div>
  );
}`,explanation:"This is the standard pattern for React interactions. The parent passes a remote control (onDelete) to the child. The child presses the button.",difficulty:"medium"})]})}export{h as default};
