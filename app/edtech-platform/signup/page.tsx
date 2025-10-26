"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: "",
  });

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const validateFullName = (name: string) => {
    return name.trim().length >= 2;
  };

  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset errors
    setErrors({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: "",
    });

    // Validate form
    let hasErrors = false;
    const newErrors = { ...errors };

    if (!validateFullName(formData.fullName)) {
      newErrors.fullName = "Full name must be at least 2 characters long";
      hasErrors = true;
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      hasErrors = true;
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = "Password must be at least 8 characters long";
      hasErrors = true;
    }

    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      newErrors.confirmPassword = "Passwords do not match";
      hasErrors = true;
    }

    if (!agreeToTerms) {
      newErrors.terms = "You must agree to the Terms of Service and Privacy Policy";
      hasErrors = true;
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful signup
      console.log("Sign up successful:", formData);
      
      // Redirect to login page or dashboard
      router.push("/edtech-platform/login");
    } catch (error) {
      console.error("Sign up failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialSignUp = (provider: string) => {
    console.log(`Sign up with ${provider}`);
    // Implement social sign up logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Image
            src="/images/edtech-project/logo_edtech.png"
            alt="EdTech Platform Logo"
            width={48}
            height={48}
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link
            href="/edtech-platform"
            className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors text-sm sm:text-base group"
          >
            Back to Home
            <ArrowRight 
              className="w-4 h-4 transition-transform group-hover:translate-x-1" 
            />
          </Link>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left Side - Welcome Section with Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="hidden lg:flex flex-col items-center justify-center text-center space-y-6 p-8"
            >
              <div className="relative w-full max-w-md mx-auto">
                <Image
                  src="/images/edtech-project/signup.png"
                  alt="Student learning illustration - Person sitting on stack of books with laptop"
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-3xl xl:text-4xl font-bold text-gray-900">
                  Welcome to
                </h1>
                <h2 className="text-3xl xl:text-4xl font-bold">
                  <span className="text-gray-900">edtech</span>{" "}
                  <span className="text-green-600">Courses.</span>
                </h2>
                <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                  Platform designed to help organizations, educators, and learners 
                  manage, deliver, and track learning and training activities.
                </p>
                <div className="w-16 h-1 bg-green-600 mx-auto rounded-full"></div>
              </div>
            </motion.div>

            {/* Right Side - Sign Up Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
                <div className="text-center mb-6 lg:mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                    Sign Up
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6 w-full max-w-md mx-auto">
                  {/* Full Name Field */}
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange("fullName", e.target.value)}
                        className={`w-full px-4 py-3 sm:py-4 text-base rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-green-500/20 ${
                          errors.fullName 
                            ? "border-red-300 focus:border-red-500" 
                            : "border-gray-200 focus:border-green-500"
                        }`}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="fullName-error" className="text-red-500 text-sm" role="alert">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className={`w-full px-4 py-3 sm:py-4 text-base rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-green-500/20 ${
                          errors.email 
                            ? "border-red-300 focus:border-red-500" 
                            : "border-gray-200 focus:border-green-500"
                        }`}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                    </div>
                    {errors.email && (
                      <p id="email-error" className="text-red-500 text-sm" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className={`w-full px-4 py-3 sm:py-4 pr-12 text-base rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-green-500/20 ${
                          errors.password 
                            ? "border-red-300 focus:border-red-500" 
                            : "border-gray-200 focus:border-green-500"
                        }`}
                        aria-describedby={errors.password ? "password-error" : undefined}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.password && (
                      <p id="password-error" className="text-red-500 text-sm" role="alert">
                        {errors.password}
                      </p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                      Confirm Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                        className={`w-full px-4 py-3 sm:py-4 pr-12 text-base rounded-xl border-2 transition-all duration-200 focus:ring-2 focus:ring-green-500/20 ${
                          errors.confirmPassword 
                            ? "border-red-300 focus:border-red-500" 
                            : "border-gray-200 focus:border-green-500"
                        }`}
                        aria-describedby={errors.confirmPassword ? "confirmPassword-error" : undefined}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5 h-5" />
                        ) : (
                          <Eye className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && (
                      <p id="confirmPassword-error" className="text-red-500 text-sm" role="alert">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>

                  {/* Terms Agreement */}
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={agreeToTerms}
                        onCheckedChange={(checked) => {
                          setAgreeToTerms(checked as boolean);
                          if (errors.terms) {
                            setErrors(prev => ({ ...prev, terms: "" }));
                          }
                        }}
                        className="mt-1 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                        aria-describedby={errors.terms ? "terms-error" : undefined}
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                        I agree with{" "}
                        <Link href="/terms" className="text-green-600 hover:text-green-700 underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-green-600 hover:text-green-700 underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    {errors.terms && (
                      <p id="terms-error" className="text-red-500 text-sm" role="alert">
                        {errors.terms}
                      </p>
                    )}
                  </div>

                  {/* Sign Up Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Creating Account...
                      </div>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or</span>
                    </div>
                  </div>

                  {/* Social Sign Up Buttons */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleSocialSignUp("Google")}
                      className="flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200"
                      aria-label="Sign up with Google"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                    
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => handleSocialSignUp("Facebook")}
                      className="flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base border-2 border-gray-200 hover:border-gray-300 rounded-xl transition-all duration-200"
                      aria-label="Sign up with Facebook"
                    >
                      <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </div>

                  {/* Sign In Link */}
                  <div className="text-center mt-6">
                    <p className="text-gray-600 text-sm sm:text-base">
                      Already have an account?{" "}
                      <Link
                        href="/edtech-platform/login"
                        className="text-green-600 hover:text-green-700 font-semibold transition-colors"
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}