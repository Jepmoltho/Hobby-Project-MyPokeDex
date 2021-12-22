import Parse from "parse";
import { useEffect, useState } from "react";
import Header from "./Header";
import { doUserLogOut } from "./Data";

function Dashboard() {
  //Next goal: Save some data on behalf of that user, and render it to the dashboard
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    getCurrentUser();
  }, []);

  async function getCurrentUser() {
    const currentUser = await Parse.User.current();
    console.log("Goes in");
    setCurrentUser(currentUser);
    return currentUser;
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
