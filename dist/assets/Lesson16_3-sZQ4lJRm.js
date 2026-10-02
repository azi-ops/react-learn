import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as o}from"./Challenge-B2Dev4fs.js";import{C as t}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 16 — Project Structure"}),e.jsx("h1",{children:"Naming Conventions"}),e.jsx("p",{className:"lesson-subtitle",children:"Writing code that reads like English"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Principle of Least Surprise"}),e.jsxs("p",{children:["When you join a development team, you spend far more time reading other people's code than writing your own. To make code readable, developers follow strict ",e.jsx("strong",{children:"naming conventions"}),"."]}),e.jsx("p",{children:'The goal is the "Principle of Least Surprise": a developer should be able to look at the name of a file or variable and instantly know exactly what it is and what it does.'}),e.jsx("h2",{children:"React Naming Rules"}),e.jsx("h3",{children:"1. Components and Files: PascalCase"}),e.jsxs("p",{children:["React components should ALWAYS be named using ",e.jsx("code",{children:"PascalCase"})," (every word capitalized, including the first). The file name should exactly match the component name inside it."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"ProductCard.jsx"})," contains ",e.jsx("code",{children:"function ProductCard()"})]}),e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"ShoppingCart.jsx"})," contains ",e.jsx("code",{children:"function ShoppingCart()"})]}),e.jsxs("li",{children:["❌ ",e.jsx("code",{children:"productcard.jsx"})," (all lowercase)"]}),e.jsxs("li",{children:["❌ ",e.jsx("code",{children:"Nav.jsx"})," containing ",e.jsx("code",{children:"function NavigationBar()"})," (mismatched)"]})]}),e.jsx("h3",{children:'2. Hooks: camelCase with "use"'}),e.jsxs("p",{children:["Any custom hook must start with the word ",e.jsx("code",{children:"use"}),", followed by camelCase. This isn't just a convention; React's internal linter actually relies on this to enforce hook rules!"]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"useFetch"}),", ",e.jsx("code",{children:"useCart"}),", ",e.jsx("code",{children:"useWindowSize"})]}),e.jsxs("li",{children:["❌ ",e.jsx("code",{children:"fetchDataHook"}),", ",e.jsx("code",{children:"UseAuth"})]})]}),e.jsx("h3",{children:'3. Event Handlers: "handle" and "on"'}),e.jsx("p",{children:"When passing event handling functions as props, we follow a specific pattern:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["The ",e.jsx("strong",{children:"function itself"})," starts with ",e.jsx("code",{children:"handle..."})," (e.g., ",e.jsx("code",{children:"handleAddToCart"}),")"]}),e.jsxs("li",{children:["The ",e.jsx("strong",{children:"prop name"})," starts with ",e.jsx("code",{children:"on..."})," (e.g., ",e.jsx("code",{children:"onAdd"}),")"]})]}),e.jsx(s,{leftLabel:"Confusing Prop Names",rightLabel:"Standard Prop Names",leftCode:`function ProductCard({ product, addEvent }) {
  const clickIt = () => {
    addEvent(product);
  }

  return <button onClick={clickIt}>Add</button>
}`,rightCode:`// The prop is "on[Action]"
function ProductCard({ product, onAddToCart }) {
  // The handler is "handle[Action]"
  const handleAddClick = () => {
    onAddToCart(product);
  }

  return <button onClick={handleAddClick}>Add</button>
}`}),e.jsx("h3",{children:"4. CSS Classes: kebab-case"}),e.jsxs("p",{children:["For plain CSS, standard practice is to use ",e.jsx("code",{children:"kebab-case"})," (all lowercase, words separated by hyphens)."]}),e.jsxs("ul",{children:[e.jsxs("li",{children:["✅ ",e.jsx("code",{children:'className="product-card active-item"'})]}),e.jsxs("li",{children:["❌ ",e.jsx("code",{children:'className="ProductCard activeItem"'})]})]}),e.jsx("h2",{children:"Import Ordering"}),e.jsxs("p",{children:["When files get large, the top block of ",e.jsx("code",{children:"import"})," statements can become a mess. A standard convention is to group imports in this specific order, separated by blank lines:"]}),e.jsx(n,{language:"jsx",filename:"pages/ProductDetail.jsx",children:`// 1. React and third-party libraries
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// 2. Internal Contexts and Hooks
import { useCart } from '../hooks/useCart';

// 3. Internal Components
import LoadingSpinner from '../components/ui/LoadingSpinner';
import ProductGallery from '../components/features/ProductGallery';

// 4. Services and Utils
import { fetchProductById } from '../services/productService';
import { formatPrice } from '../utils/formatters';

// 5. CSS styles
import './ProductDetail.css';

function ProductDetail() { ... }`}),e.jsxs(t,{type:"info",children:["You don't always have to do this manually! Many teams use tools like ",e.jsx("strong",{children:"ESLint"})," and ",e.jsx("strong",{children:"Prettier"}),"to automatically organize imports and format code every time they save a file."]}),e.jsx(o,{id:"ch16-3-rename-cleanup",title:"Clean Up the Code",description:"The following code breaks several naming conventions. Look at the component name, the event handler, and the boolean state variable. Rewrite the component declaration and its internals using proper conventions.",hint:"Remember PascalCase for components, camelCase for functions, 'handle' for handlers, and 'is' or 'has' for booleans.",difficulty:"medium",answer:`function LoginModal({ onLogin }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginClick = () => {
    setIsOpen(true);
    onLogin();
  };

  return (
    <button onClick={handleLoginClick}>Login</button>
  );
}`,explanation:"We changed loginModal to LoginModal (PascalCase). The boolean state flag should indicate a true/false condition, so 'open' becomes 'isOpen'. The function to handle the click becomes 'handleLoginClick' instead of 'doLogin'."})]})]})}export{d as default};
