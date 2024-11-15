'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';
import { MovingBorder } from '../ui/moving-border';
import { Sparkles } from 'lucide-react';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  fill?: boolean;
  light?: boolean;
  href: string;
  className?: string;
  notBlank?: boolean;
  aria?: string;
}
const Button = ({
  onClick,
  children,
  fill,
  light,
  href,
  className,
  notBlank,
  aria,
}: ButtonProps) => {
  return (
    <Link
      target={!notBlank ? '_blank' : ''}
      href={href}
      aria-label={aria}
      onClick={onClick}
      className={clsx(
        className,
        'py-[.7rem] flex items-center gap-[.7rem] max-h-[3rem] max-lg:py-[.5rem] whitespace-nowrap px-[1.5rem] max-lg:px-[1rem] max-md:text-[.8rem] bg-transparent border-secondary_black-950 rounded-md border-[1px] font-semibold text-neutral-950 duration-500 transition-color hover:bg-[#F6F6F6]',
        {
          'text-white !bg-secondary_black-950 hover:!bg-secondary_black-950/80': fill,
          '!text-secondary_black-950 !bg-white flex items-center gap-[.75rem] hover:!bg-white/80':
            light,
        },
      )}
    >
      {children}
    </Link>
  );
};

export const ButtonFree = ({ invert }: { invert?: boolean }) => (
  <Button
    className={clsx(
      'inline-flex relative overflow-hidden h-12 items-center justify-center rounded-md border backdrop-blur-lg hover:bg-neutral-950/5 border-neutral-950 px-6 font-medium text-neutral-950 transition-colors focus:outline-none focus:ring-4 focus:ring-neutral-950/20 focus:ring-offset-2 focus:ring-offset-[#E9F7FF]',
      {
        'hover:bg-white/5 !border-white text-white ring-0': invert,
      },
    )}
    href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+Nesxp."
  >
    <MovingBorder duration={100000} rx="10%" ry="10%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    <MovingBorder duration={150000} rx="50%" ry="50%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    <MovingBorder duration={200000} rx="100%" ry="100%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    <MovingBorder duration={250000} rx="25%" ry="25%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    <MovingBorder duration={300000} rx="75%" ry="75%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    <MovingBorder duration={350000} rx="0%" ry="0%">
      <Sparkles size="2rem" className="opacity-5" />
    </MovingBorder>
    Obter Uma Consulta Gratis
  </Button>
);

export default Button;
