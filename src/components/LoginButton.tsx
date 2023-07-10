'use client'
import { data } from 'autoprefixer'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const LoginButton = () => {
  const { data: session } = useSession()
  console.log(session)
  const router = useRouter()

  if (session) {
    router.push('/')
  }

  return (
    <div className='flex gap-2'>
      <button
        type='button'
        onClick={() => signIn("google")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        Google
      </button>
      <button
        type='button'
        onClick={() => signIn("github")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        Github
      </button>
      <button
        type='button'
        onClick={() => signIn("discord")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105 hover:bg-green-700 hover:text-white' >
        Discord
      </button>
    </div>
  )
}

export default LoginButton