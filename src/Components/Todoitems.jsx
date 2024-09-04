import Todoitem from "./Todoitem";
import style from "./Todoitems.module.css";

const Todoitems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.container}>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name} // Ensure item.id is unique
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default Todoitems;
