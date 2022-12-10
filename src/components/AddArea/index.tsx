import { useState, KeyboardEvent } from "react";
import styles from "./addArea.module.scss";
import { MdPostAdd } from "react-icons/md";

type Props = {
  onEnter: (taskName: string) => void;
};

export const AddArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState("");

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === "Enter" && inputText !== "") {
      onEnter(inputText);
      setInputText("");
    }
  };

  return (
    <div className={styles.mainInput}>
      <div className={styles.img}>
        <MdPostAdd size={20} />
      </div>
      <input
        type="text"
        placeholder="Adicione Uma Tarefa..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
        className={styles.input}
      />
    </div>
  );
};
