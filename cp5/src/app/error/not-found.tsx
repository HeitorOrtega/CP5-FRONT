import Image from "next/image";
import errorImage from "../../../public/images/erro.jpg";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image src={errorImage} alt="Página não encontrada" width={400} height={300} />
      <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
      <p>Desculpe, mas a página que você está procurando não existe.</p>
    </div>
  );
}
