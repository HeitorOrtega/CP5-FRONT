import { NextResponse } from 'next/server';


type ApiImage = {
  url: string;
  title: string;
};

type ApiResponse = {
  images: ApiImage[];
};

export async function GET() {
  try {
    const res = await fetch('https://wilsjame.github.io/how-to-nasa/');
    if (!res.ok) {
      console.error('Erro ao buscar dados da API externa:', res.statusText);
      throw new Error('Erro ao buscar dados da API externa');
    }

    const data: ApiResponse = await res.json(); 
    console.log('Dados recebidos da API:', data);

    
    const images = data.images?.map((img: ApiImage) => ({
      url: img.url || '', 
      title: img.title || 'Sem Título' /
    })) || [];

    return NextResponse.json({ images });
  } catch (error) {
    console.error('Erro na função GET:', error);
    return NextResponse.json({ error: 'Erro ao buscar dados da API' }, { status: 500 });
  }
}
