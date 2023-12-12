function Button({ className = "btn-primary", text = "Save" }) {
  return <button className={className}>{text}</button>;
}

function Buttons({ remove, cancel, save }) {
  return (
    <div className="buttons">
      <Button onClick={remove} text="Delete" type="button"></Button>
      <Button
        className="btn-secondary"
        onClick={cancel}
        text="Delete"
        type="button"
      ></Button>
      <Button onClick={save} type="submit"></Button>
    </div>
  );
}

export default Buttons;
