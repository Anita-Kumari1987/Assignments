import { navItems } from "../../data/navdata";

const Navigation = () => {
  return (
    <>
      <ul>
        {navItems.map((items, i) => {
          return (
            <li key={i}>
              <a href="#">{items.label}</a>
            </li>
          );
        })}
      </ul>
      ;
    </>
  );
};

export default Navigation;
