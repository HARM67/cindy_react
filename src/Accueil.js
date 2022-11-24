import banner from './assets/banner.jpg'
import './style/Accueil.css'
import logements from './data/logements.json';

export function Accueil() {
  const LogementsElement = logements.map(_ => <div className='block' style={{ backgroundImage:`url(${_.cover})` }}>
    <div className='topBlock'></div>
    <div className='titleBlock'>
      {_.title}
    </div>
  </div>)
  return (<div className='Accueil'>
    <div className='banner' style={{ backgroundImage:`url(${banner})` }}>
      <div className='mask'>
      </div>
      <div className='text'>
        Chez vous, partout et ailleurs
      </div>
    </div>
    <div className='content'>
      {LogementsElement}
    </div>
  </div>);
}