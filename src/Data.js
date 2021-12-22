// import Parse from "parse";

// // export async function getCurrentUser() {
// //   const currentUser = await Parse.User.current();
// //   if (currentUser !== null) {
// //     alert("Success! There is a current user");
// //   }
// //   return currentUser;
// // }

// async function getCurrentUser() {
//   const currentUser = await Parse.User.current();
//   console.log("Goes in");
//   setCurrentUser(currentUser);
//   return currentUser;
// }

// export const doUserLogOut = async function () {
//   try {
//     await Parse.User.logOut();
//     // To verify that current user is now empty, currentAsync can be used
//     const currentUser = await Parse.User.current();
//     if (currentUser === null) {
//       alert("Succesfully logged out!");
//     }
//     // Update state variable holding current user
//     getCurrentUser();
//     return true; //Why do we need to return true and false in theese funcitons at the end?
//   } catch (error) {
//     alert("Error caught: ", error);
//     return false; //Why do we need to return true and false in theese funcitons at the end?
//   }
// };
