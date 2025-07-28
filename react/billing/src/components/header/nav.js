const Nav = ({ props, anita, homeData }) => {
  let { id, name, email } = props;
  let { emaill } = anita;
  return (
    <>
      {/* <div className="nav"></div> */}
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h3>{email}</h3>
      <h3>{emaill}</h3>

      {homeData.map((items, i) => {
        let { heading, para, img } = items;

        return (
          <div key={i}>
            <h2>{heading}</h2>
            <p>{para}</p>
            <img src={img} alt="dummy" />
          </div>
        );
      })}
    </>
  );
};

export default Nav;
