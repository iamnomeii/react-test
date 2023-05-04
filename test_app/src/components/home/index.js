import logo from '../../logo.svg';
import lang from '../../assets/images/lang.svg';
import heroframe from '../../assets/images/hero-frame.svg';
import star from '../../assets/images/star.svg';
import logoipsum1 from '../../assets/images/logoipsum1.svg';
import logoipsum2 from '../../assets/images/logoipsum2.svg';
import logoipsum3 from '../../assets/images/logoipsum3.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Home() {
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
    <div className='page-content'>
      {/* Navigation */}
      <header className='home-header'>
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
      <section className='hero-banner'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-6'>
              <div className='leftpan'>
                <div className='topbar d-flex align-items-center'>
                  <span className='review-rating d-flex'>
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                    <img src={star} alt='star' />
                  </span>
                  <span className='review-title'>Based on <strong>10,000+</strong> reviews</span>
                </div>  
                <h1 className='main-title'>Seamless <span>solution</span> with our magic!</h1>
                <p className='para-title'>
                  Eazio enables Human Resource Departments to manage their time more efficiently, 
                  enhance business operations and smoothen processes.
                </p>   
                <div className='demo-sec d-flex align-items-center'>
                  <p>A simple to use intelligent HR platform</p>
                  <button type='text' className='btn demo-btn'>Get a Free Demo</button>
                </div> 
                <div className='log-sec d-flex'>
                  <img src={logoipsum1} alt='logoipsum1' />
                  <img src={logoipsum2} alt='logoipsum2' />
                  <img src={logoipsum3} alt='logoipsum3' />
                </div>           
              </div>
            </div>
            <div className='col-md-6 p-0'>
              <div className='rightpan text-end'>
                <img src={heroframe} alt='logo' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
