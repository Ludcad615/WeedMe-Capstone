import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const SignupForm = ({ fetchUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  let navigate = useNavigate();

  const resetState = () => {
    setFirstName("");
    setLastName("");
    setUsername("");
    setPassword("");
    setPasswordConfirmation("");
    setEmail("");
  };

  function handleSignup(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: firstName,
        last_name: lastName,
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
        email: email,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        fetchUser()
        navigate("/home");
      } else {
        r.json().then((error) => setErrors(error.errors));
      }
    });
    resetState();
  }

  return (
    <div className="signup">
      <form onSubmit={handleSignup}>
        <input
          placeholder="Your first name"
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          placeholder="Your last name"
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          placeholder="create a username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="enter your email"
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="enter your password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          placeholder="re-enter your password"
          type="password"
          id="passwordConfirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />

        <button id="signup-btn" type="submit">
          {isLoading ? "Loading..." : "Sign Up"}
        </button>
        <div>
          {errors.map((error) => (
            <error key={error}>{error}</error>
          ))}
        </div>
      </form>
    </div>
  );
};

export default SignupForm