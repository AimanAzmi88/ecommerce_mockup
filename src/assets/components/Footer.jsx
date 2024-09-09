import { PiCopyrightLight, PiPaperPlaneRight } from "react-icons/pi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { RiLinkedinLine } from "react-icons/ri";
import qr from "/QrCode.png";
import AS from "/AppStore.png";
import GP from "/GooglePlay.png";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-black pt-20 mt-40 w-full">
      <div className="flex flex-wrap max-w-7xl w-full gap-0 justify-between px-4 lg:px-0 md:gap-8">
        
        {/* Subscribe Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 justify-start">
          <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
            Exclusive
          </h1>
          <button className="text-gray-300 pb-4 text-xl font-medium text-start">
            Subscribe
          </button>
          <p className="text-gray-300 pb-2 text-sm">Get 10% off your first order</p>
          <form action="" className="border border-gray-400 px-3 py-2 rounded flex">
            <input
              type="text"
              placeholder="Enter Your email"
              className="bg-black text-gray-300 focus:outline-none flex-grow text-sm"
            />
            <button className="text-gray-300">
              <PiPaperPlaneRight />
            </button>
          </form>
        </div>

        {/* Support Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-gray-300 pb-4 text-2xl font-semibold">Support</h1>
          <p className="text-gray-300 pb-2 text-sm">
            NO 2766 A, Ria Residential,
            <br />
            05050 Alor Setar
          </p>
          <p className="text-gray-300 pb-2 text-sm">aimanazmi@gmail.com</p>
          <p className="text-gray-300 text-sm">+60 132855625</p>
        </div>

        {/* Account Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 items-start">
          <h1 className="text-gray-300 pb-4 text-2xl font-semibold">Account</h1>
          <button className="text-gray-300 pb-2 text-sm">My Account</button>
          <button className="text-gray-300 pb-2 text-sm">Login / Register</button>
          <button className="text-gray-300 pb-2 text-sm">Cart</button>
          <button className="text-gray-300 pb-2 text-sm">Wishlist</button>
          <button className="text-gray-300 text-sm">Shop</button>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5 items-start">
          <h1 className="text-gray-300 pb-4 text-2xl font-semibold">Quick Link</h1>
          <button className="text-gray-300 pb-2 text-sm">Privacy Policy</button>
          <button className="text-gray-300 pb-2 text-sm">Terms of Use</button>
          <button className="text-gray-300 pb-2 text-sm">FAQ</button>
          <button className="text-gray-300 text-sm">Contact</button>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col w-full md:w-1/2 lg:w-1/5">
          <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
            Download App
          </h1>
          <p className="text-gray-400 pb-2 text-sm">
            Save $3 with App, New User Only
          </p>
          <div className="flex gap-1">
            <img src={qr} alt="QR Code" className="w-20 h-20" />
            <div className="flex flex-col">
              <button>
                <img src={GP} alt="Google Play" />
              </button>
              <button>
                <img src={AS} alt="App Store" />
              </button>
            </div>
          </div>
          <div className="flex justify-start gap-4 pt-4">
            <FaFacebookF className="text-gray-300" />
            <FiTwitter className="text-gray-300" />
            <FaInstagram className="text-gray-300" />
            <RiLinkedinLine className="text-gray-300" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="flex flex-col items-center text-center w-full mt-10">
        <div className="flex items-center gap-1">
          <PiCopyrightLight className="text-gray-300" />
          <p className="text-gray-400 text-sm">
            Copyright Mangebu 2024. All rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
