import './landingPage.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [text, setText] = useState('');
  const [fullText] = useState('Jordy Peña');
  const [index, setIndex] = useState(0);
  const [highlight, setHighlight] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 80)
    } else {
      setHighlight(true);
      setTimeout(() => {
        navigate('/home')
      }, 1000)
    }
  }, [index, fullText, text, navigate, highlight])

  return (
    <div className='header-container'>
      <header>
        <h1 className={`highlightTxt ${highlight && 'highlightTxt-active'}`}>
          {text}
        </h1>
      </header>
    </div>
  )
}

export default LandingPage;