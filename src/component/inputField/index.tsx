import React from 'react';

const InputField = React.forwardRef(({
  label,
  onBlur,
  value,
  onChange,
  placeholder,
  type,
  name,
  id,
  typeInput,
  options,
  onError,
  onTouched,
  disabled,
}: {
  label?: string,
  onBlur?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  onChange?: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLTextAreaElement>) => void,
  value?: any,
  placeholder?: string,
  type?: string,
  name?: string,
  id?: string,
  typeInput?: string,
  options?: { label: string, value: string }[],
  onError?: string | undefined,
  onTouched?: boolean | undefined,
  disabled?: boolean,
}, ref: any) => {
  switch (typeInput) {
      case "select-input":
          return (
              <>
                <label htmlFor={id}>{label}</label>
                <select 
                    id={id}
                    disabled={disabled}
                    name={name} 
                    ref={ref}
                    className={`mt-3 border-0 p-3 w-full outline-2 outline-blue-400 rounded-md text-[14px] box-sizing ${onError && onTouched ? 'border-red-500 text-[red]' : ''} ${disabled ? 'bg-slate-300 cursor-not-allowed text-slate-500' : '' }`} 
                    value={value} 
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}>
                    {
                        options && options.map((opt, index) => (
                            <option key={opt.value} value={opt.value} disabled={index === 0}>
                                {opt.label}
                            </option>
                        ))
                    }
                </select>
                {
                    onError && onTouched ? (
                        <small className='text-[red] text-[12px] font-normal my-2'>
                            {onError}
                        </small>
                    ): null
                }
            </>
        )
    case "textarea-input":
        return (
            <>
            <label htmlFor={id}>{label}</label>
            <textarea
                id={id}
                name={name}
                disabled={disabled}
                value={value}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                style={{ height: '80px' }}
                className={`mt-3 bg-slate-200 border-0 p-3 w-full outline-2 outline-blue-400 rounded-md ${onError && onTouched ? 'border-red-500 text-red-500' : ''}${disabled ? 'bg-slate-300 cursor-not-allowed text-slate-500' : '' }`} // Tambahkan kelas sesuai kondisi yang sesuai
                placeholder={placeholder}
            >
            </textarea>
            {
                onError && onTouched ? (
                    <small className='text-[red] text-[12px] font-normal my-2'>
                        {onError}
                    </small>
                ): null
            }
          </>
        )
    default:
      return (
          <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                name={name}
                ref={ref}
                disabled={disabled}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={`mt-3 bg-slate-200 border-0 p-3 w-full outline-2 outline-blue-400 rounded-md ${onError && onTouched ? 'border-red-500 text-red-500' : ''} ${disabled ? 'bg-slate-300 cursor-not-allowed text-slate-500' : '' }`} // Tambahkan kelas sesuai kondisi yang sesuai
                placeholder={placeholder}
            />
            {
                onError && onTouched ? (
                    <small className='text-[red] text-[12px] font-normal my-2'>
                        {onError}
                    </small>
                ): null
            }
          </>
      )
  }
});

export default InputField;
