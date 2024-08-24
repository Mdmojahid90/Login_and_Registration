import styles from "./Item.module.css";
function Item({ item, handleOnClick }) {
  return (
    <>
      <li
        className={`list-group-item ${styles.libg}`}
        style={{ cursor: "pointer" }}
        onClick={() => handleOnClick(item)}
      >
        {item}
      </li>
    </>
  );
}
export default Item;
