import './Colors.css'
import Input from '../../components1/Input';

const Colors = ({handleChange}) => {
  return (
    <div>
    <h2 className="sidebar-title color-title">Colors</h2>
    <label onChange={handleChange} className="sidebar-label-container">
       <input  type="radio" value="" name="test3"/>
       <span className="checkmark all"></span>All
    </label>

    <Input 
      handleChange={handleChange}
      value="black"
      title="Black"
      name="test1"
      color="black"
    />
    <Input 
      handleChange={handleChange}
      value="pink"
      title="Pink"
      name="test1"
      color="pink"
    />
    <Input 
      handleChange={handleChange}
      value="purple"
      title="Purple"
      name="test1"
      color="purple"
    />
    <Input 
      handleChange={handleChange}
      value="white"
      title="White"
      name="test1"
      color="white"
    />

    <label className='sidebar-label-container'>
      <input 
        type="radio"
        onChange={handleChange}
        value="white"
        name="test1"
      />
      <span 
        className="checkmark"
        style={{
          background: "white", 
          border: "2px solid black"
        }}
      ></span>White
    </label>
  </div>
  )
}

export default Colors