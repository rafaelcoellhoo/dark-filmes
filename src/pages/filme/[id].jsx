import PageWrapper from "@/components/PageWrapper";
import { useRouter } from "next/router";
import { LuArrowLeft } from "react-icons/lu";
import { PiNotePencil } from "react-icons/pi";
import { FaRegTrashAlt } from "react-icons/fa";
import { use, useEffect, useState } from "react";
import instance from "@/api/instance";

export default function Filme() {
  const router = useRouter();
  const { id } = router.query;
  const [filme, setFilme] = useState({});

  useEffect(() => {
    async function getFilmeById(){
      const response = await instance.get(`/api/movies/${id}`);
      setFilme(response.data)
    }

    if(id){
      getFilmeById()
    }
  }
  ,[]);
  
  return (
    <PageWrapper showHeader={false}>
      <div className="w-full h-full min-h-screen flex flex-col px-[300px] pt-12 items-start">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 text-[#8A898C] gap-2 flex items-center justify-center rounded-lg hover:bg-[#27282b] hover:text-[#8f7bd8]"
        >
          <LuArrowLeft />
          <p>Voltar para a lista de filmes</p>
        </button>
        <div className="w-full h-[90%] min-h-[90vh] flex">
          <div className="w-[40%] h-full flex flex-col">
            <div className="w-full h-[90%]">
              <img
                className="w-full h-full rounded-lg object-cover"
                src={filme.banner}
                alt=""
              />
            </div>
            <div className="w-full gap-4 pt-4 justify-between flex h-[10%]">
              <button className="w-[46%] h-full border flex items-center justify-center gap-2 py-2 border-[#9b87f533] rounded-md text-[#9b87f5] hover:bg-[#9b87f5]/20 cursor-pointer">
                <PiNotePencil size={20} />
                Editar Filme
              </button>
              <button className="w-[46%] h-full border flex items-center justify-center py-2 gap-2 border-[#ef444433] rounded-md text-[#ef4444] hover:bg-[#ef4444]/20 cursor-pointer">
                {" "}
                <FaRegTrashAlt size={20} />
                Excluir Filme
              </button>
            </div>
          </div>
          <div className="w-[60%] pl-2 h-full flex flex-col">
            <div className="w-full flex gap-2 items-baseline">
              <h1 className="text-[28px] text-nowrap text-[#9b87f5] font-bold">
                {filme.titulo}
              </h1>
              <p className="text-[#8a898c] font-semibold text-[17px]">{filme.ano}</p>
            </div>
            <div className="w-full gap-4 flex">
              <div className="py-1 px-4 rounded-2xl bg-[#4ade80]/20 text-[#4ade80]">
                <p className="font-semibold text-[17px]">{filme.nota}/10</p>
              </div>
              <div className="w-full gap-4 flex">
                <div className="py-1 px-4 rounded-2xl bg-[#9b87f5]/20 text-[#9b87f5]">
                  <p>{filme.genero}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col mt-7">
              <h4 className="font-bold text-[20px]">Diretor</h4>
              <p className="text-[#8a898c]">{filme.diretor}</p>
            </div>
            <div className="w-full flex flex-col mt-7">
              <h4 className="font-bold text-[20px]">Sinopse</h4>
              <p className="text-[#8a898c]">
                {filme.sinopse}
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
