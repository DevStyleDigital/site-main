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
    authorcareer: 'CO',
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
      "Lorem Ipsum has been the industry's standard from dummy text ever since the unknown printer to galley of type and make a type specimen book. ",
    companyName: 'Lions Ag',
    companyImage: coreImg,
    autorImage:Guilherme
  }
]
