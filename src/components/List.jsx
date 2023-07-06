import { MdOutlineDelete, MdEditNote } from "react-icons/md";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";

export default function List() {
  const [taskArray, setTaskArray] = useState([]);

  axios.defaults.baseURL = "http://localhost:3001";

  const getFetchData = async () => {
    const data = await axios.get("/");
    setTaskArray(data.data.data);
  };
  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id);
    alert("Deletado com sucesso!");
    getFetchData();
  };

  return (
    <div className="flex flex-col gap-4">
      {taskArray.length <= 0 ? (
        <div>Sem tarefas!</div>
      ) : (
        taskArray.map((item, key) => (
          <Accordion
            allowToggle
            key={key}
            className="flex w-full gap-2 justify-between bg-gray-500 p-2 shadow-md rounded"
          >
            <AccordionItem className="w-full flex flex-wrap justify-between items-center border-none">
              <h2 className="w-5/6">
                <AccordionButton>
                  {/* <div>{item.user}</div> */}
                  <div className="w-full text-left ml-4">{item.titulo}</div>
                </AccordionButton>
              </h2>
              <Link href="/editar">
                <MdEditNote size={28} className="hover:scale-125" />
              </Link>
              <button onClick={() => handleDelete(item._id)}>
                <MdOutlineDelete size={28} className="hover:scale-125" />
              </button>
              <AccordionPanel>{item.descricao}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))
      )}
    </div>
  );
}
