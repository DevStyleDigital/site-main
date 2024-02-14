import { Svg404 } from '@/assets/svg/404';
import Button from '@/components/button';

const NotFound = () => {
  return (
    <>
      <head>
        <title>NotFound | DevStyle</title>
      </head>
      <div className="w-full h-fit min-h-[80vh] py-[2rem] flex justify-center items-center">
        <div className="w-[60%] flex flex-col items-center gap-[.5rem] max-sm:w-[90%] max-sm:mt-[3rem]">
          <Svg404 />
          <h1 className="font-extrabold text-[2rem] mt-[1.5rem] text-center max-sm:text-[1.3rem]">
            Ops, this page is not found
          </h1>
          <span className="text-secondary_black-950/70 text-[1rem] w-[60%]  max-sm:text-[.9rem] text-center max-lg:w-[80%] max-sm:w-[90%]">
            Essa página não foi encontrada por favor tente acessar uma página válida,
            clique no botão e volte para o início.
          </span>
          <Button href="/" notBlank className="mt-[1rem]" fill>
            Voltar ao inicio
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
