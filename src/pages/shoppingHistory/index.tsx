import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../layout'
import { FaArrowLeft, FaCheckCircle, FaStore, FaTrash } from 'react-icons/fa'
import { Flag, Product1 } from '../../assets'
import { Button } from '../../component'

const ShoppingHistory = () => {
  return (
    <>
      <Navbar /> 

      <section className='w-screen px-[60px] py-[20px] h-max flex'>
          <div className='w-full flex items-center py-[10px]'>
          <Link to='/my-cart'>
              <div className='rounded-full mr-3 ml-[-10px] bg-blue-500 text-white border border-slate-300 cursor-pointer active:scale-[0.98] hover:brightness-[90%] flex items-center justify-center p-1 w-[30px] h-[30px]'>
                  <FaArrowLeft size={14} />
              </div>
          </Link>
          <h2 className='flex text-[20px] font-bold items-center'>History</h2>
          </div>
      </section>

      <section className='w-screen h-max flex px-[50px] pb-[40px]'>
          <div className='w-[70%] mr-6 px-8 py-2 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
            <div className={`flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                <div className={`w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                    <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                </div>
                <div className={`relative w-full w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                  <div className='absolute rounded-full bg-blue-500 right-5 top-5 w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      3x
                  </div>
                  <Link to='/profileShop'>
                    <div className='absolute rounded-full border border-green-500 right-[14%] bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-green-500 shadow-lg'>
                        <FaStore size={14} />
                    </div>
                  </Link>
                  <div className='absolute rounded-full bg-red-500 right-5 bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      <FaTrash size={14} />
                  </div>
                  <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                  <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                  <div className='w-max flex  items-center'>
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                  </div>
                </div>
            </div>
            
            <div className={`flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                <div className={`w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                    <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                </div>
                <div className={`relative w-full w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                  <div className='absolute rounded-full bg-blue-500 right-5 top-5 w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      3x
                  </div>
                  <Link to='/profileShop'>
                    <div className='absolute rounded-full border border-green-500 right-[14%] bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-green-500 shadow-lg'>
                        <FaStore size={14} />
                    </div>
                  </Link>
                  <div className='absolute rounded-full bg-red-500 right-5 bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      <FaTrash size={14} />
                  </div>
                  <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                  <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                  <div className='w-max flex  items-center'>
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                  </div>
                </div>
            </div>

            <div className={`flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                <div className={`w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                    <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                </div>
                <div className={`relative w-full w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                  <div className='absolute rounded-full bg-blue-500 right-5 top-5 w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      3x
                  </div>
                  <Link to='/profileShop'>
                    <div className='absolute rounded-full border border-green-500 right-[14%] bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-green-500 shadow-lg'>
                        <FaStore size={14} />
                    </div>
                  </Link>
                  <div className='absolute rounded-full bg-red-500 right-5 bottom-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                      <FaTrash size={14} />
                  </div>
                  <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                  <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                  <div className='w-max flex  items-center'>
                  <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                  </div>
                </div>
            </div>

          </div>
          <div className='w-[30%] rounded-lg bg-slate-100 overflow-hidden shadow-lg pb-2 pt-2 h-max'>
            <div className='w-full p-4 h-max rounded-lg overflow-hidden'>
                <div className='w-full border-b border-slate-300 h-max w-full mb-4 pb-4 flex items-center'>
                    <div className='w-[50px] h-[50px] rounded-lg overflow-hidden shadow-lg bg-[red]'>

                    </div>
                    <div className='pl-3'>
                        <h3 className='text-black font-bold'>Rahman aditya darussalam</h3>
                        <small className='text-slate-500 text-[12px]'>ID Consumer: 2637DSG</small>
                    </div>
                </div>
                <div className='flex items-center mb-5'>
                    <img src={Flag} alt="flag" className='w-[20px] h-auto mr-4' />
                    <p>Germany</p>
                </div>
                <div className='flex items-center'>
                    <FaCheckCircle size={18} style={{marginRight: '19px'}} />
                    <p>Verified Consumer</p>
                </div>
                <Link to='/profileUser'>
                    <Button status='primary' text='View profile' style='mt-8 w-full' />
                </Link>
            </div>
          </div>
      </section>

      <Footer /> 
    </>
  )
}

export default ShoppingHistory
