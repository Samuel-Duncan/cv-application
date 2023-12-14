function Form({ title, children }) {
  return (
    <>
      <form action="" className="form">
        <legend>{title}</legend>
        {children}
      </form>
    </>
  );
}

export default Form;
