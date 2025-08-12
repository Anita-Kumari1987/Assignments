import { useContext } from "react";
import { StudentData } from "../Data/Context";

export const Grades = () => {
  const { name, grades } = useContext(StudentData);

  return (
    <h1>
      Welcome {name}, you are at Grades page and your grade is {grades}
    </h1>
  );
};
