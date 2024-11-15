'use client';
import { ReactNode } from 'react';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import Link from 'next/link';

const Root = ({ children, ...props }: { children: ReactNode; className: string }) => {
  return <motion.div {...props}>{children}</motion.div>;
};

const Title = ({ children, ...props }: { children: ReactNode; className: string }) => {
  return <h1 {...props}>{children}</h1>;
};

const Text = ({ children, ...props }: { children: ReactNode; className: string }) => {
  return <span {...props}>{children}</span>;
};

const Button = ({ children, ...props }: { children: ReactNode; className: string, href?: string }) => {
  if(props.href){
    return (
      <Link href={props.href} target='blank' aria-label='link' {...props}>
        {children}
      </Link>
    )
  }
  return (
    <button aria-label="button" {...props}>
      {children}
    </button>
  );
};

const Image = ({ children, ...props }: { children: ReactNode; className: string }) => {
  return <div {...props}>{children}</div>;
};

export const Card = {
  Root,
  Title,
  Text,
  Button,
  Image,
};
