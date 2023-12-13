import Inputs from "./Inputs";
import "../styles/Forms.css";
function PersonalForm({
  firstNameChange,
  lastNameChange,
  emailChange,
  phoneNumberChange,
  addressChange,
}) {
  return (
    <form action="" className="form">
      <legend>Personal Details</legend>
      <Inputs
        id="firstName"
        label="First Name:"
        placeholder="First Name"
        type="text"
        onChange={firstNameChange}
      />
      <Inputs
        id="lastName"
        label="Last Name:"
        placeholder="Last Name"
        type="text"
        onChange={lastNameChange}
      />
      <Inputs
        id="email"
        label="Email:"
        placeholder="Email"
        type="email"
        onChange={emailChange}
      />
      <Inputs
        id="phoneNumber"
        label="Phone Number:"
        placeholder="Phone Number"
        type="tel"
        onChange={phoneNumberChange}
      />
      <Inputs
        id="address"
        label="Address:"
        placeholder="Address"
        type="text"
        onChange={addressChange}
      />
    </form>
  );
}

export default PersonalForm;
