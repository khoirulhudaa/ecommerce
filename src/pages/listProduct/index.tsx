import { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCartPlus, FaChevronRight, FaStar } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import { Block, Grid, Product1 } from '../../assets'
import { Question } from '../../component'
import { DropDown, Footer, Navbar } from '../../layout'

const itemsPerPage = 1; // Jumlah item yang ditampilkan per halaman
const maxPagesToShow = 3; // Jumlah angka halaman yang ditampilkan di pagination

const ListProduct = () => {
  const brandArray = ['Samsung', 'Realme', 'Readme', 'Poco', 'Iphone', 'Asus']
  const sizeArray = ['XXL', 'XL', 'X', 'L', 'S', 'M']
  const priceArray = ['Cheap to expensive', 'Expensive to chip']
  
  const location = useLocation()
  const [display, setDisplay] = useState('grid')
  const [showMenu, setShowMenu] = useState(true)
  const [rating] = useState(4)
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

  const handleMainMenu = () => {
    setShowMenu(!showMenu)
  }

  const RenderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starColor = i <= rating ? 'rgb(245, 228, 0)' : 'gray';

      stars.push(
        <FaStar
          key={i}
          style={{ color: starColor, fontSize: '16px', marginRight: '4px' }}
        />
      );
    }

    return (
      <div className='flex items-center'>
        {stars}
      </div>
    )
  }

  return (
    <>
      <Navbar />
      
      <section className='w-screen px-[60px] py-[20px] h-max flex'>
        <div className='w-full flex items-center py-[10px]'>
          <p className='flex items-center'><Link to='/' className='text-blue-500'>Home</Link> <FaChevronRight size={13} style={{fontSize: '10px', marginLeft: '6px', marginRight: '6px'}} /> <p className='text-slate-500'>{location.pathname.substring(1)}</p></p>
        </div>
      </section>

      <section className='w-full flex h-max px-[60px]'>
        <div className='w-[20%] h-max pb-[20px] px-[0px] border-t-slate-300'>
          <DropDown title='Brand products' listMenu={brandArray} />
          <DropDown title='Size products' listMenu={sizeArray} />
          <DropDown title='Price ranges' listMenu={priceArray} />
        </div>
        <div className={`w-[80%] overflow-y-auto transition-all duration-300 ease ${showMenu ? "h-100vh max-h-[100vh] opacity-100" : "h-auto max-h-[75px]"} px-[40px] pb-[20px]`}>

          <div className='w-full py-[14px] rounded-lg border-2 border-slate-300 bg-slate-100 mb-[20px] p-[12px] flex  justify-between items-center'>
            <p>12,911 items in <b>Mobile accessory</b></p>
            <div className='w-max flex items-center'>
              <div onClick={() => handleMainMenu()} className='w-[35px] rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <FaChevronRight size={14} style={{transition: "0.4s ease",transform: `rotate(${showMenu ? "90deg" : "0deg"})`}} />
              </div>
              <div onClick={() => setDisplay('bloack')} className='w-[35px] mx-2 rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <img src={Grid} alt="gridMode" className='w-[60%] opacity-[0.7]' />
              </div>
              <div onClick={() => setDisplay('grid')} className='w-[35px] rounded-lg border-2 border-slate-500 h-[35px] flex items-center justify-center cursor-pointer hover:brightness-[80%] duration-200'>
                <img src={Block} alt="blockMode" className='w-[50%] opacity-[0.7]' />
              </div>
            </div>
          </div>

          <div className='w-full flex flex-wrap justify-between h-max p-[20px] bg-slate-100 rounded-lg overflow-hidden'>
            {/* Card Versi Grid */}
            <div className={`${display === "grid" ? "flex w-full mr-0" : "block w-[31%] mx-2"} h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
              <div className={`${display === "grid" ? "w-[30%] min-h-max" : "w-full h-[200px]"} flex items-center justify-center overflow-hidden`}>
                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
              </div>
              <div className={`${display === "grid" ? "w-[70%]" : "w-full"} w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                <div className='w-max flex  items-center'>
                  <RenderStars /> 
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                </div>
                <p className={`${display === "grid" ? "block" : "hidden"} mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sunt distinctio accusantium temporibus cupiditate inventore facere 
                  a necessitatibus optio? Illum nisi praesentium corporis sunt 
                  repellat perferendis cum nostrum voluptatum sit ab?
                </p>
                <div className='flex items-center mt-4 w-max'>
                  <Link to='/detail-product'>
                    <p className='text-blue-500 font-bold text-[16px]'>View Details</p>
                  </Link>
                  <div className='w-[30px] ml-3 cursor-pointer hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                      <FaCartPlus />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${display === "grid" ? "flex w-full mr-0" : "block w-[31%] mx-2"} h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
              <div className={`${display === "grid" ? "w-[30%] min-h-max" : "w-full h-[200px]"} flex items-center justify-center overflow-hidden`}>
                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
              </div>
              <div className={`${display === "grid" ? "w-[70%]" : "w-full"} w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                <div className='w-max flex  items-center'>
                  <RenderStars /> 
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                </div>
                <p className={`${display === "grid" ? "block" : "hidden"} mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sunt distinctio accusantium temporibus cupiditate inventore facere 
                  a necessitatibus optio? Illum nisi praesentium corporis sunt 
                  repellat perferendis cum nostrum voluptatum sit ab?
                </p>
                <div className='flex items-center mt-4 w-max'>
                  <Link to='/detail-product'>
                    <p className='text-blue-500 font-bold text-[16px]'>View Details</p>
                  </Link>
                  <div className='w-[30px] ml-3 cursor-pointer hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                      <FaCartPlus />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${display === "grid" ? "flex w-full mr-0" : "block w-[31%] mx-2"} h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
              <div className={`${display === "grid" ? "w-[30%] min-h-max" : "w-full h-[200px]"} flex items-center justify-center overflow-hidden`}>
                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
              </div>
              <div className={`${display === "grid" ? "w-[70%]" : "w-full"} w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                <div className='w-max flex  items-center'>
                  <RenderStars /> 
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                </div>
                <p className={`${display === "grid" ? "block" : "hidden"} mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sunt distinctio accusantium temporibus cupiditate inventore facere 
                  a necessitatibus optio? Illum nisi praesentium corporis sunt 
                  repellat perferendis cum nostrum voluptatum sit ab?
                </p>
                <div className='flex items-center mt-4 w-max'>
                  <Link to='/detail-product'>
                    <p className='text-blue-500 font-bold text-[16px]'>View Details</p>
                  </Link>
                  <div className='w-[30px] ml-3 cursor-pointer hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                      <FaCartPlus />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${display === "grid" ? "flex w-full mr-0" : "block w-[31%] mx-2"} h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
              <div className={`${display === "grid" ? "w-[30%] min-h-max" : "w-full h-[200px]"} flex items-center justify-center overflow-hidden`}>
                <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
              </div>
              <div className={`${display === "grid" ? "w-[70%]" : "w-full"} w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                <div className='w-max flex  items-center'>
                  <RenderStars /> 
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                </div>
                <p className={`${display === "grid" ? "block" : "hidden"} mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Sunt distinctio accusantium temporibus cupiditate inventore facere 
                  a necessitatibus optio? Illum nisi praesentium corporis sunt 
                  repellat perferendis cum nostrum voluptatum sit ab?
                </p>
                <div className='flex items-center mt-4 w-max'>
                  <Link to='/detail-product'>
                    <p className='text-blue-500 font-bold text-[16px]'>View Details</p>
                  </Link>
                  <div className='w-[30px] ml-3 cursor-pointer hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                      <FaCartPlus />
                  </div>
                </div>
              </div>
            </div>
          
          </div>
        </div>
      </section>

      {/* Menampilkan navigasi pagination */}
      <div className="flex justify-end mr-[60px] mt-[40px] mb-[70px]">
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

      {/* Component Question */}
      <Question />
      {/* End component Question */}
      
      <Footer />
    </>
  )
}

export default ListProduct
