import React from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBars,faSearch, faHome, faDatabase, faChartLine,faFileArrowUp , faUsers , faGear} from '@fortawesome/free-solid-svg-icons'
const AsideBar = () => {
  return (
    <aside className='aside'>
 <FontAwesomeIcon icon={faSearch}/>  
 <FontAwesomeIcon icon={faHome}/>  
 <FontAwesomeIcon icon={faDatabase}/>  
 <FontAwesomeIcon icon={faChartLine}/>  
 <FontAwesomeIcon icon={faFileArrowUp}/>  
 <FontAwesomeIcon icon={faUsers}/>  
 <FontAwesomeIcon icon={faGear}/>  
    </aside>
  )
}

export default AsideBar