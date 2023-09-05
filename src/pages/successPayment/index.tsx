import { Link } from "react-router-dom"
import { Success } from "../../assets"
import { Button } from "../../component"
import { Footer, Navbar } from "../../layout"

const SuccessPayment = () => {
    return (
        <>
            <Navbar />

            <section className="w-screen px-[30px] h-[85vh] flex flex-col justify-center items-center text-center">
                <img src={Success} alt="success" className="w-[15%] mb-4" />
                <h2 className="font-bold mt-5 text-[30px]">Success Payment</h2>
                <p className="mt-2 text-[14px] text-slate-500 w-[50%]">Your payment is successful, it's time to wait for the order to come</p>
                <Link to='/'>
                    <Button status="primary" text="Back to home" style="mt-10" />
                </Link>
            </section>
            
            <Footer />
        </>
    )
  }
  
  export default SuccessPayment
  