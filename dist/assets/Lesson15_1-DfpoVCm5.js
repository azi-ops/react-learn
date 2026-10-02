import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as o}from"./CodeComparison-B_ysuKRn.js";import{C as a}from"./Challenge-B2Dev4fs.js";import{C as s}from"./Callout-B_CeIBza.js";import{S as n}from"./StepByStep-Be1tR1cd.js";function h(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 15 — React Router"}),e.jsx("h1",{children:"Routing Basics"}),e.jsx("p",{className:"lesson-subtitle",children:"Understanding Single Page Applications and setting up React Router"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Traditional Web vs. Single Page Applications"}),e.jsxs("p",{children:["Before we dive into React Router, we need to understand how web navigation traditionally works. In a classic website, when you click a link like ",e.jsx("code",{children:'<a href="/about">About</a>'}),", the browser clears the current page, sends a request to the server, and downloads an entirely new HTML page."]}),e.jsxs("p",{children:["React applications are typically built as ",e.jsx("strong",{children:"Single Page Applications (SPAs)"}),". In an SPA, there is only ",e.jsx("em",{children:"one"})," actual HTML file (usually ",e.jsx("code",{children:"index.html"}),"). When a user clicks a link, JavaScript intercepts the click, prevents the browser from reloading, and simply swaps out the React components being displayed based on the new URL."]}),e.jsx(o,{leftLabel:"Traditional Multi-Page App",rightLabel:"React Single Page App",leftCode:`// User clicks <a href="/cart">
// 1. Browser clears current page
// 2. Server sends cart.html
// 3. Browser renders new page from scratch
// (Screen goes blank for a moment)`,rightCode:`// User clicks <Link to="/cart">
// 1. React intercepts the click
// 2. URL updates instantly
// 3. React unmounts <HomePage />
// 4. React mounts <CartPage />
// (Instant transition, no blank screen)`}),e.jsx("h2",{children:"Introducing React Router"}),e.jsxs("p",{children:["React itself doesn't come with routing built-in. It just renders components. To handle different URLs, the React community uses a library called ",e.jsx("strong",{children:"React Router"}),". It watches the browser's URL and renders the appropriate component when the URL changes."]}),e.jsx("h3",{children:"Setting Up React Router"}),e.jsxs("p",{children:["To use React Router, we need to wrap our entire application in a ",e.jsx("code",{children:"<BrowserRouter>"})," component. This gives all our components access to the router's features."]}),e.jsx(t,{language:"jsx",filename:"main.jsx",children:`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);`}),e.jsx("h2",{children:"Defining Routes"}),e.jsxs("p",{children:["Inside our main ",e.jsx("code",{children:"App.jsx"}),", we use ",e.jsx("code",{children:"<Routes>"})," and ",e.jsx("code",{children:"<Route>"})," components to define which component should show up for which URL."]}),e.jsx(n,{steps:[{title:"No Router",code:`function App() {
  // Hardcoded to show Home
  return <Home />;
}`,language:"jsx",explanation:"Without a router, we just render one component directly. Changing the URL does nothing."},{title:"Add Routes component",code:`import { Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      {/* Route definitions go here */}
    </Routes>
  );
}`,language:"jsx",explanation:"The <Routes> component looks at the current URL and finds the first <Route> that matches it."},{title:"Add ShopHub Routes",code:`import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}`,language:"jsx",explanation:"Each <Route> maps a 'path' to a React element. The path='*' is a catch-all for 404 pages."}]}),e.jsxs(s,{type:"info",children:["The ",e.jsx("code",{children:'path="*"'}),' route is special. The asterisk means "match anything". Because ',e.jsx("code",{children:"<Routes>"})," works from top to bottom, if no other route matches the URL, it will hit the ",e.jsx("code",{children:"*"}),' route, making it perfect for a "404 Not Found" page.']}),e.jsx("h2",{children:"How ShopHub Uses Routes"}),e.jsxs("p",{children:["In our ShopHub application, we have a main navigation bar that should be visible on ",e.jsx("em",{children:"every"})," page. We can place it outside the ",e.jsx("code",{children:"<Routes>"})," component!"]}),e.jsx(t,{language:"jsx",filename:"App.jsx",children:`function App() {
  return (
    <div className="app-container">
      {/* Navbar shows on EVERY page because it's outside <Routes> */}
      <Navbar /> 
      
      <main className="content">
        {/* Only ONE of these will show at a time */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>

      {/* Footer shows on EVERY page */}
      <Footer />
    </div>
  );
}`}),e.jsx(a,{id:"ch15-1-favorites-route",title:"Add a Favorites Route",description:"We've built a new FavoritesPage component that shows the user's wishlisted items. Add a route for it so it displays when the user navigates to '/favorites'.",hint:"You'll need to add a new <Route> inside the <Routes> block with the appropriate path and element props.",difficulty:"easy",answer:`import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FavoritesPage from './pages/FavoritesPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}`,explanation:"By adding <Route path='/favorites' element={<FavoritesPage />} />, we tell React Router that whenever the URL exactly matches '/favorites', it should render the FavoritesPage component."})]})]})}export{h as default};
