import './Sidebar.css'
import { LuShoppingCart } from "react-icons/lu"
import Category from './Category/Category.jsx'
import Colors from './Colors/Colors.jsx'
import Price from './Price/Price.jsx'

const Sidebar = ({handleChange}) => {
  return (
    <>
    <section className="sidebar">
      <div className='logo-container'>
        <h1><LuShoppingCart /></h1>

      </div>
      <Category handleChange={handleChange}/>
      <Price handleChange={handleChange}/>
      <Colors handleChange={handleChange}/>
    </section>
  </>
  )
}

export default Sidebar