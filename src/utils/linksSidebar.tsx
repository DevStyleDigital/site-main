import { iSidebarLinks } from '@/types/sidebar';
import { FileTextIcon, HomeIcon } from '@radix-ui/react-icons';

export const LinksSideBar: iSidebarLinks[] = [
  {
    id: 1,
    label: 'Início',
    icon: <HomeIcon />,
    href: '/admin',
    type: 1,
  },
  {
    id: 2,
    label: 'Blog',
    icon: <FileTextIcon />,
    href: '/admin/blog',
    subLink: '/admin/blog/create',
    type: 1,
  },
];
