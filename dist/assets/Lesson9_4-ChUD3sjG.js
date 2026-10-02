import{j as e,r as n}from"./index-fCZyuqB2.js";import{C as y}from"./Callout-B_CeIBza.js";import{P as g}from"./PracticeProject-aOb4DaIe.js";function x(){const[t,l]=n.useState({name:"",email:"",address:"",city:"",card:"",expiry:""}),[o,d]=n.useState({}),[c,m]=n.useState(!1),u=(r,s)=>{l(a=>({...a,[r]:s})),o[r]&&d(a=>({...a,[r]:""}))},f=()=>{const r={};return t.name.trim()||(r.name="Name is required"),t.email.includes("@")||(r.email="Valid email required"),t.address.trim()||(r.address="Address is required"),t.city.trim()||(r.city="City is required"),t.card.replace(/\D/g,"").length<16&&(r.card="16-digit card number required"),/^\d{2}\/\d{2}$/.test(t.expiry)||(r.expiry="Format: MM/YY"),r},h=r=>{r.preventDefault();const s=f();if(Object.keys(s).length>0){d(s);return}m(!0)};if(c)return e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:320,textAlign:"center",padding:"1.5rem",background:"#f0fdf4",borderRadius:"0.75rem",border:"1px solid #86efac"},children:[e.jsx("div",{style:{fontSize:"2.5rem",marginBottom:"0.5rem"},children:"✅"}),e.jsx("h3",{style:{margin:"0 0 0.5rem",color:"#166534"},children:"Order Placed!"}),e.jsxs("p",{style:{margin:"0 0 0.75rem",color:"#15803d",fontSize:"0.875rem"},children:["Thank you, ",t.name,". Confirmation sent to ",t.email]}),e.jsx("button",{onClick:()=>{m(!1),l({name:"",email:"",address:"",city:"",card:"",expiry:""})},style:{background:"#16a34a",color:"#fff",border:"none",padding:".5rem 1rem",borderRadius:".375rem",cursor:"pointer",fontSize:".875rem"},children:"New Order"})]});const i=(r,s,a,p="text")=>e.jsxs("div",{style:{marginBottom:"0.625rem"},children:[e.jsx("label",{style:{display:"block",fontSize:"0.78rem",fontWeight:600,color:"#374151",marginBottom:"0.2rem"},children:s}),e.jsx("input",{type:p,value:t[r],onChange:b=>u(r,b.target.value),placeholder:a,style:{width:"100%",padding:"0.4rem 0.5rem",border:`1px solid ${o[r]?"#ef4444":"#e2e8f0"}`,borderRadius:"0.375rem",fontSize:"0.85rem",boxSizing:"border-box",color:"#0f172a",background:"#fff"}}),o[r]&&e.jsx("p",{style:{margin:"0.1rem 0 0",fontSize:"0.72rem",color:"#ef4444"},children:o[r]})]});return e.jsxs("div",{style:{fontFamily:"sans-serif",maxWidth:320,background:"#fff",borderRadius:"0.75rem",padding:"1rem",border:"1px solid #e2e8f0",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"},children:[e.jsx("h3",{style:{margin:"0 0 0.875rem",fontSize:"1rem",color:"#0f172a"},children:"🛒 Checkout"}),e.jsxs("form",{onSubmit:h,noValidate:!0,children:[e.jsx("p",{style:{margin:"0 0 0.5rem",fontSize:"0.78rem",fontWeight:700,color:"#3b82f6",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Contact"}),i("name","Full Name","Alex Johnson"),i("email","Email","alex@email.com","email"),e.jsx("p",{style:{margin:"0.75rem 0 0.5rem",fontSize:"0.78rem",fontWeight:700,color:"#3b82f6",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Shipping"}),i("address","Street Address","123 Main St"),i("city","City","New York"),e.jsx("p",{style:{margin:"0.75rem 0 0.5rem",fontSize:"0.78rem",fontWeight:700,color:"#3b82f6",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Payment"}),i("card","Card Number","1234 5678 9012 3456"),i("expiry","Expiry","MM/YY"),e.jsx("button",{type:"submit",style:{width:"100%",marginTop:"0.875rem",padding:"0.5rem",background:"#3b82f6",color:"#fff",border:"none",borderRadius:"0.375rem",fontWeight:700,fontSize:"0.9rem",cursor:"pointer"},children:"Place Order →"})]})]})}function C(){return e.jsxs("div",{className:"lesson",children:[e.jsxs("div",{className:"lesson-header",children:[e.jsx("span",{className:"lesson-tag",children:"Chapter 9 — Forms & Inputs"}),e.jsx("h1",{children:"Practice: Checkout Form with Validation"}),e.jsx("p",{className:"lesson-subtitle",children:"Build ShopHub's checkout form — the most important form in any e-commerce app. Controlled inputs, real-time validation, and a success state."})]}),e.jsxs("section",{className:"lesson-section",children:[e.jsx("h2",{children:"📚 Quick Review"}),e.jsx("p",{children:"Before starting, make sure you understand:"}),e.jsxs("ul",{style:{lineHeight:2},children:[e.jsx("li",{children:'What is a "controlled input"? (state drives the value)'}),e.jsxs("li",{children:["What does ",e.jsx("code",{children:"e.preventDefault()"})," do in a form submit handler?"]}),e.jsx("li",{children:"How do you store multiple form fields in one state object?"}),e.jsx("li",{children:"What's the difference between showing an error message and disabling the submit button?"})]})]}),e.jsx(y,{type:"tip",children:"Build the form in stages: 1) Start with just the inputs and controlled state. 2) Add the submit handler. 3) Add validation. 4) Add the success state. One step at a time!"}),e.jsx(g,{title:"E-Commerce Checkout Form",difficulty:"medium",description:"Build a multi-section checkout form with name, email, address, and card fields. Validate on submit and show a success confirmation screen.",targetDesign:e.jsx(x,{}),requirements:[{label:"Six controlled input fields: name, email, address, city, card number, expiry",difficulty:"easy"},{label:"Store all form values in a single state object: { name, email, address, city, card, expiry }",difficulty:"easy"},{label:"Handle form submission with onSubmit + e.preventDefault()",difficulty:"easy"},{label:"Validate on submit: all fields required, email must contain @, card must be 16 digits",difficulty:"medium"},{label:"Show inline error messages below each invalid field",difficulty:"medium"},{label:`When valid, show a success "Order Placed!" screen with the user's name and email`,difficulty:"medium"},{label:"Clear errors for a field as soon as the user starts typing in it",difficulty:"hard"}],hints:['Use one state object: const [form, setForm] = useState({ name: "", email: "", address: "", city: "", card: "", expiry: "" })',"Update a single field: setForm(prev => ({ ...prev, [fieldName]: value }))",'For validation: const errors = {}; if (!form.name.trim()) errors.name = "Name is required";',"Track errors in state: const [errors, setErrors] = useState({})",'Show error: {errors.name && <p className="error">{errors.name}</p>}',"For success state: const [submitted, setSubmitted] = useState(false). If submitted, return a success component."],steps:[{title:"Create the form state and input handler",content:"All 6 fields in one state object. One handler for all inputs.",code:`const [form, setForm] = useState({
  name: '', email: '', address: '',
  city: '', card: '', expiry: ''
});
const [errors, setErrors] = useState({});
const [submitted, setSubmitted] = useState(false);

// Update any field generically
const handleChange = (field) => (e) => {
  setForm(prev => ({ ...prev, [field]: e.target.value }));
  // Clear the error for this field while typing
  if (errors[field]) {
    setErrors(prev => ({ ...prev, [field]: '' }));
  }
};`},{title:"Write the validate function",content:"Return an errors object. If empty, the form is valid.",code:`const validate = () => {
  const e = {};
  if (!form.name.trim())        e.name    = 'Name is required';
  if (!form.email.includes('@')) e.email   = 'Valid email required';
  if (!form.address.trim())     e.address = 'Address is required';
  if (!form.city.trim())        e.city    = 'City is required';
  if (form.card.replace(/\\D/g, '').length < 16)
                                e.card    = '16-digit number required';
  if (!/^\\d{2}\\/\\d{2}$/.test(form.expiry))
                                e.expiry  = 'Format: MM/YY';
  return e;
};`},{title:"Handle form submission",content:"Validate and either show errors or go to success state.",code:`const handleSubmit = (e) => {
  e.preventDefault(); // Stop page reload!
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors); // Show errors
    return;
  }
  setSubmitted(true); // 🎉 Success!
};`},{title:"Render the form JSX",content:"Controlled inputs with inline error messages.",code:`if (submitted) {
  return (
    <div className="success">
      <h2>✅ Order Placed!</h2>
      <p>Thank you, {form.name}!</p>
      <p>Confirmation sent to {form.email}</p>
    </div>
  );
}

