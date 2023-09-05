import { FieldError, SubmitHandler, useForm } from "react-hook-form"
import { Logo } from "../../assets"
import { SignupInterface } from "../../utils/interfaces/authInterfaces"
import { Button } from "../../component"
import { Link } from "react-router-dom"

const Signup = () => {

  const {handleSubmit, register, formState: {errors}} = useForm<SignupInterface>({
    defaultValues: {
        consumer_name: '',
        email_consumer: '',
        password: '',
        telephone_consumer: '',
        gender_consumer: ''
    }
  })

  const onSubmit: SubmitHandler<SignupInterface> = (data) => {
    console.log(data)
  }

  const ErrorMessage = ({error}: {error: FieldError | undefined}) => {
    if(!error) return null
    if(error.type === 'required') return <p className='text-red-500 text-[12px] font-bold mt-2'>This field is required</p>
    if(error.type === 'minLength') return <p className='text-red-500 text-[12px] font-bold mt-2'>Minimum length is 8</p>
    if(error.type === 'maxLength') return <p className='text-red-500 text-[12px] font-bold mt-2'>Maximal length is 13</p>
    return null
  }

  return (
    <div className="w-screen bg-blue-100 h-screen flex items-center justify-center">
      <div className="w-[50%] h-screen flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-[70%]" />
      </div>
      <div className="w-[50%] h-max rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] p-5 rounded-lg h-max bg-white">
          <h2 className="font-bold text-[22px] ml-5 mb-4">Signup</h2>
          <div className='mx-auto flex flex-wrap border-t border-slate-300 pt-5 justify-between mb-8 w-[93%] items-center'>
                <div className='w-[45%] h-max mb-6 block'>
                    <label className='text-[16px] mb-4'>Your name</label>
                    <br />
                    <input placeholder='What is your name?' {...register('consumer_name', {required: true})} className='w-full h-max px-3 py-3 bg-slate-100 rounded-md mt-3 border-0 outline-0' />
                    <ErrorMessage error={errors.consumer_name} />
                </div>
                <div className='w-[45%] h-max mb-6 block'>
                    <label className='text-[16px] mb-4'>Your email</label>
                    <br />
                    <input placeholder='Enter email' {...register('email_consumer', {required: true})} className='w-full h-max px-3 py-3 bg-slate-100 rounded-md mt-3 border-0 outline-0' />
                    <ErrorMessage error={errors.email_consumer} />
                </div>
                <div className='w-[45%] h-max mb-6 block'>
                    <label className='text-[16px] mb-4'>Password</label>
                    <br />
                    <input type="password" placeholder='Password' {...register('password', {required: true, minLength: 8})} className='w-full h-max px-3 py-3 bg-slate-100 rounded-md mt-3 border-0 outline-0' />
                    <ErrorMessage error={errors.password} />
                </div>
                <div className='w-[45%] h-max mb-6 block'>
                    <label className='text-[16px] mb-4'>No telephone</label>
                    <br />
                    <input type="text" placeholder='No telephone' {...register('telephone_consumer', {required: true, maxLength: 13})} className='w-full h-max px-3 py-3 bg-slate-100 rounded-md mt-3 border-0 outline-0' />
                    <ErrorMessage error={errors.telephone_consumer} />
                </div>
                <div className='w-[45%] h-max mb-6 block'>
                    <label className='text-[16px] mb-4'>Gender</label>
                    <br />
                    <select {...register('gender_consumer', { required: true })} className='w-full bg-slate-100 h-max px-3 py-3 rounded-md mt-3 border-0 outline-0'>
                        <option value=''>Select Gender</option>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                    <ErrorMessage error={errors.gender_consumer} />
                </div>
            </div>
            <div className='w-max flex items-center'>
              <Button status="primary" text="Signup now" style="ml-5" />
              <div className="ml-3 flex items-center font-normal text-[14px]">
                Already have an account ? 
                <Link to='/Signin'>
                    <p className="ml-2 text-blue-500 cursor-pinter hover:brightness-[80%] ">Here</p>
                </Link>
              </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
