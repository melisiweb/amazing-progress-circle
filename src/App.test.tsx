import { render, screen, fireEvent } from '@testing-library/react';
import App from './app';

describe('App', () => {
  test('renders', () => {
    render(<App />);
    expect(screen.queryByText(/Amazing Progress Circle/i)).toBeInTheDocument();
    expect(screen.queryByTestId('amazing-progress-circle')).toBeInTheDocument();
  });

  test('increment button shows new percentage', () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('increment-button'));

    expect(screen.queryByText(/10%/i)).toBeInTheDocument();
  });
});
