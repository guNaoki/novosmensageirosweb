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
    'bg-primary hover:bg-primary-hover text-white shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 border border-primary/20',
  secondary:
    'bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700/80 shadow-xs',
  outline:
    'bg-transparent hover:bg-slate-100/80 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700',
  ghost:
    'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-sky-400',
  whatsapp:
    'bg-[#15803d] hover:bg-[#166534] text-white shadow-md shadow-emerald-700/20 hover:shadow-lg hover:shadow-emerald-700/30 border border-emerald-600/30',
  white:
    'bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-1.5 text-xs rounded-full font-semibold gap-2',
  md: 'px-5 py-2.5 text-xs sm:text-sm rounded-full font-bold gap-2.5',
  lg: 'px-7 py-3.5 text-sm sm:text-base rounded-full font-bold gap-3',
};

const iconWrapperStyles: Record<ButtonVariant, string> = {
  primary: 'bg-white/15 text-white',
  secondary: 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200',
  outline: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200',
  ghost: 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300',
  whatsapp: 'bg-white/20 text-white',
  white: 'bg-white/20 text-white',
};

const iconSizes: Record<ButtonSize, string> = {
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-7 h-7',
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
    'group inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-950 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:transform-none';

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  const iconWrapClass = `rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105 ${iconWrapperStyles[variant]} ${iconSizes[size]}`;

  const renderIcon = (icon: React.ReactNode, isRight = false) => {
    return (
      <span className={`${iconWrapClass} ${isRight ? 'group-hover:translate-x-0.5' : 'group-hover:-translate-x-0.5'}`}>
        {icon}
      </span>
    );
  };

  if (as === 'a' || href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : rel}
        className={combinedClasses}
      >
        {iconLeft && renderIcon(iconLeft, false)}
        <span>{children}</span>
        {iconRight && renderIcon(iconRight, true)}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {iconLeft && renderIcon(iconLeft, false)}
      <span>{children}</span>
      {iconRight && renderIcon(iconRight, true)}
    </button>
  );
}
