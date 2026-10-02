import{j as e}from"./index-fCZyuqB2.js";import{C as t}from"./CodeBlock-y81Z23mq.js";import{C as r}from"./Challenge-B2Dev4fs.js";import{C as a}from"./Callout-B_CeIBza.js";import{S as o}from"./StepByStep-Be1tR1cd.js";function l(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 15 — React Router"}),e.jsx("h1",{children:"Dynamic Routes & useParams"}),e.jsx("p",{className:"lesson-subtitle",children:"Handling variable URLs like /products/42"})]}),e.jsxs("div",{className:"lesson-content",children:[e.jsx("h2",{children:"The Need for Dynamic Routes"}),e.jsx("p",{children:"In ShopHub, we have a product catalog. When a user clicks on a product, we want to take them to a detailed view of that specific product."}),e.jsx("p",{children:"If we have 1,000 products, we obviously can't hardcode 1,000 routes like this:"}),e.jsx(t,{language:"jsx",filename:"App.jsx (Bad)",children:`// NO! Do not do this!
<Route path="/products/1" element={<Product1 />} />
<Route path="/products/2" element={<Product2 />} />
<Route path="/products/3" element={<Product3 />} />`}),e.jsx("h2",{children:"URL Parameters"}),e.jsxs("p",{children:["Instead, we use a ",e.jsx("strong",{children:"Dynamic Route"}),". By putting a colon (",e.jsx("code",{children:":"}),") in the path, we tell React Router that a section of the URL is a variable, also known as a URL parameter."]}),e.jsx(t,{language:"jsx",filename:"App.jsx",children:`import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Routes>
      {/* The :id part is a variable! */}
      <Route path="/products/:id" element={<ProductDetail />} />
    </Routes>
  );
}`}),e.jsxs("p",{children:["Now, if the user visits ",e.jsx("code",{children:"/products/123"})," or ",e.jsx("code",{children:"/products/abc"}),", React Router will render the ",e.jsx("code",{children:"<ProductDetail />"})," component for both."]}),e.jsx("h2",{children:"Accessing Parameters with useParams"}),e.jsxs("p",{children:["Inside the ",e.jsx("code",{children:"ProductDetail"})," component, we need to know ",e.jsx("em",{children:"which"})," product ID was in the URL so we can fetch the correct data. We do this using the ",e.jsx("code",{children:"useParams"})," hook."]}),e.jsx(o,{steps:[{title:"Import the hook",code:"import { useParams } from 'react-router-dom';",language:"jsx",explanation:"Grab the useParams hook from the React Router library."},{title:"Call the hook",code:`function ProductDetail() {
  const params = useParams();
  console.log(params); // { id: "123" }
}`,language:"jsx",explanation:"Calling useParams returns an object containing all the dynamic parameters from the current URL."},{title:"Destructure and fetch",code:`function ProductDetail() {
  // Destructure the 'id' parameter we defined in our Route
  const { id } = useParams();
  
  // Use the id to fetch the right product
  useEffect(() => {
    fetch(\`https://fakestoreapi.com/products/\${id}\`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);
}`,language:"jsx",explanation:"We destructure 'id' (which matches the :id in our path) and use it in our API call."}]}),e.jsxs(a,{type:"warning",children:[e.jsx("strong",{children:"Parameters are always strings!"}),e.jsx("br",{}),"Even if your URL is ",e.jsx("code",{children:"/products/42"}),", ",e.jsx("code",{children:"useParams()"})," will return the string ",e.jsx("code",{children:'"42"'}),", not the number ",e.jsx("code",{children:"42"}),". If you need to compare it to a numeric ID in your JavaScript, remember to convert it using ",e.jsx("code",{children:"parseInt(id)"})," or ",e.jsx("code",{children:"Number(id)"}),"."]}),e.jsx("h2",{children:"Building the Complete ProductDetail Page"}),e.jsx("p",{children:"Let's put it all together to build the full ShopHub ProductDetail page, complete with loading and error states!"}),e.jsx(t,{language:"jsx",filename:"pages/ProductDetail.jsx",children:`import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products/' + id)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [id]); // Re-run if the ID in the URL changes

  if (loading) return <h2>Loading product details...</h2>;
  if (!product) return <h2>Product not found!</h2>;

  return (
    <div className="product-detail-page">
      <Link to="/products" className="back-link">← Back to Catalog</Link>
      
      <div className="detail-grid">
        <img src={product.image} alt={product.title} />
        <div className="detail-info">
          <h1>{product.title}</h1>
          <p className="category">{product.category}</p>
          <p className="price">\${product.price.toFixed(2)}</p>
          <p className="description">{product.description}</p>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;`}),e.jsx("h2",{children:"Other Helpful Router Hooks"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"useLocation()"})}),": Returns the full location object (pathname, search, hash, state). Useful if you need to know the exact URL string."]}),e.jsxs("li",{children:[e.jsx("strong",{children:e.jsx("code",{children:"useSearchParams()"})}),": Works exactly like ",e.jsx("code",{children:"useState"}),", but reads and writes to the query string in the URL (e.g., ",e.jsx("code",{children:"?sort=price&category=electronics"}),"). Great for managing search filters!"]})]}),e.jsx(r,{id:"ch15-3-category-route",title:"Create a Category Route",description:"ShopHub needs a category page that filters products. We want URLs like '/products/category/electronics'. Write the Route component for App.jsx AND the first few lines of CategoryPage.jsx where you extract the category name from the URL.",hint:"Your route path will need two static words and one dynamic parameter.",difficulty:"hard",answer:`// App.jsx
<Route path="/products/category/:categoryName" element={<CategoryPage />} />

// CategoryPage.jsx
import { useParams } from 'react-router-dom';

function CategoryPage() {
  const { categoryName } = useParams();
  // Now we can use categoryName to fetch or filter products!
}`,explanation:"We define the dynamic segment as `:categoryName`. Inside the component, we destructure `{ categoryName }` from the `useParams()` object. If the user visits `/products/category/jewelery`, `categoryName` will equal `'jewelery'`."})]})]})}export{l as default};
