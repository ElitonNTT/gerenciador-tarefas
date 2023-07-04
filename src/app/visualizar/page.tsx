export default function Visualizar() {
  const desc = { descrição: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' }
  return (
    <div className="flex flex-col gap-4 w-2/5 bg-zinc-800 shadow-md p-4 rounded-md">
      <div>
        <div>TITULO DA TAREFA</div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2">Descrição</label>
        <input id="description" className="outline-none bg-transparent border-b-2" value={desc.descrição} />
      </div>
      <button className="flex self-end w-fit p-2 bg-zinc-600 rounded mt-2">Cancelar</button>
    </div>
  )
}