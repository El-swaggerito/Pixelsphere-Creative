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

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Form validation
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
      general: "",
    };

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setErrors({ email: "", password: "", general: "" });

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          // Simulate authentication logic
          if (formData.email === "demo@edtech.com" && formData.password === "password123") {
            resolve("success");
          } else {
            reject(new Error("Invalid credentials"));
          }
        }, 2000);
      });

      // Success - redirect to dashboard or home
      router.push("/edtech-platform");
    } catch (error) {
      setErrors({
        ...errors,
        general: "Invalid email or password. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
    
    // Clear errors when user starts typing
    if (errors[field as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Handle back to home navigation
  const handleBackToHome = () => {
    router.push("/edtech-platform");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Welcome Section with Login Image */}
          <motion.div
            className="lg:w-1/2 bg-gradient-to-br from-green-50 via-white to-blue-50 p-6 sm:p-8 lg:p-12 flex flex-col justify-center items-center relative overflow-hidden"
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            {/* Main Illustration from login.png */}
            <motion.div
              className="relative z-10 mb-6 lg:mb-8 w-full max-w-sm lg:max-w-md"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              <div className="relative w-full h-64 sm:h-72 lg:h-80 flex items-center justify-center">
                <Image
                  src="/images/edtech-project/login.png"
                  alt="Students learning with books and educational materials - EdTech platform illustration"
                  width={400}
                  height={320}
                  className="object-contain w-full h-full max-w-full"
                  priority
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                />
              </div>
            </motion.div>

            {/* Welcome Text */}
            <motion.div
              className="text-center relative z-10 px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 lg:mb-4 font-montserrat leading-tight">
                Welcome to
                <br />
                <span className="text-green-600">edtech Courses.</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-sm lg:max-w-md mx-auto">
                Platform designed to help organizations, educators, and learners
                manage, deliver, and track learning and training activities.
              </p>
              <div className="mt-4 lg:mt-6 w-12 lg:w-16 h-1 bg-green-500 mx-auto rounded-full"></div>
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            className="lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center"
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            {/* Header with Logo and Back to Home */}
            <motion.div
              className="flex items-center justify-between mb-6 lg:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/edtech-project/logo_edtech.png"
                  alt="EdTech Platform Logo"
                  width={48}
                  height={48}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  priority
                />
              </div>
              <Link
                 href="/edtech-platform"
                 className="text-green-600 hover:text-green-700 text-sm sm:text-base font-medium transition-colors duration-200 flex items-center space-x-1 group"
               >
                 <span>Back to Home</span>
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
               </Link>
            </motion.div>

            {/* Form Header */}
            <motion.div
              className="text-center mb-6 lg:mb-8"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 font-montserrat">
                Sign into Your Account
              </h2>
            </motion.div>

            {/* Login Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4 lg:space-y-6 w-full max-w-md mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* General Error */}
              {errors.general && (
                <motion.div
                  className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {errors.general}
                </motion.div>
              )}

              {/* Email Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <div className="relative">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className={`w-full px-4 py-3 sm:py-4 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-base ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your email"
                    disabled={isLoading}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <motion.p
                      id="email-error"
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div variants={itemVariants} className="space-y-2">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password *
                </label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className={`w-full px-4 py-3 sm:py-4 pr-12 border rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 text-base ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your password"
                    disabled={isLoading}
                    aria-describedby={errors.password ? "password-error" : undefined}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
                    disabled={isLoading}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                  {errors.password && (
                    <motion.p
                      id="password-error"
                      className="mt-1 text-sm text-red-600"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      role="alert"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </div>
              </motion.div>

              {/* Remember Me and Forgot Password */}
              <motion.div 
                variants={itemVariants} 
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0"
              >
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 focus:ring-2"
                    disabled={isLoading}
                    aria-describedby="remember-me-description"
                  />
                  <span className="text-sm text-gray-700" id="remember-me-description">
                    Remember Me
                  </span>
                </label>
                <Link
                  href="/edtech-platform/forgot-password"
                  className="text-sm text-green-600 hover:text-green-700 font-medium transition-colors duration-200 text-left sm:text-right"
                >
                  Forgot Password?
                </Link>
              </motion.div>

              {/* Login Button */}
              <motion.div variants={itemVariants}>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:ring-4 focus:ring-green-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-base"
                  aria-describedby={isLoading ? "login-loading" : undefined}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
                      <span id="login-loading">Signing in...</span>
                    </div>
                  ) : (
                    "Login"
                  )}
                </Button>
              </motion.div>

              {/* Divider */}
              <motion.div
                className="relative flex items-center justify-center"
                variants={itemVariants}
              >
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative bg-white px-4 text-sm text-gray-500">Or</div>
              </motion.div>

              {/* Social Login Buttons */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                variants={itemVariants}
              >
                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoading}
                  className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  aria-label="Sign in with Google"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  disabled={isLoading}
                  className="flex items-center justify-center py-3 px-4 border border-gray-300 rounded-xl hover:bg-gray-50 transition-all duration-300"
                  aria-label="Sign in with Facebook"
                >
                  <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
              </motion.div>

              {/* Sign Up Link */}
              <motion.div
                className="text-center"
                variants={itemVariants}
              >
                <p className="text-gray-600">
                  Don't you have an account?{" "}
                  <Link
                    href="/edtech-platform/signup"
                    className="text-green-600 hover:text-green-700 font-medium transition-colors duration-300 focus:outline-none focus:underline"
                    aria-label="Create a new account"
                  >
                    Sign up
                  </Link>
                </p>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}