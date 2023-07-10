import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'
import { signOut } from 'next-auth/react'
import LogoutButton from '@/components/LogoutButton'

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
        <body className={inter.className}>
          <header className='fixed flex justify-end w-full'>
            <LogoutButton />
          </header>
          {children}
        </body>
      </Provider>
    </html >
  )
}
