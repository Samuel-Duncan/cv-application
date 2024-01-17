import { useState } from "react";
import { v4 as uuid } from "uuid";
import PersonalForm from "./components/PersonalForm";
import PersonalPreview from "./components/PersonalPreview";
import EducationForm from "./components/EducationForm";
import EducationPreview from "./components/EducationPreview";
import WorkForm from "./components/WorkForm";
import WorkPreview from "./components/WorkPreview";
import "./styles/App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [education, setEducation] = useState([]);
  const [work, setWork] = useState([]);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  const addEducation = (e) => {
    e.preventDefault();
    const id = uuid();
    const course = e.target[0].value;
    const school = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newEducation = { id, course, school, start, end };
    setEducation([...education, newEducation]);
    clear(e);
  };

  const saveEducation = (e, id) => {
    e.preventDefault();
    const course = e.target[0].value;
    const school = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const updateEdu = { course, school, start, end };

    setEducation(
      education.map((edu) => {
        if (edu.id === id) {
          return { ...edu, ...updateEdu };
        } else {
          return edu;
        }
      }),
    );
  };

  const removeEducation = (id) => {
    setEducation((currentEducation) => {
      return currentEducation.filter((edu) => edu.id !== id);
    });
  };

  const addWork = (e) => {
    e.preventDefault();
    const id = uuid();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    let newWork = { id, position, company, start, end };
    setWork([...work, newWork]);
    clear(e);
  };

  const saveWork = (e, id) => {
    e.preventDefault();
    const position = e.target[0].value;
    const company = e.target[1].value;
    const start = e.target[2].value;
    const end = e.target[3].value;
    const updateWork = { position, company, start, end };

    setWork(
      work.map((wo) => {
        if (wo.id === id) {
          return { ...wo, ...updateWork };
        } else {
          return wo;
        }
      }),
    );
  };

  const removeWork = (id) => {
    setWork((currentWork) => {
      return currentWork.filter((wo) => wo.id !== id);
    });
  };

  const clear = (e) => {
    for (let i = 0; i < e.target.length; i++) {
      e.target[i].value = "";
    }
  };

  return (
    <div className="page-wrapper">
      <section className="forms">
        <h2 style={{ marginBottom: "-10px" }}>Personal Details</h2>
        <PersonalForm
          firstNameChange={handleFirstName}
          lastNameChange={handleLastName}
          emailChange={handleEmail}
          phoneNumberChange={handlePhoneNumber}
          addressChange={handleAddress}
        />
        <EducationForm
          formData={education}
          add={addEducation}
          save={saveEducation}
          remove={removeEducation}
        />
        <WorkForm
          formData={work}
          add={addWork}
          save={saveWork}
          remove={removeWork}
        />
      </section>
      <section>
        <PersonalPreview
          firstName={firstName}
          lastName={lastName}
          email={email}
          phoneNumber={phoneNumber}
          address={address}
        />
        <h2>Education</h2>
        {education.map((edu) => {
          return (
            <EducationPreview
              key={edu.id}
              course={edu.course}
              school={edu.school}
              start={edu.start}
              end={edu.end}
            ></EducationPreview>
          );
        })}
        <h2>Work</h2>
        {work.map((wo) => {
          return (
            <WorkPreview
              key={wo.id}
              position={wo.position}
              company={wo.company}
              start={wo.start}
              end={wo.end}
            ></WorkPreview>
          );
        })}
      </section>
    </div>
  );
}

export default App;
