import { iValues } from "@/types/values";
import Eficiencia from "@/assets/img/about/engrenagemAbout.png"
import Custo from "@/assets/img/about/custo.png"
import Commited from "@/assets/img/about/commit.png"
import TeamWork from "@/assets/img/about/teamWork.png"
import Seguranca from "@/assets/img/about/seguranca.png"

export const ValuesArray: iValues[] = [
    {
        id: 1,
        title: "Eficiência",
        label: "Nós da DevStyle acreditamos que a eficiencia é uma questão de comprometimento.",
        icon: Eficiencia,
    },
    {
        id: 2,
        title: "Custo",
        label: "Pensamos nos clientes nos valores tambem, tentando sempre trazer para um custo acessivel.",
        icon: Custo
    },
    {
        id: 3,
        title: "Commited",
        label: "Trabalhamos sempre com o Versionamento dos Codigos para possamos ter 100% de controle doque esta sendo feito.",
        icon: Commited
    },
    {
        id: 4,
        title: "TeamWorking",
        label: "Temos uma Equipe bastante unida e que sempre está pronta para trazer o melhor desemprenho para seus clientes.",
        icon: TeamWork
    },
    {
        id: 5,
        title: "Segurança",
        label: "Prezamos pela segurança dos dados de nossos clientes, para que jamais sejam prejudicados em nenhum momento.",
        icon: Seguranca
    }
]