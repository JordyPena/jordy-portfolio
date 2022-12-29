import "../Stack/Stack.css";
import { RiReactjsLine, RiAngularjsFill } from 'react-icons/ri';
import { DiJavascript1 } from 'react-icons/di';
import { FaNodeJs, FaFigma, FaBootstrap } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si';

const Stack = () => {

  return (
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
  )
}

export default Stack;