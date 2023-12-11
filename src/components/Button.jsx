function Button({ className = "button-primary", text = "Save" }) {
  return <button className={className}>{text}</button>;
}

export default function Buttons({ remove, cancel, save }) {
  return (
    <div className="buttons">
      <Button id="remove" onClick={remove} text="Delete" type="button"></Button>
      <Button
        id="cancel"
        className="button-secondary"
        onClick={cancel}
        text="Delete"
        type="button"
      ></Button>
      <Button id="save" onClick={save} type="submit"></Button>
    </div>
  );
}
