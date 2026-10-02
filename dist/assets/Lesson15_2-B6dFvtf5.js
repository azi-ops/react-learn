import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as i}from"./CodeComparison-B_ysuKRn.js";import{C as n}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";function d(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 15 — React Router"}),e.jsx("h1",{children:"Link & Navigation"}),e.jsx("p",{className:"lesson-subtitle",children:"Moving between pages without reloading"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Problem with <a> Tags"}),e.jsxs("p",{children:["In traditional HTML, you navigate between pages using an anchor tag: ",e.jsx("code",{children:'<a href="/page">'}),". However, in a React Single Page Application (SPA), clicking a standard anchor tag will cause the browser to completely reload the page from the server, wiping out your entire React state!"]}),e.jsxs(a,{type:"warning",children:[e.jsx("strong",{children:'Never use <a href="..."> for internal navigation in React apps!'}),e.jsx("br",{}),"If you have items in your ShopHub cart (stored in React state) and you click an ",e.jsx("code",{children:'<a href="/products">'})," tag, the page reloads and your cart state is completely lost."]}),e.jsx(i,{leftLabel:"Bad: Wipes React State",rightLabel:"Good: Keeps React State",leftCode:`// DO NOT DO THIS
<a href="/cart">View Cart</a>`,rightCode:`// DO THIS
import { Link } from 'react-router-dom';

<Link to="/cart">View Cart</Link>`}),e.jsx("h2",{children:"The Link Component"}),e.jsxs("p",{children:["React Router gives us the ",e.jsx("code",{children:"<Link>"})," component. It looks and acts like an anchor tag, but it intercepts the click event, prevents the page reload, and gently tells React Router to update the URL and change the components."]}),e.jsx(t,{language:"jsx",filename:"components/ProductCard.jsx",children:`import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>\${product.price}</p>
      
      {/* Navigate to the product detail page safely */}
      <Link to={'/products/' + product.id} className="btn-secondary">
        View Details
      </Link>
    </div>
  );
}`}),e.jsx("h2",{children:"Active Links with NavLink"}),e.jsxs("p",{children:['Often in navigation bars, we want to highlight which page the user is currently on (e.g., underlining the "Products" link if they are on the products page). React Router provides ',e.jsx("code",{children:"<NavLink>"})," specifically for this purpose."]}),e.jsxs("p",{children:[e.jsx("code",{children:"<NavLink>"})," automatically gives you an ",e.jsx("code",{children:"isActive"})," boolean that you can use to conditionally apply CSS classes."]}),e.jsx(t,{language:"jsx",filename:"components/Navbar.jsx",children:`import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="shophub-nav">
      <NavLink to="/" className="logo">ShopHub</NavLink>
      
      <div className="nav-links">
        <NavLink 
          to="/products" 
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Products
        </NavLink>
        
        <NavLink 
          to="/cart" 
          className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
}`}),e.jsx("h2",{children:"Programmatic Navigation with useNavigate"}),e.jsxs("p",{children:["Sometimes you don't want the user to click a link. You want to navigate ",e.jsx("em",{children:"automatically"})," after an action happens. For example:"]}),e.jsxs("ul",{children:[e.jsx("li",{children:"After a user submits a login form, redirect them to the home page."}),e.jsx("li",{children:"After a user adds an item to their cart, redirect them to the cart page."})]}),e.jsxs("p",{children:["For this, we use the ",e.jsx("code",{children:"useNavigate"})," hook."]}),e.jsx(t,{language:"jsx",filename:"components/AddToCartButton.jsx",children:`import { useNavigate } from 'react-router-dom';

function AddToCartButton({ product }) {
  // 1. Call the hook to get the navigate function
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Logic to add to cart...
    addToCart(product);
    
    // 2. Navigate programmatically!
    navigate('/cart');
  };

  return (
    <button onClick={handleAddToCart} className="btn-primary">
      Add to Cart
    </button>
  );
}`}),e.jsxs(a,{type:"tip",children:["You can also pass a number to ",e.jsx("code",{children:"navigate()"})," to go backwards or forwards in history.",e.jsx("code",{children:"navigate(-1)"}),` functions exactly like hitting the browser's "Back" button!`]}),e.jsx(n,{id:"ch15-2-navbar-navlink",title:"Update the ShopHub Navbar",description:"The current ShopHub Navbar uses standard <Link> components. Update the '/favorites' link to use <NavLink> so it gets the 'active-link' class when the user is on the Favorites page.",hint:"Remember to pass a function to className that destructores { isActive }.",difficulty:"medium",answer:`import { NavLink } from 'react-router-dom';

function FavoritesNav() {
  return (
    <NavLink 
      to="/favorites"
      className={({ isActive }) => isActive ? 'nav-link active-link' : 'nav-link'}
    >
      Favorites
    </NavLink>
  );
}`,explanation:"By using NavLink, React Router will automatically call the className function with { isActive: true } whenever the browser URL matches '/favorites', allowing us to apply our active CSS styling."})]})]})}export{d as default};
