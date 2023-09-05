import { Button } from '..';
import { BgWuestion } from '../../assets'
import { FieldError, useForm } from 'react-hook-form'
import { CheckoutInterface } from '../../utils/interfaces/checkoutInterface';

const Question = () => {

 const { register, handleSubmit, formState: {errors} } = useForm({
    defaultValues: {
        product_name: '',
        detail_product: '',
        quantity_product: 0,
    }
 })

 const ErrorMessage = ({error}: {error: FieldError | undefined}) => {
    if (!error) return null;
    if (error.type === 'required') return <p>This field is required</p>;
    if (error.type === 'minLength') return <p>Minimum length is 1</p>;
    return null;
  };

  return (
    <div className='w-[92vw] ml-auto mr-auto rounded-lg h-[400px] my-[40px] relative overflow-hidden'>
        <div className='w-full h-full'>
            <div className='w-[100%] z-[2] h-[400px] top-0 bg-gradient-to-r from-[#0000ff] to-[#0000ffd0]'>
            </div>
            <div className='w-full h-full absolute z-[5] left-[40px] top-[40px]'>
                <h2 className='text-[40px] text-white w-[40%] font-bold'>An easy way to send requests to all suppliers</h2>
                <p className='text-[16px] mt-[20px] text-white w-[35%]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
            </div>
            <div className='w-[40%] right-[40px] h-[90%] top-5 bg-white rounded-lg p-[20px] flexflex-col justify-center items-center shadow-lg absolute z-[5]'>
                <form onSubmit={handleSubmit((data) => {alert(JSON.stringify(data))})}>
                    <input placeholder='Product name' className='w-full py-[10px] px-4 rounded-lg mb-7 border border-slate-400 outline-0' {...register("product_name",  { required: true })} />
                    <ErrorMessage error={errors.product_name} />
                    <input placeholder='Detail product' className='w-full py-[10px] px-4 rounded-lg mb-7 border border-slate-400 outline-0' {...register("detail_product", { required: true })}/>
                    <ErrorMessage error={errors.detail_product} />
                    <div className='w-max flex items-center h-max'>
                        <p className='mr-[10px] font-semibold'>Quantity : </p>
                        <input placeholder='Quantity' className='w-[60px] h-[40px] py-1 px-2 rounded-lg border border-slate-400 outline-0' type='number' {...register("quantity_product", { required: true, minLength: 1 })}/>
                    </div>
                    <ErrorMessage error={errors.quantity_product} />
                    <Button text='Send inquiry' status='primary' style='mt-5 absolute bottom-[20px]' />
                </form>
            </div>
            <img src={BgWuestion} className='absolute left-0 top-0 w-full h-auto rounded-lg' alt="background" />
        </div>
    </div>
  )
}

export default Question
