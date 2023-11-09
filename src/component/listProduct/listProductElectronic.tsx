import { useEffect, useState } from 'react';
import toRupiah from '../../helpers/toRupiah';
import API from '../../service/api';
import { productInterface } from '../../utils/interfaces/productInterface';
import { Link } from 'react-router-dom';

const ListProductElectronic = () => {

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
            products ? (
                products
                .filter((product) => product.product_category === 'Electronic')
                .slice(0, 8)
                .map((product, index) => (
                <Link to={`/detail-product/${product.product_id}`} className='w-[98%]'>
                    <div key={index} className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                        <p className='text-[16px] mb-1 font-bold text-black'>{product?.product_name}</p>
                        <small className='text-[14px] font-normal text-slate-500'>{toRupiah(product?.product_price ? product?.product_price : 0)}</small>
                        <hr className='my-3 w-[40%]' />
                        <small className='text-[14px] bg-blue-500 rounded-full px-3 py-1 font-bold text-white w-max'>{product?.product_category}</small>
                        <img src={`https://huda.descode.id/uploads/${product?.product_image}`} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                    </div>
                </Link>
                ))
            ) :
            <>
                <p>Kosong data nya</p>
            </>
        }
    </>
  )
}

export default ListProductElectronic
