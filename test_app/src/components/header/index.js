import logo from '../../logo.svg';
import lang from '../../assets/images/lang.svg';

function Header() {
    // Navigation
    const shoot = () =>  {
      var toggle = document.getElementById('navigation');
      if (toggle.style.display === 'none') {
        toggle.style.display = 'block';
      } else {
        toggle.style.display = 'none';
      }
    }
return (
    <header className='header'>
        <nav className='navbar'>
            <div className='container'>
                <a className='navbar-brand' href='#'>
                    <img src={logo} className='site-logo' alt='logo' />
                </a>
                <button onClick={shoot} className='navbar-toggler' type='button'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <ul id='navigation' className='navigation'>
                    <li>
                        <a className='nav-link' href=''>About</a>
                    </li>
                    <li>
                        <a className='nav-link' href=''>Careers</a>
                    </li>
                    <li>
                        <a className='nav-link' href=''>Pricing</a>
                    </li>
                    <li>
                        <a className='nav-link' href=''>Features</a>
                    </li>
                </ul>
                <div className='rt-navigation'>
                    <ul>
                        <li>
                            <a href='#' className='lang-link'>
                                <img src={lang} alt='lang' /> <span>English</span>
                            </a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Log In</a>
                        </li>
                        <li>
                            <a href='#' className='nav-link'>Get Demo</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

);
}

export default Header;