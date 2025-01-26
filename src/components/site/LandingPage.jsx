import { ShoppingCart, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const socialIcons = [
  { href: "#", icon: "facebook", label: "Facebook" },
  { href: "#", icon: "twitter", label: "Twitter" },
  { href: "#", icon: "pinterest", label: "Pinterest" },
  { href: "#", icon: "snapchat", label: "Snapchat" },
  { href: "#", icon: "tiktok", label: "TikTok" },
];

function SiteHeader() {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="w-full bg-[#1a237e] text-white py-2">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              {socialIcons.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white hover:text-yellow-300 transition-colors"
                >
                  <span className="sr-only">{social.label}</span>
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <span className="text-sm">Mon - Fri: 09.00am - 10.00pm</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="secondary"
              className="bg-yellow-400 hover:bg-yellow-500 text-black"
            >
              Get A Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img src="logo.png" alt="Clenix Logo" className="h-12" />
            {/* <span className="text-2xl font-bold text-blue-900">Clenix</span> */}
          </a>

          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8">
              <NavigationMenuItem>
                <a href="/" className="text-gray-700 hover:text-blue-900">
                  Home
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/about" className="text-gray-700 hover:text-blue-900">
                  About
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/services"
                  className="text-gray-700 hover:text-blue-900"
                >
                  Services
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/pages" className="text-gray-700 hover:text-blue-900">
                  Pages
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/elementor"
                  className="text-gray-700 hover:text-blue-900"
                >
                  Elementor
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="/blog" className="text-gray-700 hover:text-blue-900">
                  Blog
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="/contact"
                  className="text-gray-700 hover:text-blue-900"
                >
                  Contact
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-blue-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
            <Phone className="w-6 h-6 text-blue-900" />

            <div className="hidden md:flex items-center">
              <div className="mr-4">
                <div className="text-sm text-gray-600">Quick Contact</div>
                <div className="text-lg font-bold text-blue-900">
                  +985-8844-000
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default SiteHeader;
