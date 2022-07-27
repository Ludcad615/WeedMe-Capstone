import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/login.css"
import "../styles/signup.css"


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLogginIn, setIsLogginIn] = useState(false);
  let navigate = useNavigate()


  function handleSubmit(e) {
    e.preventDefault();
    setIsLogginIn(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLogginIn(false);
      if (r.ok) {
        r.json().then((user) => {
          navigate("/home");
          console.log(user);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button id="login-btn" type="submit" bg="#000080" color="#fff">
          {isLogginIn ? "LogginIn..." : "Login"}
        </button>
        <div>
          {/* {errors.map((error) => (
            <error key={error}>{error}</error>
          ))} */}
        </div>
      </form>
    </div>
  )
}

export default LoginForm