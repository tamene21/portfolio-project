import './Header.css';

function LogoComponent() {
  const companyName = 'Gog24 \n CAR SERVICE';
  return(
    <nav className='nav'>
        <a href= "/" className= 'site-title'>{companyName}</a>
        <input className= 'btn search' placeholder="Tell us your location"/>
        <ul className='head-items'>
          <li>Ride</li>
          <li>Drive</li>
          <li>Sign In</li>
          <li>Help</li>
        </ul>
        <a href='/' className='driver-option'>Ride With Gog24</a>
    </nav>
  )

}


function HeaderComponent() {
  return (
    <div className="App">
      <LogoComponent />
      <header className="App-header">
        <ul className='nav-items'>
          <li>Home</li>
          <li>About</li>
          <li>Our Services</li>
          <li>Packages</li>
          <li>Our Vehicles</li>
          <li>Contact</li>
        </ul>
        <div className='became-drive'>Became A Driver</div>
      </header>
    </div>
  );
}

export default HeaderComponent;
