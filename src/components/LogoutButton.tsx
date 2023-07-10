'use client'
import { signOut } from 'next-auth/react'
import React from 'react'

function LogoutButton() {
  return (
    <button className='px-4 bg-red-600 rounded-md m-2 hover:scale-105' onClick={() => signOut()}>Sair</button>
  )
}

export default LogoutButton