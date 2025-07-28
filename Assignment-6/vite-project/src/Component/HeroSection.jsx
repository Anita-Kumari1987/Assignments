const HeroSection = ({ heading, subHeading, buttons }) => {
  return (
    <div>
      <div>
        <img src="/react.svg" />
      </div>
      <h1>{heading}</h1>
      <h2>{subHeading}</h2>
      <div className="btnDiv">
        {buttons.map((button, index) => (
          <button key={index}>{button}</button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
