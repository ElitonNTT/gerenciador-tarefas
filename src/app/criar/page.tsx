'use client'
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

export default function CriarTask() {


  const { data: session } = useSession()

  axios.defaults.baseURL = 'http://localhost:3001'
  const router = useRouter()
  const [formData, setFormData] = useState({
    user: session?.user?.name,
    titulo: '',
    descricao: ''
  })

  const handleChange = (e: any) => {
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const data = await axios.post('/create', formData)
      .then(data => {
        router.push('/inicio')
      })
      .catch(error => console.log(error))
    console.log(data)
  }

  if (!session) {
    router.push('/')
  }

  return (
    <form onSubmit={handleSubmit}
      className="flex justify-center min-h-screen items-center " >
      <div className="flex flex-col w-5/6 md:w-3/5 gap-2 p-4 text-[#fafafa]  bg-gray-600 shadow-2xl rounded-md">
        <header className="font-semibold text-[28px]">Criar nova tarefa</header>
        <label htmlFor="titulo" className="text-[26px] text-white" >
          Titulo
        </label >
        <input
          id="titulo"
          name="titulo"
          className="bg-gray-700 font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
          placeholder="Lavar o uniforme"
          onChange={handleChange}
        />
        <label htmlFor="descricao" className="text-[26px] text-white">
          Descrição
        </label>
        <input
          id="descricao"
          name="descricao"
          className="bg-gray-700 font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
          placeholder="Não voltar com a Ex"
          onChange={handleChange}
        />
        <div className="flex w-full justify-between mt-2">
          <button type="submit" className="rounded-md bg-green-700 p-4 text-white hover:scale-105">Adicionar</button>
          <Link href='/inicio' className="text-white font-light p-4 hover:scale-105">Cancelar</Link>
        </div>
      </div >
    </form >
  );
}
