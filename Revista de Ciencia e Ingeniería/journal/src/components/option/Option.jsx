import { useState } from 'react';
import './Option.css';

const Option = ({ option, parent, index, dataOptions }) => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div 
        className='option' 
        key={index}
        ref={(el) => (parent.current[index] = el)}
        onMouseEnter={()=> setIsHovered(true) }
        onMouseLeave={()=> setIsHovered(false) }
        >
          {option}
      </div>
      {
        isHovered ? (
          <div className='sub-menu'>
            {dataOptions[option]
            .map((subOption, index) => (
              <div className='sub-option' key={index}>{subOption}</div>
            ))
            }
          </div>
        ) : null
      }
    </>
  );
}

export default Option;