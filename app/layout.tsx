import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/ui/theme-provider'
import Footer from '../components/ui/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Neeraj Patil | Portfolio',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
       <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BJ9CYKSL6D"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BJ9CYKSL6D');
            `,
          }}
        />
        <link rel="icon" href="/image_icon.png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
