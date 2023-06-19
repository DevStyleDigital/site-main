import { ReactNode } from 'react'
import { Nunito } from 'next/font/google'
import Header from '@/components/app/header'
import 'swiper/css'
import 'swiper/css/navigation'
import './global.css'
import { SideBarRoot } from '@/components/app/sidebar'
import Script from 'next/script';

const nunito = Nunito({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/icon.png" sizes="any" />
      {/* Google Tag Manager */}
      <Script id="google-analytics" strategy="afterInteractive">
      {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MB546VV');
      `}
      </Script>
      {/* End Google Tag Manager */}
      </head>      
      <body className={nunito.className}>
        <SideBarRoot>
          <Header />
          {children}
        </SideBarRoot>
        {/* Google Tag Manager (noscript) */}
        <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MB546VV"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
                `,
            }}
          />
          {/* End Google Tag Manager (noscript) */}
      </body>
    </html>
  )
}
