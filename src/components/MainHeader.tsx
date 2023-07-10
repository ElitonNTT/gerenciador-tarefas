'use client'
import { Image } from '@chakra-ui/react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

function MainHeader() {
  const { data: session } = useSession()
  console.log(session)
  return (
    <div className='flex items-center gap-4'>
      <h2 className='font-semibold'>{session?.user?.name}</h2>
      {session && (
        <Image src={`${session?.user?.image}`} className='rounded-full w-12' alt='imagem' />
      )}
      <button className='px-4 bg-red-600 rounded-md hover:scale-105' onClick={() => signOut()}>Sair</button>
    </div>
  )
}

export default MainHeader