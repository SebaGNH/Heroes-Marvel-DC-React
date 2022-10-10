

<!-- 


import {Routes,Route,Navigate,Link,NavLink} from 'react-router-dom'


<>
  <nav className="navbar navbar-expand-md navbar-dark bg-dark rounded-3">
    <Link className="navbar-brand" to="/">useContext</Link>

    <div className="collapse navbar-collapse">
      <ul className="navbar-nav">

        <NavLink  to="/" end >Home </NavLink>
        <NavLink 
          className={({isActive}) => `nav-link ${isActive?'active':''}`}  
          to="/AboutPage"
          >AboutPage
        </NavLink>   
        
      </ul>
    </div>
  </nav>


  <Routes>
    <Route path='/' element={<HomePage />}/>
    <Route path='/AboutPage' element={<AboutPage />}/>
    <Route path='/*' element={<Navigate to='/' />}/>
  </Routes>
</>


-->