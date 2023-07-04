import { MdOutlineDelete, MdEditNote } from "react-icons/md";

export default function List() {
  const taskArr = [
    { id: "#01", nome: "task 01" },
    { id: "#02", nome: "task 02" },
    { id: "#03", nome: "task 03" },
    { id: "#04", nome: "task 04" },
    { id: "#05", nome: "task 05" },
    { id: "#06", nome: "task 06" },
    { id: "#07", nome: "task 07" },
    { id: "#08", nome: "task 08" },
    { id: "#09", nome: "task 09" },
    { id: "#10", nome: "task 10" },
  ];
  return (
    <div className="flex flex-col gap-4">
      {taskArr.length <= 0 ? (
        <div>Sem tarefas!</div>
      ) : (
        taskArr.map((item, key) => (
          <div
            key={key}
            className="flex w-full gap-2 justify-between bg-zinc-700 p-2 shadow-md rounded"
          >
            <div>{item.id}</div>
            <div className="w-2/3">{item.nome}</div>
            <div className="flex gap-4">
              <button>
                <MdEditNote size={28} className="hover:scale-125" />
              </button>
              <button>
                <MdOutlineDelete size={28} className="hover:scale-125" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
