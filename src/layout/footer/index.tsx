import { AppStore, Logo, PlayStore } from '../../assets'

const Footer = () => {
  return (
    <>
      <div className='w-screen h-max flex px-[40px] py-[80px]'>
        <div className='w-full flex rounded-lg h-max'>
          <div className='w-[35%] h-max'>
            <div className='flex items-center w-full pl-[20px]'>
              <img src={Logo} className='w-[60px] h-[60px] mr-4' alt="logoBrand" />
              <h2 className='font-bold text-[24px] text-blue-500'>ElectShop</h2>
            </div>
          </div>
          <div className='w-[65%] gap-4 flex justify-between'>
            <div className='w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>About Us</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
            <div className='w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>Information</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
            <div className='w-[30%]'>
              <h3 className='font-bold text-black text-[18px] mb-4'>For Users</h3>
              <ul className='list-none'>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>About Us</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>FInd Store</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Categories</li>
                </a>
                <a href="#" className='text-slate-500'>
                  <li className='mb-3 text-slate-500'>Blogs</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-between px-[60px]'>
        <small className='text-slate-500 text-[14px]'>© 2023 Swiftvel. All rights reserved.</small>
        <div className='w-max h-max flex items-center'>
          <a href="#">
            <img src={AppStore} className='my-6 w-[150px] mr-5' alt="appStore" />
          </a>
          <a href="#">
          <img src={PlayStore} className='w-[150px]' alt="playStore" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Footer
