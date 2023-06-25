'use client'
import { ResultsTagArray } from '@/utils/results'
import { ResultsProjectsArray } from '@/utils/resultsProjects'
import { motion } from 'framer-motion'

const ResultsTag = ({project} : {project?: boolean}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full h-auto flex justify-between items-center max-md:grid max-md:grid-cols-2 max-md:grid-rows-2 max-md:justify-items-center max-md:gap-[2rem]"
    >
      {(project ? ResultsProjectsArray : ResultsTagArray).map((result) => {
        const variants = {
          offscreen: {
            scale: 0,
            opacity: 0,
          },
          onscreen: {
            opacity: 1,
            scale: 1,
            transition: {
              type: 'spring',
              bounce: 0.5,
              duration: 0.7 * result.id,
            },
          },
        }
        return (
          <motion.div
            key={result.id}
            variants={variants}
            className="flex gap-[.5rem] items-center leading-4"
          >
            <h1 className="text-white font-extrabold text-[2.5rem] flex items-center max-sm:text-[1.7rem] ">
              {result.number}
              <span
                className="font-bold ml-1 text-[2rem] max-sm:text-[1.5rem]"
                style={{ color: result.color }}
              >
                +
              </span>
            </h1>
            {result.text}
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default ResultsTag
