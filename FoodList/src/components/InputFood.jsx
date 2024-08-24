function InputFood({ handleOnKeyDown }) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter Food Name"
        onKeyDown={(event) => handleOnKeyDown(event)}
      />
    </>
  );
}
export default InputFood;
