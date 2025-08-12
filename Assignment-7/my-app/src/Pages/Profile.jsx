import { useContext } from "react";
import { StudentData } from "../Data/Context";

export const Profile = () => {
  const { name, email } = useContext(StudentData);

  return (
    <h1>
      Welcome {name}, you are at Profile page and your email address is {email}{" "}
      page
    </h1>
  );
};
