import Folder from "./Folder";
import useFile from "../hooks/useFile";
import { FileExplorerProps } from "../types/file";

const initialStructure: FileExplorerProps["structure"] = [
  {
    id: 1,
    type: "folder",
    name: "root",
    children: [
      { id: 2, type: "file", name: "file1.txt" },
      //   {
      //     id: 3,
      //     type: "folder",
      //     name: "subfolder",
      //     children: [
      //       { id: 4, type: "file", name: "file2.txt" },
      //       { id: 5, type: "file", name: "file3.txt" },
      //       { id: 6, type: "file", name: "file4.txt" },
      //       {
      //         id: 7,
      //         type: "folder",
      //         name: "file5.txt",
      //         children: [{ id: 8, type: "file", name: "file6.txt" }],
      //       },
      //     ],
      //   },
    ],
  },
];

const FileExplorer = () => {
  // const [structure, setStructure] = useState(initialStructure);
  const { structure, addNode, deleteNode, renameNode } =
    useFile(initialStructure);

  return (
    <div>
      <Folder
        node={structure[0]}
        addNode={addNode}
        deleteNode={deleteNode}
        renameNode={renameNode}
      />
    </div>
  );
};

export default FileExplorer;
