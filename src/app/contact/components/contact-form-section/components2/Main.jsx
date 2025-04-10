import React from 'react';
import Image from 'next/image'; // make sure you're using next/image if you're in Next.js
import '../styles/contact.css';
import NeonButton from "../../../../../components/NeonButton"

const Main = () => {
  return (
    <>
      <main className="contact-page">
        <div className="form-head">
          <h1>Get In Touch</h1>
        </div>

        {/* This is the wrapper you need to style both the form and image */}
        <div className="form-image-wrapper">
          <div>
            <form>
              <div className="form-heading">
                <h3>Name</h3>
                <input placeholder="" type="text" />
              </div>
              <div>
                <h3 className="form-heading">Email address</h3>
                <input placeholder="" type="text" />
              </div>
              <div>
                <h3 className="form-heading">Phone Number</h3>
                <input placeholder="" type="text" />
              </div>
              <div>
                <h3 className="form-heading">Message</h3>
                <input placeholder="" type="text" />
              </div>
            </form>
          </div>

          <div className="logo-wrapper">
            <Image 
              src="/images/optimus-logo01.png"
              alt="optimus logo"
              width={200} // you can adjust size
              height={200}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
