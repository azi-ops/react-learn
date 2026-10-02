import{j as e}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as s}from"./Challenge-B2Dev4fs.js";import{C as t}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 14 — Context API"}),e.jsx("h1",{children:"The Prop Drilling Problem"}),e.jsx("p",{className:"lesson-subtitle",children:"When lifting state up becomes painful"})]}),e.jsxs("p",{children:["In Chapter 13, we learned that the proper way to share data between sibling components is to ",e.jsx("em",{children:"lift the state up"})," to their common parent, and pass it down as props. This works perfectly... until your app gets deep."]}),e.jsx("h2",{children:"What is Prop Drilling?"}),e.jsx("p",{children:"Prop drilling happens when you have to pass data through multiple layers of components that don't actually need the data, just to get it to a component down at the bottom that does."}),e.jsx(n,{language:"jsx",filename:"PropDrilling.jsx",children:`function App() {
  const [user, setUser] = useState({ name: 'Alex' });
  
  // App passes user to Layout
  return <Layout user={user} />;
}

// Layout doesn't use 'user', just passes it to Navbar
function Layout({ user, children }) {
  return (
    <div>
      <Navbar user={user} />
      {children}
    </div>
  );
}

// Navbar doesn't use 'user', just passes it to UserMenu
function Navbar({ user }) {
  return <UserMenu user={user} />;
}

// UserMenu FINALLY uses it!
function UserMenu({ user }) {
  return <div className="avatar">Hi, {user.name}</div>;
}`}),e.jsx("h2",{children:"Why is Prop Drilling Bad?"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Noisy Code:"})," Components are cluttered with props they don't care about."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hard to Refactor:"})," If you rename the prop or need to pass a new one, you have to edit 5 different files."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Coupling:"})," ",e.jsx("code",{children:"Layout"})," is now tightly coupled to the concept of a ",e.jsx("code",{children:"user"}),", even though structurally it shouldn't care about authentication."]})]}),e.jsx("h2",{children:"The Solution: Teleportation (Context)"}),e.jsxs("p",{children:["React provides a built-in feature called the ",e.jsx("strong",{children:"Context API"}),'. Context allows you to "broadcast" data from a parent component directly to any descendant component, no matter how deep it is, skipping all the components in between.']}),e.jsxs(t,{type:"info",children:[e.jsx("strong",{children:"When to use Context:"}),'Use Context for data that is considered "global" or needed by many disparate parts of your app. Good candidates: Current User/Auth state, Theme (Light/Dark mode), Language/Locale, and the Shopping Cart.']}),e.jsxs(t,{type:"warning",children:[e.jsx("strong",{children:"When NOT to use Context:"}),"Don't put ",e.jsx("em",{children:"everything"})," in Context. Local UI state (like whether a specific dropdown is open, or the text in a search input) should remain as standard ",e.jsx("code",{children:"useState"})," inside its component. Context is not a complete replacement for props!"]}),e.jsx("h2",{children:"Preparing for ShopHub Context"}),e.jsxs("p",{children:["In ShopHub, our Cart state currently lives in ",e.jsx("code",{children:"App.jsx"})," and is passed down to ",e.jsx("code",{children:"Navbar"}),", ",e.jsx("code",{children:"ProductList"}),", ",e.jsx("code",{children:"ProductCard"}),", and ",e.jsx("code",{children:"CartPage"}),". It's getting messy. In the next lesson, we will refactor the Cart to use Context!"]}),e.jsx(s,{id:"ch14_1_identify_context",title:"Identify Good Context Candidates",description:"Look at the following pieces of state in a hypothetical ShopHub app. Which TWO would be good candidates to move into Context? (Write a simple React component that renders the names of the two candidates in an h3 tag).",hint:"Candidates: 1. isSidebarOpen, 2. currentLanguage (en/fr), 3. searchInputValue, 4. userPreferences (theme/currency).",answer:`import React from 'react';

export default function ContextCandidates() {
  return (
    <div>
      <h2>The best candidates for Context are:</h2>
      <h3>1. currentLanguage (en/fr)</h3>
      <h3>2. userPreferences (theme/currency)</h3>
      <p>
        Reasoning: Both of these are "global" settings that might be needed by components all over the app (like formatting prices, translating text, or applying CSS classes). The sidebar state and search input are localized UI state.
      </p>
    </div>
  );
}`,explanation:"Context is meant for global, widely-shared data. Language and Theme affect almost every component on the page. Search input text only affects the search bar and the immediate list it filters.",difficulty:"easy"})]})}export{d as default};
