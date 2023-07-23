import { useState } from 'react';

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import {PiHandWavingThin} from 'react-icons/pi'

import './App.css';

function App() {
  const [name, setName] = useState('Ajk');
  const [isEditing, setIsEditing] = useState(false);

  const handleNameClick = () => {
  
      setIsEditing(true);
    
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNameBlur = () => {
    setIsEditing(false);
  };

  const onKeydown = (e) =>{
    if (e.key === 'Enter'){
      handleNameBlur();
    }
  }

  return (
    <div className="container">
      <div className="name">
        {isEditing ? (
          <input
            className="name-input"
            type="text"
            value={name}
            onChange={handleNameChange}
            onBlur={handleNameBlur}
            onKeyDown={onKeydown}
            autoFocus
          />
        ) : (
          <span className='apresentação' onClick={handleNameClick}> OI <PiHandWavingThin size={20}/> EU SOU O {name}</span>
        )}
        <p className='linguagem'>REACT <a href="https://github.com/osvaldocordeiroandre" target='_blank'>
          <AiFillGithub className='github' size={30} />
        </a> <a href="https://www.linkedin.com/in/osvaldo-cordeiro-andr%C3%A9-009760231/" target='_blank'>
          <AiFillLinkedin className='linkedin-logo' size={30}/> 
        </a></p>
        <p className='developer'> DEVELOPER </p>
        <div className='text-container'>
          <h5> TENHO 22 ANOS E SOU DESENVOLVEDOR FRONTEND COM 1 ANO DE EXPERIENCIA TRABALAHNDO COMO FREELANCER </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
