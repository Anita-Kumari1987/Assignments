import "../App.css";

const AccessLinks = ({ detailLinks }) => {
  return (
    <div>
      <nav className="linksContainer">
        {detailLinks.map((link) => (
          <a key={link.label} href={link.href} className="link">
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
};
export default AccessLinks;
