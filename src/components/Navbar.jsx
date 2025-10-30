import { useState } from "react";
import useModal from "../hooks/useModal";
import LoginModal from "./LoginModal";
import logo from "../assets/logo.png";
import slidelogo from "../assets/slidelogo.png";
import login from "../assets/login.png";
import { FaWallet, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const loginModal = useModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar flex justify-between items-center px-6 bg-[#00686E] h-[70px] relative z-20 shadow-md">
        {/* Logo */}
        <div className="logo flex items-center space-x-3">
          <img src={logo} alt="logo" className="h-10 sm:h-12" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaWallet className="text-white text-xl" onClick={loginModal.openModal}/>
            <span className="text-white text-sm font-medium">Wallet</span>
          </div>
          <button
            onClick={loginModal.openModal}
            className="rounded-full hover:opacity-90 transition"
          >
            <img src={login} alt="Avatar" className="h-8 w-8 rounded-full" />
          </button>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-5 text-white">
          <FaWallet className="text-xl"  onClick={loginModal.openModal}/>
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-white shadow-lg transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-30`}
        >
          {/* Close Button */}
          <div
            className="flex justify-end p-4 text-2xl text-gray-700 cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <FaTimes />
          </div>

          {/* Slide Logo */}
          <div className="ml-4 mb-8">
            <img src={slidelogo} alt="logo" className="h-12" />
          </div>

          {/* Login / Signup Button */}
          <button
            onClick={() => {
              loginModal.openModal();
              setIsMenuOpen(false);
            }}
            className="flex items-center mt-2 bg-gray-100 hover:bg-[#E0F4F4] transition m-2 rounded-[10px] space-x-3 text-black p-3 w-[93%]"
          >
            <img src={login} alt="Avatar" className="h-10" />
            <div className="flex flex-col">
              <span className="text-left font-semibold">Login / Signup</span>
              <span className="text-gray-500 text-sm">
                Login to avail best deals
              </span>
            </div>
          </button>

          {/* Wallet Button */}
          <div className="flex items-center mt-3 bg-gray-100 hover:bg-[#E0F4F4] transition p-3 m-2 rounded-[10px] w-[93%]">
            <FaWallet className="text-[#00686E] text-2xl mr-3" />
            <span className="text-black font-medium">Wallet</span>
          </div>
        </div>
      </nav>

      {/* Login Modal */}
      {loginModal.isOpen && <LoginModal close={loginModal.closeModal} />}
    </>
  );
}
