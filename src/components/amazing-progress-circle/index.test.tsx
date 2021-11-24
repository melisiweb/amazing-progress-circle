import { render, screen } from '@testing-library/react';
import { AmazingProgressCircle } from '.';
import * as C from '../../colors';

describe('AmazingProgressCircle', () => {
  test('renders', () => {
    render(<AmazingProgressCircle />);
    expect(screen.queryByTestId('amazing-progress-circle')).toBeInTheDocument();
    expect(screen.queryByText(/0%/i)).toBeInTheDocument();
  });

  test('renders with a custom size', () => {
    render(<AmazingProgressCircle size={300} />);

    expect(screen.getByTestId('ring')).toHaveStyle({ width: 300 });
  });

  test('renders with a custom percentage', () => {
    render(<AmazingProgressCircle percentage={40} />);

    expect(screen.queryByText(/40%/i)).toBeInTheDocument();
    expect(screen.queryByTestId('filler-circle')).toHaveStyle({
      strokeDashoffset: 60,
    });
    expect(screen.queryByTestId('filler-circle')).toHaveStyle({
      stroke: C.primary,
    });
  });

  test('renders with 100%', () => {
    render(<AmazingProgressCircle percentage={100} />);

    expect(screen.queryByText(/100%/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('completion')).toBeInTheDocument();
    expect(screen.queryByTestId('filler-circle')).toHaveStyle({
      stroke: C.success,
    });
  });

  test('cannot render with 110%', () => {
    render(<AmazingProgressCircle percentage={110} />);

    expect(screen.queryByText(/110%/i)).not.toBeInTheDocument();
    expect(screen.queryByTestId('completion')).toBeInTheDocument();
  });

  test('executes on completion callback', () => {
    const onCompletion = jest.fn();

    const { rerender } = render(
      <AmazingProgressCircle percentage={50} onCompletion={onCompletion} />
    );

    expect(onCompletion).not.toHaveBeenCalled();

    rerender(
      <AmazingProgressCircle percentage={100} onCompletion={onCompletion} />
    );

    expect(onCompletion).toHaveBeenCalled();
  });
});
