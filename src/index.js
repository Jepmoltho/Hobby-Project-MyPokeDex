import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Parse from "parse";
//import AsyncStorage from "@react-native-async-storage/async-storage";

//Initializing the SDK.
//Parse.setAsyncStorage(AsyncStorage);
//You need to copy BOTH the the Application ID and the Javascript Key from: Dashboard->App Settings->Security & Keys

Parse.initialize(
  "DIZIpBQGZMyPSUqdca6GEfb5POe0sUfHNbtQ6Hzx",
  "FmbiV3rcXgDGIBRbyAIoD3z6yYuxegPsWy3UITVh"
);

Parse.serverURL = "https://parseapi.back4app.com/";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
