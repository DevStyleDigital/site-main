import { iFollows } from '@/types/follows';
import Nesxp from '@/assets/img/Nesxp.png';
import Instagram from '@/assets/img/isntagram.jpg';
import GitHub from '@/assets/img/github.png';
import Linkedin from '@/assets/img/linkedin.webp';
export const FollowsArray: iFollows[] = [
  {
    id: 1,
    label: 'Instagram',
    link: 'https://www.instagram.com/Nesxpd/',
    name: '@Nesxpd',
    logo: Nesxp,
    img: Instagram,
  },
  {
    id: 2,
    label: 'Github',
    link: 'https://github.com/NesxpDigital',
    name: '@NesxpDigital',
    logo: Nesxp,
    img: GitHub,
  },
  {
    id: 3,
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/afonso-bezerra-33b495174/',
    name: '@Nesxp',
    logo: Nesxp,
    img: Linkedin,
  },
];
