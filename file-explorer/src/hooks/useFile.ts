import { useState } from "react";

import { FileExplorerProps } from "../types/file";
import {
  addRecursively,
  createNewNode,
  deleteRecursively,
  renameRecursively,
} from "../utils/helper";

function useFile(initialStructure: FileExplorerProps["structure"]) {
  const [structure, setStructure] = useState(initialStructure);

  const addNode = (parentId: number, type: "folder" | "file") => {
    const newNode = createNewNode(type);
    setStructure((prevStructure) =>
      addRecursively(newNode, prevStructure, parentId)
    );
  };
  const deleteNode = (id: number) => {
    setStructure((prevStructure) => deleteRecursively(prevStructure, id));
  };

  const renameNode = (id: number, newName: string) => {
    setStructure((prevStructure) =>
      renameRecursively(prevStructure, id, newName)
    );
  };

  return {
    structure,
    addNode,
    deleteNode,
    renameNode,
  };
}

export default useFile;
