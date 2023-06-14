import { iResults } from '@/types/results'

export const ResultsTagArray: iResults[] = [
  {
    id: 1,
    color: '#5956E8',
    number: '30',
    text: (
      <span className="uppercase text-[.7rem] text-white/50 font-bold max-sm:text-[.6rem]">
        Clientes <br /> Satisfeitos
      </span>
    ),
  },
  {
    id: 2,
    color: '#ff2323',
    number: '23',
    text: (
      <span className="uppercase text-[.7rem] text-white/50 font-bold max-sm:text-[.6rem]">
        Projetos <br /> Completos
      </span>
    ),
  },
  {
    id: 3,
    color: '#ffe523',
    number: '5',
    text: (
      <span className="uppercase text-[.7rem] text-white/50 font-bold max-sm:text-[.6rem]">
        Membros <br /> do Time
      </span>
    ),
  },
  {
    id: 4,
    color: '#09ff15',
    number: '50m',
    text: (
      <span className="uppercase text-[.7rem] text-white/50 font-bold max-sm:text-[.6rem]">
        Receita <br /> Gerada
      </span>
    ),
  },
]
