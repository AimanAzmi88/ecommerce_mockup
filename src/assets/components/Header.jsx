import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";


const Header = () => {
  return (
<div className="flex flex-col items-center border-b border-gray-300">
    <div className='bg-black text-white w-screen flex justify-center h-12 items-center'>
        <p className='text-gray-400'>
          Summer Sale For All Swim And Free Express Delivery - OFF 50% 
          <span className='ml-2 text-white'>
            <a href="#" className='underline'>SHOP NOW</a>
          </span>
        </p>
    </div>
    <div className="bg-white h-20 flex w-full max-w-7xl justify-between items-center">
      <button className="text-2xl font-semibold">Exclusive</button>
      <div>
        <ul className="flex gap-4">
          <li><button>Home</button></li>
          <li><button>Contact</button></li>
          <li><button>About</button></li>
          <li><button>Sign Up</button></li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <form className="flex items-center">
          <input 
          className="bg-gray-200 text-sm h-8 px-4 rounded-s-sm focus:outline-none"
          type="text" placeholder="What are you looking for?" />
          <button type="submit" className="bg-gray-200 h-8 rounded-e-sm pr-2"><CiSearch className="text-2xl" />
          </button>
        </form>
        <div className="flex gap-4">
          <button>
            <CiHeart className="text-2xl"/>
          </button>
          <button>
            <CiShoppingCart className="text-2xl" />
          </button>
          <button>
            <BsPersonFill className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
</div>
  );
}

export default Header;
