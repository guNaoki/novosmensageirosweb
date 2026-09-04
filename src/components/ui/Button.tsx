import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'white';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
  rel?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary hover:bg-primary-hover text-white shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 border border-primary-light/10',
  secondary:
    'bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-sm',
  outline:
    'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600',
  ghost:
    'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400',
  whatsapp:
    'bg-whatsapp hover:bg-whatsapp-hover text-white shadow-xl shadow-whatsapp/30 hover:shadow-2xl hover:shadow-whatsapp/40',
  white:
    'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3.5 py-1.5 text-xs rounded-xl font-bold gap-1.5',
  md: 'px-5 py-2.5 text-xs md:text-sm rounded-xl font-extrabold gap-2',
  lg: 'px-7 py-4 text-sm md:text-base rounded-2xl font-extrabold gap-2.5',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  as = 'button',
  href,
  target,
  rel,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-95 select-none focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:pointer-events-none disabled:transform-none';

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClasses}
      >
        {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
        {children}
        {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {iconLeft && <span className="inline-flex shrink-0">{iconLeft}</span>}
      {children}
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </button>
  );
}
