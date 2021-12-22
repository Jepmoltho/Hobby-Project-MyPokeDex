import React, { useState } from "react";
import Parse from "parse";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function UserRegistration() {
  const navigate = useNavigate("");
  const [username, setUsername] = useState("");
  const handleChangeUser = (e) => {
    setUsername(e.target.value);
  };
  const [password, setPassword] = useState("");
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const doUserRegistration = async function () {
    const usernameValue = username;
    const passwordValue = password;
    // Since the signUp method returns a Promise, we need to call it using await
    return await Parse.User.signUp(usernameValue, passwordValue)
      .then((createdUser) => {
        alert(
          "Succes! User " +
            createdUser.getUsername() +
            " was succesfully created!"
        );
        return true;
      })
      .catch((error) => {
        alert("Error caught: ", error);
        return false;
      });
  };

  return (
    <>
      <Header headline="Welcome to my Pokédex" />
      <h2>Create a user to get started</h2>
      <input
        value={username}
        placeholder={"Username"}
        onChange={handleChangeUser}
        //onChangeText={(text) => setUsername(text)}
      ></input>{" "}
      <input
        value={password}
        placeholder={"Password"}
        onChange={handleChangePassword}
      ></input>
      <br />
      <br />
      <button onClick={doUserRegistration}>Create user</button>
      <br />
      <br />
      <p style={{ display: "inline-block" }}>Already have a user?</p>{" "}
      <p style={{ display: "inline-block" }} onClick={() => navigate("/login")}>
        Continue to login
      </p>
    </>
  );
}

export default UserRegistration;
