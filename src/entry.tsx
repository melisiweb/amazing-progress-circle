import { useEffect, useState } from 'react';
import { AmazingProgressCircle } from './components/amazing-progress-circle';

export const Entry: React.FC = () => {
  const [percentage, setPercentage] = useState(0);
  const [isAutoIncrement, setIsAutoIncrement] = useState<number>();
  const onClick = () => {
    setPercentage(percentage + 10);
  };
  const onAutoIncrement = () => {
    if (percentage === 100) {
      setPercentage(0);
    }

    const interval = window.setInterval(() => {
      setPercentage((prevValue) => prevValue + 10);
    }, 1000);

    setIsAutoIncrement(interval);
  };

  const onStop = () => {
    window.clearInterval(isAutoIncrement);
    setIsAutoIncrement(undefined);
  };

  useEffect(() => {
    if (percentage >= 100) {
      onStop();
    }
  }, [percentage]);

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

      <button
        data-testid="auto-increment-button"
        disabled={!!isAutoIncrement}
        onClick={onAutoIncrement}
      >
        Auto Increment
      </button>

      <button
        disabled={!isAutoIncrement}
        data-testid="stop-button"
        onClick={onStop}
      >
        Stop
      </button>
    </div>
  );
};
