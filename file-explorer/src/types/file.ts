export interface FolderProps {
  node: {
    id: number;
    type: "folder" | "file";
    name: string;
    children?: {
      id: number;
      type: "folder" | "file";
      name: string;
      children?: FolderProps["node"][];
    }[];
  };
  addNode: (parentId: number, type: "folder" | "file") => void;
  deleteNode: (id: number) => void;
  renameNode: (id: number, name: string) => void;
}

export interface FileExplorerProps {
  structure: {
    id: number;
    type: "folder" | "file";
    name: string;
    children?: {
      id: number;
      type: "folder" | "file";
      name: string;
      children?: FileExplorerProps["structure"];
    }[];
  }[];
  addNode: (parentId: number, type: string) => void;
  deleteNode: (id: number) => void;
  renameNode: (id: number, name: string) => void;
}

export interface FileProps {
  node: {
    id: number;
    name: string;
  };
  deleteNode: (id: number) => void;
  renameNode: (id: number, name: string) => void;
}
