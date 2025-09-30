"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface DonationFormData {
  name: string;
  email: string;
  message: string;
}

interface DonateSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  predefinedAmounts?: string[];
  backgroundColor?: string;
  onDonationSubmit?: (amount: string, formData: DonationFormData) => void;
  className?: string;
}

export default function DonateSection({
  title = "Make a Donation",
  subtitle = "Every Contribution Counts",
  description = "Your generous donation helps us continue our mission to create positive change in communities worldwide. Together, we can make a lasting impact.",
  predefinedAmounts = ["25", "50", "100", "250"],
  backgroundColor = "#FBFDAC",
  onDonationSubmit,
  className = "",
}: DonateSectionProps) {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [formData, setFormData] = useState<DonationFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleAmountSelect = (amount: string) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setDonationAmount("");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = donationAmount || customAmount;
    
    if (onDonationSubmit) {
      onDonationSubmit(finalAmount, formData);
    } else {
      // Default behavior - you can customize this
      console.log("Donation submitted:", { amount: finalAmount, ...formData });
      alert(`Thank you for your donation of $${finalAmount}!`);
    }
  };

  const handleInputChange = (field: keyof DonationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AnimatedSection>
     <section
            id="donation"
            className="py-16 lg:py-24"
            style={{ backgroundColor: "#FBFDAC" }}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Section Header */}
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-block mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <span
                    className="text-yellow-600 text-sm font-medium tracking-wider uppercase"
                    style={{ fontFamily: "Movement, sans-serif" }}
                  >
                    DONATE NOW
                  </span>
                </motion.div>

                <motion.h2
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight"
                  style={{ fontFamily: "Movement, sans-serif" }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  SUPPORT LASTING CHANGE
                </motion.h2>
              </motion.div>

              {/* Donation Form */}
              <motion.div
                className="p-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <form className="space-y-8">
                  {/* Donation Amount Selection */}
                  <div>
                    <motion.div
                      className="grid grid-cols-3 gap-4 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {/* $25 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("25")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "25"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $25
                      </motion.button>

                      {/* $50 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("50")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "50"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $50
                      </motion.button>

                      {/* $100 Button */}
                      <motion.button
                        type="button"
                        onClick={() => setDonationAmount("100")}
                        className={`p-6 rounded-lg font-bold text-xl transition-all duration-200 ${
                          donationAmount === "100"
                            ? "bg-yellow-400 text-gray-900 shadow-lg"
                            : "bg-white border-2 border-gray-300 text-gray-900 hover:border-yellow-400 hover:bg-yellow-50"
                        }`}
                        style={{ fontFamily: "Movement, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        $100
                      </motion.button>
                    </motion.div>

                    {/* Custom Amount Input and Donate Button */}
                    <motion.div
                      className="flex gap-4"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                    >
                      <Input
                        type="number"
                        placeholder="Enter custom amount"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setDonationAmount("");
                        }}
                        className="flex-1 h-14 text-lg border-2 border-gray-300 focus:border-yellow-400 focus:ring-yellow-400"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      />

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 h-14 text-lg font-bold transition-all duration-200 shadow-lg hover:shadow-xl border-0"
                          style={{ fontFamily: "Movement, sans-serif" }}
                        >
                          DONATE
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                </form>
              </motion.div>
            </div>
          </section>
    </AnimatedSection>
  );
}