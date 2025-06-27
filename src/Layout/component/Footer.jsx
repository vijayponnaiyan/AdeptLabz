import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import facebook from "../../assets/icon/facebook.png";
import youtube from "../../assets/icon/youtube.png";
import instagram from "../../assets/icon/instagram.png";
import phone from "../../assets/icon/Icon phone-call.png";
import emil from "../../assets/icon/Icon feather-mail.png";

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-[#BBBBBB] py-10 h-auto">
      <div className="container mx-auto px-4 md:px-16  p-10 flex flex-col lg:flex-row justify-between items-center lg:items-center gap-8 text-center lg:text-left">
        {/* Left: Links */}
        <div className="flex-1 lg:pl-20 sm:pl-0 md:pl-0 ">
          <ul className="space-y-2 text-sm  ">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Returns & Exchange
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Technical & Privacy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Order Status
              </a>
            </li>
          </ul>
        </div>

        {/* Center: Logo + Social */}
        <div className="flex-1 flex flex-col items-center  lg:pr-32 sm:pr-0 md:pr-0 ">
          <Link to="/" className="mb-2">
            <img
              src={logo}
              alt="Logo"
              className="h-auto w-auto object-contain"
            />
          </Link>
          <p className="text-sm mb-2">Stay in touch with us</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src={youtube} alt="YouTube" className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right: Copyright */}
        <div className="flex-1 text-sm">
          <div className="space-y-2 text-sm">
            {/* <div className="w-full flex justify-center lg:justify-end relative lg:absolute bottom-50 lg:bottom-93 right-60 sm:text-center  ">
              <div className="w-44 h-10 bg-black text-white flex items-center justify-center">
                <p>LOCATE US</p>
              </div>
            </div> */}

            <h4 className="font-semibold">Our Corporate Office</h4>
            <p>
              No: 7, A2B Road, Adayar Rajpuram,
              <br /> T-Nagar, Chennai - 642002.
            </p>

            {/* Email with icon */}
            <div className="p-3 ">
              <p className="flex items-center gap-2 ">
                <img src={emil} alt="Email icon" className="h-4 w-4" />
                <a
                  href="mailto:sales@madeup.com"
                  className="hover:text-gray-400"
                >
                  sales@madeup.com
                </a>
              </p>

              {/* Phone with icon */}
              <p className="flex items-center gap-2  mt-2">
                <img src={phone} alt="Phone icon" className="h-4 w-4" />
                <a href="tel:04499999999" className="hover:text-gray-400">
                  044 9999 9999
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
