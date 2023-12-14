import { useState } from "react";
import exampleData from "./exampleData";
import PersonalForm from "./components/PersonalForm";
import PersonalPreview from "./components/PersonalPreview";
import "./styles/App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

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

  return (
    <div className="page-wrapper">
      <section className="forms">
        <PersonalForm
          firstNameChange={handleFirstName}
          lastNameChange={handleLastName}
          emailChange={handleEmail}
          phoneNumberChange={handlePhoneNumber}
          addressChange={handleAddress}
        />
      </section>

      <PersonalPreview
        firstName={firstName}
        lastName={lastName}
        email={email}
        phoneNumber={phoneNumber}
        address={address}
      />
    </div>
  );
}

export default App;
