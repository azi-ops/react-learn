import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as s}from"./CodeComparison-B_ysuKRn.js";import{C as r}from"./Challenge-B2Dev4fs.js";import{C as o}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 16 — Project Structure"}),e.jsx("h1",{children:"Organizing Code"}),e.jsx("p",{className:"lesson-subtitle",children:"Separating concerns and extracting logic"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"Type-based vs. Feature-based Organization"}),e.jsxs("p",{children:["In the previous lesson, we looked at ",e.jsx("strong",{children:"type-based organization"}),". This is where you group files by what they ",e.jsx("em",{children:"are"})," (components with components, hooks with hooks, services with services)."]}),e.jsxs("p",{children:["This works incredibly well for small to medium apps (like our ShopHub). However, for massive enterprise applications, companies often use ",e.jsx("strong",{children:"feature-based organization"}),"."]}),e.jsx(s,{leftLabel:"Type-based (Our approach)",rightLabel:"Feature-based (Enterprise)",leftCode:`src/
├── components/
│   ├── CartButton.jsx
│   └── CartItem.jsx
├── hooks/
│   └── useCart.js
├── context/
│   └── CartContext.jsx
└── services/
    └── cartApi.js`,rightCode:`src/
└── features/
    └── cart/
        ├── components/
        │   ├── CartButton.jsx
        │   └── CartItem.jsx
        ├── useCart.js
        ├── CartContext.jsx
        └── cartApi.js`}),e.jsx("p",{children:"We will stick to type-based organization for ShopHub, but it's important to know that feature-based organization exists!"}),e.jsx("h2",{children:"Extracting API Calls (Services)"}),e.jsxs("p",{children:["One of the biggest mistakes beginners make is cramming massive, complex ",e.jsx("code",{children:"fetch()"})," calls directly inside their React components. Components should focus on ",e.jsx("strong",{children:"UI and State"}),", not networking."]}),e.jsx(s,{leftLabel:"Messy Component",rightLabel:"Clean Component + Service",leftCode:`function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // ❌ Networking logic mixed with UI
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return <div>...</div>;
}`,rightCode:`// services/productService.js
export const getProducts = () => {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json());
}

// components/ProductList.jsx
import { getProducts } from '../services/productService';

function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    // ✅ Clean! Component just calls the service
    getProducts().then(setProducts);
  }, []);

  return <div>...</div>;
}`}),e.jsx("h2",{children:"Centralizing Constants"}),e.jsx("p",{children:'Do you have strings or numbers that you type over and over again? "Magic strings" like URL paths, API base URLs, or configuration limits can easily get misspelled.'}),e.jsx("p",{children:"A great organizational practice is to extract these into a constants file."}),e.jsx(t,{language:"javascript",filename:"utils/constants.js",children:`// Exported constants are usually written in UPPER_SNAKE_CASE
export const API_BASE_URL = 'https://fakestoreapi.com';

// Grouping related constants in objects is a great pattern
export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  CART: '/cart',
  LOGIN: '/login'
};

export const CART = {
  MAX_ITEMS_PER_PRODUCT: 10,
  FREE_SHIPPING_THRESHOLD: 50.00,
  TAX_RATE: 0.08
};`}),e.jsxs("p",{children:["Now, instead of hardcoding the free shipping threshold in three different components, you import it:",e.jsxs("code",{children:["import ","{ CART }"," from '../utils/constants';"]})]}),e.jsx("h2",{children:"Formatting Utilities"}),e.jsx("p",{children:"Just like API calls, data formatting logic shouldn't clutter your components. If you need to format a price as currency, extract it!"}),e.jsx(t,{language:"javascript",filename:"utils/formatters.js",children:`/**
 * Formats a number into a standard US currency string
 * @param {number} price - The raw price (e.g., 42.5)
 * @returns {string} Formatted price (e.g., "$42.50")
 */
export const formatPrice = (price) => {
  if (typeof price !== 'number') return '$0.00';
  return '$' + price.toFixed(2);
};

export const truncateText = (text, maxLength) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};`}),e.jsxs(o,{type:"success",children:[e.jsx("strong",{children:"The Beauty of Pure Functions"}),e.jsx("br",{}),"Files in your ",e.jsx("code",{children:"utils/"}),' folder should generally be "pure functions". This means they take inputs, do some processing, and return an output without side effects (like modifying external variables or calling APIs). This makes them incredibly easy to test!']}),e.jsx(r,{id:"ch16-2-extract-api",title:"Extract the Service",description:"We have a component that fetches a single product by ID. Extract that fetch logic into a new service function called fetchProductById.",hint:"Your service function will need to accept the 'id' as a parameter.",difficulty:"medium",answer:`// services/productService.js
export const fetchProductById = async (id) => {
  const response = await fetch(\`https://fakestoreapi.com/products/\${id}\`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};

// You would then import and use it in your component:
// fetchProductById(productId).then(setProduct);`,explanation:"By moving the fetch logic to productService.js, we make the API call reusable across multiple components (e.g. we might need to fetch a product by ID in the Cart to verify its current price, not just on the ProductDetail page!)."})]})]})}export{d as default};
