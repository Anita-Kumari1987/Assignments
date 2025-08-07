import anita from "./styles/styles.module.css";

const Banner = ({ props }) => {
  let { rightVideo, videoInformation, dflex, banner } = anita;

  let [heading] = props;

  return (
    <>
      <section>
        <header className={`${dflex} banner  ${banner}`}>
          <div className={rightVideo}>
            <img src={heading.img} alt="" width={250} />
          </div>
          <div className={videoInformation}>
            <h1>{heading.heading}</h1>
            <p>{heading.para}</p>
            <p>{heading.para2}</p>
          </div>
        </header>
      </section>
    </>
  );
};

export default Banner;
