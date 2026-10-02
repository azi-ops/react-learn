import{j as e,r as l}from"./index-fCZyuqB2.js";import{C as n}from"./CodeBlock-y81Z23mq.js";import{C as f}from"./Challenge-B2Dev4fs.js";import{S as v}from"./StepByStep-Be1tR1cd.js";import{I as b}from"./InteractiveDemo-BnwT7BFH.js";function x(){const[t,d]=l.useState(""),[i,m]=l.useState(""),[s,o]=l.useState({}),[h,c]=l.useState(!1),p=()=>{const r={};return t?/\S+@\S+\.\S+/.test(t)||(r.email="Enter a valid email"):r.email="Email is required",i?i.length<6&&(r.password="Password must be at least 6 characters"):r.password="Password is required",r},g=r=>{r.preventDefault();const a=p();if(Object.keys(a).length>0){o(a);return}c(!0)};if(h)return e.jsxs("div",{style:{textAlign:"center",padding:"1.5rem"},children:[e.jsx("div",{style:{fontSize:"2.5rem"},children:"✅"}),e.jsxs("p",{style:{marginTop:"0.5rem"},children:["Logged in as ",e.jsx("strong",{children:t})]}),e.jsx("button",{className:"btn-secondary",style:{marginTop:"1rem",fontSize:"0.85rem"},onClick:()=>{c(!1),d(""),m(""),o({})},children:"Try Again"})]});const u=!s.email&&!s.password&&t&&i.length>=6;return e.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:"1rem",maxWidth:"320px"},children:[e.jsxs("div",{children:[e.jsx("input",{type:"email",value:t,onChange:r=>{d(r.target.value),s.email&&o(a=>({...a,email:""}))},placeholder:"Email",style:{width:"100%",padding:"0.5rem",border:`1px solid ${s.email?"var(--error)":"var(--border-color)"}`,borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)"}}),s.email&&e.jsxs("p",{style:{color:"var(--error)",fontSize:"0.8rem",marginTop:"0.25rem"},children:["⚠ ",s.email]})]}),e.jsxs("div",{children:[e.jsx("input",{type:"password",value:i,onChange:r=>{m(r.target.value),s.password&&o(a=>({...a,password:""}))},placeholder:"Password (min 6 chars)",style:{width:"100%",padding:"0.5rem",border:`1px solid ${s.password?"var(--error)":"var(--border-color)"}`,borderRadius:"0.375rem",background:"var(--bg-color)",color:"var(--text-color)"}}),s.password&&e.jsxs("p",{style:{color:"var(--error)",fontSize:"0.8rem",marginTop:"0.25rem"},children:["⚠ ",s.password]})]}),e.jsx("button",{type:"submit",className:"btn",disabled:!u,style:{opacity:u?1:.5},children:"Log In"}),e.jsx("p",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:"Try submitting empty, with a bad email, or short password to see validation."})]})}function C(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 9 — Forms"}),e.jsx("h1",{children:"Form Validation"}),e.jsx("p",{className:"lesson-subtitle",children:"Validate user input and show helpful error messages — before sending to the server."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🎯 What You'll Learn"}),e.jsxs("ul",{children:[e.jsx("li",{children:"How to validate form fields in React"}),e.jsx("li",{children:"How to display error messages under inputs"}),e.jsx("li",{children:"How to disable the submit button until the form is valid"}),e.jsx("li",{children:"When to validate: on submit vs on change"})]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📖 The Validation Pattern"}),e.jsx("p",{children:"The core pattern: store errors in state as an object. Each key is a field name, each value is an error message (or empty string if valid)."}),e.jsx(n,{language:"jsx",children:`const [errors, setErrors] = useState({});

// Validation function — returns error messages
const validate = () => {
  const newErrors = {};

  if (!email) {
    newErrors.email = 'Email is required';
  } else if (!/S+@S+.S+/.test(email)) {
    newErrors.email = 'Please enter a valid email address';
  }

  if (!password) {
    newErrors.password = 'Password is required';
  } else if (password.length < 6) {
    newErrors.password = 'Password must be at least 6 characters';
  }

  return newErrors;  // Empty object = no errors
};

const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);  // Show errors
    return;                       // Stop here!
  }

  // No errors — proceed
  loginUser({ email, password });
};`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🖥️ Displaying Error Messages"}),e.jsx(n,{language:"jsx",children:`<div className="form-group">
  <label>Email</label>
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    // Red border when there's an error:
    style={{ borderColor: errors.email ? 'red' : undefined }}
  />
  {/* Show error message below input: */}
  {errors.email && (
    <span className="error-message">⚠ {errors.email}</span>
  )}
</div>`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"⚡ Live Demo — Validated Login Form"}),e.jsx(b,{title:"Form with Validation",children:e.jsx(x,{})})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"💻 Validate on Change (Real-time)"}),e.jsx("p",{children:"For a better UX, clear errors as the user types to fix them:"}),e.jsx(n,{language:"jsx",children:`// Clear error when user starts typing in that field:
<input
  value={email}
  onChange={(e) => {
    setEmail(e.target.value);
    // Clear this field's error as they type:
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  }}
/>`})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🔒 Disabling the Submit Button"}),e.jsx(v,{steps:[{title:"Simple: disable when fields are empty",language:"jsx",code:`<button
  type="submit"
  disabled={!email || !password}
>
  Log In
</button>`,explanation:"The button is disabled until both fields have content. Simple but doesn't validate format."},{title:"Better: validate before enabling",language:"jsx",code:`const isFormValid =
  email.includes('@') &&
  password.length >= 6;

<button
  type="submit"
  disabled={!isFormValid}
  style={{ opacity: isFormValid ? 1 : 0.5 }}
>
  Log In
</button>`,explanation:"Check actual validity, not just presence. The opacity gives visual feedback that the button is inactive."}]})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"🏪 ShopHub Registration Validation"}),e.jsx(n,{language:"jsx",filename:"RegisterForm.jsx",children:`function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email) errs.email = 'Email is required';
    else if (!/S+@S+.S+/.test(formData.email)) errs.email = 'Invalid email';
    if (formData.password.length < 6) errs.password = 'Min 6 characters';
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    // Register user...
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Each field + error message */}
      <input value={formData.name}
        onChange={e => setFormData({...formData, name: e.target.value})} />
      {errors.name && <span className="error">{errors.name}</span>}
      {/* ... more fields ... */}
      <button type="submit" disabled={Object.keys(validate()).length > 0}>
        Create Account
      </button>
    </form>
  );
}`})]}),e.jsx(f,{id:"9-3-realtime-validate",title:"Real-time Email Validation",description:"Create a single email input that validates in real-time as the user types. Show: 'Email is required' if empty, 'Invalid email format' if missing @, and a green checkmark if valid. Disable a submit button while invalid.",hint:"Use onChange to update email AND immediately validate. Use a regex or simple .includes('@') check.",difficulty:"medium",answer:`function EmailInput() {
  const [email, setEmail] = useState('');

  const getError = (value) => {
    if (!value) return 'Email is required';
    if (!value.includes('@')) return 'Invalid email format';
    if (!value.includes('.')) return 'Invalid email format';
    return null; // valid!
  };

  const error = getError(email);
  const isValid = !error && email.length > 0;

  return (
    <div>
      <label>Email Address</label>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          style={{
            borderColor: email ? (error ? 'red' : 'green') : undefined
          }}
        />
        {isValid && <span style={{ color: 'green' }}>✓</span>}
      </div>

      {email && error && (
        <p style={{ color: 'red', fontSize: '0.875rem' }}>
          ⚠ {error}
        </p>
      )}

      <button disabled={!isValid} style={{ marginTop: '1rem', opacity: isValid ? 1 : 0.5 }}>
        Continue
      </button>
    </div>
  );
}`,explanation:"getError() is called on every render with the current email value — it's a pure function that returns the error or null. We only show the error if email has content (to avoid showing errors before the user types). The green border and checkmark only show when valid."})]})}export{C as default};
