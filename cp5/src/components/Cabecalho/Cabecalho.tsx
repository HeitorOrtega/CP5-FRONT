import Menu from "../Menu/Menu";

export default function Cabecalho() {
    return (
        <header className="bg-gray-800 text-white p-4">
          <h1 className="text-2xl font-bold">Worlds in Collision</h1>
          <Menu />
        </header>
      );
    };