import './home.css';
import Navigation from '../../Components/Navigation/navigation';
import Footer from '../../Components/Footer/footer';
import { RiReactjsLine, RiAngularjsFill } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di';
import { FaNodeJs, FaFigma, FaBootstrap } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si';
import { MdOutlineSubdirectoryArrowLeft } from 'react-icons/md';
const Home = () => {
  return (
    <>
      <Navigation />
      <div className='home-container'>
        <header className='home-header-container'>
          <h1 className='home-header-styles'>
            Hi There! I'm Jordy
          </h1>
        </header>
        <section className='home-content-container'>
          <p className='txt-container'>
            A {" "}
            <span className='standout-txt'>
              Frontend Engineer. {" "}
            </span> 
            I Help Companies {" "}
            <span className='standout-txt'>
              Launch {" "}
            </span>
            And {" "}
            <span className='standout-txt'>
              Grow {" "}
            </span>
            Their Products {" "}
          </p>
          <div>
            <p className='second-txt'>
              I am a software engineer with more than 2 years of experience. Working in consulting
              I specialize in talking with clients, bringing projects to life, and working in time pressured 
              settings to deploy projects on schedule.
            </p>
          </div>
        </section>
        <section className='alien-img-container'>
          <span className='alien-img'></span>
        </section>
        <section className='stack-section-container'>
          <h2 className='home-h-styles'>
            Stack
          </h2>
          <div className='stack-container'>
            <div className='stack-content'>
              <div className='stack-icon'>
                <RiReactjsLine/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>React</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <RiAngularjsFill/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Angular</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <FaNodeJs/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Node</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <DiJavascript1/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Javascript</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <FaFigma/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Figma</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <FaBootstrap/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Bootstrap</p>
              </div>
            </div>
            <div className='stack-content'>
              <div className='stack-icon'>
                <SiTypescript/>
              </div>
              <div className='stack-txt'>
                <p className='stack-p-styles'>Typescript</p>
              </div>
            </div>
          </div>
        </section>
        <section className='featured-section-container'>
          <h2 className='home-h-styles'>
            Featured
          </h2>
          <div className='featured-container'>
            <div className='featured-content'>
              <span className='prj-img'>
              </span>
              <div>
                <h3 className='featured-h-styles'>
                  Pokemon TCG Guru
                </h3>
                <p className='featured-p-styles'>
                  A Platform That Helps You Discover The Value Of Your Pokemon Cards, And Find And Purchase New Cards With Updated Current And Previous Pricing.
                </p>
              </div>
              <div className='featured-btm-row'>
                <div>
                  <div className='featured-icon'>
                    <RiReactjsLine />React
                  </div>
                </div>
                <div>
                  <button className='featured-btn'>
                    Visit
                    <MdOutlineSubdirectoryArrowLeft />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
export default Home;