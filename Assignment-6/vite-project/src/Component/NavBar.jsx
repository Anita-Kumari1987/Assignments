import AccessLinks from "./Links";
import "../App.css";

const NavBar = () => {
  return (
    <>
      <input />
      <AccessLinks
        detailLinks={[
          { label: "Learn", href: "#" },
          { label: "Reference", href: "#" },
          { label: "Community", href: "#" },
          { label: "Blog", href: "#" },
        ]}
      />
    </>
  );
};
export default NavBar;