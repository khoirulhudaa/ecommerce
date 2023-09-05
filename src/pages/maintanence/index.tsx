import Lottie from 'react-lottie';
import { MaintanenceJSON } from '../../assets';
import { Footer, Navbar } from '../../layout';

const Maintanence = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: MaintanenceJSON,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
        <Navbar />
        
        <section className='relative overflow-hidden w-screen h-[80vh] flex items-center flex-col justify-center text-center'>
            <div className='absolute z-[-1] w-max h-max flex items-center justify-center w-screen h-full'>
                <div className='w-[400px] h-[200px] rounded-full border border-slate-400'></div>
                <div className='w-[200px] h-[200px] rounded-full border border-slate-400'></div>
                <div className='w-[400px] h-[200px] rounded-full border border-slate-400'></div>
            </div>
            <Lottie options={defaultOptions}
              height={600}
              width={600}
              style={{marginTop: '-10px'}}
            />
            <p className='text-[28px] mb-6 relative bottom-[40px]'>Sorry, currently maintenance</p>
        </section>
        
        <Footer />
    </>
  )
}

export default Maintanence
