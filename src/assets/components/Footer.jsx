import { PiCopyrightLight } from "react-icons/pi";
import { PiPaperPlaneRight } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import qr from "/QrCode.png"
import AS from "/AppStore.png"
import GP from "/GooglePlay.png"

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-black pt-20 mt-40 w-full ">
        <div className="flex max-w-7xl w-full justify-between">
            <div>
                <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
                    Exclusive
                </h1>
                <button className="text-gray-300 pb-4 text-xl font-medium">
                    Subscribe
                </button>
                <p className="text-gray-300 pb-2">Get 10% off your first order</p>
                    <form action="" className="border border-gray-400 px-3 py-2 rounded flex">
                        <input type="text" placeholder="Enter Your email" className="bg-black text-gray-300 focus:outline-none"/>
                        <button className="text-gray-300"><PiPaperPlaneRight /></button>
                    </form>
            </div>
            <div>
                <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
                    Support
                </h1>
                <p className="text-gray-300 pb-2">
                    NO 2766 A, Ria Residential,<br />
                    05050 Alor Setar
                </p>
                <p className="text-gray-300 pb-2">
                    aimanazmi@gmail.com
                </p>
                <p className="text-gray-300">
                    +60 132855625
                </p>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
                    Account
                </h1>
                <button className="text-gray-300 pb-2">
                    My Account
                </button>
                <button className="text-gray-300 pb-2">
                    Login / Register
                </button>
                <button className="text-gray-300 pb-2">
                    Cart
                </button>
                <button className="text-gray-300 pb-2">
                    Wishlist
                </button>
                <button className="text-gray-300">
                    Shop
                </button>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
                    Quick Link
                </h1>
                <button className="text-gray-300 pb-2">
                    Privacy Policy
                </button>
                <button className="text-gray-300 pb-2">
                    Terms of Use
                </button>
                <button className="text-gray-300 pb-2">
                    FAQ
                </button>
                <button className="text-gray-300">
                    Contact
                </button>
            </div>
            <div>
                <h1 className="text-gray-300 pb-4 text-2xl font-semibold">
                    Download App
                </h1>
                <p className="text-gray-400 pb-2">
                    Save $3 with App, New User Only
                </p>
                <div className="flex gap-1">
                    <img src={qr} alt=""/>
                    <div className="flex  flex-col"> 
                        <button>
                            <img src={GP} alt="" />
                        </button>
                        <button>
                            <img src={AS} alt="" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-between mr-4 pt-2">
                    <FaFacebookF className="text-gray-300"/>
                    <FiTwitter className="text-gray-300"/>
                    <FaInstagram className="text-gray-300"/>
                    <RiLinkedinLine className="text-gray-300"/>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-1 pt-16 pb-2">
            <PiCopyrightLight className="text-gray-300 text" /> 
            <p className="text-gray-400 text-lg">Copyright Mangebu 2024. All right Reserved </p>
        </div>
    </div>

  )
}

export default Footer