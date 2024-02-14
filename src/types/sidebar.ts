export interface iSidebarLinks {
  id: number;
  label: string;
  icon: React.ReactNode;
  href: string;
  type: number;
  subLink?: string;
}
