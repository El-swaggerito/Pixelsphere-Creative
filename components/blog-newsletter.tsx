"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

interface BlogNewsletterProps {
  className?: string;
}

export default function BlogNewsletter({ className = "" }: BlogNewsletterProps) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<{ firstName?: string; email?: string }>({});

  const validateForm = () => {
    const newErrors: { firstName?: string; email?: string } = {};
    
    // Validate first name
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }
    
    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Newsletter subscription parameters
      const newsletterParams = {
        subscriber_name: firstName.trim(),
        subscriber_email: email.trim(),
        first_name: firstName.trim(),
        subscription_date: new Date().toLocaleDateString(),
        year: new Date().getFullYear(),
        to_email: "newsletter@pixelsphere.com", // Replace with your newsletter email
      };
      
      // Send newsletter subscription email using EmailJS
      // Note: You'll need to set up EmailJS service and template IDs in your environment variables
      if (process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
          newsletterParams,
          process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY!
        );
      }
      
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFirstName("");
        setEmail("");
        setErrors({});
      }, 3000);
      
    } catch (error) {
      console.error("Failed to send newsletter subscription:", error);
      alert("Sorry, there was an error subscribing to our newsletter. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      className={`py-16 bg-gradient-to-br from-orange-50 to-orange-100 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Enjoy Convenience, Learn Smarter
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Receive all our tips and FREE e-books directly into your inbox
                </p>
              </motion.div>
            </div>
            
            {/* Right Column - Form */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <motion.form 
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* First Name Field */}
                <div>
                  <label 
                    htmlFor="newsletter-first-name" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name:
                  </label>
                  <Input
                    id="newsletter-first-name"
                    type="text"
                    placeholder="Enter your first name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName) {
                        setErrors(prev => ({ ...prev, firstName: undefined }));
                      }
                    }}
                    className={`h-12 text-base ${
                      errors.firstName 
                        ? "border-red-500 focus-visible:ring-red-500" 
                        : "border-gray-300 focus-visible:ring-orange-500"
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label 
                    htmlFor="newsletter-email" 
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email:
                  </label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors(prev => ({ ...prev, email: undefined }));
                      }
                    }}
                    className={`h-12 text-base ${
                      errors.email 
                        ? "border-red-500 focus-visible:ring-red-500" 
                        : "border-gray-300 focus-visible:ring-orange-500"
                    }`}
                    disabled={isSubmitting}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
                
                {/* Submit Button */}
                <Button 
                  type="submit" 
                  className={`w-full h-12 text-base font-semibold transition-all duration-300 ${
                    isSuccess 
                      ? 'bg-green-500 hover:bg-green-600 text-white' 
                      : 'bg-orange-500 hover:bg-orange-600 text-white'
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Subscribed Successfully!
                    </div>
                  ) : (
                    'Subscribe'
                  )}
                </Button>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}