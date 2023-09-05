import toRupiah from '@develoka/angka-rupiah-js';
import { FaCheckCircle, FaChevronRight, FaMinus, FaPlus, FaStar, FaStore } from 'react-icons/fa'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom'
import { Footer, Navbar } from '../../layout'
import { Flag, Product2, Product3 } from '../../assets'
import { useState } from 'react'
import { Button } from '../../component';

const DetailProduct = () => {

const [rating] = useState(4)

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

        <section className='w-screen h-max px-[50px] py-[0px]'>
            <div className='w-full flex px-[20px] py-[40px] bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300'>
                <div className='w-[30%] border-r border-r-slate-300 min-h-[300px] flex items-center justify-center'>
                    <img src={Product2} alt="fotoProduct" className='w-[90%] h-auto' />
                </div>
                <div className='w-[60%] h-max px-[30px] pb-[20px]'>
                    <h4 className='text-green-500 w-max mb-5 font-bold text-[16px]'>In Stock</h4>
                    <h2 className='text-black font-bold text-[22px] mb-5 w-[80%]'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
                    <div className='w-max flex  items-center'>
                        <RenderStars /> 
                        <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                        <Link to='/profileShop'>
                            <div className='rounded-full border border-green-500 ml-7 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[35px] h-[35px] flex items-center justify-center text-green-500 shadow-lg'>
                                <FaStore size={14} />
                            </div>
                        </Link>
                    </div>
                    <div className='w-max p-[10px] text-red-500 mt-5 bg-red-100 rounded-lg'>
                        <h3>{toRupiah(50000, {replaceZeroDecimals: false})}</h3>
                    </div>
                    <div className='w-full lg:w-[60%] mt-5'>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Price product</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>Fixed</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Brand productr</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>Samsung</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Size product</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>XL</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Condition</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>New Product</p>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] border-l border-l-slate-300 px-[30px] pb-[20px]'>
                    <div className='w-full border border-slate-300 p-4 h-max rounded-lg overflow-hidden'>
                        <div className='w-full border-b border-slate-300 h-max w-full mb-4 pb-4 flex items-center'>
                            <div className='w-[50px] h-[50px] rounded-lg overflow-hidden shadow-lg bg-[red]'>

                            </div>
                            <div className='pl-3'>
                                <h3 className='text-black font-bold'>Nama toko</h3>
                                <small className='text-slate-500 text-[12px]'>ID Toko: DFDF343</small>
                            </div>
                        </div>
                        <div className='flex items-center mb-5'>
                            <img src={Flag} alt="flag" className='w-[20px] h-auto mr-4' />
                            <p>Germany</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheckCircle size={18} style={{marginRight: '19px'}} />
                            <p>Verified Seller</p>
                        </div>
                        <Link to='/'>
                            <Button status='primary' text='Add to cart +' style='mt-8 mb-4 w-full' />
                        </Link>
                        <Link to='/profileShop'>
                            <Button type='outline' text='Seller Profile' style='w-full' />
                        </Link>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-screen h-max px-[30px] mt-[30px]'>
            <div className='flex h-max p-[20px] overflow-hidden'>
               <div className='relative w-[70%] mr-[30px] h-max rounded-lg bg-white border border-slate-300 shadow-lg'>
                    <Tabs>
                        <TabList className='flex items-center justify-between'>
                            <Tab className='w-[33.33%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6 border-b-2 text-blue-500 border-b-blue-500 border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Description</Tab>
                            <Tab className='w-[33.33%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6  border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Title 2</Tab>
                            <Tab className='w-[33.33%] h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6  border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Title 3</Tab>
                        </TabList>
                        <div className='w-full min-h-[400px] h-max overflow-hidden relative'>
                            <TabPanel className='w-full h-max p-[20px] relative top-0 left-0'>
                                <p className='text-slate-500 text-[15px] w-[96%]'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut 
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                                    esse cillum dolore eu fugiat nulla pariatur.
                                </p> 
                                <h3 className='text-[14px] mt-6 mb-3 font-bold'>Specification table :</h3>
                                <table className='relative h-max mt-[20px] mb-[50px]' style={{border: '1px solid gray'}}>
                                    <tr className='border border-slate-400'>
                                        <td className='px-3 py-2 border-r border-r-slate-400 text-center text-[14px]'>Brand</td>
                                        <td className='px-3 py-2 text-center text-[14px]'>Samsung</td>
                                    </tr>
                                    <tr className='border border-slate-400'>
                                        <td className='px-3 py-2 border-r border-r-slate-400 text-center text-[14px]'>Size</td>
                                        <td className='px-3 py-2 text-center text-[14px]'>XL</td>
                                    </tr>
                                    <tr className='border border-slate-400'>
                                        <td className='px-3 py-2 border-r border-r-slate-400 text-center text-[14px]'>Condition</td>
                                        <td className='px-3 py-2 text-center text-[14px]'>New Product</td>
                                    </tr>
                                </table>
                            </TabPanel>
                            <div className='absolute bottom-0 left-0 w-full h-max py-3 px-5 bg-slate-100'>
                                <small className='text-slate-500 text-[14px]'><b>Note :</b> The system has not been able to return purchases!</small>
                            </div>
                            <TabPanel className='w-full h-max p-[20px] absolute top-0 left-0'>
                                <p>Content for Tab 2</p>
                            </TabPanel>
                            <TabPanel className='w-full h-max p-[20px] absolute top-0 left-0'>
                                <p>Content for Tab 3</p>
                            </TabPanel>
                        </div>
                    </Tabs>
               </div>
               <div className='w-[30%] bg-white rounded-lg overflow-hidden shadow-lg border border-slate-300'>
                    <h3 className='ml-5 mt-4 mb-4 font-bold text-[18px]'>You may like</h3>
                    <div className='w-[90%] mx-auto min-h-[100px] max-h-[150px] items-center hover:brightness-[90%] cursor-pointer bg-white mb-4 px-2 flex rounded-lg overflow-hidden'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center border border-slate-300 rounded-lg relative overflow-hidden'>
                            <img src={Product3} alt="fotoProduct" className='w-full h-auto' />
                        </div>
                        <div className='w-[80%] h-full p-4'>
                            <h3 className='font-bold text-black mb-3'>Men Blazers Sets Elegant Formal</h3>
                            <p className='text-slate-500 text-[14px]'>{toRupiah(50000, {replaceZeroDecimals: false})}</p>
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto min-h-[100px] max-h-[150px] items-center hover:brightness-[90%] cursor-pointer bg-white mb-4 px-2 flex rounded-lg overflow-hidden'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center border border-slate-300 rounded-lg relative overflow-hidden'>
                            <img src={Product3} alt="fotoProduct" className='w-full h-auto' />
                        </div>
                        <div className='w-[80%] h-full p-4'>
                            <h3 className='font-bold text-black mb-3'>Men Blazers Sets Elegant Formal</h3>
                            <p className='text-slate-500 text-[14px]'>{toRupiah(50000, {replaceZeroDecimals: false})}</p>
                        </div>
                    </div>
                    <div className='w-[90%] mx-auto min-h-[100px] max-h-[150px] items-center hover:brightness-[90%] cursor-pointer bg-white mb-4 px-2 flex rounded-lg overflow-hidden'>
                        <div className='w-[20%] h-[100%] flex items-center justify-center border border-slate-300 rounded-lg relative overflow-hidden'>
                            <img src={Product3} alt="fotoProduct" className='w-full h-auto' />
                        </div>
                        <div className='w-[80%] h-full p-4'>
                            <h3 className='font-bold text-black mb-3'>Men Blazers Sets Elegant Formal</h3>
                            <p className='text-slate-500 text-[14px]'>{toRupiah(50000, {replaceZeroDecimals: false})}</p>
                        </div>
                    </div>
               </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default DetailProduct
