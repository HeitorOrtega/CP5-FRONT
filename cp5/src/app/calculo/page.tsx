import Image from 'next/image';
import calculo from '../../../public/images/calculo.jpg';

export default function Calculo() {
    return (
      <div className="flex flex-col items-center justify-start h-screen px-4 bg-gray-100">
  
        <h1 className="text-4xl font-bold mt-6 mb-4 text-center">Cálculos de Immanuel Velikovsky</h1>

        <div className="mb-6">
            <Image src={calculo} alt="Immanuel Velikovsky fazendo calculos" width={300} height={450} className="rounded" />
        </div>
  
        <div className="max-w-xl text-left mb-8">
          <p className="text-lg mb-4">
            Os cálculos apresentados por Velikovsky em suas teorias foram amplamente criticados pela comunidade científica,
            especialmente por violarem as leis da física, como a gravitação e a estabilidade orbital dos planetas.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Teorias sobre Vênus e Marte</h2>
          <p className="mb-4">
            Velikovsky propôs que Vênus foi ejetado de Júpiter e, em seu movimento instável, se aproximou perigosamente da
            Terra, provocando cataclismos como terremotos e inundações globais. Marte, em outro momento da história, também
            teria interagido com a Terra, gerando mais destruição.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Críticas aos Cálculos</h2>
          <ul className="list-disc list-inside">
            <li>Os eventos propostos por Velikovsky contradizem as leis da mecânica celeste, como a conservação do momento angular.</li>
            <li>Os encontros próximos entre planetas que ele sugeriu são considerados altamente improváveis sem que houvesse uma destruição total dos corpos celestes envolvidos.</li>
            <li>Seus cálculos não seguiram métodos científicos rigorosos, e a comunidade científica rejeitou amplamente suas conclusões.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2">Evidências Baseadas em Textos Antigos</h2>
          <p className="mb-4">
            Velikovsky buscou respaldo para suas teorias em textos antigos e mitologias de várias civilizações, que ele acreditava
            descreverem eventos astronômicos. Contudo, suas interpretações desses textos foram frequentemente criticadas como
            inadequadas ou exageradas.
          </p>
        </div>
      </div>
    );
  };