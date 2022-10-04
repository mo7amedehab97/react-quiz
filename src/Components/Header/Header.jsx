import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faMountainSun } from '@fortawesome/free-solid-svg-icons'
  import user from '../../Assets/user.svg'
import './index.css'
const Header = () => {
  return <header >
 <div className="menu-holder" >

<div className="burger-menu">
 <FontAwesomeIcon icon={faBars}  className='burger-menu-icon'/>  
  
</div>
<div className="special-icon">

 <FontAwesomeIcon icon={faMountainSun}  color='#606060'/>  
</div>

 </div>
 <div className="user-details">
  <div className="user-info">
    <h1>renee mckelvey</h1>
    <p>Account settings</p>
  </div>
  <div className="user-image">
    <img src={user} alt="user" />
  </div>
 </div>

</header>
}

export default Header