import './Category.css'
import Input from '../../components1/Input'

const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
         <input onChange={handleChange} type="radio" value="" name="test"/>
         <span className="checkmark"></span>All
        </label>

        <Input 
          onChange={handleChange}
          value="rubber"
          title="Tibhar"
          name="test"
          />
        <Input 
          onChange={handleChange}
          value="wood"
          title="Butterfly"
          name="test"
          />
        <Input 
          onChange={handleChange}
          value="racket"
          title="Nittaku"
          name="test"
          />
        <Input 
          onChange={handleChange}
          value="clother"
          title="stiga"
          name="test"
          />
      </div>
    </div>
  )
}

export default Category