import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

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
          {children}
        </body>
      </Provider>
    </html >
  )
}
