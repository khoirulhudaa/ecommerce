import { Link } from "react-router-dom"
import { Pending } from "../../assets"
import { Button } from "../../component"
import { Footer, Navbar } from "../../layout"

const PendingPayment = () => {
  return (
        <>
            <Navbar />

            <section className="w-screen px-[30px] h-[85vh] flex flex-col justify-center items-center text-center">
                <img src={Pending} alt="success" className="w-[15%] mb-4" />
                <h2 className="font-bold mt-5 text-[30px]">Proccess Payment</h2>
                <p className="mt-2 text-[14px] text-slate-500 w-[50%]">Your payment is still in the process of being finalized</p>
                <Link to='/'>
                    <Button status="primary" text="Back to home" style="mt-10" />
                </Link>
            </section>
            
            <Footer />
        </>
  )
}

export default PendingPayment
