import Inputs from "./Inputs";
import Form from "./Form";
import Buttons from "./Buttons";
import "../styles/Forms.css";

function EducationForm({ isAdded, add, remove }) {
  return (
    <Form title="Education">
      <Inputs
        id="course"
        label="Course: "
        placeholder="Course"
        type="text"
      ></Inputs>
      <Inputs
        id="school"
        label="School: "
        placeholder="School"
        type="text"
      ></Inputs>
      <Inputs
        id="startDate"
        label="Start Date: "
        placeholder="Start Date"
        type="text"
      ></Inputs>
      <Inputs
        id="endDate"
        label="End Date: "
        placeholder="End Date"
        type="text"
      ></Inputs>
      {isAdded ? (
        <Buttons text="Delete" onClick={remove}></Buttons>
      ) : (
        <Buttons onClick={add}></Buttons>
      )}
    </Form>
  );
}

export default EducationForm;
