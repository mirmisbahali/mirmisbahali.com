import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mir Misbah Ali',
  description: 'Engineering sustainable solutions for a better tomorrow.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark')}else{document.documentElement.classList.add('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={`${inter.className} transition-colors duration-300`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5XFHMMF');`}}></Script>
    </html>
  )
}
