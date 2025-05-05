import { LuFilm } from "react-icons/lu";

export default function Header({ showButton = true }){
    return(
        <header className="w-full h-[70px] flex items-center justify-between pr-2 bg-[#0C0F15]">
           <div className="flex h-full gap-2 items-center justify-center pl-2">
           <LuFilm color="#9B87F5" size={35}/>
           <h2 className="font-bold text-[20px]">Dark Films</h2>
           </div> 
           {showButton && (
            <button className="w-[150px] h-[70%] rounded-md bg-[#9B87F5] font-bold hover:bg-[#9B87F5]/70 cursor-pointer">Adicionar Filme</button>
           )}
        </header>
    )
}