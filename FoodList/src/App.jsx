import { useState } from "react";
import ItemsList from "./components/ItemsList";
import Welcomemsg from "./components/Welcomemsg";
import InputFood from "./components/InputFood";

function App() {
  const [items, setItems] = useState([]);
  const handleOnClick = (name) => {
    console.log("Buyed " + name);
  };
  const handleOnKeyDown = (event) => {
    if (event.key === "Enter") {
      const newitems = [...items, event.target.value];
      setItems(newitems);
      event.target.value = "";
    }
  };
  return (
    <div className="container">
      <h1>Food Lists</h1>
      <InputFood handleOnKeyDown={handleOnKeyDown} />
      <Welcomemsg items={items} />
      <ItemsList items={items} handleOnClick={handleOnClick} />
    </div>
  );
}

export default App;
