import Inputs from "./Inputs";

function PersonalDetails({
  firstName,
  lastName,
  email,
  phoneNumber,
  address,
  onChange,
}) {
  return (
    <form action="">
      <legend>Personal Details</legend>
      <Inputs
        id="firstName"
        label="First Name:"
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={onChange}
      />
      <Inputs
        id="lastName"
        label="Last Name:"
        placeholder="Last Name"
        type="text"
        value={lastName}
        onChange={onChange}
      />
      <Inputs
        id="email"
        label="Email:"
        placeholder="Email"
        type="email"
        value={email}
        onChange={onChange}
      />
      <Inputs
        id="phoneNumber"
        label="Phone Number:"
        placeholder="Phone Number"
        type="tel"
        value={phoneNumber}
        onChange={onChange}
      />
      <Inputs
        id="address"
        label="Address:"
        placeholder="Address"
        type="text"
        value={address}
        onChange={onChange}
      />
    </form>
  );
}
