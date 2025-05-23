import { type Metadata } from 'next'
import {
  ClerkProvider,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Navbar from "@/components/Navbar"
import Sidebar from '@/components/Sidebar'
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Social app',
  description: 'A social media application powered with NextJS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className='min-h-screen'>
              <Navbar/>
              <main className='py-8'>
                <div className='max-w-7xl mx-auto px-4'>
                  <div className='grid grid-cols-1 lg:grid-cols-12 gap-6'>
                    <div className='hidden lg:block lg:col-span-3'>
                      <Sidebar/>
                    </div>

                    <div className='lg:col-span-9'>
                      {children}
                      <Toaster /> 

                    </div>
                  </div>
                </div>
              </main>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}