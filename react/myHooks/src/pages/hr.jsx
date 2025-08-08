import { useContext } from "react";
import { CreateContxt } from "../hooks/Hooks";

function HR() {
  let { hr } = useContext(CreateContxt);
  return (
    <>
      <h1>{hr.name}</h1>
    </>
  );
}

export default HR;
