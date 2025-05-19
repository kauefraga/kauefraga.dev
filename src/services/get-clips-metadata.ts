export type ClipMetadata = {
  id: string; // UUID válido
  title: string;
  description?: string;
  bucketUrl: string;
  mimeType: "video/mp4";
  size: number; // em bytes
  status: "uploaded" | "not_uploaded";
  createdAt: string; // ISO 8601
};

export const getClipsMetadata = () => {
  return [
    {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      title: 'Introdução ao Projeto',
      description: 'Vídeo introdutório com visão geral do projeto.',
      bucketUrl: 'https://storage.example.com/videos/intro-projeto.mp4',
      mimeType: 'video/mp4',
      size: 10528340,
      status: 'uploaded',
      createdAt: '2025-04-01T10:15:00Z',
    },
    {
      id: 'cc8e0450-6b9c-4118-b053-9a764e67d31f',
      title: 'Configuração do Ambiente',
      description:
        'Tutorial sobre como configurar o ambiente de desenvolvimento.',
      bucketUrl: 'https://storage.example.com/videos/setup-ambiente.mp4',
      mimeType: 'video/mp4',
      size: 15720392,
      status: 'uploaded',
      createdAt: '2025-04-02T11:30:00Z',
    },
    {
      id: 'c99f6d5d-542f-42e9-8480-0a9608fbe8be',
      title: 'Primeiros Passos com o Código',
      bucketUrl: 'https://storage.example.com/videos/primeiros-passos.mp4',
      mimeType: 'video/mp4',
      size: 13204550,
      status: 'uploaded',
      createdAt: '2025-04-03T09:45:00Z',
    },
    {
      id: '31b8e5c1-9a25-46c0-b591-57d7b4a01d2d',
      title: 'Testes Automatizados',
      bucketUrl: 'https://storage.example.com/videos/testes-automatizados.mp4',
      mimeType: 'video/mp4',
      size: 14890012,
      status: 'uploaded',
      createdAt: '2025-04-04T14:20:00Z',
    },
    {
      id: '72d8f18c-e18d-4d68-8c3e-045788fa07f7',
      title: 'Deploy na Nuvem',
      description: 'Como fazer deploy do projeto usando serviços em nuvem.',
      bucketUrl: 'https://storage.example.com/videos/deploy-nuvem.mp4',
      mimeType: 'video/mp4',
      size: 19384930,
      status: 'uploaded',
      createdAt: '2025-04-05T16:00:00Z',
    },
    {
      id: '7d5abf7a-163f-41c7-aec7-249ef9e6dfcb',
      title: 'Considerações Finais',
      bucketUrl: 'https://storage.example.com/videos/consideracoes-finais.mp4',
      mimeType: 'video/mp4',
      size: 9983742,
      status: 'not_uploaded',
      createdAt: '2025-04-06T08:10:00Z',
    },
  ] as ClipMetadata[];
};
