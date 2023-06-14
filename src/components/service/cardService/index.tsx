'use client'
import { ReactNode } from 'react'
import { useMotionValue, useTransform, motion } from 'framer-motion'

const Root = ({
  children,
  ...props
}: {
  children: ReactNode
  className: string
  custom: number
}) => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [100, -100], [-30, 30])

  return (
    <motion.div
      style={{ x, y, rotateX, rotateY, z: 100 }}
      drag
      dragElastic={0.12}
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      whileHover={{ cursor: 'grabbing' }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

const Title = ({
  children,
  ...props
}: {
  children: ReactNode
  className: string
}) => {
  return <h1 {...props}>{children}</h1>
}

const Text = ({
  children,
  ...props
}: {
  children: ReactNode
  className: string
}) => {
  return <span {...props}>{children}</span>
}

const Button = ({
  children,
  ...props
}: {
  children: ReactNode
  className: string
}) => {
  return <button {...props}>{children}</button>
}

const Image = ({
  children,
  ...props
}: {
  children: ReactNode
  className: string
}) => {
  return <div {...props}>{children}</div>
}

export const Card = {
  Root,
  Title,
  Text,
  Button,
  Image,
}
