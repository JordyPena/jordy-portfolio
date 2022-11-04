import './landingPage.css';
import { useState, useEffect } from 'react';
const LandingPage = () => {
  const [text, setText] = useState('');
  const [fullText] = useState('Jordy Peña');
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 80)
    }
  }, [index, fullText, text])

  return (
    <div className='header-container'>
      <header>
        <h1>
          {text}
        </h1>
      </header>
    </div>
  )
}

export default LandingPage;