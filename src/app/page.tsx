'use client'
import { MdOutlineAddCircleOutline, MdOutlineDelete, MdEditNote } from 'react-icons/md'
import List from '@/components/List'
import AddTask from '@/components/AddTask'
import { useState } from 'react'

export default function Home() {

  const [addTask, setAddTask] = useState(false)

  const handleAddTask = () => {
    setAddTask(true)
  }

  return (
    <main className="w-full h-screen justify-center items-center py-4">
      <header className="flex justify-between px-4">
        <div>Logo</div>
        <button>Log in</button>
      </header>
      <div className="flex justify-center items-center gap-2">
        <div className="flex flex-col justify-between w-2/5 px-4 py-4 rounded-md font-medium text-[#cacaca] text-[22px] bg-zinc-800 shadow-xl">
          <div className="flex w-full justify-between items-center mb-4 border-zinc-500 py-4 px-4">
            <div className='font-bold text-[36px]'>{!addTask ? 'TAREFAS' : 'Adicionar nova tarefa'}</div>
            <button onClick={handleAddTask}>{!addTask && (<MdOutlineAddCircleOutline size={48} className='hover:scale-125' />)}</button>
          </div>
          {!addTask ? (<List />) : addTask && (< AddTask />)}
        </div>
      </div>
    </main>
  )
}
