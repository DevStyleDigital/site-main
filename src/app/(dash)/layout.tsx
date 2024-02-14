import { ReactNode } from 'react';
import './global.css';

const RootDash = ({ children }: { children: ReactNode }) => {
  return <main>{children}</main>;
};

export default RootDash;
