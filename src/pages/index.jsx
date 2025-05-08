import CardFilme from "@/components/CardFilme";
import Header from "@/components/Header";
import PageWrapper from "@/components/PageWrapper";

export default function Home(){
  return(
     <PageWrapper> 
      <div className="w-full flex flex-col items-center justify-center pt-6">
        <h1 className="text-[35px] font-bold text-[#907cda]">Sua Coleção de Filmes</h1>
        <p className="text-[#8a8985] text-[15px]">Acompanhe seus filmes favoritos e adicione novos filmes à sua coleção.</p>
      </div>
      <div className="w-full h-auto flex flex-wrap justify-center">
        <CardFilme 
        
        />
      </div>
    </PageWrapper>
  )
}