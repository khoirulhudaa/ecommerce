import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaPen, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BgProfile, LogoProfile, Product1 } from '../../assets';
import { Button } from '../../component';
import { Footer, Navbar } from '../../layout';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const itemsPerPage = 1; // Jumlah item yang ditampilkan per halaman
const maxPagesToShow = 3; // Jumlah angka halaman yang ditampilkan di pagination

const ProfileShop = () => {

  const [editActive, setEditActive] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  

  const data = [
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
    {
      "nama": "huda"
    },
  ]

  // Menghitung jumlah halaman berdasarkan jumlah data
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Mengambil data yang sesuai dengan halaman saat ini
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Fungsi untuk berpindah ke halaman lain
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Menghasilkan array angka halaman yang akan ditampilkan di pagination
  const getPageNumbers = () => {
    const currentPageIndex = currentPage - 1;
    const halfMaxPages = Math.floor(maxPagesToShow / 2);

    let startPageIndex = currentPageIndex - halfMaxPages;
    let endPageIndex = currentPageIndex + halfMaxPages;

    if (startPageIndex < 0) {
      startPageIndex = 0;
      endPageIndex = maxPagesToShow - 1;
    }

    if (endPageIndex >= totalPages) {
      endPageIndex = totalPages - 1;
      startPageIndex = totalPages - maxPagesToShow;
    }

    return Array.from(
      { length: endPageIndex - startPageIndex + 1 },
      (_, index) => startPageIndex + index + 1
    );
  };

  const handleEditImage = () => {
    setEditActive(!editActive)
  }

  return (
    <>
      <Navbar /> 

        <section className='w-screen h-max rounded-lg overflow-hidden'>
            <div className='relative rounded-lg w-full overflow-hidden bg-slate-100 h-[420px] mb-7'>
            <Link to='/'>
                <div className='absolute left-[30px] top-7 z-[4] rounded-full flex bg-white items-center justify-center cursor-pointer active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <div className='absolute right-12 bg-white top-3 z-[4] w-max px-4 mx-auto border-2 my-4 justify-center border-slate-300 rounded-full flex text-blue-500 items-center w-[40px] h-[42px]      '>
                <p>746 Followers</p>
            </div>
            <div className='absolute bottom-6 right-12 flex items-center z-[4]'>
                <div onClick={() => handleEditImage()} className='rounded-full flex bg-white items-center justify-center cursor-pointer active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaPen size={14} />
                </div>
                <div className={`${editActive ? "scale-[1] bottom-[50px] right-[40px]" : "scale-[0] bottom-[-10px] right-[-20px]"} rounded-lg duration-200 ease bg-white absolute w-[180px] bg-white cursor-pointer overflow-hidden shadow-md h-[80px]`}>
                    <div className='w-full text-slate-500 text-[16px] active:scale-[0.98] h-[50%] border-b border-slate-300 hover:bg-slate-200 hover:text-slate-500 flex items-center pl-3 cursor-pointer'>
                        Edit Background
                    </div>
                    <div className='w-full text-slate-500 text-[16px] active:scale-[0.98] h-[50%] hover:bg-slate-200 hover:text-slate-500 cursor-pointer flex items-center pl-3'>
                        Edit Foto 
                    </div>
                </div>
            </div>
                <img src={BgProfile} alt="bgProfile" className='hover:scale-[110%] ease hover:brightness-[90%] duration-300 w-full mx-auto relative h-full object-cover' />
            </div>
            <div className='relative mx-auto bottom-[90px] z-[2] w-[110px] h-[110px] overflow-hidden rounded-full mx-auto shadow-lg order-2 border-slate-200 cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                <img src={LogoProfile} alt="fotoProfile" className='object-contain' />
            </div>

            <div className='relative w-full mt-[-60px] h-max px-[50px] pb-[60px] rounded-lg overflow-hidden'>
                <h2 className='relative text-center font-bold text-[26px]'>Rahman aditya darussalam</h2>
                <div className='relative z-[4] w-[120px] px-3 mx-auto border-2 my-4 justify-center border-slate-300 rounded-full flex text-slate-500 items-center cursor-pointer active:scale-[0.99] w-[40px] h-[42px] hover:brightness-[90%]'>
                    <p className='mr-3'>Follow</p>
                    <FaPlus size={14} />
                </div>
                <p className='text-slate-500 text-[15px] text-center relative my-4'>Belanja sesuai kebutuhan bukan keinginan</p>
                <div className='w-full flex h-max'>
                    <div className='w-[50%] bg-white px-6 pb-6 mt-[50px] h-max'>
                        <div className='relative w-full mr-[30px] h-max rounded-lg bg-white border border-slate-300 shadow-lg'>
                            <Tabs>
                                <TabList className='flex items-center justify-between'>
                                    <Tab className='w-[50%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6 border-b-2 text-blue-500 border-b-blue-500 border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Profile</Tab>
                                    <Tab className='w-[50%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6  border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Statistic</Tab>
                                </TabList>
                                <div className='w-full h-max overflow-hidden relative'>
                                    <TabPanel className='w-full h-max p-[20px] relative top-0 left-0'>
                                        <div className='w-full h-max flex'>
                                            <div className='w-1/2 h-max flex flex-col justify-start'>
                                                <div className='w-full h-max py-1 mt-6 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Email</p>
                                                    <p className='text-slate-500 text-[15px]'>darussalam@gmail.com</p>
                                                </div>
                                                <div className='w-full h-max py-1 mt-10 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Telephone</p>
                                                    <p className='text-slate-500 text-[15px]'>089126172612</p>
                                                </div>
                                            </div>
                                            <div className='w-1/2 h-max flex flex-col justify-start'>
                                                <div className='w-full h-max py-1 mt-5 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Gender seller</p>
                                                    <p className='text-slate-500 text-[15px]'>Male</p>
                                                </div>
                                                <div className='w-full h-max py-1 mt-6 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Post code</p>
                                                    <p className='text-slate-500 text-[15px]'>45125</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-max py-1 px-[12px] mt-10 mb-16 rounded-lg'>
                                            <p className='mb-4 font-bold text-[18px]'>Address</p>
                                            <p className='w-[90%] text-slate-500 text-[15px]'>
                                                Jl. Cideng Jaya, blok. Sijaba, RT/16 RW/04, Kec. 
                                                Kedawung Kab. Cirebon, Ds. kertawinangun
                                            </p>
                                        </div>
                                        <div className='absolute bottom-0 left-0 w-full h-max py-3 px-5 bg-slate-100'>
                                            <small className='text-slate-500 text-[14px]'><b>Note :</b> Store data is managed by the shop owner</small>
                                        </div>
                                    </TabPanel>
                                    <TabPanel className='w-full h-max px-[20px] relative top-0 left-0'>
                                        <div className='w-full h-max flex mt-[-20px]'>
                                            <div className='w-1/2 h-max flex flex-col justify-start'>
                                                <div className='w-full h-max py-1 mt-6 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Followers</p>
                                                    <p className='text-slate-500 text-[15px]'>darussalam@gmail.com</p>
                                                </div>
                                                <div className='w-full h-max py-1 mt-10 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Sold Items</p>
                                                    <p className='text-slate-500 text-[15px]'>265 items</p>
                                                </div>
                                            </div>
                                            <div className='w-1/2 h-max flex flex-col justify-start'>
                                                <div className='w-full h-max py-1 mt-5 rounded-lg'>
                                                    <p className='mb-4 font-bold text-[18px]'>Working hours</p>
                                                    <p className='text-slate-500 mb-3 text-[15px]'>🕓 Senin (07:00 - 16:00)</p>
                                                    <p className='text-slate-500 mb-3 text-[15px]'>🕓 Senin (07:00 - 16:00)</p>
                                                    <p className='text-slate-500 mb-3 text-[15px]'>🕓 Senin (07:00 - 16:00)</p>
                                                    <p className='text-slate-500 mb-3 text-[15px]'>🕓 Senin (07:00 - 16:00)</p>
                                                    <p className='text-slate-500 mb-3 text-[15px]'>🕓 Senin (07:00 - 16:00)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full h-max py-1 px-[12px] mt-10 mb-16 rounded-lg'>
                                            <p className='mb-4 font-bold text-[18px]'>Description</p>
                                            <p className='w-[90%] text-slate-500 text-[15px]'>
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur, 
                                                quo enim odit cupiditate ducimus ipsum quibusdam hic distinctio veritatis, 
                                                delectus corporis labore odio sequi temporibus numquam cum maiores facilis quae.
                                            </p>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                    <div className='w-[50%] bg-white border-l border-l-slate-300 rounded-lg px-3 flex justify-between flex-wrap mt-[50px] flex h-max'>
                        <div className='w-full mx-2 rounded-md bg-blue-200 text-blue-500 pl-3 py-2 mb-5 border border-blue-500'>
                            Products by shop
                        </div>
                        <div className={`block w-[46%] border border-slate-300 mx-2 h-max rounded-lg shadow-sm mb-[24px] overflow-hidden`}>
                            <div className={`w-full h-[140px] flex items-center justify-center overflow-hidden`}>
                                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                            </div>
                            <div className={`w-full my-auto h-[90%] px-[20px] py-[20px]`}>
                                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                                <div className='w-max flex  items-center'>
                                <small className='text-slate-500 relative top-[1px]'>130 orders</small>
                                </div>
                                <Link to='/detail-product'>
                                <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`block w-[46%] border border-slate-300 mx-2 h-max rounded-lg shadow-sm mb-[24px] overflow-hidden`}>
                            <div className={`w-full h-[140px] flex items-center justify-center overflow-hidden`}>
                                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                            </div>
                            <div className={`w-full my-auto h-[90%] px-[20px] py-[20px]`}>
                                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                                <div className='w-max flex  items-center'>
                                <small className='text-slate-500 relative top-[1px]'>130 orders</small>
                                </div>
                                <Link to='/detail-product'>
                                <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`block w-[46%] border border-slate-300 mx-2 h-max rounded-lg shadow-sm mb-[24px] overflow-hidden`}>
                            <div className={`w-full h-[140px] flex items-center justify-center overflow-hidden`}>
                                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                            </div>
                            <div className={`w-full my-auto h-[90%] px-[20px] py-[20px]`}>
                                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                                <div className='w-max flex  items-center'>
                                <small className='text-slate-500 relative top-[1px]'>130 orders</small>
                                </div>
                                <Link to='/detail-product'>
                                <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                                </Link>
                            </div>
                        </div>
                        <div className={`block w-[46%] border border-slate-300 mx-2 h-max rounded-lg shadow-sm mb-[24px] overflow-hidden`}>
                            <div className={`w-full h-[140px] flex items-center justify-center overflow-hidden`}>
                                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                            </div>
                            <div className={`w-full my-auto h-[90%] px-[20px] py-[20px]`}>
                                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                                <div className='w-max flex  items-center'>
                                <small className='text-slate-500 relative top-[1px]'>130 orders</small>
                                </div>
                                <Link to='/detail-product'>
                                <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* Menampilkan navigasi pagination */}
        <div className="flex justify-end mr-[60px] mb-[70px]">
            <nav>
            <ul className="flex items-center">
                {/* Tombol First */}
                <li className={`${currentPage === 1 ? 'disabled' : ''}`}>
                <button
                    className="pagination-link"
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                </li>

                {/* Tombol Previous */}
                <li className={`${currentPage === 1 ? 'disabled' : ''}`}>
                <FaArrowLeft className="cursor-pointer mx-4"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1} 
                />
                </li>

                {/* Tombol Halaman */}
                {getPageNumbers().map((pageNumber) => (
                <li
                    key={pageNumber}
                    className={`w-[35px] flex items-center justify-center h-[35px] bg-slate-200 rounded-sm mx-[5px] cursor-pointer ${currentPage === pageNumber ? 'active' : ''}`}
                >
                    <button
                    className="pagination-link"
                    onClick={() => handlePageChange(pageNumber)}
                    >
                    {pageNumber}
                    </button>
                </li>
                ))}

                {/* Tombol Next */}
                <li className={`${currentPage === totalPages ? 'disabled' : ''}`}>
                <FaArrowRight className="cursor-pointer mx-4"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1} 
                />
                </li>

                {/* Tombol Last */}
                <li className={`${currentPage === totalPages ? 'disabled' : ''}`}>
                <button
                    className="pagination-link"
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                >
                    Last
                </button>
                </li>
            </ul>
            </nav>
        </div>

      <Footer /> 
    </>
  )
}

export default ProfileShop
