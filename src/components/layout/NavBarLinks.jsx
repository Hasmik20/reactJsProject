import {NavLink} from 'react-router-dom'

const NavBarLinks = () => {
  
  return ( 
    <ul className="right">
      <li> <NavLink to="/">Projects </NavLink> </li>
       <li> <NavLink to="/"> About </NavLink> </li>
      
    </ul>
   );
}
 
export default NavBarLinks;