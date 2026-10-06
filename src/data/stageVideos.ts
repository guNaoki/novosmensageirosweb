/**
 * Conteúdo do Ato 2 (palco de vídeos). Para adicionar capas novas basta incluir itens aqui:
 * o palco usa até 8 posições (SLOTS em ScrollStage.tsx). Rode `python scripts/download_reels_covers.py`
 * e aponte `src` para os arquivos gerados (idealmente convertidos para .webp ~400px de largura).
 */
export type Platform = 'instagram' | 'tiktok' | 'youtube';

export interface StageVideo {
  id: string;
  src: string;
  alt: string;
  platform: Platform;
}

export const STAGE_VIDEOS: StageVideo[] = [
  { id: 'influencias', src: '/posts/post_influencias.webp', alt: 'Post sobre influências espirituais', platform: 'instagram' },
  { id: 'nosso-lar', src: '/posts/post_nosso_lar.webp', alt: 'Post sobre Nosso Lar', platform: 'instagram' },
  { id: 'andre-luiz', src: '/posts/post_andre_luiz.webp', alt: 'Post sobre André Luiz', platform: 'instagram' },
  { id: 'chico', src: '/posts/post_chico.webp', alt: 'Post sobre Chico Xavier', platform: 'instagram' },
  { id: 'kardec', src: '/posts/post_kardec.webp', alt: 'Post sobre Allan Kardec', platform: 'instagram' },
];
