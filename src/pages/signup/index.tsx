import { Link } from "react-router-dom"
import { Logo } from "../../assets"
import { Button } from "../../component"
import { useRegistrationFormik } from "../../utils/validations/validationRegister"
import InputField from "../../component/inputField"
import { useState } from "react"
import ErrorMessage from "../../component/errorMessage"

const Signup = () => {
  const [errorStatus, setErrorStatus] = useState<string>("")

  const handleError = (error: string) => {
    setErrorStatus(error)
  }

  const listGender = [
    {label: "Select Your Gender", value: ""},
    {label: "Male", value: "Male"},
    {label: "Female", value: "Female"},
  ]

  const useFormikRegister = useRegistrationFormik({ onError: handleError })

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
        <h2 className="font-bold text-[32px] mb-4">Signup</h2>
        <form onSubmit={useFormikRegister.handleSubmit} className="w-[100%] flex rounded-lg h-max">
            <div className="w-[50%] pr-4">
              <div className="mb-5">
                <InputField 
                    value={useFormikRegister.values.consumer_name} 
                    name='consumer_name' 
                    label='seller name'
                    type="text"
                    id='sellerName'
                    onError={useFormikRegister.errors.consumer_name}
                    onTouched={!!useFormikRegister.touched.consumer_name}
                    onChange={useFormikRegister.handleChange} 
                    onBlur={useFormikRegister.handleBlur} 
                    placeholder="Enter Your Name" 
                />
              </div>
              <div className="mb-5">
                <InputField 
                    value={useFormikRegister.values.email_consumer} 
                    name='email_consumer' 
                    label='Email'
                    type="email"
                    id='emailConsumer'
                    onError={useFormikRegister.errors.email_consumer}
                    onTouched={!!useFormikRegister.touched.email_consumer}
                    onChange={useFormikRegister.handleChange} 
                    onBlur={useFormikRegister.handleBlur} 
                    placeholder="Enter Your Email" 
                />
              </div>
              <div className="mb-5">
                <InputField 
                    value={useFormikRegister.values.telephone_consumer} 
                    name='telephone_consumer' 
                    label='Telephone'
                    type="text"
                    id='Telephone'
                    onError={useFormikRegister.errors.telephone_consumer}
                    onTouched={!!useFormikRegister.touched.telephone_consumer}
                    onChange={useFormikRegister.handleChange} 
                    onBlur={useFormikRegister.handleBlur} 
                    placeholder="Enter Your Number" 
                />
              </div>
            </div>
            <div className="w-[50%]">
              <div className="mb-5">
                <InputField 
                    value={useFormikRegister.values.password} 
                    name='password' 
                    label='Password name'
                    id='password'
                    type="password"
                    onError={useFormikRegister.errors.password}
                    onTouched={!!useFormikRegister.touched.password}
                    onChange={useFormikRegister.handleChange} 
                    onBlur={useFormikRegister.handleBlur} 
                    placeholder="Enter Your Password" 
                />
              </div>
              <div className="mb-5">
                <InputField 
                    value={useFormikRegister.values.gender} 
                    name='gender' 
                    typeInput="select-input"
                    options={listGender}
                    label='Gender'
                    id='gender'
                    onError={useFormikRegister.errors.gender}
                    onTouched={!!useFormikRegister.touched.gender}
                    onChange={useFormikRegister.handleChange} 
                    onBlur={useFormikRegister.handleBlur} 
                    placeholder="Enter Your Password" 
                />
              </div>
              <div className='w-max flex flex-col mt-6'>
                <Button status="primary" type="submit" text="Signup now" />
                <div className="flex mt-3 items-center font-normal text-[14px]">
                  Already have an account ? 
                  <Link to='/signin'>
                      <p className="ml-2 text-blue-500 cursor-pinter hover:brightness-[80%] ">Here</p>
                  </Link>
                </div>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
