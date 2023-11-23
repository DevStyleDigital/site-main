import { ReactNode } from 'react'
import './global.css'

export default function RootDash({ children }: { children: ReactNode }) {
  return (
    <main>
      {children}
    </main>
  )
}
