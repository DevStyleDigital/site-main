import { iTeams } from '@/types/team';
import Thainara from '@/assets/img/team/thainara2.jpg';
import Afonso from '@/assets/img/team/afonso2.jpg';
import Guilherme from '@/assets/img/team/guilherme.png';

export const TeamArray: iTeams[] = [
  {
    id: 2,
    name: 'Thainara Camargo',
    carer: 'Co Founder',
    linkedin:
      'https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADtyPYEBJm0aow4oxyT_O4bghI52wpyY06M&keywords=thainara%20camargo&origin=RICH_QUERY_SUGGESTION&position=0&searchId=5946fa62-1c5c-4836-b5fc-1686f9a0b983&sid=Ggp',
    img: Thainara,
  },
  {
    id: 1,
    name: 'Afonso Bezerra',
    carer: 'Ceo Founder & FrontEnd Development',
    instagram: 'https://www.instagram.com/teiir_/',
    linkedin: 'https://www.linkedin.com/in/afonso-bezerra-33b495174/',
    img: Afonso,
    github: 'https://github.com/AfonsoBezerra',
  },
  {
    id: 3,
    name: 'Guilheme Brogio',
    carer: 'CTO & FullStack Development',
    img: Guilherme,
    github: 'https://github.com/gbrogio',
  },
];
