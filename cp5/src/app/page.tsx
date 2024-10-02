import capaLivro from "../../public/images/livro.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <main className="flex-grow flex flex-col items-center justify-start px-4 bg-gray-100"> 
        <h1 className="text-4xl font-bold mt-6 mb-4 text-center">Worlds in Collision</h1>

        <div className="mb-6"> 
          <Image src={capaLivro} alt="Capa do livro Worlds in Collision" width={300} height={450} className="rounded" />
        </div>
        <div className="max-w-xl text-left mb-8">
          <p className="text-lg mb-4">
            Worlds in Collision é uma obra seminal escrita por Immanuel Velikovsky, publicada em 1950. Nesta
            controvérsia livro, Velikovsky apresenta teorias audaciosas sobre a história do nosso sistema solar e
            suas interações, desafiando o entendimento convencional da ciência e da história.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Sobre o Autor</h2>
          <p className="mb-4">
            Immanuel Velikovsky (1895-1979) foi um psicanalista e escritor russo-americano. Ele é mais conhecido por suas
            teorias controversas sobre a história antiga e a astronomia. Velikovsky argumentou que eventos cataclísmicos,
            incluindo passagens de cometas e planetas, moldaram a história da Terra e influenciaram as narrativas das
            civilizações antigas.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Principais Ideias</h2>
          <ul className="list-disc list-inside">
            <li>A Terra sofreu grandes catástrofes em períodos críticos, afetando o desenvolvimento das sociedades humanas.</li>
            <li>A interação entre planetas, incluindo Vênus e Marte, teve impactos diretos em eventos históricos, como mitos e lendas.</li>
            <li>Velikovsky usou uma ampla gama de fontes históricas e mitológicas para fundamentar suas teorias.</li>
          </ul>
        </div>
      </main> 
    </div>
  );
}
