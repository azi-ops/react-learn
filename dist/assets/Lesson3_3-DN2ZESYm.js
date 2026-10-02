import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as a}from"./CodeComparison-B_ysuKRn.js";import{C as s}from"./Challenge-B2Dev4fs.js";import{C as n}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 3 — Components"}),e.jsx("h1",{children:"The Component Tree"}),e.jsx("p",{className:"lesson-subtitle",children:"Visualizing the hierarchy and flow of data in your application."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"What the Component Tree is"}),e.jsx("li",{children:"Parent/Child relationships"}),e.jsx("li",{children:'The concept of "One-Way Data Flow"'})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Concept"}),e.jsx("p",{children:"Because components render other components, a React application naturally forms a Tree structure. At the very top is `App`. Below it are layout pieces, and at the bottom are tiny UI elements. Understanding this tree is crucial because in React, data only flows DOWN the tree (from Parent to Child). A child cannot easily pass data sideways to a sibling."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔗 JavaScript Connection"}),e.jsx(a,{leftLabel:"DOM Tree",rightLabel:"React Component Tree",leftCode:`<body>
  <nav>
    <ul>
      <li>Link</li>
    </ul>
  </nav>
</body>`,rightCode:`<App>
  <Navbar>
    <NavLinks>
      <LinkItem />
    </NavLinks>
  </Navbar>
</App>`,language:"html"})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Code Example"}),e.jsx("p",{children:"A simple visual representation of our upcoming ShopHub tree:"}),e.jsx(t,{language:"bash",children:`App
 ├── Navbar
 │    ├── Logo
 │    └── CartIcon
 ├── HeroBanner
 └── ProductGrid
      ├── ProductCard
      ├── ProductCard
      └── ProductCard`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 In ShopHub"}),e.jsx("p",{children:"If we fetch the list of products in the `App` component, we can pass that data DOWN to the `ProductGrid`. But if we fetched the data inside `Footer`, the `ProductGrid` would have no way to access it! Data flows down."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚠️ Common Mistakes"}),e.jsx(n,{type:"warning",children:"Trying to pass data UP the tree directly, or SIDEWAYS to a sibling. If two sibling components (like `Navbar` and `ProductGrid`) both need to know the cart data, that data must live in their shared parent (`App`)."})]}),e.jsx(s,{id:"3-3-challenge",title:"Analyze the Tree",description:"Given the tree: App -> ProductPage -> (ProductImage, ProductDetails -> AddToCartButton). Which component should hold the data for the product's title and price so both Image and Details can use it?",hint:"Find the closest common ancestor of the components that need the data.",answer:`// The ProductPage component!
// Since both ProductImage and ProductDetails need the data,
// their shared parent (ProductPage) must hold it and pass it down.`,explanation:"Lifting data to the closest common parent is a fundamental React pattern. You always pass data DOWN the tree.",difficulty:"easy"})]})}export{d as default};
