import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BNI, BRI, Dana, Mandiri, Product1, Product3 } from '../../assets';
import { Button } from '../../component';
import { Footer, Navbar } from '../../layout';
import ToRupiah from '../../helpers/toRupiah';

const MyCart = () => {

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
            <h2 className='flex text-[20px] font-bold items-center'>Checkout</h2>
            </div>
        </section>

        <form>
            <section className='w-screen h-max flex px-[50px] pb-[40px]'>
                <div className='w-[70%] mr-6 px-8 py-10 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
                    <div className='w-full flex justify-between mb-8 items-center'>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Your name</label>
                            <br />
                            <input placeholder='What your name ?' className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                        </div>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Your email</label>
                            <br />
                            <input type='email' placeholder='Email address' className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                        </div>
                    </div>
                    <div className='w-full flex item-center justify-between'>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Number telephone</label>
                            <br />
                            <input placeholder='089125xxxxxxx' className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                        </div>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Province</label>
                            <br />
                            <select className='w-full h-max bg-white px-3 py-2 rounded-md mt-3 border-0 outline-0'>
                                <option value=''>Select Regency</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className='w-full flex mt-7 item-center justify-between'>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Subdistrict</label>
                            <br />
                            <select className='w-full bg-white h-max px-3 py-2 rounded-md mt-3 border-0 outline-0'>
                                <option value=''>Select Regency</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                        </div>
                        <div className='w-[48%] h-max block'>
                            <label className='mb-4'>Post code</label>
                            <br />
                            <input placeholder='Post code' className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col'>
                        <div className='w-full mt-7 h-max block'>
                            <label className='mb-4'>Your address</label>
                            <br />
                            <textarea placeholder='Your location' className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' rows={5} />
                        </div>
                    </div>
                </div>
                <div className='w-[30%] rounded-lg bg-slate-100 overflow-hidden shadow-lg pb-6 h-max'>
                    <div className='w-full border-b border-b-slate-400 pb-3'>
                        <div className='w-full mb-5 py-[14px] flex items-center h-max px-3 bg-blue-100'>
                            <h2 className='text-blue-500'>Payment method :</h2>
                        </div>
                        <div className='w-full px-4 py-3'>
                            <div className='flex item-center w-full mb-6 h-max'>
                                <div className='rounded-full w-[25px] h-[25px] border-2 flex items-center justify-center border-blue-500 cursor-pointer'>
                                    <div className='bg-blue-500 rounded-full w-[65%] h-[65%]'>
                                    </div>
                                </div>
                                <img src={BRI} alt='logoBri' className='w-[60px] h-[30px] relative top-[-3px] ml-5' />
                            </div>
                        
                            <div className='flex item-center w-full h-max mb-6'>
                                <div className='rounded-full w-[25px] h-[25px] border-2 flex items-center justify-center border-blue-500 cursor-pointer'>
                                </div>
                                <img src={BNI} alt='logoBni' className='w-[60px] h-[20px] relative top-1 ml-5' />
                            </div>
                        
                            <div className='flex item-center w-full h-max mb-4'>
                                <div className='rounded-full w-[25px] h-[25px] border-2 flex items-center justify-center border-blue-500 cursor-pointer'>
                                </div>
                                <img src={Mandiri} alt='logoMandiri' className='w-[60px] h-[36px] relative bottom-2 ml-5' />
                            </div>

                            <div className='flex item-center w-full h-max mb-3'>
                                <div className='rounded-full w-[25px] h-[25px] border-2 flex items-center justify-center border-blue-500 cursor-pointer'>
                                </div>
                                <img src={Dana} alt='logoDana' className='w-[50px] h-[33px] relative bottom-1 ml-3' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full px-[20px] flex items-center h-max py-[16px] justify-center justify-between'>
                        <h3 className='text-[16px] font-bold text-black'>Total : </h3>
                        <h3 className='text-[18px] font-bold text-black'>{ToRupiah(50000)}</h3>
                    </div>
                    <Button handleClick={() => null} status='primary' text='Pay now' style='mt-4 w-[90%] mx-auto' />
                </div>
            </section>
        </form>

        <Footer /> 
    </>
  )
}

export default MyCart
