import "../styles/Forms.css";

function EducationForm({ formData, add, save, remove }) {
  return (
    <section className="education">
      <h2>Education</h2>
      {formData.map((data) => {
        return (
          <li key={data.id}>
            <form className="form" onSubmit={(e) => save(e, data.id)}>
              <input
                type="text"
                placeholder="Course"
                defaultValue={data.course}
              ></input>
              <input
                type="text"
                placeholder="University"
                defaultValue={data.university}
              ></input>
              <input
                type="text"
                placeholder="Start"
                defaultValue={data.start}
              ></input>
              <input
                type="text"
                placeholder="End"
                defaultValue={data.end}
              ></input>
              <div className="btn-container">
                <button type="submit" className="btn-primary">
                  Save
                </button>
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => remove(data.id)}
                >
                  Delete
                </button>
              </div>
            </form>
          </li>
        );
      })}
      <form className="form" onSubmit={add}>
        <input type="text" placeholder="Course"></input>
        <input type="text" placeholder="University"></input>
        <input type="text" placeholder="Start"></input>
        <input type="text" placeholder="End"></input>
      </form>
    </section>
  );
}

export default EducationForm;
