import Nav from "../components/header/nav";
import { Homepage } from "../data/homepage";

const Layout = () => {
  const dummyUser = {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
  };
  const dummyUser2 = {
    idd: 3,
    namee: "india",
    emaill: "india@example.com",
  };

  return (
    <>
      <Nav props={dummyUser} anita={dummyUser2} homeData={Homepage} />
    </>
  );
};

export default Layout;
