import React, { useState } from "react";
import Parse from "parse";

function UserRegistration() {
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
      <h2>User Registration</h2>
      <input
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChange={handleChangeUser}
        //onChangeText={(text) => setUsername(text)}
      ></input>
      <input
        style={styles.input}
        value={password}
        placeholder={"Password"}
        onChange={handleChangePassword}
      ></input>
      <br />
      <button onClick={doUserRegistration}>Create user</button>
      <br />
      <br />
    </>
  );
}

const styles = {
  input: {
    margin: 50,
  },
};

export default UserRegistration;
