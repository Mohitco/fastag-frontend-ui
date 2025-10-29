import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import footer from "../assets/footer.png";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Decorative Image */}
      <img
        src={footer}
        alt="footer background"
        loading="lazy"
        className="w-full"
      />

      {/* Footer Content */}
      <div className="bg-[#00686E] px-6 md:px-16 py-10 text-white">
        {/* Logo + Reach Section */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-16">
          {/* Logo */}
          <div className="flex justify-start md:justify-start md:ml-20">
            <img src={logo} alt="Logiclead Logo" className="h-12" />
          </div>

          {/* Reach Us Section */}
          <div className="text-left ">
            <h3 className="text-xl font-bold mb-4">Reach Us</h3>

            <div className="space-y-2 text-sm font-medium">
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" /> ops@logiclead.in
              </p>
              <p className="flex items-center gap-2">
                <MdEmail className="text-lg" /> tech@logiclead.in
              </p>
              <p className="flex items-start gap-2 leading-relaxed">
                <FaLocationDot className="mt-[3px]" />
                Office No 15, Ground Floor, D-29, Sector 3, Noida, Gautam Buddha
                Nagar, Uttar Pradesh, 201301.
              </p>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="border-white my-6 w-[90%]  mx-auto" />

        {/* Footer Bottom Section */}
        <div className="text-center space-y-2 md:flex md:justify-between ">
          <p className="text-sm">© 2025 Logiclead. All rights reserved</p>

          <div className="flex justify-center space-x-4 text-sm font-medium">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <span>|</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
