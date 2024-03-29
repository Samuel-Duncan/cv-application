function Inputs({ id, label, placeholder, type, value, onChange }) {
  return (
    <div className="inputs">
      <label htmlFor={id}>{label}</label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default Inputs;
