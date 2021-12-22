import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      Text here...
    </ChildAsFC>
  );
};

export default Parent;
