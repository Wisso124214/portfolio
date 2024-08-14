import { useState } from 'react';
import './index.css'
 
const App = ({ data }) => {
  const [count, setCount] = useState(0);

    return (
      <>
      {/**
        <ContainerProfileForm />
        */}
  
        <div>
          <h1>App</h1>
          <p>Lorem </p>
          <div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>Count</button>
          </div>
              
        </div>
        
        {/** <pre>{JSON.stringify(data, null, 2)}</pre>*/}
      </>
    );
};
 
export default App