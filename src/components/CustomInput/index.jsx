export default function CustomInput({label, placeholder, onChange, value, type, min, max, step}){
    return (
        <div className="flex flex-col w-full gap-2 ">
            <label className="text-[16px] font-bold">{label}</label>
            <input 
                className="w-full h-[35px] bg-[#141414] rounded-lg pl-2 border border-[#3A364C] outline-none focus:border-purple-400"
                type={type}
                value={value}
                placeholder={placeholder}
                min={min}
                max={max}
                step={step}
                onChange={onChange}
            />
        </div>
    )
}