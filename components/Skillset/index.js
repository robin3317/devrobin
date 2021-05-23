const Skillset = ({ imgSrc, title }) => (
  <div className="skillset-container">
    <img className="skillset-img" src={imgSrc} alt={title} />
    <p>{title}</p>
  </div>
);

export default Skillset;
