import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as i}from"./Challenge-B2Dev4fs.js";import{C as n}from"./Callout-B_CeIBza.js";function h(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 18 — Final Project"}),e.jsx("h1",{children:"Improvements & Polish"}),e.jsx("p",{className:"lesson-subtitle",children:`Taking an app from "It Works" to "It's Good"`})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Final 10%"}),e.jsx("p",{children:'There is a saying in software engineering: "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time."'}),e.jsx("p",{children:"Our ShopHub works. But making it feel like a professional, polished application requires attention to UX (User Experience), Performance, and Error Handling."}),e.jsx("h2",{children:"1. User Experience (UX) Polish"}),e.jsx("h3",{children:"Loading Skeletons"}),e.jsx("p",{children:'A spinning circle is okay, but a "Skeleton Screen" is better. It gives the user a sense of what is about to load, making the wait feel shorter.'}),e.jsx(s,{leftLabel:"Basic Spinner",rightLabel:"Skeleton Loader",leftCode:`if (loading) {
  return <div className="spinner"></div>;
}`,rightCode:`if (loading) {
  return (
    <div className="product-skeleton">
      <div className="skel-img"></div>
      <div className="skel-title"></div>
      <div className="skel-price"></div>
    </div>
  );
}`}),e.jsx("h3",{children:"Optimistic UI Updates"}),e.jsx("p",{children:`If a user clicks a "Like" button, don't wait for the server to respond before turning the heart red. Turn it red immediately (optimistically), fire the API request in the background, and only revert it if the API fails.`}),e.jsx("h2",{children:"2. Performance Optimization"}),e.jsx("p",{children:"React is fast by default, but it can get bogged down if you render too much unnecessarily."}),e.jsx("h3",{children:"React.memo"}),e.jsxs("p",{children:["If you have a complex component that receives the exact same props, you can wrap it in ",e.jsx("code",{children:"React.memo()"}),` to tell React: "Don't bother re-rendering this unless the props actually change."`]}),e.jsx(t,{language:"jsx",filename:"components/HeavyChart.jsx",children:`import React from 'react';

function HeavyChart({ data }) {
  // Complex math and SVG rendering...
  return <svg>...</svg>;
}

// React will skip re-rendering this if 'data' hasn't changed!
export default React.memo(HeavyChart);`}),e.jsxs(n,{type:"warning",children:[e.jsx("strong",{children:"Don't optimize prematurely!"}),e.jsx("br",{}),"Wrapping everything in ",e.jsx("code",{children:"React.memo"}),' actually hurts performance because React has to spend time comparing props. Only use it on heavy components that are demonstrably slow. "Make it work, then make it right, then make it fast."']}),e.jsx("h2",{children:"3. Error Handling"}),e.jsx("p",{children:'Right now, if our API goes down, we just show a generic "Error" text. We should provide actionable UI for the user.'}),e.jsx(t,{language:"jsx",filename:"components/ErrorState.jsx",children:`function ErrorState({ message, onRetry }) {
  return (
    <div className="error-container">
      <h2>Oops! Something went wrong.</h2>
      <p>{message}</p>
      {/* Give the user a way to fix it! */}
      <button onClick={onRetry} className="btn-secondary">
        Try Again
      </button>
    </div>
  );
}`}),e.jsx("h2",{children:"4. Accessibility (a11y)"}),e.jsx("p",{children:"A polished app can be used by everyone, including users relying on screen readers or keyboard navigation."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keyboard Nav:"})," Ensure you can tab through the entire checkout flow."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Aria Labels:"}),' If a button only has an icon (like an "X" to remove a cart item), give it an ',e.jsx("code",{children:'aria-label="Remove item"'})," so screen readers know what it does."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus Management:"})," When a modal opens, move the keyboard focus into it. When it closes, return focus to the button that opened it."]})]}),e.jsx(i,{id:"ch18-2-toast",title:"Toast Notification State",description:"When a user adds an item to the cart, we want to show a 'Toast' notification at the top of the screen that says 'Added to Cart!' and disappears after 3 seconds. Write the state and useEffect logic to handle this inside a Toast component.",hint:"You need a boolean state for visibility. When the component receives a new 'message' prop, set visible to true, and use setTimeout to set it to false.",difficulty:"hard",answer:`import { useState, useEffect } from 'react';

function Toast({ message }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!isVisible) return null;

  return (
    <div className="toast-notification">
      {message}
    </div>
  );
}`,explanation:"By listening to changes on the `message` prop, we can trigger an effect that makes the toast visible and schedules it to disappear. The cleanup function ensures that if the user clicks rapidly, we clear old timers so it stays visible for a full 3 seconds after the LAST click."})]})]})}export{h as default};
