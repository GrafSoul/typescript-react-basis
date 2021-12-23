import React from "react";
import ReactDOM from "react-dom";

import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <h5>02 Types Around Props and State</h5>
      <h5>010 State with TypeScript</h5>

      <GuestList />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
