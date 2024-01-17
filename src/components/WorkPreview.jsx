import "../styles/EducationPreview.css";

function WorkPreview({ id, position, company, start, end }) {
  return (
    <li key={id}>
      <p>{position}</p>
      <p>{company}</p>
      <p>
        {start} - {end}
      </p>
    </li>
  );
}

export default WorkPreview;
