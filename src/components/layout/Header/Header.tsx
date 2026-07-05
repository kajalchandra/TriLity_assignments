import { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import HeaderButtons from "./HeaderButtons";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-sm">
      {/* desktop header */}
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4 rounded-md">
        <Logo />

        <MobileMenu
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />

        <Navigation />

        <HeaderButtons />
      </div>

    {/* mobile header */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col gap-5 px-4 py-5 shadow-md bg-white">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Features</p>
          <p className="cursor-pointer">Pricing</p>
          <p className="cursor-pointer">About Us</p>
          <p className="cursor-pointer">Contact</p>

          <button className="border border-gray-300 px-4 py-2 rounded-md">
            Login
          </button>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
            Get Started
          </button>
        </div>
      )}
      
    </header>
  );
};

export default Header;