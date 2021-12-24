import React from "react";
import ReactDOM from "react-dom";

import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import UserSearchRefs from "./refs/UserSearchRefs";
import UserSearchClass from "./classes/UserSearchClass";
import EventComponent from "./events/EventComponent";
interface UserData {
  name: string;
  age: number;
}

const users: UserData[] = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const App: React.FC = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <h5>03 Types Around Events and Refs</h5>
      <h5>018 TypeScript with Class Components</h5>

      <hr />
      <GuestList />
      <hr />
      <UserSearch />
      <hr />
      <UserSearchRefs />
      <hr />
      <UserSearchClass users={users} />
      <hr />
      <EventComponent />
      <hr />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector("#root")
);
