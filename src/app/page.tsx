'use client'
import { MdOutlineAddCircleOutline } from 'react-icons/md'
import { ChakraProvider } from '@chakra-ui/react'
import List from '@/components/List'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="w-full min-h-screen justify-center items-center py-4 bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-between w-2/5 px-4 py-4 rounded-md font-medium text-[#cacaca] text-[22px] bg-zinc-800 shadow-xl">
          <div className="flex w-full justify-between items-center mb-4 border-zinc-500 py-4 px-4">
            <header>Gerenciador de Tarefas</header>
            <Link href='/criar'><MdOutlineAddCircleOutline size={48} className='hover:scale-125' /></Link>
          </div>
          <ChakraProvider>
            <List />
          </ChakraProvider>
        </div>
      </div>
    </main>
  )
}
