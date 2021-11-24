import { useState } from 'react';
import { AmazingProgressCircle } from './components/amazing-progress-circle';

function App() {
  const [percentage, setPercentage] = useState(0);
  const onClick = () => {
    setPercentage(percentage + 10);
  };
  return (
    <div>
      <h1>Amazing Progress Circle </h1>
      <AmazingProgressCircle
        size={170}
        percentage={percentage}
        onCompletion={() => console.log('Miao 🐱')}
      />
      <button data-testid="increment-button" onClick={onClick}>
        Increment
      </button>
    </div>
  );
}

export default App;
