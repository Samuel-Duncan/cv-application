import "../styles/Forms.css";

function WorkForm({ formData, add, save, remove }) {
  return (
    <section className="education">
      <h2>Work</h2>
      {formData.map((formData) => {
        return (
          <li key={formData.id}>
            <form className="form" onSubmit={(e) => save(e, formData.id)}>
              <input
                type="text"
                placeholder="Position"
                defaultValue={formData.position}
              ></input>
              <input
                type="text"
                placeholder="Company"
                defaultValue={formData.company}
              ></input>
              <input
                type="text"
                placeholder="Start"
                defaultValue={formData.start}
              ></input>
              <input
                type="text"
                placeholder="End"
                defaultValue={formData.end}
              ></input>
              <div className="btn-container">
                <button type="submit" className="btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => remove(formData.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </li>
        );
      })}
      <form className="form" onSubmit={add}>
        <input type="text" placeholder="Position"></input>
        <input type="text" placeholder="Company"></input>
        <input type="text" placeholder="Start"></input>
        <input type="text" placeholder="End"></input>
        <button type="submit" className="btn-primary">
          Add
        </button>
      </form>
    </section>
  );
}

export default WorkForm;
