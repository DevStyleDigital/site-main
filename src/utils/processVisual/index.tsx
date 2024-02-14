import { iProcessVisual } from '@/types/visual';
import mira from '@/assets/img/process/mira.png';
import Microfone from '@/assets/img/microfone.png';
import Estrategy from '@/assets/img/process/estregy.png';
export const ProcessVisualArray: iProcessVisual[] = [
  {
    id: 1,
    title: 'Análise visual',
    text: 'Faremos uma analise visual previa do produto que devera ser desenvolvido posteriormente.',
    img: mira,
  },
  {
    id: 2,
    title: 'Desenvolvimento projeto visual',
    text: 'Montaremos uma estrutura visual para que o cliente tenha ciência de como seu projeto ficará.',
    img: Microfone,
  },
  {
    id: 3,
    title: 'Aprovação e estratégia',
    text: 'Com a aprovação do projeto seguiremos para as estrategias de desenvolvimento mantendo as boas práticas.',
    img: Estrategy,
  },
];
