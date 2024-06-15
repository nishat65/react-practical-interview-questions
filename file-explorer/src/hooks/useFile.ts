import { useState } from "react";

import { FileExplorerProps } from "../types/file";

function useFile(initialStructure: FileExplorerProps["structure"]) {
  const [structure, setStructure] = useState(initialStructure);

  function createNewNode(type: string) {
    return {
      id: Date.now(),
      type,
      name: type === "folder" ? "New Folder" : "New File",
      children: type === "folder" ? [] : undefined,
    };
  }

  const addNode = (parentId: number, type: string) => {
    const addRecursively = (
      nodes: FileExplorerProps["structure"],
      parentId: number
    ): FileExplorerProps["structure"] => {
      return nodes.map((node: any) => {
        if (node.id === parentId && node.type === "folder") {
          return { ...node, children: [...node.children, newNode] };
        }
        if (node.children) {
          return {
            ...node,
            children: addRecursively(node.children, parentId),
          };
        }
        return node;
      });
    };
    const newNode = createNewNode(type);
    setStructure((prevStructure) => addRecursively(prevStructure, parentId));
  };
  const deleteNode = (id: number) => {
    const deleteRecursively = (
      nodes: FileExplorerProps["structure"],
      id: number
    ): FileExplorerProps["structure"] => {
      return nodes
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node.children) {
            return { ...node, children: deleteRecursively(node.children, id) };
          }
          return node;
        });
    };

    setStructure((prevStructure) => deleteRecursively(prevStructure, id));
  };

  const renameNode = (id: number, newName: string) => {
    const renameRecursively = (
      nodes: FileExplorerProps["structure"],
      id: number,
      newName: string
    ): FileExplorerProps["structure"] => {
      return nodes.map((node) => {
        if (node.id === id) {
          return { ...node, name: newName };
        }
        if (node.children) {
          return {
            ...node,
            children: renameRecursively(node.children, id, newName),
          };
        }
        return node;
      });
    };

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
