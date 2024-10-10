import { iProjects } from '@/types/projects';
import Authentic from '@/assets/img/projects/authenticImg.png';
import TratyVet from '@/assets/img/projects/tratyvetimg.png';
import Prime from '@/assets/img/projects/prime.png';
import Domus from '@/assets/img/projects/domus.png';
import Vista from '@/assets/img/projects/vista.png';
import Cardapio from '@/assets/img/projects/cardapio.png';
import Haia from '@/assets/img/projects/haia.png';
import Amac from '@/assets/img/projects/amac.png';
import GRM from '@/assets/img/projects/grm.png';
import Keypay from '@/assets/img/projects/keypay.png';
import Material from '@/assets/img/stacks/maetrial.png';
import Next from '@/assets/img/stacks/NEXT.png';
import React from '@/assets/img/stacks/react.png';
import SupaBase from '@/assets/img/stacks/supabase.png';
import Stripe from '@/assets/img/stacks/stripe.jpeg';
import Ts from '@/assets/img/stacks/ts.png';
import Tailwind from '@/assets/img/stacks/tailwind.png';
import Styled from '@/assets/img/stacks/styled.png';
import Keep from '@/assets/img/projects/keep.png';
import sabrina from '@/assets/img/projects/sabrina.png';
import TratyEcommerce from '@/assets/img/projects/tratyjpg.jpg';
import Essencial from '@/assets/img/projects/essencial.png';
import Deal from '@/assets/img/deal.png';
import Ghost from '@/assets/img/projects/ghost.png';

