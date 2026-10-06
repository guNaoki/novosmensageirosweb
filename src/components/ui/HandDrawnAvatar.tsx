/**
 * Avatar no estilo do rascunho do projeto: traço único azul, círculo "imperfeito",
 * cabelo com hachura, sorriso. Anônimo por design: o que muda é o papel (acessório/cabelo), nunca o rosto real.
 * Reutilizável em qualquer página (Resgate, História...).
 */
export type AvatarHair = 'short' | 'long' | 'bun' | 'cap';
export type AvatarProp = 'mic' | 'pencil' | 'headphones' | 'play' | 'laptop' | 'chat';

interface HandDrawnAvatarProps {
  hair?: AvatarHair;
  glasses?: boolean;
  prop?: AvatarProp;
  className?: string;
}

const STROKE = 'currentColor';

function Hair({ type }: { type: AvatarHair }) {
  switch (type) {
    case 'long':
      return (
        <g>
          <path d="M44 62 C40 36, 64 28, 82 34 C98 40, 100 58, 96 84 C92 70, 90 56, 84 50 C70 44, 54 48, 44 62Z" fill={STROKE} fillOpacity="0.22" stroke={STROKE} strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M48 58 L45 82 M96 58 L98 84" stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      );
    case 'bun':
      return (
        <g>
          <circle cx="70" cy="30" r="8" fill={STROKE} fillOpacity="0.22" stroke={STROKE} strokeWidth="2.6" />
          <path d="M46 56 C48 38, 92 38, 94 56 C84 48, 56 48, 46 56Z" fill={STROKE} fillOpacity="0.22" stroke={STROKE} strokeWidth="2.6" strokeLinejoin="round" />
        </g>
      );
    case 'cap':
      return (
        <g>
          <path d="M44 56 C46 34, 94 34, 96 56 Z" fill={STROKE} fillOpacity="0.22" stroke={STROKE} strokeWidth="2.6" strokeLinejoin="round" />
          <path d="M92 54 L110 58" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    default:
      return (
        <g>
          <path d="M44 58 C42 40, 58 32, 78 34 C92 36, 98 48, 96 60 C86 50, 62 46, 44 58Z" fill={STROKE} fillOpacity="0.22" stroke={STROKE} strokeWidth="2.6" strokeLinejoin="round" />
          {/* hachura do cabelo, como no rascunho */}
          <path d="M56 38 L52 50 M64 36 L61 49 M72 36 L70 48 M80 38 L79 49" stroke={STROKE} strokeWidth="1.8" strokeLinecap="round" opacity="0.8" />
        </g>
      );
  }
}

function Prop({ type }: { type: AvatarProp }) {
  switch (type) {
    case 'mic':
      return (
        <g transform="translate(88 96)">
          <rect x="0" y="0" width="10" height="18" rx="5" fill={STROKE} fillOpacity="0.2" stroke={STROKE} strokeWidth="2.4" />
          <path d="M-4 12 C-4 24, 14 24, 14 12 M5 22 L5 28" stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </g>
      );
    case 'pencil':
      return (
        <g transform="translate(86 92) rotate(35)">
          <rect x="0" y="0" width="8" height="30" rx="2" fill={STROKE} fillOpacity="0.2" stroke={STROKE} strokeWidth="2.4" />
          <path d="M0 30 L4 38 L8 30" stroke={STROKE} strokeWidth="2.4" strokeLinejoin="round" fill="none" />
        </g>
      );
    case 'headphones':
      return (
        <g>
          <path d="M40 66 C38 34, 102 34, 100 66" stroke={STROKE} strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <rect x="34" y="62" width="10" height="18" rx="5" fill={STROKE} fillOpacity="0.28" stroke={STROKE} strokeWidth="2.4" />
          <rect x="96" y="62" width="10" height="18" rx="5" fill={STROKE} fillOpacity="0.28" stroke={STROKE} strokeWidth="2.4" />
        </g>
      );
    case 'play':
      return (
        <g transform="translate(84 92)">
          <rect x="0" y="0" width="30" height="22" rx="5" fill={STROKE} fillOpacity="0.15" stroke={STROKE} strokeWidth="2.4" />
          <path d="M12 6 L21 11 L12 16Z" fill={STROKE} />
        </g>
      );
    case 'laptop':
      return (
        <g transform="translate(40 100)">
          <rect x="4" y="0" width="52" height="30" rx="4" fill="white" fillOpacity="0.01" stroke={STROKE} strokeWidth="2.4" />
          <path d="M0 34 L60 34" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
          <path d="M22 12 L28 17 L22 22 M34 22 L42 22" stroke={STROKE} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      );
    case 'chat':
      return (
        <g transform="translate(86 88)">
          <path d="M0 4 a8 8 0 0 1 8 -8 h18 a8 8 0 0 1 8 8 v12 a8 8 0 0 1 -8 8 h-12 l-8 8 v-8 a8 8 0 0 1 -6 -8Z" fill={STROKE} fillOpacity="0.15" stroke={STROKE} strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M17 17 c-5 -3 -7 -6 -5 -9 a3.5 3.5 0 0 1 5 0 a3.5 3.5 0 0 1 5 0 c2 3 0 6 -5 9Z" fill={STROKE} fillOpacity="0.7" transform="translate(0 -1) scale(0.9)" />
        </g>
      );
  }
}

export default function HandDrawnAvatar({ hair = 'short', glasses = false, prop = 'mic', className = '' }: HandDrawnAvatarProps) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-hidden="true"
      className={`text-sky-500 dark:text-sky-300 ${className}`}
    >
      {/* moldura em traço orgânico, como no rascunho */}
      <path
        d="M70 7 C106 6, 134 34, 133 70 C132 107, 105 135, 69 134 C33 133, 7 105, 8 69 C9 33, 34 8, 70 7Z"
        stroke={STROKE}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M72 11 C103 12, 129 37, 128 68" stroke={STROKE} strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />

      {/* ombros */}
      <path d="M34 128 C36 100, 104 100, 106 128" className="fill-white dark:fill-slate-900" stroke={STROKE} strokeWidth="3" strokeLinecap="round" />
      <path d="M60 99 C62 106, 78 106, 80 99" stroke={STROKE} strokeWidth="2.4" strokeLinecap="round" />

      {/* cabeça */}
      <circle cx="70" cy="72" r="26" className="fill-white dark:fill-slate-900" stroke={STROKE} strokeWidth="3" />
      <Hair type={hair} />

      {/* olhos + óculos + sorriso */}
      {glasses ? (
        <g stroke={STROKE} strokeWidth="2.6">
          <circle cx="59" cy="73" r="8" />
          <circle cx="81" cy="73" r="8" />
          <path d="M67 73 L73 73" strokeLinecap="round" />
        </g>
      ) : null}
      <circle cx="59" cy="73" r="2.2" fill={STROKE} />
      <circle cx="81" cy="73" r="2.2" fill={STROKE} />
      <path d="M62 86 C66 92, 74 92, 78 86" stroke={STROKE} strokeWidth="2.8" strokeLinecap="round" />

      <Prop type={prop} />
    </svg>
  );
}
