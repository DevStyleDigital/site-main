import { iProcess } from "@/types/process";
import Estrategy from "@/assets/img/process/estregy.png"
import Layout from '@/assets/img/process/layout.png'
import Love from '@/assets/img/process/love.webp'
import Desenvolvimento from "@/assets/img/process/desen.png"

export const ProcessArray: iProcess[] = [
    {
        id: 1,
        title: 'Criar estrategia',
        label: 'Iremos desenvolver uma solução com estrategias de desenvolvimento',
        icon: Estrategy
    },
    {
        id: 2,
        title: 'Criação do layout',
        label: 'Com as estrategias elaboradas iremos começar com o desenvolvimento do layout com o Designer',
        icon: Layout
    },
    {
        id: 3,
        title: 'Aprovação',
        label: 'Finzalizando o layout passaremos para o cliente para ajustes e aprovação e com isso continuaremos com os processos',
        icon: Love
    },
    {
        id: 4,
        title: 'Desenvolvimento',
        label: 'Após a aprovação do cliente partiremos para o desenvolvimento da solução trazendo elementos recomendados para o ambiente',
        icon: Desenvolvimento
    },
    {
        id: 5,
        title: 'Criar estrategia',
        label: 'Iremos desenvolver uma solução com estrategias de desenvolvimento',
        icon: Estrategy
    },
    {
        id: 6,
        title: 'Criar estrategia',
        label: 'Iremos desenvolver uma solução com estrategias de desenvolvimento',
        icon: Estrategy
    }
]