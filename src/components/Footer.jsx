import { FaLinkedin, FaTwitter, FaEnvelope, FaGlobe } from "react-icons/fa";

const socialLinks = [
  { href: "https://linkedin.com", icon: <FaLinkedin />, label: "LinkedIn" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "mailto:contact@dhruvagroup.com", icon: <FaEnvelope />, label: "Email" },
  { href: "#", icon: <FaGlobe />, label: "Website" },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-dhruva-darker py-8 text-white border-t border-gold-500/10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        {/* Logo and Copyright */}
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
            <span className="font-cormorant font-bold text-dhruva-black text-sm">D</span>
          </div>
          <p className="text-center text-sm font-manrope text-white/60 md:text-left">
            ©Dhruva Group 2026. All rights reserved
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="text-gold-500/60 transition-colors duration-300 ease-in-out hover:text-gold-500 text-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-6">
          <a
            href="#privacy-policy"
            className="text-center text-sm font-manrope text-white/60 hover:text-gold-500 transition-colors md:text-right"
          >
            Privacy Policy
          </a>
          <a
            href="#terms"
            className="text-center text-sm font-manrope text-white/60 hover:text-gold-500 transition-colors md:text-right"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;