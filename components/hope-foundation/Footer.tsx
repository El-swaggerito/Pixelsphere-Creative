"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface SocialLink {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
}

interface FooterLink {
  name: string;
  href: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface FooterProps {
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: number;
  logoHeight?: number;
  contactInfo?: ContactInfo;
  socialLinks?: SocialLink[];
  quickLinks?: FooterLink[];
  supportLinks?: FooterLink[];
  galleryImages?: GalleryImage[];
  backgroundColor?: string;
  copyrightText?: string;
  className?: string;
}

const defaultContactInfo: ContactInfo = {
  address: "123 Hope Street, Community Center, City 12345",
  phone: "+1 (555) 123-4567",
  email: "info@hopefoundation.org",
};

const defaultSocialLinks: SocialLink[] = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Instagram", href: "#", icon: Instagram },
];

const defaultQuickLinks: FooterLink[] = [
  { name: "About Us", href: "/hope-foundation/about#about-hero" },
  { name: "Our Mission", href: "/hope-foundation/about#mission-vision" },
  { name: "Programs", href: "/hope-foundation/campaign#active-campaigns" },
  { name: "Impact", href: "/hope-foundation/about#impact" },
];

const defaultSupportLinks: FooterLink[] = [
  { name: "Donate", href: "/hope-foundation#donation" },
  { name: "Volunteer", href: "/hope-foundation/contact#contact-form" },
  { name: "Partner", href: "/hope-foundation/contact#contact-form" },
  { name: "Contact", href: "/hope-foundation/contact" },
];

const defaultGalleryImages: GalleryImage[] = [
  { src: '/images/hopefoundation-project/gallery-1.png', alt: 'Community Education Program' },
  { src: '/images/hopefoundation-project/gallery-2.png', alt: 'Clean Water Initiative' },
  { src: '/images/hopefoundation-project/gallery-3.png', alt: 'Healthcare Outreach' },
  { src: '/images/hopefoundation-project/gallery-4.png', alt: 'Youth Empowerment' },
  { src: '/images/hopefoundation-project/gallery-5.png', alt: 'Community Development' },
  { src: '/images/hopefoundation-project/gallery-6.png', alt: 'Volunteer Activities' }
];

export default function HopeFoundationFooter({
  logoSrc = "/images/hopefoundation-project/logo.png",
  logoAlt = "Hope Foundation Logo",
  logoWidth = 120,
  logoHeight = 40,
  contactInfo = defaultContactInfo,
  socialLinks = defaultSocialLinks,
  quickLinks = defaultQuickLinks,
  supportLinks = defaultSupportLinks,
  galleryImages = defaultGalleryImages,
  backgroundColor = "#131A1B",
  copyrightText = "© Copyright Charity 2025. Design by PixelSphere Creatives",
  className = "",
}: FooterProps) {
  return (
    <AnimatedSection>
      <footer
        className={`relative py-16 lg:py-20 ${className}`}
        style={{ backgroundColor }}
        role="contentinfo"
      >
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Main Footer Content */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Contact Info */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <div className="mb-8">
                  {/* Logo */}
                  <div className="w-12 h-12 flex items-center justify-center mb-6">
                    <Image
                      src={logoSrc}
                      alt={logoAlt}
                      width={logoWidth}
                      height={logoHeight}
                      className="h-10 w-auto"
                      priority
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                      <p
                        className="text-gray-300 text-sm leading-relaxed"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        {contactInfo.address}
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <a
                        href={`tel:${contactInfo.phone}`}
                        className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <a
                        href={`mailto:${contactInfo.email}`}
                        className="text-gray-300 text-sm hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-4 mt-6">
                    {socialLinks.map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label={`Follow us on ${social.name}`}
                        >
                          <IconComponent className="w-5 h-5" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Quick Links */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <h4
                  className="text-white font-semibold mb-6 text-lg"
                  style={{ fontFamily: "Movement, sans-serif" }}
                >
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Support */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <h4
                  className="text-white font-semibold mb-6 text-lg"
                  style={{ fontFamily: "Movement, sans-serif" }}
                >
                  Support
                </h4>
                <ul className="space-y-3">
                  {supportLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-yellow-400 transition-colors duration-200"
                        style={{ fontFamily: "Movement, sans-serif" }}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Gallery */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
              >
                <h4
                  className="text-white font-semibold mb-6 text-lg"
                  style={{ fontFamily: "Movement, sans-serif" }}
                >
                  Gallery
                </h4>
                <div className="grid grid-cols-3 gap-1">
                  {galleryImages.map((image, index) => (
                    <motion.div
                      key={index}
                      className="relative aspect-square overflow-hidden rounded-md group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="border-t border-gray-700 pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p
                className="text-center text-gray-400 text-sm"
                style={{ fontFamily: "Movement, sans-serif" }}
              >
                {copyrightText}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-transparent" />
        </div>
      </footer>
    </AnimatedSection>
  );
}