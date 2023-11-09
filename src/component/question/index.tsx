import { useNavigate } from 'react-router-dom';
import { Button } from '..';
import { BgWuestion } from '../../assets';
import { useFormikRequest } from '../../utils/validations/requestValidation';
import Alert from '../alert';
import InputField from '../inputField';

const Question = () => {

  const handleResponse = (response: number) => {
    if(response === 200) {
      Alert({
        title:'success', 
        text:"Succes to sent request!" ,
        icon:'success',
        showCancelButton: false,
      })
    } 
  }
  
  const handleError = (error: string) => {
    return (
      Alert ({
        title:'Error', 
        text:error ,
        icon:'error',
        showCancelButton: false,
      })
    ) 
  }

  const formik = useFormikRequest({ onError: handleError, onResponse: handleResponse })

  return (
    <div className='w-[93vw] ml-auto mr-auto rounded-lg h-[400px] my-[40px] relative overflow-hidden'>
        <div className='w-full h-full'>
            <div className='w-[100%] z-[2] h-[400px] top-0 bg-gradient-to-r from-[#0000ff] to-[#0000ffd0]'>
            </div>
            <div className='w-full h-full absolute z-[5] left-[40px] top-[40px]'>
                <h2 className='text-[40px] text-white w-[40%] font-bold'>An easy way to send requests to all suppliers</h2>
                <p className='text-[16px] mt-[20px] text-white w-[35%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className='w-[40%] right-[40px] h-[90%] top-5 bg-white rounded-lg p-[24px] flexflex-col justify-center items-center shadow-lg absolute z-[5]'>
                <form onSubmit={formik.handleSubmit} className='w-full'>
                  <div className="mb-5">
                    <InputField 
                        value={formik.values.email_consumer} 
                        name='email_consumer' 
                        label='Email'
                        type="email"
                        id='email'
                        disabled={true}
                        onError={formik.errors.email_consumer}
                        onTouched={!!formik.touched.email_consumer}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                    />
                  </div>
                  <div className="mb-5">
                    <InputField 
                        value={formik.values.messageRequest} 
                        name='messageRequest' 
                        label='Message'
                        type="text"
                        id='messageRequest'
                        onError={formik.errors.messageRequest}
                        onTouched={!!formik.touched.messageRequest}
                        onChange={formik.handleChange} 
                        onBlur={formik.handleBlur} 
                        placeholder="Enter Your Message" 
                    />
                  </div>
                  <Button typeButton='submit' text='Send now' status='primary' />
                </form>
            </div>
            <img src={BgWuestion} className='absolute left-0 top-0 w-full h-auto rounded-lg' alt="background" />
        </div>
    </div>
  )
}

export default Question
