import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as a}from"./Challenge-B2Dev4fs.js";import{C as s}from"./Callout-B_CeIBza.js";import{S as r}from"./StepByStep-Be1tR1cd.js";function u(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 17 — Custom Hooks"}),e.jsx("h1",{children:"Building useLocalStorage"}),e.jsx("p",{className:"lesson-subtitle",children:"Creating state that survives a page refresh"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Persistence Problem"}),e.jsx("p",{children:"In our ShopHub application, if a user adds three items to their cart and then refreshes the page, the React state resets and their cart is emptied! That's a terrible user experience for an e-commerce store."}),e.jsxs("p",{children:["We know that plain JavaScript can use ",e.jsx("code",{children:"localStorage"})," to save data in the browser. Let's see how we'd wire that up manually in a component."]}),e.jsx(t,{language:"jsx",filename:"Manual LocalStorage",children:`function Cart() {
  // 1. Initialize state by reading from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('shophub-cart');
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Every time cart changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('shophub-cart', JSON.stringify(cart));
  }, [cart]);

  // UI logic...
}`}),e.jsxs(s,{type:"tip",children:[e.jsx("strong",{children:"The Lazy Initializer"}),e.jsx("br",{}),"Notice that we passed an arrow function to ",e.jsxs("code",{children:["useState(() => ","{...}",")"]}),'. This is called a "lazy initializer". Reading from localStorage is slow. By passing a function, React will only run this code ',e.jsx("em",{children:"once"})," on the very first render, rather than on every single re-render."]}),e.jsx("h2",{children:"Extracting useLocalStorage"}),e.jsxs("p",{children:["If we want to save user preferences, a dark mode theme, and their wishlist, we'd have to copy those two steps everywhere. Instead, let's abstract it into a ",e.jsx("code",{children:"useLocalStorage"})," hook!"]}),e.jsxs("p",{children:["We want our hook to work ",e.jsx("em",{children:"exactly"})," like ",e.jsx("code",{children:"useState"}),", returning a value and a setter function, but with persistence baked in."]}),e.jsx(r,{steps:[{title:"Define the hook signature",code:`export function useLocalStorage(key, initialValue) {
  // We need a key for localStorage, and a fallback value
}`,language:"jsx",explanation:"The hook takes a string key (e.g., 'cart') and an initial fallback value if nothing is saved yet."},{title:"Setup lazy state",code:`export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.warn('Error reading localStorage', error);
      return initialValue;
    }
  });
}`,language:"jsx",explanation:"We safely attempt to read and parse the JSON. We use a try/catch block because localStorage can sometimes throw errors (e.g., in strict incognito modes)."},{title:"Sync with useEffect",code:`export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(/* ... */);

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.warn('Error saving to localStorage', error);
    }
  }, [key, value]);

  // Return exactly what useState returns!
  return [value, setValue];
}`,language:"jsx",explanation:"Whenever the key or value changes, we stringify it and save it. Finally, we return the array pair."}]}),e.jsx("h2",{children:"Using it in ShopHub"}),e.jsxs("p",{children:["Because our custom hook returns an array ",e.jsx("code",{children:"[value, setValue]"})," just like ",e.jsx("code",{children:"useState"}),", it acts as a perfect drop-in replacement!"]}),e.jsx(t,{language:"jsx",filename:"context/CartContext.jsx",children:`import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext();

export function CartProvider({ children }) {
  // Look at this magic! It works exactly like useState, but it persists!
  const [cart, setCart] = useLocalStorage('shophub-cart', []);
  const [favorites, setFavorites] = useLocalStorage('shophub-favs', []);
  const [theme, setTheme] = useLocalStorage('shophub-theme', 'light');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, favorites, theme }}>
      {children}
    </CartContext.Provider>
  );
}`}),e.jsx("h2",{children:"Other Amazing Custom Hooks"}),e.jsx("p",{children:"The React community has built thousands of open-source custom hooks you can drop into your projects. Some popular ones include:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"useDebounce"})}),": Delays updating a value until a certain amount of time has passed (great for preventing API spam while a user is typing in a search box)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"useMediaQuery"})}),": Returns a boolean if the browser matches a CSS media query (e.g., ",e.jsx("code",{children:"const isMobile = useMediaQuery('(max-width: 768px)')"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"useOnClickOutside"})}),": Detects clicks outside of a specific component (perfect for closing dropdown menus and modals)."]})]}),e.jsx(a,{id:"ch17-3-usedebounce",title:"Build a useDebounce Hook",description:"A search input that fetches data on every keystroke will crash your server. We want to wait until the user stops typing for 500ms before we fetch. Build a useDebounce hook that takes a 'value' and a 'delay' in milliseconds, and returns a 'debouncedValue'.",hint:"You'll need an internal state for the debouncedValue, and a useEffect that uses setTimeout to update it. Don't forget to clear the timeout in the cleanup function!",difficulty:"hard",answer:`import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update the debounced value
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // If 'value' changes BEFORE the timer finishes, this cleanup runs,
    // cancelling the previous timer and starting a new one!
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}`,explanation:"This is an incredibly powerful hook. As the user types, 'value' changes rapidly, which triggers the cleanup function, destroying the old timeout and creating a new one. The 'debouncedValue' state won't actually update until the user stops typing long enough for the final timer to finish."})]})]})}export{u as default};
