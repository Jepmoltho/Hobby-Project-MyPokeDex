import React, { useState } from "react";
import Parse from "parse";
import "./App.css";

function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser, setCurrentUser] = useState(null);

  // Function that will return current user and also update current username
  const getCurrentUser = async function () {
    const currentUser = await Parse.User.current();
    // Update state variable holding current user
    setCurrentUser(currentUser);
    return currentUser;
  };

  const doUserLogin = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = username;
    const passwordValue = password;
    try {
      const loggedInUser = await Parse.User.logIn(usernameValue, passwordValue);
      //logIn returns the corresponding ParseUser object
      alert(
        "Success! User " + loggedInUser.get("username") + " has logged in!"
      );
      // To verify that this is in fact the current user, `current` can be used
      const currentUser = await Parse.User.current();
      console.log(loggedInUser === currentUser);
      setUsername("");
      setPassword("");
      // Update state variable holding current user
      getCurrentUser();
      return true;
    } catch (error) {
      alert("Error caught: " + error);
      return false;
    }
  };

  return (
    <>
      <h2>User login</h2>
      <input
        style={styles.input}
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={styles.input}
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => doUserLogin()} type="primary">
        Log In
      </button>
    </>
  );
}

const styles = {
  input: {
    margin: 50,
  },
};

export default UserLogin;
