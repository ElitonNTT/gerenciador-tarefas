import Link from "next/link"

export default function Editar() {
  return (
    <main className="flex justify-center h-screen items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="flex flex-col w-5/6 md:w-3/5 gap-2 p-4 text-[#fafafa] bg-gray-600 shadow-2xl rounded-md">
        <header className="font-semibold text-[28px]">Editar</header>
        <label htmlFor="title" className="text-[26px] text-white" >
          Título
        </label >
        <input
          id="title"
          className="bg-transparent font-light border-b-2 border-zinc-400 px-2 rounded-sm text-[22px] outline-none"
        />
        <label htmlFor="description" className=" text-[26px] text-white">
          Descrição
        </label>
        <input
          id="description"
          className="bg-transparent font-light border-b-2 border-zinc-400  px-2 rounded-sm text-[22px] outline-none"
        />
        <div className="flex w-full justify-between mt-2">
          <button className="rounded-md bg-green-700 p-4 text-white hover:scale-105">Salvar Alteração</button>
          <Link href='/' className="text-white font-light p-4 hover:scale-105">Cancelar</Link>
        </div>
      </div >
    </main >
  )
}