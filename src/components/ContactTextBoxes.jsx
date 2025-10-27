import { useState } from 'react';
import './../css/ContactTextBoxes.css';

const ContactTextBoxes = ({ initial = {}, onChange }) => {
  const [values, setValues] = useState({
    name: initial.name || '',
    email: initial.email || '',
    phone: initial.phone || '',
    message: initial.message || '',
  });

  const handle = (field) => (e) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    if (onChange) onChange(next);
  };

  return (
    <form className="contact-textboxes" onSubmit={(e) => e.preventDefault()}>
      <label className="ctb-field">
        <span className="ctb-label">Name</span>
        <input className="ctb-input" value={values.name} onChange={handle('name')} placeholder="Your full name" />
      </label>

      <label className="ctb-field">
        <span className="ctb-label">Email</span>
        <input className="ctb-input" type="email" value={values.email} onChange={handle('email')} placeholder="you@example.com" />
      </label>

      <label className="ctb-field">
        <span className="ctb-label">Phone Number</span>
        <input className="ctb-input" value={values.phone} onChange={handle('phone')} placeholder="(555) 555-5555" />
      </label>

      <label className="ctb-field">
        <span className="ctb-label">Message</span>
        <textarea className="ctb-textarea" value={values.message} onChange={handle('message')} placeholder="Write your message here" />
      </label>
    </form>
  );
};

export default ContactTextBoxes;
