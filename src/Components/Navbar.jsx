import { Link, useNavigate } from 'react-router-dom'
import {  useGlobalContext } from './utils/global.context'
import "../Styles/navbarStyles.css"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {stateTheme, dispatchTheme} =  useGlobalContext()

  const changeTheme = ()=>{
    if (stateTheme.t) {
      dispatchTheme({type: 'SWITCH_DARK'}) 
    } else {dispatchTheme({type: 'SWITCH_LIGHT'})} 
  }

  const navigate = useNavigate();

  return (
  <div className="navbar">
      <div className='DH-odonto'>
          <h4 style={{ color: "red" }}>D</h4><h4>H Odonto</h4>
      </div>
      <nav> 
      
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <button className="back-btn" onClick={() => navigate(-1)}>↩</button>
        <Link  to="/"><h3 className='nav-h3' >Home</h3></Link>
        <Link  to="/contact"><h3 className='nav-h3'>Contact</h3></Link>
        <Link  to="/favs"><h3 className='nav-h3'>Favs</h3></Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button className="theme-btn"  onClick={changeTheme } >{stateTheme.t? '🌙' : '🌞'} </button>
      </nav>
    </div>
  )
}


export default Navbar