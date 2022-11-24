import {
  Link,
} from "react-router-dom";

import Logo from './assets/LOGO.svg';
import MenuCss from './style/Menu.css'

export function Menu() {
  return (
    <div className='Menu'>
      <div className='logo'>
        <img src={Logo} alt=""/>
      </div>
      <div  className='links'>
        <div>
          <Link to={`/`}>Accueil</Link>
        </div>
        <div>
          <Link to={`/APropos`}>A propos</Link>
        </div>
      </div>
    </div>
  )
}