import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Breeds </h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Dogs"
          title="Dogs"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Cats"
          title="Cats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Birds"
          title="Birds"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
