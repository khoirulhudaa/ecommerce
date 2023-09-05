import { Link } from "react-router-dom"
import { NotFounds } from "../../assets"
import { Button } from "../../component"
import { Footer, Navbar } from "../../layout"

const NotFound = () => {
  return (
        <>
            <Navbar />

            <section className="w-screen px-[30px] h-[85vh] flex flex-col justify-center items-center text-center">
                <img src={NotFounds} alt="success" className="w-[20%] mb-4" />
                <h2 className="font-bold mt-5 text-[30px]">Upsss...page not found</h2>
                <p className="mt-2 text-[14px] text-slate-500 w-[50%]">This page is not available and never existed</p>
                <Link to='/'>
                    <Button status="primary" text="Back to home" style="mt-10" />
                </Link>
            </section>
            
            <Footer />
        </>
  )
}

export default NotFound
