import { useState } from 'react';
import { send } from 'emailjs-com';

export default function ContactMe() {
  const [toSend, setToSend] = useState({
    from_name_first: '',
    from_name_last: '',
    to_name: 'Rishi',
    message: '',
    reply_to: '',
    mob_number: '',
    our_subject: ''
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_xrt81gs',
      'template_cbmke7l',
      toSend,
      'VvayPoq7kqtqoC4kl'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setToSend({
          from_name_first: '',
          from_name_last: '',
          to_name: 'Rishi',
          message: '',
          reply_to: '',
          mob_number: '',
          our_subject: ''
        });
        // Show a success message in a pop-up
        window.alert('Inquiry sent successfully!');
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title"></p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          Email: <a href = "mailto: r.sankhla@gold.ac.uk">r.sankhla@gold.ac.uk</a> Mob: <a href="tel:+447458671721">+44 7458 671721</a><br />  
          Can also contact me through the below form:
        </p>
      </div>
      <form className="contact--form--container" onSubmit={onSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact--input text-md"
              id="first-name"
              name="from_name_first"
              onChange={handleChange}
              value={toSend.from_name_first}
              required
            />
          </label>
          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact--input text-md"
              id="last-name"
              name="from_name_last"
              onChange={handleChange}
              value={toSend.from_name_last}
              required
            />
          </label>
          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact--input text-md"
              id="email"
              placeholder='Your email'
              name="reply_to"
              onChange={handleChange}
              value={toSend.reply_to}
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">phone-number</span>
            <input
              type="text"
              className="contact--input text-md"
              placeholder='Your number'
              id="phone-number"
              name="mob_number"
              onChange={handleChange}
              value={toSend.mob_number}
              required
            />
          </label>
        </div>
        <label htmlFor="subject" className="contact--label">
          <span className="text-md">Subject</span>
          <input
            type="text"
            className="contact--input text-md"
            id="subject"
            name="our_subject"
            onChange={handleChange}
            value={toSend.our_subject}
            required
          />
        </label>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
            name='message'
            value={toSend.message}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="checkboc" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms for inquiring through web-mail</span>
        </label>
        <div>
          <button type='submit' className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
