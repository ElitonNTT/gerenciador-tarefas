'use client'
import { ChakraProvider } from '@chakra-ui/react'
import List from '@/components/List'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between lg:w-3/5 w-5/5 px-2 py-4 rounded-md font-medium text-white text-[22px] bg-gray-600 shadow-2xl">
          <div className="flex w-full justify-between items-center mb-4 border-zinc-500 py-4 px-4">
            <header>Gerenciador de Tarefas</header>
            <Link href='/criar' className='rounded-md bg-green-700 p-2 text-white hover:scale-105'>Criar tarefa</Link>
          </div>
          <ChakraProvider>
            <List />
          </ChakraProvider>
        </div>
      </div>
    </main>
  )
}
