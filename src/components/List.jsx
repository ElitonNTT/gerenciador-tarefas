import { MdOutlineDelete, MdEditNote } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import Link from "next/link";

export default function List() {
  const taskArr = [
    {
      id: "#01",
      nome: "Lembrar de lavar o uniforme",
    },
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
          <Accordion
            allowToggle
            allowMultiple
            key={key}
            className="flex w-full gap-2 justify-between bg-zinc-700 p-2 shadow-md rounded"
          >
            <AccordionItem className="w-full flex flex-wrap justify-between items-center border-none">
              <h2 className="w-5/6">
                <AccordionButton>
                  <div>{item.id}</div>
                  <div className="w-full text-left ml-4">{item.nome}</div>
                </AccordionButton>
              </h2>
              <Link href="/editar">
                <MdEditNote size={28} className="hover:scale-125" />
              </Link>
              <button>
                <MdOutlineDelete size={28} className="hover:scale-125" />
              </button>
              <AccordionPanel>
                ASIUHSDUISDHISUHSIUDAHSADUIASIUHSDUISDHISUHSIUDAHSADUIASIUHSDUISDHISUHSIUDAHSADUI
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))
      )}
    </div>
  );
}
