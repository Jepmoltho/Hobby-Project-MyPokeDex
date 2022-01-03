import Parse from "parse";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Set from "./Set";
//import { getBaseSet } from "../CardData";

const baseset = [
  { id: 1, path: "/baseset/bulbasaur-base-set-bs-44.jpeg" },
  { id: 2, path: "/baseset/ivysaur-base-set-bs-30.jpeg" },
  { id: 3, path: "/baseset/venusaur-base-set-bs-15.jpeg" },
  { id: 4, path: "/baseset/squirtle-base-set-bs-63.jpeg" },
  { id: 5, path: "/baseset/wartortle-base-set-bs-42.jpeg" },
  { id: 6, path: "/baseset/blastoise-base-set-bs-2.jpeg" },
  { id: 7, path: "/baseset/charmander-base-set-bs-46.jpeg" },
  { id: 8, path: "/baseset/charmeleon-base-set-bs-24.jpeg" },
  { id: 9, path: "/baseset/charizard-base-set-bs-4.jpeg" },
  { id: 10, path: "/baseset/pikachu-base-set-bs-58.jpeg" },
  { id: 11, path: "/baseset/mewtwo-base-set-bs-10.jpeg" },
];

//To do. 1. Get the current users ID and save it in a pointer before saving data.
//Could the cards database also just have a setID? Give all cards a setID.

function Dashboard() {
  //Next goal: Save some data on behalf of that user, and render it to the dashboard
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [userId, setUserId] = useState(""); //Set the pointers in the useEffect
  const [logOut, setLogOut] = useState(false);

  useEffect(() => {
    setTimeout(console.log("Timeout", 1000));
    getCurrentUser();
    //console.log(currentUser.id);
    setUserId(currentUser.id);

    //console.log(userId);

    //console.log(userPointer);

    // getCurrentUser().then((curUser) => {
    //   setUserId(curUser.objectId);
    // }); //await
    //setUserId(currentUser.objectId);
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

  const [cardId, setCardId] = useState("");
  var cardPointer = {
    __type: "Pointer",
    className: "Card",
    objectId: cardId,
  };

  const handleClickSave = async function () {
    //Need to get the objectID
    let query = Parse.Query("Card");
    query.contains("number"); //How do I get the id out of the current card?
  };

  var userPointer = {
    __type: "Pointer",
    className: "User",
    objectId: userId, //Notice hpw you can just get the properties of currentuser diretly when calling it in useEffect like this
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
        <div className="collection">
          {/* {baseset.map((card) => (
            <Card path={card.path} />
          ))} */}
          <Set
            name="Baseset"
            cards={baseset.map((card) => (
              <Card path={card.path} onClick={handleClickSave} />
            ))}
          />
        </div>
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
