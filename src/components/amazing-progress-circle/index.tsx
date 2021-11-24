import { useEffect } from 'react';
import * as S from './styles';
import * as T from './types';
import * as C from '../../colors';

export const AmazingProgressCircle: React.FC<T.ComponentProps> = ({
  size = 170,
  percentage = 0,
  onCompletion,
}) => {
  const fixedPercentage = percentage > 100 ? 100 : percentage;
  const circleSize = 16;
  const commonTags = {
    cx: circleSize,
    cy: circleSize,
    r: 15.9155,
    strokeWidth: 1.6,
  };
  const fillerStyle = {
    strokeDashoffset: 100 - fixedPercentage,
    stroke: fixedPercentage === 100 ? C.success : C.primary,
  };
  const ringStyles = {
    width: size,
    height: size,
    shapeRendering: 'geometricPrecision',
    viewBox: `-1 -1 34 34`,
  };

  useEffect(() => {
    if (fixedPercentage === 100 && onCompletion) {
      onCompletion();
    }
  }, [fixedPercentage]);

  return (
    <S.Wrapper data-testid="amazing-progress-circle">
      <S.Ring data-testid="ring" {...ringStyles}>
        <S.BackgroundCircle {...commonTags} />
        <S.FillerCircle
          {...commonTags}
          data-testid="filler-circle"
          style={fillerStyle}
        />
      </S.Ring>
      <S.RingText>
        {fixedPercentage === 100 ? (
          <S.Completion data-testid="completion">✔</S.Completion>
        ) : (
          <S.Percentage>{fixedPercentage}%</S.Percentage>
        )}
      </S.RingText>
    </S.Wrapper>
  );
};
