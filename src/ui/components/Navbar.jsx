import { Link, NavLink,useNavigate } from 'react-router-dom';


const Navbar = () => {

  //Creamos una ruta de navegación que usaremos en el onLogout
  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login",{
      replace: true
    })
  }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-success px-3 py-2">
        
      <Link 
        className="navbar-brand" 
        to="/"
      >Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">

          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive?'active':''}`}  
            to="/marvel"
          >Marvel
          </NavLink>

          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive?'active':''}`} 
            to="/dc"
          >DC
          </NavLink>
      
          <NavLink 
            className={({isActive}) => `nav-item nav-link ${isActive?'active':''}`} 
            to="/search"
          >Search
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
        <ul className="navbar-nav ml-auto">
          <span 
            className='nav-item nav-link text-dark'
            >Canelo
          </span>
          <button 
            className="nav-item nav-link btn btn-outline-primary"
            onClick={onLogout}
            >LogOut
          </button>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;