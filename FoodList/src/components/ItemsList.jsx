import Item from "./Item";
function ItemsList({ items, handleOnClick }) {
  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item item={item} key={item} handleOnClick={handleOnClick} />
        ))}
      </ul>
    </>
  );
}
export default ItemsList;
