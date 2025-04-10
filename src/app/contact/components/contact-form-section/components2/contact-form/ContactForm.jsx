import React from 'react'
import './ContactForm.css'
import Swal from 'sweetalert2'
import NeonButton from "../../../../../../components/NeonButton"

const ContactForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "39c04ca2-8a1f-41f9-96b1-c680359d9fb8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Welcome to the Game!",
        text: "Great choice! Your table tennis journey starts now. Let's smash it together!",
        icon: "success",
        draggable: true
      });
    }
  };

  return (
    <section id="section-body" className="contact">
      <form onSubmit={onSubmit}>
        <h2>Contact Form</h2>
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" className="field" name="name" placeholder='Enter your name' required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" className="field" name="email" placeholder='Enter your email' required />
        </div>
        <div className="input-box">
          <label>Phone Number</label>
          <input type="text" className="field" name="name" placeholder='Enter your number +995' required />
        </div>
        <div className="input-box">
          <label>Your Message</label>
          <textarea name="message" id="" className="field mess" placeholder='Enter your message' required ></textarea>
        </div>
        <NeonButton className=""type="submit">Send Message</NeonButton>
      </form>
    </section>
  )
}

export default ContactForm