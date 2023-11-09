import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ToRupiah from '../../helpers/toRupiah'
import API from '../../service/api'
import Alert from '../alert'

const ListInDetailProduct = ({shop_id}: {shop_id: any}) => {

    const [products, setProducts] = useState<any[]>([])

    const navigate = useNavigate()

    useEffect(() => {
        const getDataProduct = async () => {
            try {
                if(shop_id) {
                    const response = await API.getProductByShopId(shop_id)
                    setProducts(response.data.data)
                }else {
                    navigate('/')
                }
            } catch (error: any) {
                console.log(error)
                Alert({
                    title:'Error', 
                    text: error,
                    icon:'error',
                    showCancelButton: false,
                })
            } finally {
            }
        }

        getDataProduct()
    }, [])

  return (
    <>
    {
      products && products.slice(0, 3).map((product, index) => (
        <Link to={`/detail-product/${product && product?.product_id}`}>
            <div key={index} className='w-[90%] border-b-2 border-slate-200 mx-auto min-h-[100px] max-h-[150px] items-center hover:brightness-[96%] cursor-pointer bg-white mb-4 px-2 flex overflow-hidden'>
                <div className='w-[20%] h-[63px] flex items-center justify-center border border-slate-300 rounded-full relative overflow-hidden'>
                    <img src={`https://huda.descode.id/uploads/${product && product?.product_image}`} alt="fotoProduct" className='w-full h-auto' />
                </div>
                <div className='w-[80%] h-full p-4'>
                    <h3 className='font-bold text-black mb-3'>{product && product?.product_name}</h3>
                    <p className='text-slate-500 text-[14px]'>{ToRupiah(product && product?.product_price)}</p>
                </div>
            </div>
        </Link>
      ))                                                                                                                                                                      
    }
    </>
  )
}

export default ListInDetailProduct
