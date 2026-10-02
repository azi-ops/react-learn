import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as o}from"./Challenge-B2Dev4fs.js";import{S as r}from"./StepByStep-Be1tR1cd.js";function l(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 14 — Context API"}),e.jsx("h1",{children:"Creating a Context"}),e.jsx("p",{className:"lesson-subtitle",children:"Setting up the radio tower to broadcast data"})]}),e.jsx("p",{children:"Creating a Context involves a specific three-step pattern. It looks like a lot of boilerplate at first, but once you set it up, using the data anywhere in your app becomes incredibly easy."}),e.jsx("h2",{children:"The Three-Step Pattern"}),e.jsx(r,{steps:[{title:"1. Create the Context",code:`import { createContext } from 'react';

const CartContext = createContext(null);`,language:"jsx",explanation:"We use createContext() to create the context object. The 'null' is just the default value before the provider is set up."},{title:"2. Create the Provider Component",code:`export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => { /* logic */ };
  
  // Package up everything you want to share
  const value = { cart, addToCart };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}`,language:"jsx",explanation:"We create a normal React component called CartProvider. It holds the state, and returns the special Provider component, passing the state in the 'value' prop. The {children} prop allows it to wrap around other components."},{title:"3. Create a Custom Hook",code:`import { useContext } from 'react';

export function useCart() {
  return useContext(CartContext);
}`,language:"jsx",explanation:"Instead of making components use useContext(CartContext) directly, we export a custom hook called useCart(). This makes importing and using the context much cleaner!"}]}),e.jsx("h2",{children:"Putting it in a Dedicated File"}),e.jsxs("p",{children:["Best practice is to put all three of these steps into a single file, usually in a ",e.jsx("code",{children:"context"})," folder. Let's look at a complete example for a Theme Context."]}),e.jsx(t,{language:"jsx",filename:"src/context/ThemeContext.jsx",children:`import React, { createContext, useState, useContext } from 'react';

// 1. Create Context
const ThemeContext = createContext(null);

// 2. Create Provider
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create Hook
export function useTheme() {
  return useContext(ThemeContext);
}`}),e.jsx("h2",{children:"Wrapping Your App"}),e.jsxs("p",{children:["For the Context to work, the Provider component must wrap around the components that need the data. Usually, we do this at the very top of the app, in ",e.jsx("code",{children:"main.jsx"})," or ",e.jsx("code",{children:"App.jsx"}),"."]}),e.jsx(t,{language:"jsx",filename:"main.jsx",children:`import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider>
    <CartProvider>
      <App />
    </CartProvider>
  </ThemeProvider>
);`}),e.jsxs("p",{children:[e.jsx("strong",{children:"Analogy:"})," Think of the Context as a radio station. The ",e.jsx("code",{children:"Provider"})," is the broadcast tower wrapping the city. The ",e.jsx("code",{children:"value"})," prop is the music being broadcast. The ",e.jsx("code",{children:"useCart()"})," hook is the radio inside a house tuning into that frequency."]}),e.jsx(o,{id:"ch14_2_user_context",title:"Create a User Context",description:"Write a complete file for UserContext. It should have a `user` state (default null), a `login(username)` function that sets the user to `{ name: username }`, and a `logout()` function. Export the UserProvider and a useUser() hook.",hint:"Follow the 3-step pattern perfectly! 1. createContext, 2. UserProvider component returning Context.Provider, 3. useUser hook returning useContext.",answer:`import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const UserContext = createContext(null);

// 2. Create the Provider
export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({ name: username });
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Create the Custom Hook
export function useUser() {
  return useContext(UserContext);
}`,explanation:"This file contains everything related to User state. Any component wrapped by UserProvider can now just call `const { user, login } = useUser()` to access this state instantly, without any prop drilling!",difficulty:"hard"})]})}export{l as default};
