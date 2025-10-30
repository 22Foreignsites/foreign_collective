import "./../css/WorkingContact.css";
import {useState} from "react";

const WorkingContact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "165c5b93-89f1-4b58-920a-2dc856a34728");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <form className="contact-textboxes" onSubmit={onSubmit}>
      <label className="ctb-field ctb-half">
        <span className="ctb-label">Name</span>
        <input className="ctb-input" type="text" name="name" placeholder="Your full name" required />
      </label>

      <label className="ctb-field ctb-half">
        <span className="ctb-label">Email *</span>
        <input className="ctb-input" type="email" name="email" placeholder="you@example.com" required />
      </label>

      <label className="ctb-field ctb-full">
        <span className="ctb-label">Phone number</span>
        <input className="ctb-input" type="tel" name="phone" placeholder="(555) 555-5555" />
      </label>

      <label className="ctb-field ctb-full">
        <span className="ctb-label">Comment</span>
        <textarea className="ctb-textarea" name="message" placeholder="Write your message here" required />
      </label>

      <div className="ctb-actions ctb-full">
        <button type="submit" className="ctb-submit">Send</button>
      </div>

      <div className="ctb-result">
        <span>{result}</span>
      </div>
    </form>
  );
}

export default WorkingContact;