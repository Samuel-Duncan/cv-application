import Inputs from "./Inputs";
import Form from "./Form";
import "../styles/Forms.css";

function EducationForm({ formData, add, remove }) {
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
    </Form>
  );
}
