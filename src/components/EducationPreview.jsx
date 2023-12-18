function EducationPreview({ id, course, school, start, end }) {
  return (
    <li key={id}>
      <p>{course}</p>
      <p>{school}</p>
      <p>
        {start} - {end}
      </p>
    </li>
  );
}

export default EducationPreview;
