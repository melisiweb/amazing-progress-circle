import { render, screen, fireEvent, waitFor } from '@testing-library/react';
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

  test('auto increment and stop', async () => {
    render(<App />);

    fireEvent.click(screen.getByTestId('auto-increment-button'));

    await waitFor(() => expect(screen.queryByText(/10%/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.queryByText(/20%/i)).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('stop-button'));

    await waitFor(() =>
      expect(screen.queryByText(/30%/i)).not.toBeInTheDocument()
    );

    fireEvent.click(screen.getByTestId('auto-increment-button'));

    await waitFor(() => expect(screen.queryByText(/30%/i)).toBeInTheDocument());

    fireEvent.click(screen.getByTestId('stop-button'));
  });
});
