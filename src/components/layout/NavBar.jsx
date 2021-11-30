import {Link} from 'react-router-dom'
// import NavBarLinks from './NavBarLinks';

const NavBar = () => {
  return (
     <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo"> My Projects </Link>
       {/* <NavBarLinks /> */}
      </div>
    </nav>
   );
}
 
export default NavBar;