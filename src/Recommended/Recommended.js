import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended Size</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Animals" />
          <Button onClickHandler={handleClick} value="Small" title="Small" />
          <Button onClickHandler={handleClick} value="Medium" title="Medium" />
          <Button onClickHandler={handleClick} value="Big" title="Big" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
