const ErrorMessage = ({error}: {error: string}) => {
  return (
    <small className='text-[white] w-max rounded-full px-4 py-1 text-[12px] font-normal bg-[red] mb-[12px]'>
        {error}
    </small>
  )
}

export default ErrorMessage
