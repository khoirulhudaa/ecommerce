import { useEffect, useState } from 'react'
import { FaArrowLeft, FaPen, FaSignOutAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { BgProfile, Default } from '../../assets'
import { Button } from '../../component'
import InputField from '../../component/inputField'
import { Footer, Navbar } from '../../layout'
import { authSignIn } from '../../redux/reducers/authSlice'
import API from '../../service/api'
import { useUpdateProfile } from '../../utils/validations/validationUpdateProfile'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const ProfileUser = () => {

  const navigate = useNavigate()
    
  const [editActive, setEditActive] = useState<boolean>(false)
  const [errorStatus, setErrorStatus] = useState<string>("")
  const [updateStatus, setUpdateStatus] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)

  const dispatch = useDispatch()
  const userAuth = useSelector((state: any) => state.authReducer.auth)

  const MySwal = withReactContent(Swal);

  const handleLogout = () => {
    MySwal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to log out',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
    }).then((result: any) => {
      if (result.isConfirmed) {
        navigate('/signin');
      }
    });
  };

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await API.getAccountConsumerById(userAuth?.consumer_id);
          console.log('result:', response)
          dispatch(authSignIn(response.data.data[0]));
          setUpdate(false)
        } catch (error) {
            console.log(error)
        }
      };
    
      fetchData();
  }, [update, dispatch])

  const handleResponse = (response: any) => {
    if(response === "Successfully for update data account!") {
        setUpdate(true)
        setUpdateStatus(false)
    }
  }

  const handleErrorMessage = (error: string) => {
    setErrorStatus(error)
  }

   const listGender = [
    {label: "Select Your Gender", value: ""},
    {label: "Male", value: "Male"},
    {label: "Female", value: "Female"},
  ]

  const formik = useUpdateProfile({ onError: handleErrorMessage, onResponse: handleResponse })

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
                <img src={BgProfile} alt="bgProfile" className='hover:scale-[110%] ease brightness-[70%] duration-300 w-full mx-auto relative h-full object-cover' />
                <div className='absolute left-[50%] top-[50%] bg-white flex items-center justify-center transform translate-x-[-50%] translate-y-[-50%] z-[2] w-[150px] h-[150px] overflow-hidden rounded-full mx-auto shadow-lg order-2 border-slate-200 cursor-pointer hover:brightness-[90%] active:scale-[0.99]'>
                    <img src={`https://huda.descode.id/uploads/${formik.values.consumer_image_old}`} alt="fotoProfile" className='object-contain w-[96%] rounded-full' />
                </div>
            </div>

            <div className='relative w-[60%] ml-[20px] h-max px-[20px] pb-[60px] rounded-lg overflow-hidden'>
                <div onClick={handleLogout} className='absolute right-5 rounded-full cursor-pointer hover:brightness-[90%] flex bg-red-500 text-white items-center justify-center z-[2] active:scale-[0.99] shadow-md w-max h-[40px] flex px-5 items-center hover:brightness-[90%]'>
                    <FaSignOutAlt size={14} />
                    <p className='ml-3'>Sign-out</p>
                </div>

                <h2 className='relative font-bold text-[26px]'>Rahman aditya darussalam</h2>
                <h2 className='relative font-bold text-[20px]'>(ID: 2637DSG)</h2>
                
                <div className='w-full h-[1px] bg-slate-500 my-5'></div>
                <div className='w-full flex h-max'>
                   <form onSubmit={formik.handleSubmit} className='flex'>
                        <div className='w-1/2 min-h-[355px] pr-5 flex flex-col justify-start'>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.consumer_name} 
                                    name='consumer_name' 
                                    label='Username'
                                    disabled={!updateStatus}
                                    type="text"
                                    id='username'
                                    onError={formik.errors.consumer_name}
                                    onTouched={!!formik.touched.consumer_name}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    placeholder="Enter Your Name" 
                                />
                            </div>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.email_consumer} 
                                    name='email_consumer' 
                                    label='Email'
                                    disabled={!updateStatus}
                                    type="email"
                                    id='emailConsumer'
                                    onError={formik.errors.email_consumer}
                                    onTouched={!!formik.touched.email_consumer}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    placeholder="Enter Your Email" 
                                />
                            </div>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.gender} 
                                    name='gender' 
                                    typeInput='select-input'
                                    disabled={!updateStatus}
                                    options={listGender}
                                    label='Gender'
                                    id='gender'
                                    onError={formik.errors.gender}
                                    onTouched={!!formik.touched.gender}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                />
                            </div>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.address} 
                                    name='address' 
                                    typeInput='textarea-input'
                                    disabled={!updateStatus}
                                    label='Adress'
                                    id='adress'
                                    onError={formik.errors.address}
                                    onTouched={!!formik.touched.address}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    placeholder="Enter Your Address" 
                                />
                            </div>
                        </div>
                        <div className='w-1/2 min-h-[355px] pr-5 flex flex-col justify-start'>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.post_code} 
                                    name='post_code' 
                                    label='Post code'
                                    disabled={!updateStatus}
                                    type="number"
                                    id='postcode'
                                    onError={formik.errors.post_code}
                                    onTouched={!!formik.touched.post_code}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    placeholder="Enter Your PostCode" 
                                />
                            </div>
                            <div className="mb-5">
                                <InputField 
                                    value={formik.values.telephone_consumer} 
                                    name='telephone_consumer' 
                                    disabled={!updateStatus}
                                    label='Telephone number'
                                    id='Telephone'
                                    onError={formik.errors.telephone_consumer}
                                    onTouched={!!formik.touched.telephone_consumer}
                                    onChange={formik.handleChange} 
                                    onBlur={formik.handleBlur} 
                                    placeholder="Enter Your Number" 
                                />
                            </div>
                            {
                                updateStatus ? (
                                    <div className="mb-5">
                                        <InputField 
                                            name='consumer_image' 
                                            type='file'
                                            label='Consumer image'
                                            disabled={!updateStatus}
                                            id='consumerImage'
                                            onError={formik.errors.consumer_image}
                                            onTouched={!!formik.touched.consumer_image}
                                            onChange={(values: any) => {
                                                formik.setFieldValue('consumer_image', values.target.files[0])
                                            }} 
                                            onBlur={formik.handleBlur} 
                                        />
                                    </div>
                                ):
                                    null
                            }
                            <div className='flex items-center'>
                                {
                                    updateStatus ? (
                                        <>
                                            <Button typeButton="submit" text="Save update" status='primary' />
                                            <Button text="Cancel" status='delete' handleClick={() => setUpdateStatus(false)} style='ml-4' />
                                        </>

                                    ):
                                        <button className='shadow-lg h-max px-[20px] py-[12px] bg-blue-500 text-white rounded-lg text-center cursor-pointer hover:brightness-[96%] active:scale-[0.99] border-0 outline-0 flex items-center justify-center' onClick={() => setUpdateStatus(true)}>Edit profile</button>
                                }
                            </div>
                        </div>
                   </form>
                </div>
            </div>
        </section>

      <Footer /> 
    </>
  )
}

export default ProfileUser
