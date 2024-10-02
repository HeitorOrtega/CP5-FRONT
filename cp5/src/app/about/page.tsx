import React from 'react';
import Image from 'next/image';
import velikovskyFoto from '../../../public/images/immanuel.jpg';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow flex flex-col items-center justify-start px-4 bg-gray-100">
        <h1 className="text-4xl font-bold mt-6 mb-4 text-center">Sobre Immanuel Velikovsky</h1>

        <div className="mb-6">
          <Image src={velikovskyFoto} alt="Immanuel Velikovsky" width={300} height={450} className="rounded" />
        </div>

        <div className="max-w-xl text-left mb-8">
          <p className="text-lg mb-4">
            Immanuel Velikovsky (1895-1979) foi um psicanalista e escritor russo-americano, conhecido por suas teorias
            controversas que desafiam a ciência convencional. Ele se destacou principalmente por sua obra Worlds in Collision,
            onde argumentou que eventos cataclísmicos moldaram a história da Terra e influenciaram as narrativas das
            civilizações antigas.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Vida e Carreira</h2>
          <p className="mb-4">
            Velikovsky nasceu em uma família judia na Rússia e se formou em medicina. Ele se mudou para os Estados Unidos
            na década de 1930, onde começou a desenvolver suas teorias. Seu trabalho muitas vezes foi recebido com resistência
            pela comunidade científica, mas também atraiu uma base de seguidores interessados em suas ideias inovadoras.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Principais Contribuições</h2>
          <ul className="list-disc list-inside">
            <li>Desenvolvimento de teorias sobre catástrofes planetárias e sua relação com a história humana.</li>
            <li>Exploração de conexões entre mitologia e eventos astronômicos.</li>
            <li>Publicação de várias obras além de Worlds in Collision, incluindo Ages in Chaos e Earth in Upheaval.</li>
          </ul>
        </div>
      </main>
    </div>
  );
};
