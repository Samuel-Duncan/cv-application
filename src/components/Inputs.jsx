function Inputs({ id, label, placeholder, type, value, onChange }) {
  return (
    <div className="inputs">
      <label htmlFor={id}>{label}</label>
      {type === "text" ? (
        <input
          id={id}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
        />
      ) : (
        <textarea
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        ></textarea>
      )}
    </div>
  );
}

export default Inputs;
