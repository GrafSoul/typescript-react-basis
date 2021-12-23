import { useState } from "react";

interface UserData {
  name: string;
  age: number;
}

const users: UserData[] = [
  { name: "Sarah", age: 20 },
  { name: "Alex", age: 20 },
  { name: "Michael", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    console.log(foundUser);
  };

  return (
    <div>
      User Search
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
    </div>
  );
};

export default UserSearch;
