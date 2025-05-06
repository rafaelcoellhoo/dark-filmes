import CustomInput from "@/components/CustomInput";
import CustomSelect from "@/components/CustomSelect";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";
import { useState } from "react";

export default function Cadastrar() {
  const [ano, setAno] = useState("");
  const minAno = 1900;
  const maxAno = 2050;

  const [nota, setNota] = useState("");
  const minNota = 0.1;
  const maxNota = 10;
  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-full py-[40px] px-[70px] flex flex-col">
        <h1 className="text-[#9A86F4] text-[35px] font-bold">
          Adicione um novo filme
        </h1>
        <p className="text-gray-500 text-[14px]">
          Preencha o formulário abaixo para adicionar um novo filme à sua
          coleção
        </p>
        <div className="w-full flex justify-center pt-[40px]">
          <form className="w-[50%] h-auto min-h-[200px] bg-[#222222] rounded-2xl border border-[#3A364C] flex flex-col p-6 gap-3">
            <CustomInput
              label="Título:"
              placeholder="Digite o título do filme"
              type="text"
            />
            <CustomInput
              label="Diretor:"
              placeholder="Digite o nome do diretor"
              type="text"
            />
            <div className="w-full flex gap-4">
              <div className="w-[50%]">
                <CustomInput
                  label="Ano"
                  placeholder="Digite o ano de lançamento"
                  type="number"
                  min={minAno}
                  max={maxAno}
                />
              </div>
              <div className="w-[50%]">
                <CustomSelect
                  label="Gênero"
                  options={[
                    "Ação",
                    "Aventura",
                    "Animação",
                    "Comédia",
                    "Crime",
                    "Documentário",
                    "Drama",
                    "Fantasia",
                    "Ficção Científica",
                    "Musical",
                    "Mistério",
                    "Romance",
                    "Suspense",
                    "Terror",
                  ]}
                />
              </div>
            </div>
            <div className="w-[30%] flex gap-2">
              <div className="w-[70%] gap-2">
                <CustomInput
                  label="Nota (0-10)"
                  placeholder="0"
                  type="number"
                  step="0.1"
                  min={minNota}
                  max={maxNota}
                />
              </div>
              <p className="flex mt-9">0/10</p>
            </div>
            <div className="w-full flex flex-col gap-2">
              <label className="text-[17px] font-bold">Sinopse</label>
              <textarea className="w-full min-h-[150px] max-h-[150px] bg-[#141414] rounded-lg border border-[#3A364C] focus:border-purple-400 p-2 outline-none"></textarea>
            </div>
            <CustomInput 
                label="Banner"
                placeholder="URL da Imagem"
                type="text"
            />
            <div className="w-full flex justify-end gap-4">
                <button type="reset" className="w-[100px] h-[50px] cursor-pointer rounded-md bg-[#141414] hover:bg-white/10 border border-[#3a364c]">Cancelar</button>
                <button className="w-[100px] h-[50px] rounded-md cursor-pointer bg-[#0c2ce4] border border-[#3a364c]">Adicionar</button>

            </div>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}
