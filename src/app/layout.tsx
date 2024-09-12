import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from '@/components/Providers'
import { constructMetadata } from '@/lib/utils'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: ReturnType<typeof constructMetadata> =
  constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="flex flex-col grainy-light">
          <div className="flex-1 flex">
            <Providers>{children}</Providers>
          </div>
        </main>
      </body>
    </html>
  )
}
