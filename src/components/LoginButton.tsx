'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
const LoginButton = () => {
  return (
    <div className='flex gap-2'>
      <button
        type='button'
        onClick={() => signIn("google")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105' >
        Google
      </button>
      <button
        type='button'
        onClick={() => signIn("github")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105' >
        Github
      </button>
      <button
        type='button'
        onClick={() => signIn("discord")}
        className='flex justify-center items-center gap-12 text-black
      bg-white w-24 h-16 rounded-2xl shadow-2xl hover:scale-105' >
        Discord
      </button>
    </div>
  )
}

export default LoginButton