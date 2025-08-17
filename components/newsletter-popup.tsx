"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";

interface NewsletterPopupProps {
  delayInSeconds?: number;
}

export default function NewsletterPopup({ delayInSeconds = 2 }: NewsletterPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Check if the popup has been shown before
  useEffect(() => {
    const hasShownPopup = localStorage.getItem("newsletter-popup-shown");
    
    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, delayInSeconds * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [delayInSeconds]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email) {
      alert("Please fill in all fields.");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Newsletter subscription parameters
      const newsletterParams = {
        subscriber_name: `${firstName} ${lastName}`.trim(),
        subscriber_email: email,
        first_name: firstName,
        last_name: lastName,
        subscription_date: new Date().toLocaleDateString(),
        year: new Date().getFullYear(),
        to_email: "your-newsletter-email@domain.com", // Replace with your newsletter email
      };
      
      console.log("Newsletter subscription params:", newsletterParams);
      
      // Send newsletter subscription email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID!,
        newsletterParams,
        process.env.NEXT_PUBLIC_EMAILJS_NEWSLETTER_PUBLIC_KEY!,
      );
      
      console.log("Newsletter subscription sent successfully:", result.text);
      
      // Show success animation
      setIsSuccess(true);
      setShowSuccess(true);
      
      // Mark as shown in localStorage
      localStorage.setItem("newsletter-popup-shown", "true");
      
      // Hide success message and close popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setTimeout(() => {
          setIsSuccess(false);
          setIsOpen(false);
          // Reset form
          setFirstName("");
          setLastName("");
          setEmail("");
        }, 300);
      }, 3000);
      
    } catch (error) {
      console.error("Failed to send newsletter subscription:", error);
      alert("Sorry, there was an error subscribing to our newsletter. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Handle popup close/dismiss
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    
    // If the popup is being closed (dismissed), mark it as shown so it doesn't appear again
    if (!open) {
      localStorage.setItem("newsletter-popup-shown", "true");
    }
  };
  
  return (
    <>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-xl border-0 shadow-xl w-[95%] max-w-[95vw] sm:w-auto max-h-[90vh] overflow-y-auto">
          <DialogTitle className="sr-only">Newsletter Signup</DialogTitle>
          <div className="bg-blue-50 p-4 sm:p-6 relative">
            
            <div className="flex flex-col items-center text-center">
              {/* Envelope icon with notification badge */}
              <div className="relative w-full h-12 mb-52">
                <Image 
                  src="/images/newsletter-icon.png" 
                  alt="Newsletter"
                  width={400} 
                  height={200}
                  className="object-contain"
                />
              </div>
              
              <motion.p 
                className="text-gray-700 mt-1 mb-3 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Join the PixelSphere mailing list for exclusive perks:
              </motion.p>
              
              <motion.ul 
                className="text-left w-full mb-3 space-y-1.5 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">◆</span> Pro design & branding tips
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">◆</span> Behind-the-scenes from our creative process
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-blue-600">◆</span> Early access to launches
                </li>
              </motion.ul>
              
              <motion.p 
                className="text-gray-700 mb-2 text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                👋 Join our community. Sign up below!
              </motion.p>
              
              <motion.form 
                onSubmit={handleSubmit}
                className="w-full space-y-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="first-name" className="sr-only">First name</label>
                    <Input
                      id="first-name"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="h-9 text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="sr-only">Last name</label>
                    <Input
                      id="last-name"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="h-9 text-sm"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-9 text-sm"
                    disabled={isSubmitting}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full font-medium py-2 h-10 transition-all duration-300 ${
                    isSuccess 
                      ? 'bg-green-500 hover:bg-green-600' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  } text-white`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : isSuccess ? (
                    <div className="flex items-center justify-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Subscribed!
                    </div>
                  ) : (
                    'Sign Up'
                  )}
                </Button>
              </motion.form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Success Overlay */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-lg p-8 max-w-sm mx-4 text-center shadow-2xl"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome to PixelSphere!</h3>
              <p className="text-gray-600">Thank you for subscribing to our newsletter. You'll receive exclusive design tips and updates!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
