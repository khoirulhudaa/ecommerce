import { FaArrowLeft, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Product1 } from '../../assets';
import { Button } from '../../component';
import ToRupiah from '../../helpers/toRupiah';
import { Footer, Navbar } from '../../layout';
import store from '../../redux/store';

const MyCart = () => {

    const cart = store.getState().cartReducer.dataOrders
    console.log(cart)

    const totalPrice = () => {
        return cart.reduce((total, product) => total + (product?.product_price || 0), 0)
    }

  return (
    <>
        <Navbar type='auth' />

        <section className='w-screen px-[60px] py-[20px] h-max flex'>
            <div className='w-full flex items-center py-[10px]'>
            <Link to='/'>
                <div className='rounded-full mr-3 ml-[-10px] bg-blue-500 text-white border border-slate-300 cursor-pointer active:scale-[0.98] hover:brightness-[90%] flex items-center justify-center p-1 w-[30px] h-[30px]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <h2 className='flex text-[20px] font-bold items-center'>My chart ({cart.length})</h2>
            </div>
        </section>

        <section className='w-screen h-max flex px-[50px] pb-[40px]'>
            <div className='w-[70%] mr-6 p-4 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
            {
                cart && cart.map((product, index) => (
                    <div key={index} className='w-full h-[200px] bg-white mb-[20px] p-4 flex'>
                        <div className='overflow-hidden rounded-lg w-[20%] h-[100%] flex items-center justify-center'>
                            <img src={`https://huda.descode.id/uploads/${product && product?.product_image}`} alt="fotoProduct" className='w-[80%] h-auto' />
                        </div>
                        <div className='w-[80%] flex px-5'>
                            <div className='w-[80%]'>
                                <h3 className='text-black font-bold mb-5 text-[20px] w-[92%]'>{product && product?.product_name}</h3>
                                <p className='text-[14px] text-slate-500 w-[96%]'>Size: {product && product?.product_size}, Color: {product && product?.product_color},  Type: {product && product?.product_type}</p>
                                <div className='w-max flex items-center mt-4 h-max'>
                                    <div className='rounded-full bg-red-500 mt-5 hover:brightness-[90%] active:scale-[0.98] cursor-pointer w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                                        <FaTrash size={14} />
                                    </div>  
                                    <div className='w-max flex items-center ml-6 mt-5 h-max'>
                                        <div className='w-[30px] bg-slate-200 active:scale-[0.98] hover:brightness-[90%] duration-100 h-[30px] rounded-md flex items-center justify-center cursor-pointer p-1'>
                                            <FaMinus size={16} />
                                        </div>
                                        <div className='text-center mx-2 w-[30px] h-max'>1</div>
                                        <div className='w-[30px] bg-slate-200 active:scale-[0.98] hover:brightness-[90%] duration-100 h-[30px] rounded-md flex items-center justify-center cursor-pointer p-1'>
                                            <FaPlus size={16} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[20%] h-max'>
                                <h3 className='w-max font-bold text-black text-[16px]'>{ToRupiah(product && product?.product_price)}</h3>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            <div className='w-[30%] rounded-lg bg-slate-100 overflow-hidden shadow-lg p-4 h-max'>
                <div className='w-full border-b border-b-slate-400 pb-3'>
                    <div className='w-full justify-between mb-5 px-3 flex items-center'>
                        <p className='text-slate-500 font-normal'>Subtotal : </p>
                        <p className='text-slate-500 font-normal'>{ToRupiah(totalPrice())}</p>
                    </div>
                    <div className='w-full justify-between mb-5 px-3 flex items-center'>
                        <p className='text-slate-500 font-normal'>Total product : </p>
                        <p className='text-slate-500 font-normal'>{cart && cart?.length}</p>
                    </div>
                </div>
                <div className='w-full flex items-center h-max py-[16px] justify-center justify-between'>
                    <h3 className='text-[16px] font-bold text-black'>Total : </h3>
                    <h3 className='text-[18px] font-bold text-black'>{ToRupiah(totalPrice())}</h3>
                </div>
                <Link to='/my-cart/checkout'>
                    <Button status='primary' text='Checkout' style='mt-3 w-full' />
                </Link>
            </div>
        </section>

        <Footer /> 
    </>
  )
}

export default MyCart
