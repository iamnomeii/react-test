import footerlogo from '../../assets/images/footerlogo.svg';
import linkedin from '../../assets/images/linkedin.svg';
import facebook from '../../assets/images/facebook.svg';
import instagram from '../../assets/images/instagram.svg';

function Footer() {
return (
    <footer className='footer'>
        <div className='container'>
            <div className='row top-row'>
                <div className='col-md-4'> 
                <img src={footerlogo} alt='footerlogo' />
                <p className='para-title'>
                    Eazio enables Human Resource Departments to manage their time more efficiently, 
                    enhance business operations and smoothen processes.
                </p>
                <button type='text' className='btn demo-btn'>Get a Free Demo</button>
                </div>
                <div className='col-md-4'> 
                <h5 className='pages-title'>Pages</h5>
                <ul>
                    <li>
                    <a href="#">Home</a>
                    </li>
                    <li>
                    <a href="#">About</a>
                    </li>
                    <li>
                    <a href="#">Pricing</a>
                    </li>
                    <li>
                    <a href="#">Blog</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
                </div>
                <div className='col-md-4'> 
                <h5 className='pages-title'>Subscribe to our newsletter</h5>
                <p className='para-title'>
                    Lorem ipsum dolor sit am consectetur adipiscing
                </p>
                <div className='newsletter'>
                    <input type="text" className='form-control'/>
                    <input type="submit" name="" id="" className='submit-btn'/>
                </div>
                </div>
            </div>
        </div> 
        <div className='bottom-bar'>
            <div className='icon-box'>
            <img src={linkedin} alt='linkedin' />
            <img src={facebook} alt='facebook' />
            <img src={instagram} alt='instagram' />
            </div>
            <div className='copyright'>
            © Powered By Eazio — 2023
            </div>
        </div>
    </footer>

    );
}

export default Footer;