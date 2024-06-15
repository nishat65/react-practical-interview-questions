import { FormEvent, useState } from "react";
import { FileProps } from "../types/file";

const File = ({ node, deleteNode, renameNode }: FileProps) => {
  const [newName, setNewName] = useState(node.name);

  const handleRename = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    renameNode(node.id, newName);
  };

  return (
    <div>
      📄 {node.name}
      <button className="btn" onClick={() => deleteNode(node.id)}>
        ␡
      </button>
      <form onSubmit={handleRename}>
        <input
          className="input"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button className="btn" type="submit">
          Rename
        </button>
      </form>
    </div>
  );
};

export default File;
