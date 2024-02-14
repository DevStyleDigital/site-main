import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import GppBadOutlinedIcon from '@mui/icons-material/GppBadOutlined';
import { PopoverTrigger } from '../ui/popover';

const Notify = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-bold">Notificações</h1>
      </div>
      <div className="flex gap-2 mt-2 items-center">
        <span className="w-fit h-fit p-[.5rem] flex justify-center items-center bg-green-200 rounded-lg">
          <AttachMoneyOutlinedIcon />
        </span>
        <div className="flex flex-col">
          <span className="text-sm truncate max-w-[200px]">
            Foi debitado R$100,00 da sua con...
          </span>
          <span className="text-black/30 text-sm">2 horas atrás</span>
        </div>
      </div>
      <div className="flex mt-2 gap-2 items-center">
        <span className="w-fit h-fit p-[.5rem] flex justify-center items-center bg-red-200 rounded-lg">
          <GppBadOutlinedIcon />
        </span>
        <div className="flex flex-col">
          <span className="text-sm truncate max-w-[200px]">
            Ocorreu no pagamento automatic...
          </span>
          <span className="text-black/30 text-sm">4 horas atrás</span>
        </div>
      </div>
      <div className="flex mt-2 gap-2 items-center">
        <span className="w-fit h-fit p-[.5rem] flex justify-center items-center bg-yellow-200 rounded-lg">
          <ReportProblemOutlinedIcon />
        </span>
        <div className="flex flex-col">
          <span className="text-sm">Seu plano expira em 5 dias</span>
          <span className="text-black/30 text-sm">14 horas atrás</span>
        </div>
      </div>
    </div>
  );
};

export default Notify;
