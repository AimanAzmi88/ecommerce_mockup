import Item1 from '/Item1.png'
import Item2 from '/Item2.png'
import Item3 from '/Item3.png'
import Item4 from '/Item4.png'
import Item5 from '/Item5.png'
import Item6 from '/Item6.png'
import Item7 from '/Item7.png'
import Item8 from '/Item8.png'


import { HiOutlineTrash } from "react-icons/hi2";
import { TiStarFullOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";


import Header from '../components/Header';
import Footer from '../components/Footer'

export const Home = () => {

  const products = [
    {
      id: 1,
      name: "Gucci duffle bag",
      price: 1160,
      discountedPrice: 960,
      discount: "-35%",
      image: Item1,
    },
    {
      id: 2,
      name: "RGB liquid CPU Cooler",
      price: "",
      discountedPrice: 1960,
      discount: "",
      image: Item2,
    },
    {
      id: 3,
      name: "GP 11 Shooter USB Gamepad",
      price: "",
      discountedPrice: 550,
      discount: "",
      image: Item3,
    },
    {
      id: 4,
      name: "Quilted Satin Jacket",
      price: "",
      discountedPrice: 750,
      discount: "",
      image: Item4,
    },
  ];

  const items = [
    {
      id: 1,
      name: "ASUS FHD Gaming Laptop",
      price: 1160,
      discountedPrice: 960,
      discount: "-35%",
      image: Item5,
    },
    {
      id: 2,
      name: "IPS LCD Gaming Monitor",
      price: "",
      discountedPrice: 1160,
      discount: "",
      image: Item6,
    },
    {
      id: 3,
      name: "HAVIT HV_G92 Gamepad",
      price: "",
      discountedPrice: 560,
      discount: "NEW",
      image: Item7,
    },
    {
      id: 4,
      name: "AK-90 Wired Keyboard",
      price: "",
      discountedPrice: 750,
      discount: "",
      image: Item8,
    },
  ];

  return (
    <div className='flex flex-col justify-center'>
      <Header />
      <div className='w-full max-w-7xl flex mx-auto flex-col mt-16 gap-12 px-4 md:px-0'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg md:text-xl font-semibold'>Wishlist (4)</h1>
          <button className='text-sm md:text-lg border border-gray-400 px-4 md:px-8 py-2 md:py-3 rounded shadow-sm'>Move All to Bag</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map((product) => (
            <div key={product.id} className="w-full">
              <div className="bg-gray-300 rounded flex items-center flex-col h-64 justify-between">
                <div className="flex justify-between w-full px-2 pt-2">
                  <p
                    className={`rounded-md text-white px-2.5 mb-1 ${product.discount ? 'bg-red-500' : ''}`}
                  >
                    {product.discount}
                  </p>
                  <button className="bg-gray-200 flex items-center px-2 py-2 rounded-full">
                    <HiOutlineTrash className="text-xl" />
                  </button>
                </div>
                <img src={product.image} alt={product.name} className="h-32 object-cover" />
                <button className="text-white bg-black text-center w-full rounded-b py-1.5">Add To Cart</button>
              </div>
              <div className="pt-4">
                <p className="font-semibold">{product.name}</p>
                <div className="flex gap-4">
                  <p className="text-red-400">${product.discountedPrice}</p>
                  <s className="text-gray-400 font-str">
                    {product.price ? `$${product.price}` : ''}
                  </s>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full max-w-7xl flex mx-auto flex-col mt-16 gap-12 px-4 md:px-0'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <div className='bg-red-500 px-2 py-5 rounded'></div>
            <h1 className='text-lg md:text-xl font-semibold'>Just For You</h1>
          </div>
          <button className='text-sm md:text-lg border border-gray-400 px-4 md:px-8 py-2 md:py-3 rounded shadow-sm'>See All</button>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {items.map((item) => (
            <div key={item.id} className="w-full">
              <div className="bg-gray-300 rounded flex items-center flex-col h-64 justify-between">
                <div className="flex justify-between w-full px-2 pt-2">
                  <p className={`rounded-md text-white px-2.5 mb-1 
                    ${item.discount === 'NEW' ? 'bg-green-500' : item.discount ? 'bg-red-500' : ''
                    }`}>
                    {item.discount}
                  </p>
                  <button className="bg-gray-200 flex items-center px-2 py-2 rounded-full">
                    <FiEye className="text-xl" />
                  </button>
                </div>
                <img src={item.image} alt={item.name} className="h-32 object-cover" />
                <button className="text-white bg-black text-center w-full rounded-b py-1.5">Add To Cart</button>
              </div>
              <div className="pt-4">
                <p className="font-semibold">{item.name}</p>
                <div className="flex gap-4">
                  <p className="text-red-400">${item.discountedPrice}</p>
                  <s className="text-gray-400 font-str">
                    {item.price ? `$${item.price}` : ''}
                  </s>
                </div>
              </div>
              <div className='flex items-center'>
                <TiStarFullOutline className='text-yellow-400' />
                <TiStarFullOutline className='text-yellow-400' />
                <TiStarFullOutline className='text-yellow-400' />
                <TiStarFullOutline className='text-yellow-400' />
                <TiStarFullOutline className='text-yellow-400' />
                <p className='text-gray-500 pl-2'>(65)</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
