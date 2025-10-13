import React from 'react';

const ContactHeroSection = () => {
  return (
    <section className="py-16 md:py-24"
       style={{
            background:
              "linear-gradient(90deg, #2B5D2D 100%, #FFFFFF 100%), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%)",
            contain: "layout style paint",
          }}>
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h4 className="text-white/90 text-lg md:text-xl mb-4">Get in touch</h4>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-white/80 text-lg md:text-xl">
            And we'll get in touch within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;