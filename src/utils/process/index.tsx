import { iProcess } from "@/types/process";
import Estrategy from "@/assets/img/process/estregy.png"
import Layout from '@/assets/img/process/layout.png'
import Love from '@/assets/img/process/love.webp'
import Desenvolvimento from "@/assets/img/process/desen.png"
import MegaFone from '../../assets/img/iconsService/megafone.png'
import Custo from "@/assets/img/about/custo.png"

export const ProcessArray: iProcess[] = [
    {
        id: 1,
        title: '1. Criar estrategia',
        label: 'Iremos desenvolver uma solução com estrategias de desenvolvimento',
        icon: Estrategy
    },
    {
        id: 2,
        title: '2. Criação do layout',
        label: 'Com as estrategias elaboradas iremos começar com o desenvolvimento do layout com o Designer',
        icon: Layout
    },
    {
        id: 3,
        title: '3. Aprovação',
        label: 'Finzalizando o layout passaremos para o cliente para ajustes e aprovação e com isso continuaremos com os processos',
        icon: Love
    },
    {
        id: 4,
        title: '4. Desenvolvimento',
        label: 'Após a aprovação do cliente partiremos para o desenvolvimento da solução trazendo elementos recomendados para o ambiente',
        icon: Desenvolvimento
    },
    {
        id: 5,
        title: '5. Tratamento de GTM',
        label: 'Entregando o projeto iremos fazer o tratamento do Google de tagueamento para manter colocar a página nos buscadores',
        icon: MegaFone
    },
    {
        id: 6,
        title: '6. Finzalização do Projeto',
        label: 'Partindo para a última etapa sendo a apresentação e instrução para o uso do sistema para o cliente',
        icon:  Custo
    }
]