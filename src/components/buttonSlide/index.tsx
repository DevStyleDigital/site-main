'use client'

import Next from '@/assets/svg/next'

const ButtonSlide = () => {
  function ButtonSlide(next: boolean) {
    const buttonNext = document.querySelector('.swiper-button-next')
    const buttonPrev = document.querySelector('.swiper-button-prev')
    const eventoClick = new Event('click')
    if (next) {
      buttonNext?.dispatchEvent(eventoClick)
    } else {
      buttonPrev?.dispatchEvent(eventoClick)
    }
  }
  return (
    <div className="flex items-center gap-[1rem] max-sm:hidden">
      <button
        type="button"
        className="w-[3.5rem] h-[3.5rem] max-md:w-[2.5rem] max-md:h-[2.5rem] bg-[#454545] button-prev rounded-full flex justify-center items-center transition-all hover:scale-[1.05]"
        onClick={() => ButtonSlide(false)}
      >
        <Next />
      </button>
      <button
        type="button"
        className="w-[3.5rem] h-[3.5rem] max-md:w-[2.5rem] max-md:h-[2.5rem] bg-white rounded-full button-next flex justify-center items-center transition-all hover:scale-[1.05]"
        onClick={() => ButtonSlide(true)}
      >
        <Next />
      </button>
    </div>
  )
}

export default ButtonSlide
