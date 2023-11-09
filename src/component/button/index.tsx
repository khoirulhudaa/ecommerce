interface ButtoInterface {
    type?: string,
    text?: string,
    status?: string,
    bgColor?: string,
    style?: string,
    handleClick?: () => void,
    typeButton?: "button" | "submit" | "reset", 
}

const Button = ({type, typeButton="button", text, status, handleClick, style}: ButtoInterface) => {
    switch(type) {
        case "outline":
            return (
                <button type={typeButton} onClick={handleClick} className={`w-full h-max px-[20px] py-[12px] bg-transparent border border-slate-300 rounded-lg text-center outline-0 cursor-pointer hover:brightness-[96%] active:scale-[0.99] flex items-center justify-center ${style}`}>
                    {text}
                </button>
            )
        default: 
            return (
                <button type={typeButton} onClick={handleClick} className={`${style} shadow-lg h-max px-[20px] py-[12px] ${status === 'primary' ? "bg-blue-500" : status === 'delete' ? "bg-red-500" : "bg-white"} ${status === 'primary' ? "text-white": status === 'delete' ? "text-white" : "text-black"} rounded-lg text-center cursor-pointer hover:brightness-[96%] active:scale-[0.99] border-0 outline-0 flex items-center justify-center`}>
                    {text}
                </button>
            )
    }
}

export default Button
