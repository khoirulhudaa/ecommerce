import React from 'react'
import { Logo } from '../../assets'
import { FaCartPlus, FaList, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Untuk seach products on filter

// const [size, setSize] = useState('');
// const [brand, setBrand] = useState('');
// const [shopId, setShopId] = useState('');

// const fetchData = async () => {
//   try {
//     const queryParams = new URLSearchParams();

//     if (size) {
//       queryParams.append('size', size);
//     }

//     if (brand) {
//       queryParams.append('brand', brand);
//     }

//     if (shopId) {
//       queryParams.append('shopId', shopId);
//     }

//     const url = `https://api.example.com/products?${queryParams.toString()}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     // Lakukan sesuatu dengan data yang diterima
//   } catch (error) {
//     console.error('Error saat mengambil data:', error);
//     // Tampilkan pesan error jika diperlukan
//   }
// };

type navbarProps = {
    type?: 'auth' | 'default'
}

const Navbar: React.FC<navbarProps> = ({type = 'default'}) => {

    const location = useLocation()

    switch (type) {
        case "auth":
            return (
                <div>
                
                </div>
            )
        default: 
            return  (
                <div className='w-screen h-[80px] bg-white shadow-md px-[50px] py-[16px] flex items-center justify-between'>
                    <Link to='/'>
                        <div className='flex cursor-pointer hover:brightness-[90%] items-center h-[40px] w-[20%]'>
                            <img src={Logo} alt='logo brand' className='w-[90px]' />
                            <h2 className='text-[20px] font-bold ml-2'>ElectShop</h2>
                        </div>
                    </Link>
                    <div className='flex items-center h-[50px] w-[60%]'>
                        <div className='w-full flex overflow-hidden item-center rounded-lg h-full border-2 border-blue-500'>
                            <input placeholder='Find the product you need...' className='w-[60%] border-0 outline-0 h-full bg-white text-[16px] px-3' />
                            <select name="catgory" className='flex px-2 cursor-pointer outline-0 border-l-2 bg-white border-l-blue-500 w-[20%]'>
                                <option value="Electronik">Electronic</option>
                                <option value="Catalog">Catalog</option>
                                <option value="Sperpate">Sperpate</option>
                            </select>
                            <div className='w-[20%] ml-2 h-full bg-blue-500 flex items-center justify-center cursor-pointer hover:brightness-[90%]'>
                                <p className='text-white font-bold text-[14px]'>Search</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-end items-center h-[40px] w-[20%]'>
                        <Link to='/profileUser'>
                            <div className='flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] mr-[50px]'>
                                <FaUser size={18} />
                                <small className='text-slate-400 mt-2 w-max'>Profile</small>
                            </div>
                        </Link>
                        <Link to='/buy/history'>
                            <div className='flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] mr-[20px]'>
                                <FaList size={18} />
                                <small className='text-slate-400 mt-2 w-max'>History</small>
                            </div>
                        </Link>
                        <Link to='/my-cart'>
                            <div className='flex flex-col items-center justify-center w-[40px] mt-2 rounded-full cursor-pointer hover:brightness-[90%] active:scale-[0.98] ml-[30px]'>
                                <FaCartPlus size={18} />
                                <small className='text-slate-400 mt-2 w-max'>My Cart</small>                            
                            </div>
                        </Link>
                    </div>
                </div>
            )
    }
}

export default Navbar
