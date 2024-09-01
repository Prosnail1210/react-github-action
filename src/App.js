import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [disabled, setDisabled] = useState(false)
  const changeValue = amount =>{
    if(count+amount>50)
      alert('최대값을 초과하였습니다')
    else if(count+amount<-50)
      alert('최소값을 초과하였습니다')
    else
      setCount(pre=>pre+amount)
  }
  return (
    <div className="App">
      <header className='App-header'>
        <h3 data-testid='counter'>{count}</h3>  

        <button data-testid='minus-button'  
        onClick={()=>changeValue(-1)}
        disabled={disabled}>-</button>

        <button data-testid='plus-button' 
        onClick={()=>changeValue(1)}
        disabled={disabled}>+</button>

        <button data-testid='plus-two-button' 
        onClick={()=>changeValue(2)}
        disabled={disabled}>+2</button>

        <button data-testid='plus-three-button' 
        onClick={()=>changeValue(3)}
        disabled={disabled}>+3</button>

        <button data-testid='plus-four-button' 
        onClick={()=>changeValue(4)}
        disabled={disabled}>+4</button>

        <button data-testid='plus-five-button' 
        onClick={()=>changeValue(5)}
        disabled={disabled}>+5</button>

        <button data-testid='minus-two-button' 
        onClick={()=>changeValue(-2)}
        disabled={disabled}>-2</button>

        <button data-testid='minus-three-button' 
        onClick={()=>changeValue(-3)}
        disabled={disabled}>-3</button>

        <button data-testid='minus-four-button' 
        onClick={()=>changeValue(-4)}
        disabled={disabled}>-4</button>

        <button data-testid='minus-five-button' 
        onClick={()=>changeValue(-5)}
        disabled={disabled}>-5</button>

        <div>
          <button style={{backgroundColor:'blue'}} 
          data-testid='on/off-button'
          onClick={()=>setDisabled(pre=>!pre)}>
            on/off
          </button>
        </div>
      </header>  
    </div>
  );
}

export default App;
