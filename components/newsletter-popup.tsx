"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { X, Gift } from "lucide-react";

interface NewsletterPopupProps {
  delayInSeconds?: number;
}

export default function NewsletterPopup({ delayInSeconds = 2 }: NewsletterPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your newsletter service
    console.log("Newsletter signup:", { firstName, lastName, email });
    
    // Mark as shown in localStorage
    localStorage.setItem("newsletter-popup-shown", "true");
    
    // Close the popup
    setIsOpen(false);
    
    // Show a success message (you could implement a toast notification here)
    alert("Thank you for subscribing to our newsletter!");
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md p-0 overflow-hidden rounded-xl border-0 shadow-xl w-[95%] max-w-[95vw] sm:w-auto max-h-[90vh] overflow-y-auto">
        <div className="bg-blue-50 p-4 sm:p-6 relative">
          <DialogClose className="absolute right-3 top-3 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
          </DialogClose>
          
          <div className="flex flex-col items-center text-center">
            {/* Envelope icon with notification badge */}
            <div className="relative w-auto h-12 mb-32 sm:h-16 sm:mb-6">
              <Image 
                src="/images/newsletter-icon.png" 
                alt="Newsletter"
                width={400} 
                height={200}
                className="object-contain"
              />
              {/* Notification badge */}
              
            </div>
            
            {/* Heading with gift icon */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2"
            >
                <span className="text-base sm:text-lg font-bold flex items-center justify-center">🎁 Get 10% OFF + Design Inspiration Weekly!</span> 
            </motion.div>
            
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
              <li className="flex items-center gap-2">
                <span className="text-blue-600">◆</span> Exclusive offers for subscribers only
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
            
            <motion.p 
              className="text-gray-500 mb-4 text-xs"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              No spam, just good vibes.
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
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 h-10"
              >
                Sign Up
              </Button>
            </motion.form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}