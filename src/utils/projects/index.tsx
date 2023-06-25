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

export const ProjectsArray: iProjects[] = [
  {
    id: 1,
    title: 'Authentic Site',
    type: 'Landing Page',
    comment: 'Authentic é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Authentic,
    color: '#E9F7FF',
    order: 4,
  },
  {
    id: 2,
    title: 'TratyVet',
    type: 'WebSite',
    comment: 'TratyVet é um WebSite completo com a apresentação da empresa e dos produtos, com um sistema de cadastro como um CMS deixando a empresa com o poder de cadastrar, remover e atualizar produtos. Possibilitando também uma busca dos distribuidores através do cep ou cidade do cliente.',
    img: TratyVet,
    color: '#FFDBD4',
    order: 3,
  },
  {
    id: 3,
    title: 'Prime',
    type: 'Landing Page',
    comment: 'Prime é um site criado para apresentação da loja de manutenção de motos, podendo conhecer a oficina e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização alem de fixar mais a marca e as cores da marca.',
    img: Prime,
    color: '#FFF3CA',
    order: 5,
  },
  {
    id: 4,
    title: 'Domus',
    type: 'Landing Page',
    comment: 'Domus é um site criado para a apresentar a loja de materiais de construção, mostrando os valores dos materiais mais procurados e procurando sempre fixar a marca e as cores da logo. É um site simples porém com todos os elementos para claro e não ficar massante para o cliente.',
    img: Domus,
    color: '#d1ffca',
    order: 7,
  },
  {
    id: 5,
    title: 'Vista Jataí',
    type: 'Landing Page',
    comment: 'Vista Jataí é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento.',
    img: Vista,
    color: '#e7caff',
    order: 6,
  },
  {
    id: 6,
    title: 'Cardapio Yoshis',
    type: 'WebSite',
    comment: 'Esse projeto veio com o intuito de cardapio online para a ficilidade de cadastrar como um CMS, possibilitando novos produtos, menus e até mesmo parceiros que podem ser colocados e divulgados no cardapio. A pedido do cliente foi colocado também um sistema de validação para o acessos dos clientes através de um codigo semanal que o restaurante cadastra.',
    img: Cardapio,
    color: '#cad0ff',
    order: 8,
  },
  {
    id: 7,
    title: 'Haia Sorocaba',
    type: 'Landing Page',
    comment: 'Haia Sorocaba é um site criado para apresentação do empreendimento ajudando a construtora a conseguir uma capitação de Leads. Tendo a fotos do empreendimento as plantas e um texto de apresentação da construtora e do empreendimento,',
    img: Haia,
    color: '#caffec',
    order: 2,
  },
  {
    id: 8,
    title: 'AMAC Sorocaba',
    type: 'Landing Page',
    comment: 'AMAC é um site criado para apresentação da empresa, podendo conhecer seus projetos e os serviços oferecidos pela mesma tendo maior conhecimento da sua localização além de conseguir vizualizar seus projetos passados.',
    img: Amac,
    color: '#ffe1ca',
    order: 9,
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
  },
]
