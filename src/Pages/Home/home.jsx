import './home.css';
import Navigation from '../../Components/Navigation/navigation';
import Footer from '../../Components/Footer/footer';
import Featured from '../../Components/Featured/Featured';
import Stack from '../../Components/Stack/Stack';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    const homeElement = document.querySelector('.home-container')
    homeElement.style.opacity = '0';
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const square = entry.target.querySelector('.alien-img');
    
        if (entry.isIntersecting) {
          square.classList.add('alien-animation');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('alien-animation');
      });
    });

    const homeContentObserver = new IntersectionObserver(entries => {
      homeElement.style.opacity = '1';
      entries.forEach(entry => {
        const square = entry.target.querySelector('.home-header-styles');

        if (entry.isIntersecting) {
          square.classList.add('header-animation');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        square.classList.remove('header-animation');
      });
    });

    const txtObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const txt = entry.target.querySelector('.txt-container')
        const txt2 = entry.target.querySelector('.second-txt')
        if (entry.isIntersecting) {
          txt.classList.add('header-animation');
          txt2.classList.add('header-animation');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        txt.classList.remove('header-animation');
        txt2.classList.remove('header-animation');
      });
    });

    const featuredObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const txt = entry.target.querySelector('.featured-h-styles')
        const stack = entry.target.querySelector('.featured-container')
        if (entry.isIntersecting) {
          txt.classList.add('featured-h-animation');
          stack.classList.add('featured-animation');
        return; // if we added the class, exit the function
        }
    
        // We're not intersecting, so remove the class!
        txt.classList.remove('featured-h-animation');
        stack.classList.remove('featured-animation');
      });
    });

    observer.observe(document.querySelector('.alien-img-container'));
    homeContentObserver.observe(document.querySelector('.home-header-container'));
    txtObserver.observe(document.querySelector('.home-content-container'));
    featuredObserver.observe(document.querySelector('.featured-section-container'));
  }, [])

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
        <Stack />
        <Featured />
        <Footer />
      </div>
    </>
  )
}
export default Home;