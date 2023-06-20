import Logo from '@/assets/img/Logo.png'
import Follows from '@/assets/svg/follows'
import LocationIcon from '@/assets/svg/location'
import PagesIcon from '@/assets/svg/pages'
import Phone from '@/assets/svg/phone'
import Ultilits from '@/assets/svg/ultilits'
import Whatsappicon from '@/assets/svg/whatsapp'
import { FollowsArray } from '@/utils/follows'
import { NavsItems } from '@/utils/navs'
import { UltilidadeArray } from '@/utils/page-ultilidade'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className="w-full h-fit py-[4rem] flex justify-center items-center bg-secondary_black-950 max-sm:pb-[2rem] max-sm:px-[1rem]">
      <div className="w-[80%] h-[80%] flex gap-[5rem] justify-center max-xl:w-[95%] max-lg:flex-col max-lg:items-center">
        <div className="w-[22rem] h-[35rem] max-lg:w-[60%] max-sm:w-[90%] max-lg:h-auto flex flex-col gap-[1rem] items-center rounded-lg shadow-md bg-[#3C3C45] py-[3.5rem] px-[2rem]">
          <h1 className="text-white font-bold text-[1.9rem]">
            {'</> DevStyle'}
          </h1>
          <div className="flex flex-col gap-[1rem] max-lg:items-center">
            <Image
              src={Logo}
              alt="logo"
              className="max-lg:w-[20rem] max-sm:w-[10rem]"
              width={1148}
              height={809}
            />
            <div className="flex flex-col mt-[1rem] gap-[.25rem] max-lg:items-center max-lg:text-center">
              <h1 className="font-bold text-[1.3rem] text-white">
                Entre em contato
              </h1>
              <span className="font-medium text-[1rem] text-white/50">
                Estamos esperando pelo seu contato nesse momento!
              </span>
            </div>
          </div>
          <Link
            target='blank'
            href="https://wa.me/5515988045279?text=Ol%C3%A1%2C+vim+do+site+DevStyle."
            className="w-full h-full rounded-md bg-green-500 flex justify-center gap-[1rem] items-center footer-card transition-all max-lg:h-[4rem] max-sm:h-[3.5rem] hover:scale-[1.02]"
          >
            <span className="text-secondary_black-950 font-semibold text-[1.1rem] max-lg:text-[1.2rem] max-sm:text-[1rem]">
              Contate-nos agora
            </span>
            <Whatsappicon />
          </Link>
        </div>
        <div className="flex flex-col gap-[3rem]">
          <div className="flex justify-evenly gap-[6rem] max-sm:flex-col max-sm:items-center max-sm:gap-[3rem]">
            <div className="flex flex-col gap-[1rem] max-sm:text-center max-sm:items-center">
              <h1 className="text-white font-semibold text-[1.3rem] flex gap-[1rem] items-center">
                <Phone /> Nosso número
              </h1>
              <span className="w-fit py-[1rem] px-[2rem] text-[#FFDC60] font-bold text-[1.2rem] rounded-lg bg-[#3C3C45] flex justify-center">
                +55 15 98804 5279
              </span>
              <span className="text-white/50 font-medium text-[.8rem]">
                comercial@devstyle.com.br
              </span>
            </div>
            <div className="flex flex-col gap-[1rem] max-sm:items-center max-sm:text-center">
              <h1 className="text-white font-semibold text-[1.3rem] flex gap-[1rem] items-center">
                <LocationIcon /> Localização
              </h1>
              <span className="w-fit text-white/80 font-semibold text-[1rem] flex justify-center">
                Rua Maria aparecida Massa 251 Jardim Europa <br />
                Votorantim, Brasil
              </span>
              <Link
                href="https://goo.gl/maps/JH2MEKGPQyvHHM966"
                target="blank"
                className="text-[#FFDC60] underline"
              >
                location
              </Link>
            </div>
          </div>
          <div className="h-[1.5px] bg-[#727274]/70"></div>
          <div className="flex justify-between gap-[6rem] max-sm:flex-col max-sm:items-center max-sm:text-center max-sm:gap-[3rem]">
            <div className="flex flex-col gap-[1rem]">
              <h1 className="text-white font-semibold text-[1.3rem] flex gap-[1rem] items-center">
                <PagesIcon /> Páginas
              </h1>
              <ul className="flex flex-col gap-[1rem] mt-[1rem]">
                {NavsItems.map((item) => {
                  return (
                    <li key={item.id} className="font-medium text-white">
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h1 className="text-white font-semibold text-[1.3rem] flex gap-[1rem] items-center">
                <Ultilits /> Páginas de ultilidades
              </h1>
              <ul className="flex flex-col gap-[1rem] mt-[1rem]">
                {UltilidadeArray.map((item) => {
                  return (
                    <li key={item.id} className="font-medium text-white">
                      <Link href={item.link}>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="flex flex-col gap-[1rem]">
              <h1 className="text-white font-semibold text-[1.3rem] flex gap-[1rem] items-center">
                <Follows /> Follows
              </h1>
              <ul className="flex flex-col gap-[1rem] mt-[1rem]">
                {FollowsArray.map((item) => {
                  return (
                    <li key={item.id} className="font-medium text-white">
                      <Link href={item.link} target='blank'>{item.label}</Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-[.7rem] max-sm:gap-[1.2rem]">
            <div className="h-[1.5px] bg-[#727274]/70"></div>
            <span className="text-[.8rem] text-right text-white/60 max-sm:text-center">
              Copyright © DevStyle | Designed by AfonsoBezerra - Powered by
              DevStyle
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
