'use client'
import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function Editar({ params }: { params: { id: string } }) {

  const [taskArray, setTaskArray] = useState<{ titulo: string, descricao: string }[] | any>([]);
  const [formData, setFormData] = useState<{ id: string, titulo: string, descricao: string }>({
    id: '',
    titulo: '',
    descricao: ''
  })

  axios.defaults.baseURL = "http://localhost:3001";

  const getFetchData = async () => {
    const data = await axios.get("/" + params.id)
    setTaskArray(data.data)
    return data.data
  };

  useEffect(() => {
    (async () => {
      const data = await getFetchData();
      handleInitialForm(data)
    })()
  }, []);

  const handleInitialForm = (data: any) => {
    if (!data.success) {
      return console.log('Aguardando')
    }
    setFormData({ id: data.data._id, titulo: data.data.titulo, descricao: data.data.descricao })
  }

  const handleForm = (e: any) => {
    const { value, name } = e.target
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e: any) => {
    e.prevent.default()
    const data = await axios.put('/update', formData)
  }
  console.log(formData)

  return (
    <form onSubmit={handleSubmit}
      className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col w-5/6 md:w-3/5 gap-2 p-4 text-[#fafafa] bg-gray-600 shadow-2xl rounded-md">
        <header className="font-semibold text-[28px]">Editar</header>
        <label htmlFor="title" className="text-[26px] text-white" >
          Título
        </label >
        <input
          id="title"
          name="titulo"
          value={formData.titulo}
          onChange={handleForm}
          className="bg-transparent font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
        />
        <label htmlFor="descricao" className=" text-[26px] text-white">
          Descrição
        </label>
        <input
          id="descricao"
          name="descricao"
          value={formData.descricao}
          onChange={handleForm}
          className="bg-transparent font-light border-b-2 border-zinc-400  px-2 rounded-sm text-[22px] outline-none"
        />
        <div className="flex w-full justify-between mt-2">
          <button type="submit" className="rounded-md bg-green-700 p-4 text-white hover:scale-105">Salvar Alteração</button>
          <Link href='/' className="text-white font-light p-4 hover:scale-105">Cancelar</Link>
        </div>
      </div >
    </form >
  )
}