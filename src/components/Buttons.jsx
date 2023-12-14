function Buttons({ text = "Add", onClick }) {
  return (
    <div className="buttons">
      <button className={text} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

export default Buttons;
