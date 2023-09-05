import toRupiah from '@develoka/angka-rupiah-js';
import { BgHomeOutdoor, BgTech, Clothes, Product1, Product2 } from '../../assets'
import { FaCartPlus } from 'react-icons/fa';
import { Button, Question } from '../../component';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ContentHomepage = () => {

  interface Input {
    email: string
  }

  const { handleSubmit, register, formState: {errors}} = useForm<Input>({
    defaultValues: {
        email: ''
    }
  })

  const onSubmit: SubmitHandler<Input> = (data) => {
    console.log(data)
  }

  return (
    <>
        <section className='menuProducts px-[50px] py-[60px] overflow-hidden h-max w-screen flex items-center'>
            <div className='w-max overflow-x-auto'>
                <div className='w-max overflow-x-auto flex items-center'>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className='w-[180px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                        <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                            <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                        </div>
                        <div className='w-full h-[40%] flex flex-col p-3'>
                            <h3 className='text-[20px] mb-2'>Smart watch</h3>
                            <div className='w-full items-center justify-between flex h-max flex-col'>
                                <div className='w-full flex items-center justify-between'>
                                    <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                    <div className='w-max flex items-center'>
                                        <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                            <FaCartPlus />
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                    Buy now
                                </div>
                            </div>  
                        </div>
                    </div>
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
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Clothes} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
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
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
                <div className='relative overlow-hidden w-[25%] h-[50%] cursor-pointer hover:brightness-[96%] flex-col border p-3 border-slate-300 bg-white overflow-hidden flex'>
                    <p className='text-[16px] mb-1 font-bold text-black'>Soft Chairs</p>
                    <small className='text-[14px] font-normal text-slate-500'>{toRupiah(50000, { replaceZeroDecimals: true })}</small>
                    <img src={Product2} className='absolute right-2 bottom-2 w-[30%]' alt="fotoProduct" />
                </div>
            </div>
        </section>

        {/* Component Question */}
        <Question />
        {/* End Component Question */}

        <section className='w-screen px-[50px] py-[50px] h-max'>
            <div className='w-full h-max'>
                <h2 className='font-bold text-[26px] mb-[30px]'>Recommended items</h2>
                <div className='w-full flex items-center justify-between flex-wrap'>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                    <div className='w-[180px] mb-[30px] mr-5 cursor-pointer hover:brightness-[96%] active:scale-[0.99] border border-slate-300 rounded-lg min-h-[250px] bg-white rounded-lg overflow-hidden shadow-lg mr-20px'>
                            {/* Card component */}
                            <div className='w-full h-[60%] flex items-center justify-center overflow-hidden'>
                                <img src={Product1} className='w-full h-max' alt="fotoProduct" />
                            </div>
                            <div className='w-full h-[40%] flex flex-col p-3'>
                                <h3 className='text-[16px] mb-2'>Smart watch</h3>
                                <div className='w-full items-center justify-between flex h-max flex-col'>
                                    <div className='w-full flex items-center justify-between'>
                                        <p className='text-[16px] font-bold'>{toRupiah(50000, { replaceZeroDecimals: true })}</p>
                                        <div className='w-max flex items-center'>
                                            <div className='w-[30px] hover:scale-[1.2] duration-100 text-white rounded-full bg-blue-500 h-[30px] text-[12px] flex items-center justify-center'>
                                                <FaCartPlus />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 w-full h-max py-[8px] text-white cursor-pointer hover:brightness-[96%] bg-blue-500 text-white flex items-center justify-center rounded-lg text-center'>
                                        Buy now
                                    </div>
                                </div>  
                            </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-screen h-max px-[50px]'>
            <div className='w-full bg-gray-100 flex flex-col items-center justify-center text-center h-[300px] rounded-lg overflow-hidden shadow-lg'>
                <h2 className='text-[26px] font-bold text-black mb-2'>Subscribe on our market</h2>
                <p className='text-[15px] text-slate-500'>Get daily news on upcoming offers from many suppliers all over the world</p>
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
                    <div className='w-max flex items-center'>
                        <input type='email' placeholder='Your email' className='w-[300px] py-[10px] px-4 rounded-lg border border-slate-400 outline-0' {...register("email",  { required: true })} />
                        {errors.email && <p>Email is required!</p>}
                        <Button text='Subscribe' status='primary' style='ml-2' />
                    </div>
                </form>
            </div>
        </section>
    </>
  )
}

export default ContentHomepage
