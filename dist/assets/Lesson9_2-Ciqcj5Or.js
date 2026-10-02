import{j as e,r as s}from"./index-fCZyuqB2.js";import{C as c}from"./CodeBlock-y81Z23mq.js";import{C as u}from"./CodeComparison-B_ysuKRn.js";import{C as h}from"./Challenge-B2Dev4fs.js";import{C as l}from"./Callout-B_CeIBza.js";import{S as p}from"./StepByStep-Be1tR1cd.js";import{I as f}from"./InteractiveDemo-BnwT7BFH.js";function g(){const[a,o]=s.useState(""),[i,r]=s.useState(""),[d,n]=s.useState(!1),m=t=>{t.preventDefault(),n(!0)};return d?e.jsxs("div",{style:{textAlign:"center",padding:"1.5rem"},children:[e.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"✅"}),e.jsx("p",{children:e.jsx("strong",{children:"Form submitted!"})}),e.jsxs("p",{style:{fontSize:"0.875rem",color:"var(--text-muted)"},children:["Email: ",a]}),e.jsx("button",{className:"btn-secondary",style:{marginTop:"1rem",fontSize:"0.85rem"},onClick:()=>{n(!1),o(""),r("")},children:"Reset"})]}):e.jsxs("form",{onSubmit:m,style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"},children:[e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",marginBottom:"0.25rem"},children:"Email"}),e.jsx("input",{type:"email",value:a,onChange:t=>o(t.target.value),placeholder:"you@example.com",required:!0,style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)"}})]}),e.jsxs("div",{children:[e.jsx("label",{style:{display:"block",fontSize:"0.875rem",marginBottom:"0.25rem"},children:"Password"}),e.jsx("input",{type:"password",value:i,onChange:t=>r(t.target.value),placeholder:"••••••••",required:!0,style:{width:"100%",padding:"0.5rem",border:"1px solid var(--border-color)",borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)"}})]}),e.jsx("button",{type:"submit",className:"btn",children:"Log In"})]})}function C(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 9 — Forms"}),e.jsx("h1",{children:"Form Submission"}),e.jsx("p",{className:"lesson-subtitle",children:"Handle form submit properly — and build the ShopHub login and register forms."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["How to handle form submission with ",e.jsx("code",{children:"onSubmit"})]}),e.jsxs("li",{children:["Why you must call ",e.jsx("code",{children:"event.preventDefault()"})]}),e.jsx("li",{children:"Build a complete Login form and Register form"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The onSubmit Pattern"}),e.jsxs("p",{children:["In React, form submission is handled with ",e.jsx("code",{children:"onSubmit"})," on the ",e.jsx("code",{children:"<form>"})," element — not ",e.jsx("code",{children:"onClick"})," on the button. This is better because it also fires when the user presses Enter."]}),e.jsx(u,{leftLabel:"Vanilla JS",rightLabel:"React",leftCode:`const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  console.log(email);
});`,rightCode:`function LoginForm() {
  const [email, setEmail] = useState('');

  function handleSubmit(event) {
    event.preventDefault();  // Don't reload the page!
    console.log(email);      // State has the value
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button type="submit">Log In</button>
    </form>
  );
}`}),e.jsxs(l,{type:"warning",children:[e.jsxs("strong",{children:["Always call ",e.jsx("code",{children:"event.preventDefault()"}),"!"]})," Without it, the browser will reload the entire page when the form is submitted. This is the default browser behavior that React forms need to prevent."]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Building the ShopHub Login Form"}),e.jsx(p,{steps:[{title:"Step 1: State for each field",language:"jsx",code:`function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ...
}`,explanation:"One state variable per input field. This is the controlled input pattern from the previous lesson."},{title:"Step 2: Submit handler",language:"jsx",code:`const handleSubmit = (event) => {
  event.preventDefault();  // Stop page reload

  // All form data is in state — no DOM querying needed!
  console.log('Logging in:', { email, password });

  // In a real app:
  // await loginUser({ email, password });
  // navigate('/');
};`,explanation:"The submit handler has access to all state values through the closure. No need to query the DOM!"},{title:"Step 3: The full form JSX",language:"jsx",code:`return (
  <form onSubmit={handleSubmit} className="auth-form">
    <h2>Log In to ShopHub</h2>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        required
      />
    </div>

    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required
      />
    </div>

    <button type="submit" className="btn btn-full">
      Log In
    </button>

    <p>Don't have an account? <Link to="/register">Sign Up</Link></p>
  </form>
);`,explanation:'htmlFor on label connects to input id for accessibility. type="submit" on button enables Enter key. The Link goes to the register page.'}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo"}),e.jsx(f,{title:"ShopHub Login Form",children:e.jsx(g,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📋 Register Form"}),e.jsx(c,{language:"jsx",filename:"RegisterForm.jsx",children:`function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // Update one field in the object:
  const handleChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <h2>Create Account</h2>
      <input type="text" value={formData.name}
        onChange={handleChange('name')} placeholder="Full name" />
      <input type="email" value={formData.email}
        onChange={handleChange('email')} placeholder="Email" />
      <input type="password" value={formData.password}
        onChange={handleChange('password')} placeholder="Password" />
      <input type="password" value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')} placeholder="Confirm password" />
      <button type="submit" className="btn">Create Account</button>
    </form>
  );
}`}),e.jsxs(l,{type:"tip",children:["When a form has many fields, storing them as one object state (with spread updates) is often cleaner than many separate ",e.jsx("code",{children:"useState"})," calls."]})]}),e.jsx(h,{id:"9-2-register",title:"Register Form",description:"Build a complete register form with: name, email, password, and confirm password fields. On submit, log the form data. If passwords don't match, show an alert and don't submit.",hint:"Use useState for each field. In handleSubmit, check if password === confirmPassword before proceeding.",difficulty:"medium",answer:`function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Registering:', { name, email, password });
    alert('Account created successfully!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      <input type="text" value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full Name" required />

      <input type="email" value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email" required />

      <input type="password" value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password (min 6 chars)" required />

      <input type="password" value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password" required />

      <button type="submit">Create Account</button>
    </form>
  );
}`,explanation:"Four state variables, one per field. The submit handler prevents page reload, checks password match, and logs the data. In a real app, you'd send this to an API."})]})}export{C as default};