export const ProjectsArray: iProjects[] = [
  {
    id: 1,
    title: 'Authentic Site',
    type: 'Landing Page',
    comment:
      'Authentic é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Authentic,
    color: '#E9F7FF',
    order: 9,
    client: 'AG VELASCO',
    duration: 24,
    commit: 47,
    link: 'https://www.authenticsorocaba.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: '8c1ae39af7a28c68059cca416fe6cb8d',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 2,
    title: 'TratyVet',
    type: 'WebSite',
    comment:
      'TratyVet é um WebSite completo com a apresentação da empresa e dos produtos, com um sistema de cadastro como um CMS deixando a empresa com o poder de cadastrar, remover e atualizar produtos. Possibilitando também uma busca dos distribuidores através do cep ou cidade do cliente.',
    img: TratyVet,
    color: '#ffd4d4',
    order: 7,
    client: 'TratyVet',
    duration: 120,
    commit: 25,
    link: 'https://tratyvet.com.br/pt-br',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'a0921d0835c4c79d632a3438f248461d',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 3,
        name: 'SupaBase',
        icon: SupaBase,
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: Ts,
      },
      {
        id: 5,
        name: 'Material UI',
        icon: Material,
      },
    ],
  },
  {
    id: 3,
    title: 'Prime',
    type: 'Landing Page',
    comment:
      'Prime é um site criado para apresentação da loja de manutenção de motos, podendo conhecer a oficina e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização alem de fixar mais a marca e as cores da marca.',
    img: Prime,
    color: '#FFF3CA',
    order: 11,
    client: 'Prime',
    duration: 16,
    commit: 32,
    link: 'https://www.primesorocaba.com.br/',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: '5fb707b099825db764df989e8d8edb4c',
    stacks: [
      {
        id: 1,
        name: 'ReactJs',
        icon: React,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 4,
    title: 'Domus',
    type: 'Landing Page',
    comment:
      'Domus é um site criado para a apresentar a loja de materiais de construção, mostrando os valores dos materiais mais procurados e procurando sempre fixar a marca e as cores da logo. Um site simples porém com todos os elementos claros não ficando massante para o cliente.',
    img: Domus,
    color: '#d1ffca',
    order: 13,
    client: 'Domus',
    duration: 16,
    commit: 11,
    link: 'https://www.domusmateriaisconstrucao.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: 'c27401142dad1fde3b1760ccdedcd7dc',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 5,
    title: 'Vista Jataí',
    type: 'Landing Page',
    comment:
      'Vista Jataí é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Vista,
    color: '#e7caff',
    order: 10,
    client: 'Julio&Julio',
    duration: 32,
    commit: 14,
    link: 'https://www.vistajatai.com.br/',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'eee6228aa9a24a02d52c54b3264b0726',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 6,
    title: 'Cardapio Yoshis',
    type: 'WebSite',
    comment:
      'Esse projeto veio com o intuito de cardapio online para a ficilidade de cadastrar como um CMS, possibilitando novos produtos, menus e até mesmo parceiros que podem ser colocados e divulgados no cardapio. A pedido do cliente foi colocado também um sistema de validação para o acessos dos clientes através de um codigo semanal que o restaurante cadastra.',
    img: Cardapio,
    color: '#cad0ff',
    order: 12,
    client: "Yoshi's",
    duration: 240,
    commit: 132,
    link: '#',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'd26ae16eba99059bcd105b3eab7acdca',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 4,
        name: 'SupaBase',
        icon: SupaBase,
      },
      {
        id: 5,
        name: 'TypeScript',
        icon: Ts,
      },
      {
        id: 6,
        name: 'Material UI',
        icon: Material,
      },
    ],
  },
  {
    id: 7,
    title: 'Haia Sorocaba',
    type: 'Landing Page',
    comment:
      'Haia Sorocaba é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento,',
    img: Haia,
    color: '#caffec',
    order: 8,
    client: 'GRM Incorporadora',
    duration: 40,
    commit: 6,
    link: 'https://haiaboavista.com.br/',
    bgColor: 'linear-gradient(111.23deg, #E9F7FF 9.95%, #FFDBD5 85.17%)',
    hash: 'd7ab63432188f288fa402419f55d6410',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 8,
    title: 'AMAC Sorocaba',
    type: 'Landing Page',
    comment:
      'AMAC é um site criado para apresentação da empresa, podendo conhecer seus projetos e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização além de conseguir vizualizar seus projetos passados.',
    img: Amac,
    color: '#ffecca',
    order: 14,
    client: 'AMAC',
    duration: 32,
    commit: 30,
    link: 'https://www.amac.eng.br/',
    bgColor: 'linear-gradient(140deg, #CFD4FF 0%, #FFFFFD 100%)',
    hash: 'ded34ec551e090ada54b8524f64e75c1',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'TypeScript',
        icon: Ts,
      },
    ],
  },
  {
    id: 9,
    title: 'GRM Incorporadora',
    type: 'WebSite',
    comment:
      'GRM Incorporadora é um site completo de uma construtora trazendo mais sobre a empresa e apresentando para os clientes, com um CMS os mesmos podem cadastrar textos e imagens dos banners além da página do empreendimento sendo 100% customizavel, criada no proprio CMS.',
    img: GRM,
    color: '#ffcae3',
    order: 4,
    client: 'GRM Incorpodora',
    duration: 120,
    commit: 132,
    link: '#',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'ef4b80de830651001e1539bbf4bea609',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'Styled-Components',
        icon: Styled,
      },
      {
        id: 3,
        name: 'SupaBase',
        icon: SupaBase,
      },
      {
        id: 4,
        name: 'TypeScript',
        icon: Ts,
      },
      {
        id: 5,
        name: 'Material UI',
        icon: Material,
      },
    ],
  },
  {
    id: 10,
    title: 'KeyPay',
    type: 'WebSite',
    comment:
      'KeyPay é um site completo de um banco trazendo mais sobre a empresa e apresentando para os clientes. Ultilizando modelos 3D para deixar com elementos únicos e trazendo um ar mais moderno e tecnológico.',
    img: Keypay,
    color: '#ab8cff79',
    order: 3,
    client: 'KeyPay',
    duration: 120,
    commit: 153,
    link: 'https://www.keypay.com.br/',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'sh6b80de837651221e1539ghfkbea876',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
    ],
  },
  {
    id: 11,
    title: 'TratyVet Ecommerce',
    type: 'WebSite',
    comment:
      'Esse projeto TratyVet é um ecommerce completo integrado para suprir a necessidade dos vendedores.',
    img: TratyEcommerce,
    color: '#ab8cff79',
    order: 1,
    client: 'TratyVet',
    duration: 360,
    commit: 560,
    link: 'https://www.tratyvet.com/',
    bgColor: 'linear-gradient(111.23deg, #F9F6DA 9.95%, #E2D5FF 85.17%)',
    hash: 'gj6b80de127521221e1539ggkkbea889',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
    ],
  },
  {
    id: 12,
    title: 'Rodrigues KeepClean',
    type: 'WebSite',
    comment:
      'Rogrigues KeepClean é uma página estrangueira desenvolvida para uma empresa de limpeza, trazendo um design de limpeza e organização.',
    img: Keep,
    color: '#8cffba79',
    order: 15,
    client: 'Rodrigues',
    duration: 80,
    commit: 100,
    link: 'https://www.rodrigueskeepclean.com/',
    bgColor: 'linear-gradient(111.23deg, #f3f9da 9.95%, #f0d5ff 85.17%)',
    hash: 'fghr80de146751221e1765ghfkbea876',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
    ],
  },
  {
    id: 13,
    title: 'Sabrina M. Cunha',
    type: 'WebSite',
    comment:
      'Sabrina M. Cunha é um site para apresentação do trabalho pessoal como uma advogada, trazendo um design mais sério.',
    img: sabrina,
    color: '#8ce6ff79',
    order: 16,
    client: 'Sabrina M. Cunha',
    duration: 80,
    commit: 100,
    link: 'https://www.sabrinacunhaadvocacia.com.br/',
    bgColor: 'linear-gradient(111.23deg, #daf9ea 9.95%, #d5f8ff 85.17%)',
    hash: 'jkuy7deu146751221e1765ghfkbea876',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
    ],
  },
  {
    id: 14,
    title: 'Essencial Garden',
    type: 'WebSite',
    comment:
      'Essencial Garden é um site com um CMS que edita e cadastra a página como o cliente deseja.',
    img: Essencial,
    color: '#8ce6ff79',
    order: 2,
    client: 'Essencial Garden',
    duration: 80,
    commit: 100,
    link: 'https://www.essencialgardenfertil.com.br/',
    bgColor: 'linear-gradient(to top, #a4a5ff, #5ebdff, #00d1ff, #00e0f5, #41ebd4);',
    hash: 'hlzy7deu145121221e1261ghfkbea791',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 3,
        name: 'Supabase',
        icon: SupaBase,
      },
    ],
  },
  {
    id: 15,
    title: 'Deal Empreendimentos',
    type: 'WebSite',
    comment:
      'Deal Empreendimentos é um site com um CMS que edita e cadastra a página como o cliente deseja.',
    img: Deal,
    color: '#8ce6ff79',
    order: 6,
    client: 'CoreAg',
    duration: 80,
    commit: 100,
    link: 'https://www.dealempreendimentos.com.br/',
    bgColor: 'linear-gradient(to left top, #e9a6f4, #f991d8, #ff7eb5, #ff6e8e, #fd6565)',
    hash: 'kh1g80ae837241124e1539ghfkrty876',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 3,
        name: 'Supabase',
        icon: SupaBase,
      },
    ],
  },
  {
    id: 16,
    title: 'Ghosty Saas',
    type: 'Saas',
    comment:
      'GHOSTY é uma plataforma SaaS projetada para proteger suas páginas e conteúdos contra ataques maliciosos. Com tecnologia avançada de segurança, ela monitora, detecta e bloqueia ameaças em tempo real, garantindo que suas campanhas e sites permaneçam seguros e operando sem interrupções.',
    img: Ghost,
    color: '#8F9496',
    order: 5,
    client: 'Ghosty',
    duration: 140,
    commit: 250,
    link: 'https://www.ghosty.me/',
    bgColor: 'linear-gradient(to top, #0e8dc4, #4490b7, #6192ab, #7993a0, #8f9496)',
    hash: 'dm1g36ae857941124e1539ghfkrty876',
    stacks: [
      {
        id: 1,
        name: 'NextJs',
        icon: Next,
      },
      {
        id: 2,
        name: 'TailWind CSS',
        icon: Tailwind,
      },
      {
        id: 3,
        name: 'Supabase',
        icon: SupaBase,
      },
      {
        id: 4,
        name: 'Stripe',
        icon: Stripe,
      },
    ],
  },
];
