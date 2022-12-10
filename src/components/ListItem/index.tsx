import { Item } from "../../types/Item";
import styles from "./listItem.module.scss";
// import { FaTrashAlt } from "react-icons/fa";

type Props = {
  item: Item;
  done: boolean;
  onChange: (id: number, done: boolean) => void;
};

export const ListItem = ({ item, onChange }: Props) => {
  return (
    <div className={styles.mainTasks}>
      <div className={styles.task} data-done={item.done}>
        <input
          type="checkbox"
          checked={item.done}
          onChange={(e) => onChange(item.id, e.target.checked)}
          className={styles.input}
        />
        <label className={item.done ? styles.line : ""}>{item.name}</label>
      </div>
      {/* <div className={styles.mainDeleted}>
        <button className={styles.deletedButton}>
          <FaTrashAlt size={20} />
        </button>
      </div> */}
    </div>
  );
};
