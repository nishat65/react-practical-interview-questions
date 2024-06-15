import { FormEvent, useState } from "react";
import File from "./File";
import { FolderProps } from "../types/file";

const Folder = ({ node, addNode, deleteNode, renameNode }: FolderProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [newName, setNewName] = useState(node.name);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleRename = (e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    renameNode(node.id, newName);
  };

  return (
    <div>
      <div>
        <strong
          style={{ cursor: "pointer" }}
          onClick={toggleOpen}
          aria-label="button"
          role="button"
        >
          {" "}
          <span>{isOpen ? "▼" : "▶"}</span>
          <span>📁 {node.name}</span>
        </strong>
        <button className="btn" onClick={() => addNode(node.id, "folder")}>
          + 📁
        </button>
        <button className="btn" onClick={() => addNode(node.id, "file")}>
          + 📄
        </button>
        <button className="btn" onClick={() => deleteNode(node.id)}>
          ␡
        </button>
        <form onSubmit={handleRename}>
          <input
            className="input"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button className="btn rename-btn" type="submit">
            Rename
          </button>
        </form>
      </div>
      {isOpen && node.children && (
        <div
          style={{
            marginLeft: "2rem",
            borderLeft: "1px solid black",
            padding: "0.6rem",
          }}
        >
          {node.children.map((child) =>
            child.type === "folder" ? (
              <Folder
                key={child.id}
                node={child}
                addNode={addNode}
                deleteNode={deleteNode}
                renameNode={renameNode}
              />
            ) : (
              <File
                key={child.id}
                node={child}
                deleteNode={deleteNode}
                renameNode={renameNode}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Folder;