return (
  <form onSubmit={handleSubmit} noValidate>
    <div className="field">
      <label>Full Name</label>
      <input
        type="text"
        value={form.name}
        onChange={handleChange('name')}
        className={errors.name ? 'input-error' : ''}
      />
      {errors.name && <p className="error">{errors.name}</p>}
    </div>

    {/* ... other fields ... */}

    <button type="submit">Place Order →</button>
  </form>
);`}],checkItems:["All 6 fields are controlled inputs (value + onChange)","All fields stored in one state object","Submit handler calls e.preventDefault()","Validation runs on submit — all fields checked","Error messages appear below invalid fields","Errors clear when user starts typing in that field","Success screen shows with user name and email","Form resets or stays on success — intentional behavior"],answer:`import { useState } from 'react';

export default function CheckoutForm() {
  const [form, setForm] = useState({
    name: '', email: '', address: '', city: '', card: '', expiry: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setForm(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())         e.name    = 'Name is required';
    if (!form.email.includes('@')) e.email   = 'Valid email required';
    if (!form.address.trim())      e.address = 'Address is required';
    if (!form.city.trim())         e.city    = 'City is required';
    if (form.card.replace(/\\D/g, '').length < 16)
                                   e.card    = '16-digit card number required';
    if (!/^\\d{2}\\/\\d{2}$/.test(form.expiry))
                                   e.expiry  = 'Format: MM/YY';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="success">
      <h2>✅ Order Placed!</h2>
      <p>Thank you, {form.name}! Confirmation sent to {form.email}</p>
      <button onClick={() => { setSubmitted(false); setForm({ name:'',email:'',address:'',city:'',card:'',expiry:'' }); }}>
        New Order
      </button>
    </div>
  );

  const Field = ({ id, label, type = 'text', placeholder }) => (
    <div className="field">
      <label>{label}</label>
      <input
        type={type}
        value={form[id]}
        onChange={handleChange(id)}
        placeholder={placeholder}
        className={errors[id] ? 'input-error' : ''}
      />
      {errors[id] && <p className="error">{errors[id]}</p>}
    </div>
  );

  return (
    <form onSubmit={handleSubmit} noValidate className="checkout-form">
      <h2>🛒 Checkout</h2>
      <h3>Contact</h3>
      <Field id="name"    label="Full Name"      placeholder="Alex Johnson" />
      <Field id="email"   label="Email"          placeholder="alex@email.com" type="email" />
      <h3>Shipping</h3>
      <Field id="address" label="Street Address" placeholder="123 Main St" />
      <Field id="city"    label="City"           placeholder="New York" />
      <h3>Payment</h3>
      <Field id="card"    label="Card Number"    placeholder="1234 5678 9012 3456" />
      <Field id="expiry"  label="Expiry Date"    placeholder="MM/YY" />
      <button type="submit" className="btn-submit">Place Order →</button>
    </form>
  );
}`})]})}export{C as default};
