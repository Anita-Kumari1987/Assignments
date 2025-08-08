import { useContext } from "react";
import { CreateContxt } from "../hooks/Hooks";

function Emp() {
  let { emp, ceo } = useContext(CreateContxt);

  return (
    <>
      <h1>{emp.name}</h1>
      <h1>{ceo}</h1>
    </>
  );
}

export default Emp;
