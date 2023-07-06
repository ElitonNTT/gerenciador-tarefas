'use client'
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";


export default function CriarTask() {

  axios.defaults.baseURL = 'http://localhost:3001'

  const [formData, setFormData] = useState({
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
    // tentar usar o router para redirecionar para lista quando criar nova tarefa
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit}
      className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" >
      <div className="flex flex-col w-2/5 gap-2 p-4 text-[#fafafa]  bg-gray-600 shadow-2xl rounded-md">
        <header className="font-semibold text-[28px]">Criar nova tarefa</header>
        <label htmlFor="titulo" className="text-[26px] text-white" >
          Titulo
        </label >
        <input
          id="titulo"
          name="titulo"
          className="bg-transparent font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
          placeholder="Lavar o uniforme"
          onChange={handleChange}
        />
        <label htmlFor="descricao" className="text-[26px] text-white">
          Descrição
        </label>
        <input
          id="descricao"
          name="descricao"
          className="bg-transparent font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
          placeholder="Não voltar com a Ex"
          onChange={handleChange}
        />
        <div className="flex w-full justify-between mt-2">
          <button type="submit" className="rounded-md bg-green-700 p-4 text-white hover:scale-105">Adicionar</button>
          <Link href='/' className="text-white font-light p-4 hover:scale-105">Cancelar</Link>
        </div>
      </div >
    </form >
  );
}
