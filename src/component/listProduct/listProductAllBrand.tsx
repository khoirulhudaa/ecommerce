import { useEffect, useState } from 'react'
import API from '../../service/api'
import { productInterface } from '../../utils/interfaces/productInterface'
import { FaCartPlus } from 'react-icons/fa'
import toRupiah from '../../helpers/toRupiah';
import { Link } from 'react-router-dom';

const ListProductAllBrand = () => {

    const [products, setProducts] = useState<productInterface[]>([])

    useEffect(() => {
        const getDataProduct = async () => {
            const response = await API.getAllProduct()
            setProducts(response.data.data)
        }

        getDataProduct()
    }, [])

  return (
    <>
       {
        products && products?.slice(0, 10).map((product, index) => (
            <div key={index} className='w-[180px] mr-5 cursor-pointer border border-slate-300 rounded-lg h-[320px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                <div className='relative w-full border-[1px] border-b-slate-300 h-[55%] flex items-center justify-center overflow-hidden'>
                    <div className='absolute top-2 right-2 rounded-full border-2 border-white bg-blue-500 shadow-md px-3 py-1 text-[12px] text-white text-center w-max h-max font-bold'>
                        {product?.product_category}
                    </div>
                    <img src={`https://huda.descode.id/uploads/${product?.product_image}`} className='w-[80%] h-max' alt="fotoProduct" />
                </div>
                <div className='w-full h-[45%] flex overflow-hidden flex-col p-3'>
                    <h3 className='text-[20px] w-max mb-2'>{product?.product_name}</h3>
                    <div className='w-full items-center justify-between flex h-max flex-col'>
                        <div className='w-full flex items-center justify-between'>
                            <p className='text-[16px] font-bold'>
                                {product?.product_price ? toRupiah(product.product_price) : 0}
                            </p>
                            <div className='w-max flex items-center'>
                                <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                    <FaCartPlus />
                                </div>
                            </div>
                        </div>
                        <Link to={`/detail-product/${product.product_id}`} className='w-[98%]'>
                            <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[90%] active:scale-[0.97] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                Detail
                            </div>
                        </Link>
                    </div>  
                </div>
            </div>
        ))
        }
    </>
  )
}

export default ListProductAllBrand
