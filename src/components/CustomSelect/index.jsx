export default function CustomSelect({label, options}){
    return(
        <div className="w-full flex flex-col gap-2">
            <label className="text-[17px] font-bold">{label}</label>
            <select className="w-full h-[35px] bg-[#141414] rounded-lg pl-2 border border-[#3A364C] outline-none focus:border-purple-400 px-2">
                <option value="">Selecione...</option>
                {options.map((opcao) => {
                    return(
                        <option 
                        key={opcao} 
                        value={opcao}>
                        {opcao}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}