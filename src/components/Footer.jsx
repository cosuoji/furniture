import { Sofa, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { SiPinterest } from "react-icons/si";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-furniture-slate text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left place-items-center">
          {/* Brand + Socials */}
          <div className="max-w-xs">
            <div className="text-2xl font-bold mb-4 flex justify-center md:justify-start items-center">
                <img src={logo}  className="w-20"/>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming homes with premium furniture and exceptional design services.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://www.facebook.com/ffclassicfurnitures/" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://intagram.com/ffclassicfurniture.ng " className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@ffclassicfurniture" className="text-gray-300 hover:text-white transition-colors">
                <FaTiktok className="h-5 w-5" />
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
                 Shop No. 22-23 E-Mall 
                 Orchid Rd, Second Toll Gate,Lekki Lagos
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-4 w-4" />
                +234 702 654 1493 
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Phone className="mr-2 h-4 w-4" />
                 +234 702 644 5836
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <Mail className="mr-2 h-4 w-4" />
                    ffclassicfurniture@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 FF Classic Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
