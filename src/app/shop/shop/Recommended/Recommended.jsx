import Buttons from '../components1/Buttons.jsx'
import './Recommended.css'

const Recommended = ({handleClick}) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Buttons onClickHandler={handleClick} value="All" title="All Products" />
          <Buttons onClickHandler={handleClick} value="Rubber" title="Rubber" />
          <Buttons onClickHandler={handleClick} value="Wood" title="Wood" />
          <Buttons onClickHandler={handleClick} value="Balls" title="Balls" />
          <Buttons onClickHandler={handleClick} value="Clothes" title="Clothes" />
        </div>
      </div>
    </>
  )
}

export default Recommended