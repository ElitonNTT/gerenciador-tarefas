import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'
import MainHeader from '@/components/MainHeader'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Gerenciador de Tarefas',
  description: 'Descricao',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider>
        <body className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' >
          <header className='flex justify-end w-full p-4'>
            <MainHeader />
          </header>
          {children}
        </body>
      </Provider>
    </html >
  )
}
