import StarBlog from '@/assets/svg/starts';
import Image from 'next/image';
import Cover from '@/assets/img/cover-blog.png';

const HeroBlog = () => {
  return (
    <div className="w-full h-[600px] max-sm:h-[650px] overflow-hidden relative bg-[#FAFBFC]">
      <div className="absolute w-full z-[2] h-full left-0 top-0 bg-blog" />
      <Image
        src={Cover}
        alt="cover"
        width={2880}
        height={1109}
        className="w-full h-full absolute top-0 left-0 opacity-80"
      />
      <div className="w-full relative z-[3] h-full flex flex-col justify-center items-center">
        <span className="flex items-center font-bold text-xl gap-1 text-secondary_black-950">
          Blog <StarBlog />
        </span>
        <h1 className="font-extrabold text-[4rem] text-secondary_black-950 max-lg:text-[3rem] text-center max-sm:text-[2rem]">
          Novas Atualizações e notícias
        </h1>
        <span className="font-normal text-base text-secondary_black-950/80 max-w-[50%] max-lg:max-w-[90%] text-center mt-4 max-sm:text-sm">
          Bem-vindo ao nosso blog, um espaço dedicado à exploração, aprendizado e
          compartilhamento de conhecimento no vasto universo do desenvolvimento de
          software. Aqui, mergulhamos em temas que abrangem desde as mais recentes
          tecnologias e frameworks até as melhores práticas de codificação e design.
        </span>
      </div>
    </div>
  );
};

export default HeroBlog;
