import { iService } from '@/types/services'
import LpIcon from '../../assets/img/iconsService/LP.png'
import MegaFone from '../../assets/img/iconsService/megafone.png'
import Co from '../../assets/img/iconsService/ceo.png'
import Trafego from '../../assets/img/iconsService/trafego.png'
import Dev from '../../assets/img/iconsService/dev.png'
import Celular from '../../assets/img/iconsService/celular.png'

export const ServicesUtils: iService[] = [
  {
    id: 1,
    label: 'Systems Development',
    text: 'Desenvolvimento de sistemas personalizados facilitando e optimizando as demandas da sua empresa',
    image: Dev,
  },
  {
    id: 2,
    label: 'Custom Designs',
    text: 'Criação de Designs personalizados buscando layouts atraentes e simples para o usuário',
    image: MegaFone,
  },
  {
    id: 3,
    label: 'App Development',
    text: 'Desenvolvimento de aplicativos para aparelhos moveis com um design único e funcional.',
    image: Celular,
  },
  {
    id: 4,
    label: 'Page Development',
    text: 'Desenvolvimento de páginas únicas e lindas para capitação de leads rápidos',
    image: LpIcon,
  },
  {
    id: 5,
    label: 'Gestor de Tráfego',
    text: 'Cuidaremos dos tráfegos de sua página melhorando o índice de Leads.',
    image: Trafego,
  },
  {
    id: 6,
    label: 'SEO Optimization',
    text: 'Ótimas pontuações para o seu site ficar no topo para buscadores do Google.',
    image: Co,
  },
]
