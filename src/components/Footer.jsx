import { Sofa, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { SiPinterest } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-furniture-slate text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left place-items-center">
          {/* Brand + Socials */}
          <div className="max-w-xs">
            <div className="text-2xl font-bold mb-4 flex justify-center md:justify-start items-center">
              <Sofa className="mr-2 h-6 w-6" />
              Refined Living
            </div>
            <p className="text-gray-300 mb-4">
              Transforming homes with premium furniture and exceptional design services.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <SiPinterest className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="max-w-xs">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center justify-center md:justify-start">
                <MapPin className="mr-2 h-4 w-4" />
                123 Design Avenue, NY 10001
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-4 w-4" />
                (555) 123-4567
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 h-4 w-4" />
                info@refinedliving.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 Refined Living. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
