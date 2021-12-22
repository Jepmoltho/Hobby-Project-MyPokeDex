import Parse from "parse";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  //Next goal: Save some data on behalf of that user, and render it to the dashboard
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    setTimeout(console.log("Timeout", 1000));
    getCurrentUser();
  }, [logOut]);

  async function getCurrentUser() {
    const currentUser = await Parse.User.current();
    console.log("Goes in");
    setCurrentUser(currentUser);
    return currentUser;
  }

  const doUserLogOut = async function () {
    try {
      await Parse.User.logOut();
      // To verify that current user is now empty, currentAsync can be used
      const currentUser = await Parse.User.current();
      if (currentUser === null) {
        alert("Succesfully logged out!");
      }
      setLogOut(true);
      // Update state variable holding current user
      getCurrentUser();
      return true; //Why do we need to return true and false in theese funcitons at the end?
    } catch (error) {
      alert("Error caught: ", error);
      return false; //Why do we need to return true and false in theese funcitons at the end?
    }
  };

  if (logOut === true) {
    return (
      <>
        <p>Logging out - please hold</p>
        {navigate("/")}
      </>
    );
  }
  if (currentUser === null) {
    //Nessesary, otherwise it crashes
    return (
      <>
        <p>Logging in - please hold</p>
      </>
    );
  }
  if (currentUser !== null) {
    return (
      <>
        <Header headline={currentUser.get("username") + "'s Pokédex"} />
        <h2>Baseset</h2>
        <div
          className="collection"
          style={{ height: "300px", backgroundColor: "gray" }}
        />
        <br />
        <br />
        <button onClick={doUserLogOut}>Logout</button>
      </>
    );
  }
}

export default Dashboard;

// import Parse from "parse";
// import { getCurrentUser } from "./Data";

// function Dashboard() {
//   const currentUser = getCurrentUser();

//   const doUserLogOut = async function () {
//     try {
//       await Parse.User.logOut();
//       // To verify that current user is now empty, currentAsync can be used
//       const currentUser = await Parse.User.current();
//       if (currentUser === null) {
//         alert("Succesfully logged out!");
//       }
//       // Update state variable holding current user
//       getCurrentUser();
//       return true; //Why do we need to return true and false in theese funcitons at the end?
//     } catch (error) {
//       alert("Error caught: ", error);
//       return false; //Why do we need to return true and false in theese funcitons at the end?
//     }
//   };

//   return (
//     <>
//       <h1>Welcome {currentUser.get("username")}</h1>
//       <button onClick={() => doUserLogOut()}>Logout</button>
//     </>
//   );
// }

// export default Dashboard;
