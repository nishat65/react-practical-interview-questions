import { FileExplorerProps } from "../types/file";

export function createNewNode(type: string) {
  return {
    id: Date.now(),
    type,
    name: type === "folder" ? "New Folder" : "New File",
    children: type === "folder" ? [] : undefined,
  };
}

export const addRecursively = (
  newNode: ReturnType<typeof createNewNode>,
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
        children: addRecursively(newNode, node.children, parentId),
      };
    }
    return node;
  });
};

export const deleteRecursively = (
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

export const renameRecursively = (
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
