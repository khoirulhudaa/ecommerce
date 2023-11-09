import { useEffect, useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BgHomeOutdoor, BgTech, Product1 } from '../../assets';
import { Button, Question } from '../../component';
import toRupiah from '../../helpers/toRupiah';
import API from '../../service/api';
import { productInterface } from '../../utils/interfaces/productInterface';
import { useFormikSubscribe } from '../../utils/validations/subscribeValidation';
import Alert from '../../component/alert';
import { ListProductAllBrand, ListProductCatalog, ListProductElectronic, ListRecommended } from '../../component/listProduct';

const ContentHomepage = () => {

    const dispatch = useDispatch()
    const [update, setUpdate] = useState(false)
    const [products, setProducts] = useState<productInterface[]>([])

    useEffect(() => {
        const getDataProduct = async () => {
            const response = await API.getAllProduct()
            setProducts(response.data.data)
            console.log('ress:', response.data.data)
            setUpdate(false)
        }

        getDataProduct()
    }, [dispatch, update])

    const handleResponse = (response: number) => {
        if(response === 200) {
          Alert({
            title:'success', 
            text:"Thank you for subscribing!" ,
            icon:'success',
            showCancelButton: false,
          })
        } 
      }
      
    const handleError = (error: string) => {
        return (
            Alert({
                title:'Error', 
                text:error ,
                icon:'error',
                showCancelButton: false,
            })
        ) 
    }

    const useFormikSubs = useFormikSubscribe({ onError: handleError, onResponse: handleResponse })

    return (
        <>
            <section className='menuProducts px-[50px] py-[60px] overflow-hidden h-max w-screen flex items-center'>
                <div className='w-max overflow-x-auto'>
                    {/* Al brands */}
                    <div className='w-max overflow-x-auto flex items-center'>
                      <ListProductAllBrand />
                    </div>
                </div>
            </section>

            <section className='menuProducts px-[50px] pb-[60px] overflow-hidden h-max w-screen flex'>
                <div className='w-[30%] h-[300px] overflow-hidden rounded-lg relative'>
                    <div className='absolute left-5 top-5'>
                        <h2 className='font-bold mb-5 text-black text-[28px] w-[59%]'>Home and outdoor</h2>
                        <Link to='/list-product'>
                            <Button text="Source Now" style='w-max' />
                        </Link>
                    </div>
                    <img src={BgHomeOutdoor} className='w-full h-auto' alt="bgHomeOutdor" />
                </div>
                <div className='w-[70%] h-[300px] flex flex-wrap'>
                    {/* Brand - Catalog */}
                    <ListProductCatalog />
                </div>
            </section>
            
            <section className='menuProducts px-[50px] pb-[60px] overflow-hidden h-max w-screen flex'>
                <div className='w-[30%] h-[300px] overflow-hidden rounded-lg relative'>
                    <div className='absolute left-5 top-5'>
                        <h2 className='font-bold mb-5 text-black text-[28px] w-[59%]'>Compouter and Tech</h2>
                        <Link to='/list-product'>
                            <Button text="Source Now" style='w-max' />
                        </Link>
                    </div>
                    <img src={BgTech} className='w-full h-auto' alt="bgHomeOutdor" />
                </div>
                <div className='w-[70%] h-[300px] flex flex-wrap'>
                    {/* Brand - Electronic */}
                    <ListProductElectronic />
                </div>
            </section>

            {/* Component Question */}
            <Question />
            {/* End Component Question */}

            <h2 className='font-bold ml-[50px] text-[26px] my-[30px]'>Recommended items</h2>
            <section className='menuProducts px-[50px] pb-[60px] overflow-hidden h-max w-screen flex items-center'>
                <div className='w-max overflow-x-auto'>
                    {/* Al brands */}
                    <div className='w-max overflow-x-auto flex items-center'>
                      <ListRecommended />
                    </div>
                </div>
            </section>

            <section className='w-screen h-max px-[50px]'>
                <div className='w-full bg-gray-100 flex flex-col items-center justify-center text-center h-[300px] rounded-lg overflow-hidden shadow-lg'>
                    <h2 className='text-[26px] font-bold text-black mb-2'>Subscribe on our market</h2>
                    <p className='text-[15px] text-slate-500'>Get daily news on upcoming offers from many suppliers all over the world</p>
                    <form onSubmit={useFormikSubs.handleSubmit} className='mt-5'>
                        <div className='w-max flex items-center'>
                            <input 
                                type='email' 
                                onChange={useFormikSubs.handleChange} 
                                onBlur={useFormikSubs.handleBlur} 
                                value={useFormikSubs.values.email_consumer} 
                                name='email_consumer' 
                                placeholder='Your email' 
                                className='w-[300px] py-[10px] px-4 rounded-lg border border-slate-400 outline-0' 
                            />
                            <Button text='Subscribe' typeButton='submit' status='primary' style='ml-2' />
                        </div>
                    </form>
                </div>
            </section>
        </>
  )
}

export default ContentHomepage
