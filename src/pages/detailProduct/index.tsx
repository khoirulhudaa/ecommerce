import { useEffect, useState } from 'react';
import { FaCheckCircle, FaChevronRight, FaStar, FaStore } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Flag, Product2, Product3 } from '../../assets';
import { Button } from '../../component';
import Alert from '../../component/alert';
import ToRupiah from '../../helpers/toRupiah';
import { Footer, Navbar } from '../../layout';
import API from '../../service/api';
import { RotateSpinner } from 'react-spinners-kit';
import ListInDetailProduct from '../../component/listProduct/listInDetailProduct';
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/reducers/cartSlice';
import store from '../../redux/store';

const DetailProduct = () => {

const [rating, setRating] = useState<number>(4)
const [product, setProduct] = useState<Record<string, any>>({})
const [isLoading, setIsLoading] = useState(true);

const { product_id } = useParams()
const dispatch = useDispatch()

const cart = store.getState().cartReducer.dataOrders
console.log('cart:', cart)

useEffect(() => {
    const getDataProduct = async () => {
        try {
            if(product_id) {
                const response = await API.getProductById(product_id)
                console.log('data product by id:', response)
                setProduct(response.data.data[0])
            }
        } catch (error: any) {
            console.log(error)
            Alert({
                title:'Error', 
                text:error ,
                icon:'error',
                showCancelButton: false,
            })
        } finally {
            setIsLoading(false)
        }
    }

    getDataProduct()
}, [product_id, cart, dispatch])

const RenderStars = () => {
    const stars = [];

    for (let i = 0; i < 5; i++) {
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
            {stars ?? null}
        </div>
    )
}

const handleCart = (product: any) => {
    dispatch(addCart(product))
    console.log(product)
}

if (isLoading) {
    // Tampilkan overlay loading jika isLoading masih true
    return (
        <div className='flex items-center w-screen h-screen justify-center'>
            <RotateSpinner size={70} color="#36D7B7" loading={true} />
        </div>
    );
}

return (
    <>
        <Navbar />
        
        <section className='w-screen px-[60px] py-[20px] h-max flex'>
            <div className='w-full flex items-center py-[10px]'>
                <p className='flex items-center'><Link to='/' className='text-blue-500'>Home</Link> <FaChevronRight size={13} style={{fontSize: '10px', marginLeft: '6px', marginRight: '6px'}} />Detail-product <FaChevronRight size={13} style={{fontSize: '10px', marginLeft: '6px', marginRight: '6px'}} />  <p className='text-slate-500 bg-blue-500 text-white rounded-full px-3 w-max text-center shadow-md font-normal text-[14px] py-1'>{product && product?.product_name}</p></p>
            </div>
        </section>

        <section className='w-screen h-max px-[50px] py-[0px]'>
            <div className='w-full flex px-[20px] py-[40px] bg-white shadow-lg rounded-lg overflow-hidden border border-slate-300'>
                <div className='w-[30%] border-r border-r-slate-300 min-h-[300px] flex items-center justify-center'>
                    <img src={`https://huda.descode.id/uploads/${product && product?.product_image}`} alt="fotoProduct" className='w-[90%] h-auto' />
                </div>
                <div className='w-[60%] h-max px-[30px] pb-[20px]'>
                    <h4 className='text-green-500 w-max mb-5 font-bold text-[16px]'>In Stock</h4>
                    <h2 className='text-black font-bold text-[22px] mb-5 w-[80%]'>{product && product?.product_name}</h2>
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
                        <h3>{ToRupiah(product?.product_price)}</h3>
                    </div>
                    <div className='w-full lg:w-[60%] mt-5'>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Color product</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>{product && product?.product_color}</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Brand productr</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>{product && product?.product_brand}</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Size product</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>{product && product?.product_size}</p>
                        </div>
                        <div className='flex mb-4 h-max items-center'>
                            <p className='w-[40%] text-[14px]'>Condition</p>
                            <span className='mx-4'>:</span>
                            <p className='text-slate-400 text-[14px] pl-2'>{product && product?.product_type}</p>
                        </div>
                    </div>
                </div>
                <div className='w-[30%] border-l border-l-slate-300 px-[30px] pb-[20px]'>
                    <div className='w-full border border-slate-300 p-4 h-max rounded-lg overflow-hidden'>
                        <div className='w-full border-b border-slate-300 h-max w-full mb-4 pb-4 flex items-center'>
                            <div className='relative w-[50px] h-[50px] rounded-full overflow-hidden shadow-lg bg-white border-[1px] border-slate-200 flex items-center justify-center'>
                                <img src={`https://huda.descode.id/uploads/${product && product?.image_shop}`} alt="imageShop" className="w-[90%]" />
                            </div>
                            <div className='pl-3'>
                                <h3 className='text-black font-bold'>{product && product?.shop_name || '-'}</h3>
                                <small className='text-slate-500 text-[12px]'>ID Toko: {product && product?.shop_id}</small>
                            </div>
                        </div>
                        <div className='flex items-center mb-5'>
                            <p>Indonesia</p>
                        </div>
                        <div className='flex items-center'>
                            <FaCheckCircle size={18} style={{marginRight: '19px'}} />
                            <p>Verified Seller</p>
                        </div>
                        <Button handleClick={() => handleCart(product)} status='primary' text='Add to cart +' style='mt-8 mb-4 w-full' />
                        <Link to='/profileShop'>
                            <Button type='outline' text='Shop detail' style='w-full' />
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
                            <Tab className='w-full h-max py-[12px] bg-slate-100 border-0 outline-0 text-center pl-6 border-b-2 text-blue-500 border-b-blue-500 border-r border-r-slate-300 cursor-pointer hover:brightness-[90%] duration-200 flex items-center'>Description</Tab>
                        </TabList>
                        <div className='w-full min-h-[400px] h-max overflow-hidden relative'>
                            <TabPanel className='w-full h-max p-[20px] relative top-0 left-0'>
                                <p className='text-slate-500 text-[15px] w-[96%]'>
                                    {product && product?.product_description}
                                </p> 
                            </TabPanel>
                            <div className='absolute bottom-0 left-0 w-full h-max py-3 px-5 bg-slate-100'>
                                <small className='text-slate-500 text-[14px]'><b>Note :</b> The system has not been able to return purchases!</small>
                            </div>
                        </div>
                    </Tabs>
               </div>
               <div className='w-[30%] h-[452px] overflow-y-auto bg-white rounded-lg overflow-hidden shadow-lg border border-slate-300'>
                    <h3 className='ml-5 mt-4 mb-4 font-bold text-[18px]'>You may like</h3>
                    <ListInDetailProduct shop_id={product && product?.shop_id} />
               </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default DetailProduct
