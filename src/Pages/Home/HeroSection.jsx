export default function HeroSection() {
  const onButtonClick = () => {
    const pdfUrl = "./doc/Rishi_Sankhla_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Rishi_Sankhla_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Rishi</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I am a BSc Computer Science graduate from Goldsmiths, University of London.
            <br /> And currently working as Research assistant in computing department at Goldsmiths. 
          </p>
        </div>
        <button className="btn btn-primary" onClick={onButtonClick}>Download CV</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
