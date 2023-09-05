import { useState } from 'react'
import { FaArrowLeft, FaPen } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { BgProfile, LogoProfile } from '../../assets'
import { Footer, Navbar } from '../../layout'

const ProfileUser = () => {

  const [editActive, setEditActive] = useState(false)

  const handleEditImage = () => {
    setEditActive(!editActive)
  }

  return (
    <>
      <Navbar /> 

        <section className='w-screen h-max flex px-[50px] mt-[60px] rounded-lg overflow-hidden'>
            <div className='relative rounded-lg w-[40%] overflow-hidden bg-slate-100 h-[500px] mb-7'>
            <Link to='/'>
                <div className='absolute left-[30px] top-7 z-[4] rounded-full flex bg-white items-center justify-center cursor-pointer active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaArrowLeft size={14} />
                </div>
            </Link>
            <div className='absolute bottom-6 right-10 flex items-center z-[4]'>
                <div onClick={() => handleEditImage()} className='rounded-full flex bg-white items-center justify-center cursor-pointer active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaPen size={14} />
                </div>
                <div className={`${editActive ? "scale-[1] bottom-[50px] right-[40px]" : "scale-[0] bottom-[-10px] right-[-20px]"} rounded-lg duration-200 ease bg-white absolute w-[180px] bg-white cursor-pointer overflow-hidden shadow-md h-[80px]`}>
                    <div className='w-full text-slate-500 text-[16px] active:scale-[0.98] h-[50%] border-b border-slate-300 hover:bg-slate-200 hover:text-slate-500 flex items-center pl-3 cursor-pointer'>
                        Edit Background
                    </div>
                    <div className='w-full text-slate-500 text-[16px] active:scale-[0.98] h-[50%] hover:bg-slate-200 hover:text-slate-500 cursor-pointer flex items-center pl-3'>
                        Edit Foto 
                    </div>
                </div>
            </div>
                <img src={BgProfile} alt="bgProfile" className='hover:scale-[110%] ease hover:brightness-[90%] duration-300 w-full mx-auto relative h-full object-cover' />
                <div className='absolute left-5 bottom-6 z-[2] w-[80px] h-[80px] overflow-hidden rounded-full mx-auto shadow-lg order-2 border-slate-200 cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    <img src={LogoProfile} alt="fotoProfile" className='object-contain' />
                </div>
            </div>

            <div className='relative w-[60%] ml-[20px] h-max px-[20px] pb-[60px] rounded-lg overflow-hidden'>
                <div onClick={() => null} className='absolute right-5 rounded-full cursor-pointer hover:brightness-[90%] flex bg-blue-500 text-white items-center justify-center z-[2] active:scale-[0.99] shadow-md w-[40px] h-[40px] hover:brightness-[90%]'>
                    <FaPen size={14} />
                </div>
                <h2 className='relative font-bold text-[26px]'>Rahman aditya darussalam</h2>
                <h2 className='relative font-bold text-[20px]'>(ID: 2637DSG)</h2>
                <div className='w-full h-[1px] bg-slate-500 my-4'></div>
                <p className='text-slate-500 text-[15px] relative my-4'>Belanja sesuai kebutuhan bukan keinginan</p>
                <div className='w-full flex h-max'>
                    <div className='w-1/2 min-h-[355px] flex flex-col justify-start'>
                        <div className='w-full h-max py-1 mt-6 rounded-lg'>
                            <p className='mb-4 font-bold text-[18px]'>Email</p>
                            <p className='text-slate-500 text-[15px]'>darussalam@gmail.com</p>
                        </div>
                        <div className='w-full h-max py-1 mt-10 rounded-lg'>
                            <p className='mb-4 font-bold text-[18px]'>Telephone</p>
                            <p className='text-slate-500 text-[15px]'>089126172612</p>
                        </div>
                        <div className='w-full h-max py-1 mt-10 rounded-lg'>
                            <p className='mb-4 font-bold text-[18px]'>Gender</p>
                            <p className='text-slate-500 text-[15px]'>Male</p>
                        </div>
                    </div>
                    <div className='w-1/2 min-h-[355px] flex flex-col justify-start'>
                        <div className='w-full h-max py-1 mt-6 rounded-lg'>
                            <p className='mb-4 font-bold text-[18px]'>Post code</p>
                            <p className='text-slate-500 text-[15px]'>45125</p>
                        </div>
                        <div className='w-full h-max py-1 mt-10 rounded-lg'>
                            <p className='mb-4 font-bold text-[18px]'>Address</p>
                            <p className='w-[90%] text-slate-500 text-[15px]'>
                                Jl. Cideng Jaya, blok. Sijaba, RT/16 RW/04, Kec. 
                                Kedawung Kab. Cirebon, Ds. kertawinangun
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      <Footer /> 
    </>
  )
}

export default ProfileUser
