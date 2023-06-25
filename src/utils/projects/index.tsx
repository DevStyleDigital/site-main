import { iProjects } from '@/types/projects'
import Authentic from '@/assets/img/projects/authenticImg.png'
import TratyVet from '@/assets/img/projects/tratyvetimg.png'
import Prime from '@/assets/img/projects/prime.png'
import Domus from '@/assets/img/projects/domus.png'
import Vista from '@/assets/img/projects/vista.png'
import Cardapio from '@/assets/img/projects/cardapio.png'
import Haia from '@/assets/img/projects/haia.png'
import Amac from '@/assets/img/projects/amac.png'
import GRM from '@/assets/img/projects/grm.png'
import GRMBanner from '@/assets/img/projects/grmbanner.png'
import Material from '@/assets/img/stacks/maetrial.png'
import Next from '@/assets/img/stacks/NEXT.png'
import React from '@/assets/img/stacks/react.png'
import SupaBase from '@/assets/img/stacks/supabase.png'
import Ts from '@/assets/img/stacks/ts.png'
import Tailwind from '@/assets/img/stacks/tailwind.png'
import Styled from '@/assets/img/stacks/styled.png'


export const ProjectsArray: iProjects[] = [
  {
    id: 1,
    title: 'Authentic Site',
    type: 'Landing Page',
    comment: 'Authentic é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Authentic,
    color: '#E9F7FF',
    order: 4,
    client: 'AG VELASCO',
    duration: 24,
    commit: 47,
    link:'https://www.authenticsorocaba.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: '8c1ae39af7a28c68059cca416fe6cb8d',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts
      }
    ]
  },
  {
    id: 2,
    title: 'TratyVet',
    type: 'WebSite',
    comment: 'TratyVet é um WebSite completo com a apresentação da empresa e dos produtos, com um sistema de cadastro como um CMS deixando a empresa com o poder de cadastrar, remover e atualizar produtos. Possibilitando também uma busca dos distribuidores através do cep ou cidade do cliente.',
    img: TratyVet,
    color: '#ffd4d4',
    order: 3,
    client: 'TratyVet',
    duration: 120,
    commit: 25,
    link:'https://tratyvet.com.br/pt-br',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'a0921d0835c4c79d632a3438f248461d',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind
      },
      {
        id: 3,
        name: 'SupaBase',
        icon: SupaBase
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: Ts
      },
      {
        id: 5,
        name: 'Material UI',
        icon: Material
      }
    ]
  },
  {
    id: 3,
    title: 'Prime',
    type: 'Landing Page',
    comment: 'Prime é um site criado para apresentação da loja de manutenção de motos, podendo conhecer a oficina e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização alem de fixar mais a marca e as cores da marca.',
    img: Prime,
    color: '#FFF3CA',
    order: 5,
    client: 'Prime',
    duration: 16,
    commit: 32,
    link:'https://www.primesorocaba.com.br/',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: '5fb707b099825db764df989e8d8edb4c',
    stacks: [
      {
        id: 1,
        name: 'ReactJs',
        icon: React
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind
      },
      {
        id:3,
        name: 'TypeScript',
        icon: Ts
      }
    ]
  },
  {
    id: 4,
    title: 'Domus',
    type: 'Landing Page',
    comment: 'Domus é um site criado para a apresentar a loja de materiais de construção, mostrando os valores dos materiais mais procurados e procurando sempre fixar a marca e as cores da logo. Um site simples porém com todos os elementos claros não ficando massante para o cliente.',
    img: Domus,
    color: '#d1ffca',
    order: 7,
    client: 'Domus',
    duration: 16,
    commit: 11,
    link:'https://www.domusmateriaisconstrucao.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: 'c27401142dad1fde3b1760ccdedcd7dc',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts
      }
    ]
  },
  {
    id: 5,
    title: 'Vista Jataí',
    type: 'Landing Page',
    comment: 'Vista Jataí é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Vista,
    color: '#e7caff',
    order: 6,
    client: 'Julio&Julio',
    duration: 32,
    commit: 14,
    link:'https://www.vistajatai.com.br/',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'eee6228aa9a24a02d52c54b3264b0726',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts
      },
    ]
  },
  {
    id: 6,
    title: 'Cardapio Yoshis',
    type: 'WebSite',
    comment: 'Esse projeto veio com o intuito de cardapio online para a ficilidade de cadastrar como um CMS, possibilitando novos produtos, menus e até mesmo parceiros que podem ser colocados e divulgados no cardapio. A pedido do cliente foi colocado também um sistema de validação para o acessos dos clientes através de um codigo semanal que o restaurante cadastra.',
    img: Cardapio,
    color: '#cad0ff',
    order: 8,
    client: "Yoshi's",
    duration: 240,
    commit: 132,
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'd26ae16eba99059bcd105b3eab7acdca',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      }, 
      {
        id: 3,
        name: 'TailWind CSS',
        icon: Tailwind
      },
      {
        id: 4,
        name: 'SupaBase',
        icon: SupaBase
      },
      {
        id: 5,
        name: 'TypeScript',
        icon: Ts
      },
      {
        id: 6,
        name: 'Material UI',
        icon: Material
      }
    ]
  },
  {
    id: 7,
    title: 'Haia Sorocaba',
    type: 'Landing Page',
    comment: 'Haia Sorocaba é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento,',
    img: Haia,
    color: '#caffec',
    order: 2,
    client: "GRM Incorporadora",
    duration: 40,
    commit: 6,
    link: 'https://haiaboavista.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: 'd7ab63432188f288fa402419f55d6410',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts
      },
    ]
  },
  {
    id: 8,
    title: 'AMAC Sorocaba',
    type: 'Landing Page',
    comment: 'AMAC é um site criado para apresentação da empresa, podendo conhecer seus projetos e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização além de conseguir vizualizar seus projetos passados.',
    img: Amac,
    color: '#ffecca',
    order: 9,
    client: "AMAC",
    duration: 32,
    commit: 30,
    link: 'https://www.amac.eng.br/',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'ded34ec551e090ada54b8524f64e75c1',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts
      },
    ]
  },
  {
    id: 9,
    title: 'GRM Incorporadora',
    type: 'WebSite',
    comment:
      'GRM Incorporadora é um site completo de uma construtora trazendo mais sobre a empresa e apresentando para os clientes, com um CMS os mesmos podem cadastrar textos e imagens dos banners além da página do empreendimento sendo 100% customizavel, criada no proprio CMS.',
    img: GRM,
    color: '#ffcae3',  
    order: 1,
    client: "GRM Incorpodora",
    duration: 120,
    commit: 132,
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'ef4b80de830651001e1539bbf4bea609',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled
      }, 
      {
        id: 3,
        name: 'SupaBase',
        icon: SupaBase
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: Ts
      },
      {
        id: 5,
        name: 'Material UI',
        icon: Material
      }
    ]
  },
]
