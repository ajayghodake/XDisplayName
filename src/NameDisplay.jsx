import { useState } from "react";
const NameDisplay = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
//   const [fullName, setFullName] = useState("")
  const [displayName, setDisplayName] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const reg = /^[a-zA-Z\s]*$/; //Regex Explanation

    if (firstName.trim().length <= 2) {
      setError("First name must be more than 2 characters long");
      return;
    }
    if (!reg.test(firstName) || !reg.test(lastName)) {
      setError(
        "Name can only contains LowerCase and UpperCase Characters, No (symbols, numbers and special chatacters) will be accepted"
      );
      return;
    }

    // if(firstName && lastName) {
    //     setFullName(`${firstName} ${lastName}`);
    // }

    setError("");
    setDisplayName(true);
  };

  return (
    <>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first">
            First Name:{" "}
            <input
              id="first"
              name="firstname"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
                setLastName("");
                setDisplayName(false);
              }}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="last">
            Last Name:{" "}
            <input
              id="last"
              name="lastname"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {displayName && !error ? (
        <p>
          Full Name: {firstName} {lastName} {fullName}
        </p>
      ) : null}
    </>
  );
};

export default NameDisplay;
