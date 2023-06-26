import { iWitness } from '@/types/witness'
import coreImg from '@/assets/img/core-logo.jpeg'
import lions from '@/assets/img/lions.jpeg'
import Emanuel from '@/assets/img/testemunhas/emanuel.jpeg'
import Carol from '@/assets/img/testemunhas/carol.png'
import Guilherme from '@/assets/img/testemunhas/guilherme.png'

export const WitnessArray: iWitness[] = [
  {
    id: 1,
    authorName: 'Emanuel',
    authorcareer: 'CEO',
    commented:
      "O trabalho da DevStyle é uma parceria que já está sendo construída em dois anos com nós aqui da Core. A Devstyle faz parte desse núcleo e de resultados excelente que construímos ao longos dos anos de trabalho em conjunto.",
    companyName: 'Core Ag',
    companyImage: coreImg,
    autorImage: Emanuel,
  },
  {
    id: 2,
    authorName: 'Carolina',
    authorcareer: 'Marketing',
    commented:
      "A DevStyle é super parceira, tranquila e pronta para solucionar o que for possível dentro do job!",
    companyName: 'Lions Ag',
    companyImage: lions,
    autorImage:Carol
  },
  {
    id: 3,
    authorName: 'Guilherme',
    authorcareer: 'CO',
    commented:
      "A empresa demonstrou um profissionalismo exemplar ao prestar serviços de construção e desenvolvimento de sites para os clientes que atendo. A equipe entregou soluções modernas e funcionais, superando as expectativas. O atendimento ao cliente foi excelente. Recomendo fortemente os serviços da DevStyle.",
    companyName: 'Core Ag',
    companyImage: coreImg,
    autorImage:Guilherme
  }
]
