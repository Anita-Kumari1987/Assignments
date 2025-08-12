import { useContext } from "react";
import { StudentData } from "../Data/Context";

export const Home = () => {
  const {name} = useContext(StudentData);

  return <h1>Welcome {name}, you are at Home page</h1>;
};
