import { CiHeart, CiShoppingCart, CiSearch } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-col items-center border-b border-gray-300">
      {/* Top banner */}
      <div className='bg-black text-white w-full flex justify-center h-12 items-center'>
        <p className='text-gray-400 text-sm sm:text-base text-center'>
          Summer Sale For All Swim And Free Express Delivery - OFF 50%
          <span className='ml-2 text-white'>
            <a href="#" className='underline'>SHOP NOW</a>
          </span>
        </p>
      </div>

      {/* Main header */}
      <div className="bg-white h-20 w-full flex justify-between items-center max-w-7xl px-4 md:px-8">
        {/* Logo */}
        <button className="text-2xl font-semibold">Exclusive</button>

        {/* Navigation (Hidden on mobile, visible on larger screens) */}
        <div className="hidden md:flex">
          <ul className="flex gap-6">
            <li><button className="text-sm md:text-base">Home</button></li>
            <li><button className="text-sm md:text-base">Contact</button></li>
            <li><button className="text-sm md:text-base">About</button></li>
            <li><button className="text-sm md:text-base">Sign Up</button></li>
          </ul>
        </div>

        {/* Icons and search bar */}
        <div className="flex gap-4 items-center">
          {/* Search form (hidden on smaller screens) */}
          <form className="hidden md:flex items-center">
            <input
              className="bg-gray-200 text-sm h-8 px-4 rounded-s-sm focus:outline-none"
              type="text" placeholder="What are you looking for?" />
            <button type="submit" className="bg-gray-200 h-8 rounded-e-sm pr-2">
              <CiSearch className="text-xl" />
            </button>
          </form>

          {/* Icons for heart, cart, and profile */}
          <div className="flex gap-4">
            <button>
              <CiHeart className="text-xl sm:text-2xl" />
            </button>
            <button>
              <CiShoppingCart className="text-xl sm:text-2xl" />
            </button>
            <button>
              <BsPersonFill className="text-xl sm:text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation (visible on mobile screens) */}
      <div className="flex w-full justify-center py-2 md:hidden">
        <ul className="flex gap-4 text-sm">
          <li><button>Home</button></li>
          <li><button>Contact</button></li>
          <li><button>About</button></li>
          <li><button>Sign Up</button></li>
        </ul>
      </div>

      {/* Mobile search bar (visible on mobile screens) */}
      <div className="w-full px-4 mt-2 md:hidden">
        <form className="flex items-center">
          <input
            className="bg-gray-200 text-sm h-8 w-full px-4 rounded-s-sm focus:outline-none"
            type="text" placeholder="What are you looking for?" />
          <button type="submit" className="bg-gray-200 h-8 rounded-e-sm pr-2">
            <CiSearch className="text-xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
