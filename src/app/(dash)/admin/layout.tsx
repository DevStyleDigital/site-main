import SideBarDash from '@/components/sidebar/sideBarDash';
import { ReactNode } from 'react';
import 'react-quill/dist/quill.snow.css';

const RootAdmin = ({ children }: { children: ReactNode }) => {
  return (
    <main className="flex">
      <SideBarDash />
      <div className="content h-full">{children}</div>
    </main>
  );
};

export default RootAdmin;
