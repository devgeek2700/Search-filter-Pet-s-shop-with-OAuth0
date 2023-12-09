import "./Colors.css";
import Input from "../../components/Input";

const Colors = ({ handleChange }) => {
  return (
    <>
      <div>
        <h2 className="sidebar-title color-title">Native</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handleChange={handleChange}
          value="Indian"
          title="Indian"
          name="test1"
          Native="Indian"
        />

        <Input
          handleChange={handleChange}
          value="German"
          title="German"
          name="test1"
          Native="German"
        />

        <Input
          handleChange={handleChange}
          value="American"
          title="American"
          name="test1"
          Native="American"
        />

        <Input
          handleChange={handleChange}
          value="Bristish"
          title="Bristish"
          name="test1"
          Native="Bristish"
        />
        <Input
          handleChange={handleChange}
          value="Siberian"
          title="Siberian"
          name="test1"
          Native="Siberian"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          {/* <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span> */}
          {/* White */}
        </label>
      </div>
    </>
  );
};

export default Colors;
