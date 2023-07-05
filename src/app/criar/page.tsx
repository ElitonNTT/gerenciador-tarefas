'use client'

import Link from "next/link";

export default function CriarTask() {

  return (
    <main className="flex justify-center h-screen items-center">
      <div className="flex flex-col w-2/5 gap-2 p-4 shadow-2xl">
        <label htmlFor="title" className="text-[#fafafa] text-[26px]" >
          Titulo
        </label >
        <input
          id="title"
          className="bg-transparent font-light border-b-2 border-zinc-400 text-[#fafafa] px-2 rounded-sm text-[22px] outline-none"
          placeholder="Titulo"
        />
        <label htmlFor="description" className="text-[#fafafa] text-[26px]">
          Descrição
        </label>
        <input
          id="description"
          className="bg-transparent font-light border-b-2 border-zinc-400 text-[#fafafa] px-2 rounded-sm text-[22px] outline-none"
          placeholder="Não voltar com a Ex"
        />
        <div className="flex w-full justify-between mt-2">
          <button className="rounded-md bg-green-700 p-4">Adicionar</button>
          <Link href='/' className="font-light p-4">Cancelar</Link>
        </div>
      </div >
    </main >
  );
}
