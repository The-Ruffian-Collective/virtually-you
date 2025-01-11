import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-playfair text-fashion-primary text-xl font-bold">
                Virtually You
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-8">
            <Link to="/try-on" className="text-gray-700 hover:text-fashion-secondary">
              Try On
            </Link>
            <Link to="/wardrobe" className="text-gray-700 hover:text-fashion-secondary">
              Wardrobe
            </Link>
            <Button variant="outline">Sign In</Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-fashion-secondary"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/try-on"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-fashion-secondary"
            >
              Try On
            </Link>
            <Link
              to="/wardrobe"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-fashion-secondary"
            >
              Wardrobe
            </Link>
            <div className="px-3 py-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;