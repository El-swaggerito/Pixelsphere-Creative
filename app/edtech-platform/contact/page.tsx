import React from 'react';
import { ContactHeroSection, EdtechNavbar, EdtechFooter, ContactForm } from '@/components/edtech-platform';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <EdtechNavbar />
      <ContactHeroSection />
      <ContactForm />
      <EdtechFooter />
    </main>
  );
}