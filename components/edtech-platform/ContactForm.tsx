import React from 'react';

const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Form heading and form */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Fill out this form, we'll quickly get back to you
            </h2>
            <p className="text-gray-600 mb-8">
              Please let us know if you have a question, want to leave a comment, or would like further information.
            </p>
            

                      <div className="flex flex-col justify-start">
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Call Us</h3>
                  <p className="text-gray-600">0700 7293 2782</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Send us an Email</h3>
                  <p className="text-gray-600">hello@edtech.com</p>
                </div>
              </div>
            </div>
          </div>
            
          </div>
          
          {/* Right side - Contact information */}
<form className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  placeholder="Enter full name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="workEmail" className="block text-gray-700 font-medium mb-2">Work Email</label>
                <input 
                  type="email" 
                  id="workEmail" 
                  placeholder="Enter email address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  placeholder="Enter phone number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Anything else that can help us with your request? (optional)</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  placeholder="Enter your comments" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-6 rounded-md transition duration-300"
              >
                Submit
              </button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;