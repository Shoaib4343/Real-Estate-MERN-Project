// src/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact py-10 bg-gray-100">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-title text-center mb-8">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="text-gray-600">
            "For any inquiries or assistance, please don't hesitate to reach out to us via the contact information provided on our website."
          </p>
        </div>
        <div className="flex flex-wrap" data-aos="fade-up" data-aos-delay="100">
          <div className="w-full">
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 p-4">
                <div className="info-box bg-white shadow-md p-6 rounded-lg">
                  <i className="bx bx-map text-2xl text-blue-500"></i>
                  <h3 className="font-semibold text-lg mt-2">Our Address</h3>
                  <p>Deolai Darbar Derai Swat Pakistan</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="info-box bg-white shadow-md p-6 rounded-lg mt-4 md:mt-0">
                  <i className="bx bx-envelope text-2xl text-blue-500"></i>
                  <h3 className="font-semibold text-lg mt-2">Email Us</h3>
                  <p>Khalilladla12@gmail.com<br />Sajidkhan@gmail.com</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="info-box bg-white shadow-md p-6 rounded-lg mt-4">
                  <i className="bx bx-phone-call text-2xl text-blue-500"></i>
                  <h3 className="font-semibold text-lg mt-2">Call Us</h3>
                  <p>+92 3448657932<br />+92 3021919025</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;