import Image from 'next/image';
import impactosFoto from '../../../public/images/immanuel-lendo.jpg';

export default function Impactos() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-start px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mt-6 mb-4 text-center">Impactos das Teorias de Immanuel Velikovsky</h1>

        <div className="mb-6">
          <Image src={impactosFoto} alt="Impactos das teorias de Velikovsky" width={300} height={450} className="rounded" />
        </div>

        <div className="max-w-xl text-left mb-8">
          <p className="text-lg mb-4">
            As teorias de Immanuel Velikovsky, especialmente apresentadas em seu livro Worlds in Collision, geraram impactos significativos tanto na comunidade científica quanto na cultura popular. Seu trabalho desafiou normas estabelecidas, levando a debates que vão além da astronomia e da geologia.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Impactos na Comunidade Científica</h2>
          <p className="mb-4">
            Embora amplamente rejeitadas, as ideias de Velikovsky estimularam debates sobre a natureza da ciência e a relação entre mitologia e história. 
            A controvérsia levantou questões sobre a metodologia científica e a aceitação de teorias não convencionais, desafiando a ortodoxia e instigando algumas investigações em áreas que antes eram consideradas separadas.
          </p>
          <p className="mb-4">
            Além disso, seu trabalho fez com que cientistas refletissem sobre a possibilidade de fenômenos astronômicos terem um impacto direto na história humana. Essa discussão é um lembrete da importância do pensamento crítico e da abertura a novas ideias, mesmo que sejam controversas.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Repercussões Culturais</h2>
          <p className="mb-4">
            O trabalho de Velikovsky alcançou um público amplo, inspirando obras de ficção, documentários e debates na mídia. 
            Seu enfoque interdisciplinar também encorajou leitores a questionar narrativas históricas tradicionais, levando a um maior interesse por mitologia e história comparativa.
          </p>
          <p className="mb-4">
            Muitos autores e cineastas têm explorado suas ideias, incorporando conceitos de cataclismos e interações planetárias em suas obras, levando sua influência além do campo acadêmico.
            O impacto cultural de Velikovsky é visível em várias mídias, onde suas teorias são frequentemente mencionadas em contextos que vão desde literatura até documentários de ciência popular.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Legado Duradouro</h2>
          <p className="mb-4">
            O legado de Velikovsky permanece, com seus livros ainda sendo discutidos e analisados. A polêmica em torno de suas teorias contribuiu para um entendimento mais profundo dos limites da ciência e da importância do pensamento crítico.
          </p>
          <p className="mb-4">
            O impacto de Velikovsky também pode ser visto em movimentos contemporâneos que desafiam o consenso científico, muitas vezes em busca de uma narrativa mais ampla que conecte ciência, história e mitologia. Sua obra serve como um lembrete da necessidade de avaliar criticamente todas as evidências e teorias, independentemente de quão radicais possam parecer.
          </p>
        </div>
      </main>
    </div>
  );
};
