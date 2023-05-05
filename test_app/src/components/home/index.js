import heroframe from '../../assets/images/hero-frame.svg';
import star from '../../assets/images/star.svg';
import logoipsum1 from '../../assets/images/logoipsum1.svg';
import logoipsum2 from '../../assets/images/logoipsum2.svg';
import logoipsum3 from '../../assets/images/logoipsum3.svg';
import operational from '../../assets/images/operational.svg';
import checksolid from '../../assets/images/check-solid.svg';
import user1 from '../../assets/images/user1.svg';
import countericon from '../../assets/images/counter-icon.svg';
import arrowright from '../../assets/images/arrow-right.svg';
import grosssalary from '../../assets/images/gross-salary.svg';
import jobstatistics from '../../assets/images/job-statistics.svg';
import Header from '../header';
import Footer from '../footer';
import SimpleSlider from '../slider';
import Gallery from '../gallery';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function Home() {
  return (
    <div className='page-content'>
      {/* Navigation */}
      <Header></Header>

      {/* Hero Banner */}
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

      {/* Slider Section */}
      <div className='operator-slider'>
        <div className='container'>
          <div className='row align-items-center'>
            <h2 className='main-title'>Designed by operators, built by <span>entrepreneurs...</span></h2>
            <p className='inner-para'>The Eazio platform is an easy-to-use system offering a slick and modern user interface.</p>
          </div>
        </div>
      </div>

      {/* Slider Component */}
      <SimpleSlider></SimpleSlider>

      {/* Logo Gallery */}
      <Gallery></Gallery>

      {/* Operational */}
      <section className='operational'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <h2 className='main-title'>Goodbye to Operational Headaches, Hello to a Smooth & Easy Solution</h2>
            </div>
            <div className='row align-items-center'>
              <div className='col-md-6'>
                <img src={operational} alt='operational' />
              </div>
              <div className='col-md-6'>
                <div className='rightpan'>
                  <button type='button' className='btn choose-btn'>why choose us</button>
                  <h3 className='side-title'><span>Human Resource</span> Management System</h3>
                  <p className='para-title'>
                    Including on/off-boarding, payroll, leave management, benefits, 
                    employee development, performance, and wellness.
                  </p>
                  <ul>
                    <li><img src={checksolid} alt='checksolid' /> This is some text inside of a div.</li>
                    <li><img src={checksolid} alt='checksolid' /> This is some text inside of a div.</li>
                    <li><img src={checksolid} alt='checksolid' /> This is some text inside of a div.</li>
                    <li><img src={checksolid} alt='checksolid' /> This is some text inside of a div.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch Management */}
      <section className='management'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>  
                <h3 className='side-title'><span>Branch</span> Management</h3>
                <p className='para-title'>
                  Allows all of your branches to run smoothly and efficiently using just the one 
                  platform solution. Empower branch teams with the much-needed support and 
                  insights to thrive with consistency.
                </p> 
            </div>
            <div className='col-md-4'>
              <div className='counter-box'> 
                <p className='title'><span className='counter'>12+</span><span className='icon'><img src={countericon} alt='countericon' /></span></p>
                <p className='sub-title'>Upcoming Events</p>
                <ul className='event-list'>
                  <li>
                    <p className='event-tile'>Charlotte Birthday is coming</p>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                      <br/>
                      <span className='post-title'>Manager</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                  <li>
                    <p className='event-tile'>Charlotte Birthday is coming</p>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                      <br/>
                      <span className='post-title'>Manager</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                  <li>
                    <p className='event-tile'>Charlotte Birthday is coming</p>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                      <br/>
                      <span className='post-title'>Manager</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                </ul>              
              </div>
              <div className='counter-box'> 
                <div>
                  <p className='title'><span className='counter'>98%</span></p>
                  <p className='para-title'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                  </p>   
                </div>         
              </div>
            </div>
            <div className='col-md-4'>
              <div className='counter-box'> 
                <p className='title'><span className='counter'>85</span><span className='icon'><img src={countericon} alt='countericon' /></span></p>
                <p className='sub-title'>Employee Leaves</p>
                <ul className='event-list leaves-list'>
                  <li>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                  <li>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                  <li>
                    <div>                      
                      <img src={user1} alt='user1' />
                      <span className='name-title'>More Cafe</span>
                    </div>
                    <span className='date'>14 JAN</span>
                  </li>
                </ul>              
              </div>
              <div className='counter-box'> 
                <div>
                  <p className='title'><span className='counter'>10+</span></p>
                  <p className='para-title'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim.
                  </p>   
                </div>         
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Operations Management */}
      <section className='op-management'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-12'>  
                <h3 className='mian-title'><span>Operations</span> Management</h3>
                <p className='para-title'>
                  Eazio offers a simple, user-friendly solution for managing a company's operations, 
                  increasing efficiency and visibility, whilst driving operational excellence.
                </p> 
                <a href="#" className='learn-btn'>Learn more about operations <img src={arrowright} alt='arrowright' /></a>
            </div>
            <div className='d-flex stats-box'>
              <img src={grosssalary} alt='grosssalary' />
              <img src={jobstatistics} alt='jobstatistics' />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default Home;
