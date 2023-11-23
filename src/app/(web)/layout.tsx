import Footer from "@/components/app/footer"
import Header from "@/components/app/header"
import { ReactNode } from "react"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <>
        <Header />
          {children}
        <Footer />
    </>
  )
}
