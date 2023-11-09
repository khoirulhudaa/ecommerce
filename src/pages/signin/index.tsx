import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Logo } from "../../assets"
import { Button } from "../../component"
import ErrorMessage from "../../component/errorMessage"
import InputField from "../../component/inputField"
import { useLoginFormik } from "../../utils/validations/useValidationLogin"
import { authSignOut, clearToken } from "../../redux/reducers/authSlice"

const Signin = () => {
  const [errorStatus, setErrorStatus] = useState<string>("")

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authSignOut())
    dispatch(clearToken())
  }, [])

  const handleError = (error: string) => {
    setErrorStatus(error)
  }

  const useFormikRegister = useLoginFormik({ onError: handleError })

  return (
    <div className="w-screen bg-blue-100 h-screen flex items-center justify-center">
      <div className="w-[50%] h-screen flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-[70%]" />
      </div>
      <div className="w-[50%] h-full rounded-lg flex flex-col justify-center overflow-hidden bg-white p-[40px]">
      {
            errorStatus !== "" ? (
                <>
                  <ErrorMessage error={errorStatus} />
                </>
            ):
                null
        }
        <h2 className="font-bold text-[32px] mb-4">Signin</h2>
        <form onSubmit={useFormikRegister.handleSubmit} className="w-[90%] flex flex-col rounded-lg h-max">
            <div className="mb-5">
              <InputField 
                  value={useFormikRegister.values.email_consumer} 
                  name='email_consumer' 
                  label='Email'
                  id='email'
                  onError={useFormikRegister.errors.email_consumer}
                  onTouched={!!useFormikRegister.touched.email_consumer}
                  onChange={useFormikRegister.handleChange} 
                  onBlur={useFormikRegister.handleBlur} 
                  placeholder="Enter Your Email" 
              />
            </div>
            <div className="mb-5">
              <InputField 
                  value={useFormikRegister.values.password} 
                  name='password' 
                  label='Password'
                  id='password'
                  onError={useFormikRegister.errors.password}
                  onTouched={!!useFormikRegister.touched.password}
                  onChange={useFormikRegister.handleChange} 
                  onBlur={useFormikRegister.handleBlur} 
                  placeholder="Enter Your Password" 
              />
            </div>
            <div className='w-max flex mt-6 flex-col'>
              <Button status="primary" typeButton="submit" text="Signin now" />
              <div className="flex mt-3 items-center font-normal text-[14px]">
                Don`t have an account ? 
                <Link to='/signup'>
                    <p className="ml-2 text-blue-500 cursor-pinter hover:brightness-[80%] ">Here</p>
                </Link>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signin
