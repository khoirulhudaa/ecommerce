import toRupiah from '@develoka/angka-rupiah-js';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '../../component';
import { Footer, Navbar } from '../../layout';
import { FieldError, SubmitHandler, useForm } from 'react-hook-form';
import { CheckoutInterface } from '../../utils/interfaces/checkoutInterface';
import { BNI, BRI, Dana, Mandiri, Product1, Product3 } from '../../assets';

const MyCart = () => {

  const { handleSubmit, register, formState: { errors } } = useForm<CheckoutInterface>({
    defaultValues: {
        consumer_name: '',
        consumer_email: '',
        consumer_telephone: '',
        consumer_address: '',
        province: '',
        post_code: '',
        regency: '',
    }
  })

  const onSubmit: SubmitHandler<CheckoutInterface> = (data) => {
    console.log(data)   
  }

  const ErrorMessage = ({ error }: { error: FieldError | undefined }) => {
    if (!error) return null;
  
    // Extract messages to constants
    const requiredMessage = 'This field is required';
    const minLengthMessage = 'Minimum length is 3';
    const maxLengthMessage = 'Maximal length is 13';
  
    if (error.type === 'required') {
        return <p className='text-red-500 text-[12px] font-bold mt-2'>{requiredMessage}</p>
    };
    if (error.type === 'minLength') {
        return <p className='text-red-500 text-[12px] font-bold mt-2'>{minLengthMessage}</p>
    };
    if (error.type === 'maxLength') {
        return <p className='text-red-500 text-[12px] font-bold mt-2'>{maxLengthMessage}</p>
    };
  
    return null;
  };
  

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

        <form onSubmit={handleSubmit(onSubmit)}>
            <section className='w-screen h-max flex px-[50px] pb-[40px]'>
                <div className='w-[70%] mr-6 px-8 py-10 rounded-lg shadow-lg bg-slate-100 border border-slate-300'>
                    <div className='w-full flex justify-between mb-8 items-center'>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Your name</label>
                            <br />
                            <input placeholder='What your name ?' {...register('consumer_name', {required: true, minLength: 3})} className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                            <ErrorMessage error={errors.consumer_name} />
                        </div>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Your email</label>
                            <br />
                            <input type='email' placeholder='Email address' {...register('consumer_email', {required: true})} className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                            <ErrorMessage error={errors.consumer_email} />
                        </div>
                    </div>

                    <div className='w-full flex item-center justify-between'>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Number telephone</label>
                            <br />
                            <input placeholder='089125xxxxxxx' {...register('consumer_telephone', {required: true, maxLength: 13})} className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                            <ErrorMessage error={errors.consumer_telephone} />
                        </div>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Province</label>
                            <br />
                            <select {...register('province', { required: 'Please select a gender' })} className='w-full h-max bg-white px-3 py-2 rounded-md mt-3 border-0 outline-0'>
                                <option value=''>Select Province</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                            <ErrorMessage error={errors.province} />
                        </div>
                    </div>

                    <div className='w-full flex mt-7 item-center justify-between'>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Regency</label>
                            <br />
                            <select {...register('regency', { required: 'Please select a gender' })} className='w-full bg-white h-max px-3 py-2 rounded-md mt-3 border-0 outline-0'>
                                <option value=''>Select Regency</option>
                                <option value='male'>Male</option>
                                <option value='female'>Female</option>
                                <option value='other'>Other</option>
                            </select>
                            <ErrorMessage error={errors.province} />
                        </div>
                        <div className='w-[45%] h-max block'>
                            <label className='mb-4'>Post code</label>
                            <br />
                            <input placeholder='Post code' {...register('post_code', {required: true})} className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' />
                            <ErrorMessage error={errors.post_code} />
                        </div>
                    </div>

                    <div className='w-full flex flex-col'>
                        <div className='w-full mt-7 h-max block'>
                            <label className='mb-4'>Your address</label>
                            <br />
                            <textarea placeholder='Your location' {...register('consumer_address', {required: true})} className='w-full h-max px-3 py-2 rounded-md mt-3 border-0 outline-0' rows={5} />
                            <ErrorMessage error={errors.consumer_address} />
                        </div>
                    </div>

                    <div className='w-full mx-auto bg-slate-300 my-[30px] h-[1px]'></div>

                    <h3 className='mt-[30px] mb-[4px] text-[16px]'>Selected products</h3>
                    <div className={`flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                        <div className={`w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                            <img src={Product1} alt="fotoProduct" className='w-max h-auto my-auto' />
                        </div>
                        <div className={`relative w-full w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                            <div className='absolute rounded-full bg-blue-500 right-5 top-5 w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                                3x
                            </div>
                            <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                            <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                            <div className='w-max flex  items-center'>
                            <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                            </div>
                            <p className={`block mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Sunt distinctio accusantium temporibus cupiditate inventore facere 
                                a necessitatibus optio? Illum nisi praesentium corporis sunt 
                                repellat perferendis cum nostrum voluptatum sit ab?
                            </p>
                            <Link to='/detail-product'>
                            <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                            </Link>
                        </div>
                    </div>
                    <div className={`flex w-full mt-4 h-max rounded-lg bg-white shadow-sm mb-[24px] overflow-hidden`}>
                        <div className={`w-[30%] min-h-max flex items-center justify-center overflow-hidden`}>
                            <img src={Product3} alt="fotoProduct" className='w-max h-auto my-auto' />
                        </div>
                        <div className={`relative w-full w-[70%] border-l my-auto border-l-slate-300 h-[90%] px-[20px] py-[20px]`}>
                            <div className='absolute rounded-full bg-blue-500 right-5 top-5 w-[40px] h-[40px] flex items-center justify-center text-white shadow-lg'>
                                3x
                            </div>
                            <h3 className='text-black w-full mb-6 tetx-[16px]'>Canon Cmera EOS 2000, Black 10x zoom</h3>
                            <h2 className='text-[24px] font-bold mb-2'>$998.00</h2>
                            <div className='w-max flex  items-center'>
                            <small className='text-slate-500 relative top-[1px] left-[10px]'>130 orders</small>
                            </div>
                            <p className={`block mt-[20px] text-[14px] w-[90%] text-slate-500 leading-[1.6em]`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Sunt distinctio accusantium temporibus cupiditate inventore facere 
                            a necessitatibus optio? Illum nisi praesentium corporis sunt 
                            repellat perferendis cum nostrum voluptatum sit ab?
                            </p>
                            <Link to='/detail-product'>
                            <p className='text-blue-500 font-bold text-[16px] mt-3'>View Details</p>
                            </Link>
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
                        <h3 className='text-[18px] font-bold text-black'>{toRupiah(50000, {replaceZeroDecimals: false})}</h3>
                    </div>
                    <Button handleClick={() => onSubmit} status='primary' text='Pay now' style='mt-4 w-[90%] mx-auto' />
                </div>
            </section>
        </form>

        <Footer /> 
    </>
  )
}

export default MyCart
