import { useContext } from "react";
import { StudentData } from "../Data/Context";

export const Courses = () => {
  const { name, courses } = useContext(StudentData);

  return (
    <h1>
      Welcome {name}, you are at Courses page and you are in {courses}
    </h1>
  );
};
