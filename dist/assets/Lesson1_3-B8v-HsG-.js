import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as o}from"./CodeComparison-B_ysuKRn.js";import{C as n}from"./Challenge-B2Dev4fs.js";import{C as s}from"./Callout-B_CeIBza.js";import{S as a}from"./StepByStep-Be1tR1cd.js";function m(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 1 — What is React?"}),e.jsx("h1",{children:"ShopHub Project Setup"}),e.jsx("p",{className:"lesson-subtitle",children:"Understanding the Vite React environment and project structure."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"How a React project is structured"}),e.jsx("li",{children:"The role of index.html, main.jsx, and App.jsx"}),e.jsx("li",{children:"How components connect via imports and exports"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:"In modern web development, we don't just include a script tag in an HTML file. We use build tools (like Vite) that bundle our JavaScript, compile JSX, and spin up local development servers. The entry point of our app is an empty `div` in `index.html`. React takes control of that div and injects our entire Component Tree into it."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(o,{leftLabel:"ES6 Modules (Plain JS)",rightLabel:"React Component Modules",leftCode:`// utils.js
export function add(a,b) { return a+b; }

// main.js
import { add } from './utils.js';`,rightCode:`// Navbar.jsx
export default function Navbar() { return <nav /> }

// App.jsx
import Navbar from './Navbar.jsx';`,language:"javascript"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx(a,{steps:[{title:"index.html",code:'<div id="root"></div>',language:"html",explanation:"The empty container React will take over."},{title:"main.jsx",code:`import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(<App />);`,language:"jsx",explanation:"Tells React to inject the App component into the root div."},{title:"App.jsx",code:`export default function App() {
  return <h1>ShopHub</h1>;
}`,language:"jsx",explanation:"The root component of our application."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx("p",{children:"Our ShopHub structure will look like this:"}),e.jsx(t,{language:"bash",children:`src/
  components/
    Navbar.jsx
    ProductCard.jsx
  App.jsx
  main.jsx`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(s,{type:"warning",children:"Forgetting to export your component! If you write a beautiful ProductCard but forget `export default function ProductCard()`, you won't be able to import it in `App.jsx`."})]}),e.jsx(n,{id:"1-3-challenge",title:"Assemble the App",description:"Write the code for App.jsx that imports a 'Navbar' and a 'Footer' component from the './components' folder, and renders them with a standard <main> tag in between.",hint:"Don't forget the import statements at the top, and wrap everything in a single parent div or fragment.",answer:`import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <main>ShopHub Content</main>
      <Footer />
    </div>
  );
}`,explanation:"This is the standard architectural pattern for a React app. Import the pieces, assemble them in App.jsx.",difficulty:"medium"})]})}export{m as default};
