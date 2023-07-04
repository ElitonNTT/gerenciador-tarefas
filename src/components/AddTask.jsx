export default function AddTask() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-[#fafafa] text-[26px]">
          Descrição
        </label>
        <input
          id="description"
          className="bg-transparent font-light border-b-2 border-zinc-700 text-[#fafafa] px-2 rounded-sm text-[22px] outline-none"
          placeholder="Não voltar com a Ex"
        />
      </div>
      <div className="flex w-full justify-between">
        <button className="rounded-md bg-zinc-700 p-2">Adicionar</button>
        <button className="font-light">Cancelar</button>
      </div>
    </div>
  );
}
