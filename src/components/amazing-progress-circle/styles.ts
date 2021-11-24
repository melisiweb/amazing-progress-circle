import styled, { keyframes } from 'styled-components';
import * as C from '../../colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(1turn);
  }
`;

const fadeIn = keyframes`
  from {
    transform: translate3d(0, -4px, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RingText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  font-size: 32px;
  line-height: 0;
`;

export const BackgroundCircle = styled.circle`
  stroke: ${C.lightGray};
`;

export const FillerCircle = styled.circle`
  stroke-dasharray: 100 100;
  stroke-dashoffset: 100;
  stroke-linecap: round;
  transition: all 1s ease-in-out;
  animation: ${rotate} 3s linear infinite;
  transform-origin: 50% 50%;
  transform-box: fill-box;
`;

export const Completion = styled.div`
  animation: ${fadeIn} 0.5s linear forwards;
  color: ${C.success};
`;

export const Percentage = styled.div`
  animation: ${fadeIn} 0.5s linear forwards;
  color: ${C.text};
`;

export const Ring = styled.svg`
  circle {
    fill: none;
  }
`;
